//  DIGITAL CLOCK PROGRAM!

function updateClock(){
  const now = new Date();
  let hours = now.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  let greeting = "";
  if (hours <  12){
    greeting = "Good Morning Dear!🌟";
  }
  else if (hours < 17){
    greeting = "Good Afternoon Dear!🌞";
  }
  else{
    greeting = "Good Evening Dear!🌙";
  }

  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("clock").textContent =  timeString;

  const options = {weeday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const dateString = now.toLocaleDateString(undefined, options);
  document.getElementById("date").textContent = dateString;
  document.getElementById("greeting").textContent = greeting;
   if(minutes === '00' && seconds  === '00') {
    document.getElementById("beep").play();
  }
}
setInterval(updateClock, 1000);
updateClock();

