export function extractTime(dataString) {
    const data = new Date(dataString);
    const hours = padZero(data.getHours());
    const minutes = padZero(data.getMinutes());
    return `${hours}:${minutes}`;
  }
  
  function padZero(number) {    
    return number.toString().padStart(2, '0');
      
  }