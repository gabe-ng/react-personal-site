// -------- paritcle.js --------
particlesJS("particles-js", {
  particles: {
    number: { value: 150, density: { enable: true, value_area: 800 } },
    color: { value: "#fff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom-right",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: false, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 0.5 } },
      bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

// ------ skill animations ------
$(document).ready(function() {
  $("#skillbar-html").animate({ width: "55%" }, 1500);
  $("#skillbar-css").animate({ width: "50%" }, 1500);
  $("#skillbar-js").animate({ width: "50%" }, 1500);
  $("#skillbar-react").animate({ width: "5%" }, 1500);
  $("#skillbar-node").animate({ width: "5%" }, 1500);
  $("#skillbar-python").animate({ width: "10%" }, 1500);
});

// ------ scroll then stick nav ------

$(window).scroll(function() {
  if ($(window).scrollTop() > 948) {
    $("#navbar").addClass("fixed");
  }
  if ($(window).scrollTop() < 949) {
    $("#navbar").removeClass("fixed");
  }
});

// ------ scroll then change active ------

// REDO SIZING AFTER FINISHED
$(window).scroll(function() {
  console.log($(window).scrollTop());
  if ($(window).scrollTop() > 755 && $(window).scrollTop() < 1250) {
    $("#projects-nav").addClass("active");
    $("#skills-nav").removeClass("active");
  } else if ($(window).scrollTop() > 1251 && $(window).scrollTop() < 1750) {
    $("#projects-nav").removeClass("active");
    $("#about-nav").removeClass("active");
    $("#skills-nav").addClass("active");
  } else if ($(window).scrollTop() > 1751 && $(window).scrollTop() < 2250) {
    $("#skills-nav").removeClass("active");
    $("#contact-nav").removeClass("active");
    $("#about-nav").addClass("active");
  } else if ($(window).scrollTop() > 2250) {
    $("#about-nav").removeClass("active");
    $("#contact-nav").addClass("active");
  }
});

// ------ smooth scroll ------

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
