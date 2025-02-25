let show = document.getElementById("show");
let hide = document.getElementById("hide");
let mobileNav = document.getElementById("mobileNav");
show.addEventListener("click", () => {
    mobileNav.style.display = "block"
    hide.style.display = "block"
    show.style.display = "none"
})
hide.addEventListener("click", () => {
    mobileNav.style.display = "none"
    show.style.display = "block"
    hide.style.display = "none"
})

let navPic = document.getElementById("navPic")
let profileDetails = document.getElementById("profileDetails")

navPic.addEventListener("click", () => {
    if (profileDetails.style.display = "none") {
        profileDetails.style.display = "flex"
    } else {
        profileDetails.style.display = "none"
    }
    

})
 

  document.addEventListener('click', function(event) {
    let isClickInside = navPic.contains(event.target);
    let isClickInside2 = profileDetails.contains(event.target);

    if (!isClickInside && !isClickInside2) {
      // Clicked outside the element, so close it
      profileDetails.style.display = 'none'; // Or any other closing logic
    }
  });
//  swipper
const swiper2 = new Swiper('.slider-wrapper2', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        450: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1024: {
            slidesPerView: 3
        }
    }
});


const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3000, // Time between slides in milliseconds
        disableOnInteraction: false, // Keep autoplay running after user interaction
    },
    // Pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true

    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },

        600: {
            slidesPerView: 2
        }
    }
});
