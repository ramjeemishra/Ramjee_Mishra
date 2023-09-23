

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


      



////code///
fetch('code/cl.txt')
    .then(response => response.text())
    .then(data => {
      document.getElementById('text-content').textContent = data;
    })
    .catch(error => {
      console.error('Error fetching the file:', error);
    });





    ////copy button//
    document.addEventListener("DOMContentLoaded", function () {
    const copyButtons = document.querySelectorAll(".copy-button");

    copyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const targetTextId = button.getAttribute("data-target");
            const textContent = document.getElementById(targetTextId);
            const iframe = button.previousElementSibling; // Get the previous sibling (iframe)

            const iframeContent = iframe.contentDocument.body.textContent;

            const tempInput = document.createElement("textarea");
            tempInput.value = iframeContent;
            document.body.appendChild(tempInput);

            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // For mobile devices

            document.execCommand("copy");

            document.body.removeChild(tempInput);

            button.textContent = "Copied!";
            setTimeout(() => {
                button.textContent = "Copy";
            }, 2000);
        });
    });
});









//progress scrollbar//

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100; // Fix the = to *
    progress.style.height = progressHeight + "%";
}










//progressbar//

let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: {gradient: ['#a445b2', '#fa4299']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".js .bar").circleProgress({
    value: 0.70
  });
  $(".react .bar").circleProgress({
    value: 0.60
  });