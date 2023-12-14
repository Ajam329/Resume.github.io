var DOB = new Date(2000,8,13);
function calculateAge(){
    var timeDif = new Date()-DOB;
    var age = timeDif / (1000*3600*24*365.25);
    age = Math.floor(age);
    document.getElementById("age").innerText = age +" years";
}
document.addEventListener("DOMContentLoaded", function () {
    calculateAge();
    var logoButton = document.querySelector('.logo-button');
  var overlay = document.querySelector('.overlay');

  logoButton.addEventListener('click', function () {
    // Toggle the visibility of the overlay on button click
    overlay.style.display = (overlay.style.display === 'none') ? 'block' : 'none';
    var slideContent = document.querySelector('.slide-content');
    // Blur effect animation
    var blurAmount = 0;
    var blurInterval = setInterval(function () {
      if (blurAmount < 5) {
        overlay.style.backdropFilter = 'blur(' + blurAmount + 'px)';
        blurAmount++;
      } else {
        clearInterval(blurInterval);
      }
    }, 20); // Adjust the interval for smoother animation
  var topValue = -100; // Initial position above the viewport
  slideContent.style.top = topValue + 'vh';

  var slideInterval = setInterval(function () {
    if (topValue < 0) {
      slideContent.style.top = topValue + 'vh';
      topValue += 2; // Adjust the speed of the slide-down
    } else {
      clearInterval(slideInterval);
    }
    }, 15); // Adjust the interval for smoother animation
    });
  overlay.addEventListener('click', function (event) {
    // Close the overlay if clicked outside the sliding content
    if (event.target === overlay) {
      // Remove blur effect
      overlay.style.backdropFilter = 'blur(0px)';
      overlay.style.display = 'none';
    }
  });
});