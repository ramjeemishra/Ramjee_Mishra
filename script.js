

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
