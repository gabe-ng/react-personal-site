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

// ------ scroll then stick nav ------

$(window).scroll(function() {
  if ($(window).scrollTop() > 939) {
    $("#navbar").addClass("fixed");
  }
  if ($(window).scrollTop() < 940) {
    $("#navbar").removeClass("fixed");
  }
});

// ------ scroll then change active accounting for screen width ------

$(window).scroll(function() {
  console.log($(window).scrollTop());
});

if ($(window).width() >= 1400) {
  $(window).scroll(function() {
    if ($(window).scrollTop() < 529) {
      $("#projects-nav").removeClass("active");
    } else if ($(window).scrollTop() > 530 && $(window).scrollTop() < 1300) {
      $("#projects-nav").addClass("active");
      $("#skills-nav").removeClass("active");
    } else if ($(window).scrollTop() > 1301 && $(window).scrollTop() < 1905) {
      $("#projects-nav").removeClass("active");
      $("#about-nav").removeClass("active");
      $("#skills-nav").addClass("active");
    } else if ($(window).scrollTop() > 1906 && $(window).scrollTop() < 2440) {
      $("#skills-nav").removeClass("active");
      $("#contact-nav").removeClass("active");
      $("#about-nav").addClass("active");
    } else if ($(window).scrollTop() > 2441) {
      $("#about-nav").removeClass("active");
      $("#contact-nav").addClass("active");
    }
  });
}

if ($(window).width() >= 1185 && $(window).width() <= 1390) {
  $(window).scroll(function() {
    if ($(window).scrollTop() < 365) {
      $("#projects-nav").removeClass("active");
    } else if ($(window).scrollTop() > 365 && $(window).scrollTop() < 1396) {
      $("#projects-nav").addClass("active");
      $("#skills-nav").removeClass("active");
    } else if ($(window).scrollTop() > 1397 && $(window).scrollTop() < 1969) {
      $("#projects-nav").removeClass("active");
      $("#about-nav").removeClass("active");
      $("#skills-nav").addClass("active");
    } else if ($(window).scrollTop() > 1970 && $(window).scrollTop() < 2630) {
      $("#skills-nav").removeClass("active");
      $("#contact-nav").removeClass("active");
      $("#about-nav").addClass("active");
    } else if ($(window).scrollTop() > 2631) {
      $("#about-nav").removeClass("active");
      $("#contact-nav").addClass("active");
    }
  });
}

if ($(window).width() <= 1184) {
  $(window).scroll(function() {
    if ($(window).scrollTop() < 474) {
      $("#projects-nav").removeClass("active");
    } else if ($(window).scrollTop() > 475 && $(window).scrollTop() < 1827) {
      $("#projects-nav").addClass("active");
      $("#skills-nav").removeClass("active");
    } else if ($(window).scrollTop() > 1828 && $(window).scrollTop() < 2584) {
      $("#projects-nav").removeClass("active");
      $("#about-nav").removeClass("active");
      $("#skills-nav").addClass("active");
    } else if ($(window).scrollTop() > 2585 && $(window).scrollTop() < 2750) {
      $("#skills-nav").removeClass("active");
      $("#contact-nav").removeClass("active");
      $("#about-nav").addClass("active");
    } else if ($(window).scrollTop() > 2751) {
      $("#about-nav").removeClass("active");
      $("#contact-nav").addClass("active");
    }
  });
}

// ------ toggle mini nav ------

$(".hamburger").on("click", function() {
  $(".mini-nav").toggleClass("show");
});

$(".mini-nav a").on("click", function() {
  $(".mini-nav").toggleClass("show");
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

// ------ content rendering on scroll ------

$(window).scroll(function() {
  if ($(window).scrollTop() > 530) {
    $("#projects h2")
      .show()
      .addClass("fadeInRight");
    $(".project-container")
      .show()
      .addClass("fadeinUp");
    setTimeout(function() {
      $("#projects .border")
        .show()
        .addClass("fadeInRight");
    }, 500);
  }
  if ($(window).scrollTop() > 1250) {
    $("#skills h2")
      .show()
      .addClass("fadeInLeft");
    setTimeout(function() {
      $("#skills .border")
        .show()
        .addClass("fadeInLeft");
    }, 500);
    $(".app-skills")
      .show()
      .addClass("fadeInRight");
    $("#skillbar-wrap")
      .show()
      .addClass("fadeInRight");
    setTimeout(function() {
      $("#skillbar-html").animate({ width: "55%" }, 1500);
      $("#skillbar-css").animate({ width: "55%" }, 1500);
      $("#skillbar-js").animate({ width: "55%" }, 1500);
      $("#skillbar-react").animate({ width: "5%" }, 1500);
      $("#skillbar-node").animate({ width: "5%" }, 1500);
      $("#skillbar-python").animate({ width: "10%" }, 1500);
    }, 500);
  }
  if ($(window).scrollTop() > 1720) {
    $("#about h2")
      .show()
      .addClass("fadeinDown");
    $(".about-me")
      .show()
      .addClass("fadeInRight");
    setTimeout(function() {
      $("#about .border")
        .show()
        .addClass("fadeinUp");
    }, 500);
  }
  if ($(window).scrollTop() > 2130) {
    $("#contact h2")
      .show()
      .addClass("fadeInRight");
    $("#contact p")
      .show()
      .addClass("fadeInLeft");
    $("#contact ul")
      .show()
      .addClass("fadeinUp");
    setTimeout(function() {
      $("#contact .border")
        .show()
        .addClass("fadeInLeft");
    }, 500);
  }
});

// ------ hide all content on page onload ------

$(".project-container, #projects h2, #projects .border").hide();
$("#skills h2, #skills .border, .app-skills, #skillbar-wrap").hide();
$("#about h2, #about .border, .about-me").hide();
$("#contact h2, #contact .border, #contact p, #contact ul").hide();
