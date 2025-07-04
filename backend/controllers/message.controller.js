import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";
import { io,getReceiverSocketId } from "../socket/socket.js";


export const sendMessage = async(req, res) => {
    try{
        const {message} = req.body;
        const{id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if(!conversation){
                conversation = await Conversation.create({
                    participants: [senderId, receiverId],
            })        
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,            
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        //await conversation.save();
        //await newMessage.save();

        //this will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        //SOCKET.IO FUNCTIONALITY WILL EXIST HERE
        const receiverSocketId = getReceiverSocketId(receiverId);

        if(receiverSocketId){
            //io.to(socket_id).emit("event_name", data) is used to send events to a specific client
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }
        

        res.status(201).json(newMessage);
    }catch(error){
        console.log("Error in sendMessage", error.message);
        res.status(500).json({error: error.message || "Internal Server Error..."});
    }
};


export const getMessages = async(req, res) => {
    try{
        const{id: userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages"); //NOT REFERENCE BUT ACTUAL MESSAGES

        if(!conversation){
            return res.status(200).json([]);
        }
        const messages = conversation.messages;

        res.status(200).json(messages);
    }
    catch(error){
        console.log("Error in getMessages", error.message);
        res.status(500).json({error: error.message || "Internal Server Error..."});
    }
}