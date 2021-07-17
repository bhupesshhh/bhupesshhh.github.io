

const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);


sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});




// PREVENT CLIPBOARD COPYING
document.addEventListener("copy", function(evt){
  // Change the copied text if you want
  evt.clipboardData.setData("text/plain", "Copying is not allowed on this webpage");
 
  // Prevent the default copy action
  evt.preventDefault();
}, false);