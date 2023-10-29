        // JavaScript code for text animation
        var phrases = ["Student and", "Developer"];
        var phraseIndex = 0;
        var charIndex = 0;
        var outputElement = document.getElementById("output");

        function typeText() {
            var phrase = phrases[phraseIndex];
            outputElement.textContent = phrase.slice(0, charIndex);
            charIndex++;

            if (charIndex > phrase.length) {
                charIndex = 0;
                phraseIndex++;
                if (phraseIndex >= phrases.length) {
                    phraseIndex = 0;
                }
            }

            setTimeout(typeText, 270); // Adjust the speed (in milliseconds) of the animation here
        }

        // Start the animation
        typeText();



























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











// button working



  // const homeButton = document.querySelector('.home-button');
  // homeButton.addEventListener('click', () => {
  //     window.scrollTo({
  //         top: 0,
  //         behavior: 'smooth'
  //     });
  // });





  document.addEventListener("DOMContentLoaded", function() {
    var preloader = document.querySelector(".preloader");
    preloader.style.display = "none";
});








// animate on scroll


// let sections = document.querySelectorAll('section');

// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;

//     if (top >= offset && top < offset + height) {
//       sec.classList.add('show.animate');
//     }
//     else{
//       sec.classList.remove('show-animate');
//     }
//   })
// }











// document.addEventListener('contextmenu', function(event) {
//   event.preventDefault();
// });

// document.addEventListener('keydown', function(event) {
//   if (event.ctrlKey && event.key === 'u') {
//       event.preventDefault();
//   }
// });






















// Function to display custom modal
function openModal() {
  document.getElementById('custom-modal').style.display = 'block';
}

// Function to close custom modal
function closeModal() {
  document.getElementById('custom-modal').style.display = 'none';
}

// Trigger custom modal when Ctrl+U is pressed
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'u') {
      event.preventDefault();
      openModal();
  }
});





















document.addEventListener("keydown", function(event) {
  // Check if Ctrl (or Command) + Q is pressed
  if (event.ctrlKey && event.key === "q") {
    // Show the hidden div
    document.getElementById("hiddenDiv").style.display = "block";
    // Prevent the default browser behavior for Ctrl + Q (quitting the browser)
    event.preventDefault();
  }
});

// Close the div when the close button is clicked
document.getElementById("closeButton").addEventListener("click", function() {
  document.getElementById("hiddenDiv").style.display = "none";
});






















