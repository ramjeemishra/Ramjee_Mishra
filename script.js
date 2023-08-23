

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


setInterval(()=>{
    let currentTime = new Date();


    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();}
,1000);







// // time button

// const toggleBtn = document.getElementById('toggleBtn');
//       const contentDiv = document.getElementById('contentDiv');
  
//       toggleBtn.addEventListener('click', function() {
//         contentDiv.style.display  = contentDiv.style.display === 'none' ? 'block' : 'none';
//       });


      
