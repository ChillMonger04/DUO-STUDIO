var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var videos = document.querySelectorAll('video');
var images = document.querySelectorAll('img');
var navElements = document.querySelectorAll('#nav h4');
var navhover = document.querySelector('#nav-hover');
var navhoverH1 = document.querySelectorAll('#nav-hover h1');
var rows = document.querySelectorAll('#page5 .row');

// Locomotive Scroll Setup
function locoScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
};

locoScroll();

// Custom Cursor Setup
function cursorAnime() {
    document.addEventListener('mousemove', function (e) {
        cursor.style.left = e.x + 'px';
        cursor.style.top = e.y + 'px';

        cursor.animate({
            left: `${e.x}px`,
            top: `${e.y}px`
        }, { duration: 1500, fill: "forwards" })
    });

    document.querySelector("#nav img").addEventListener("mouseenter", function () {
        cursor.style.transform = "translate(-50%, -50%) scale(3)";
    })

    document.querySelector("#nav img").addEventListener("mouseleave", function () {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });

    document.querySelector("#lower h1").addEventListener("mouseenter", function () {
        cursor.style.transform = "translate(-50%, -50%) scale(2)";
    })

    document.querySelector("#lower h1").addEventListener("mouseleave", function () {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });

    document.querySelector("#lower button").addEventListener("mouseenter", function () {
        cursor.style.transform = "translate(-50%, -50%) scale(3)";
    })

    document.querySelector("#lower button").addEventListener("mouseleave", function () {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });

    document.querySelector("#upper .circle").addEventListener("mouseenter", function () {
        cursor.style.transform = "translate(-50%, -50%) scale(4)";
    })

    document.querySelector("#upper .circle").addEventListener("mouseleave", function () {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });

    document.querySelector("#discover-circle").addEventListener("mouseenter", function () {
        cursor.style.transform = "translate(-50%, -50%) scale(4)";
    })

    document.querySelector("#discover-circle").addEventListener("mouseleave", function () {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });

    document.querySelector("#page2-right button").addEventListener("mouseenter", function () {
        cursor.style.transform = "translate(-50%, -50%) scale(3)";
    })

    document.querySelector("#page2-right button").addEventListener("mouseleave", function () {
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });

};

cursorAnime();

// On refresh/load starting animations
function onLoadAnime() {
    var tl = gsap.timeline();

    tl.from("#nav img, #nav-part2, #nav-part3", {
        y: -200,
        delay: 0.4,
        duration: 0.5
    }, "start");

    tl.from("#page1 h1", {
        y: 300,
        rotate: 25,
        delay: 0.4,
        duration: 0.8
    }, "start");

    tl.from("#page1 h2", {
        y: 300,
        rotate: 25,
        delay: 0.4,
        duration: 0.8
    }, "start");

    tl.from("#vid-text", {
        y: 300,
        opacity: 0,
        delay: 0.4,
        duration: 0.8
    }, "start");
};

onLoadAnime();

// Navbar Animation Setup
function navAnime() {
    navElements.forEach((element, idx) => {
        if (idx == 0) return;

        element.addEventListener('mouseenter', function () {
            navhoverH1.forEach((h1) => {
                h1.innerHTML = "&nbsp;" + element.innerHTML + "  " + element.innerHTML + "  " + element.innerHTML + "  " + element.innerHTML + "  " + element.innerHTML;
            })
            navhover.style.display = "flex";
            cursor.style.transform = "translate(-50%, -50%) scale(2)";
        })
    });

    document.querySelector('#nav').addEventListener('mouseleave', function () {
        navhover.style.display = "none";
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    })
};

navAnime();

// Page 1 Animation Setup
function page1Anime() {
    var scrollHead = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1 h1",
            scroller: "#main",
            markers: false,
            start: "top 17%",
            end: "top 0%",
            scrub: 3
        }
    });

    scrollHead.to("#page1 h1", {
        x: -85,
        opacity: 0
    }, "head");

    scrollHead.to("#page1 h2", {
        x: 120,
        opacity: 0.1
    }, "head");

    scrollHead.to("#page1 #vid-text-up", {
        y: -100,
        width: "95%",
        opacity: 0
    }, "head");

    scrollHead.to("#page1 video", {
        width: "95%"
    }, "head");

    scrollHead.to("#page1 video", {
        y: -565,
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            pin: true,
            scrub: 3
        }
    }, "head");

};

page1Anime();

// Scroll-triggered Animations
function tl1Anime() {
    var scrollChange = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1 h1",
            scroller: "#main",
            markers: false,
            start: "top -119%",
            end: "top -129%",
            scrub: 3
        }
    });

    scrollChange.to("#main", {
        backgroundColor: "#fff"
    });
};

tl1Anime();

function tl2Anime() {
    var scrollChange2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1 h1",
            scroller: "#main",
            markers: false,
            start: "top -255%",
            end: "top -275%",
            scrub: 3,
        }
    })

    scrollChange2.to("#page3-part1-img", {
        x: 30,
    }, "start")

    scrollChange2.to("#page3-part1-vid", {
        x: -33,
    }, "start")
}

tl2Anime();

function tl3Anime() {
    var scrollChange3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3 h1",
            scroller: "#main",
            markers: false,
            start: "top -53%",
            end: "top -73%",
            scrub: 3,
        }
    });

    scrollChange3.from("#page3-part2-img", {
        x: -38,
    }, "sex");

    scrollChange3.from("#page3-part2-vid", {
        x: 44,
    }, "sex");
}

tl3Anime();

// Scroll-triggered Animations
function tl4Anime() {
    var scrollChange4 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1 h1",
            scroller: "#main",
            markers: false,
            start: "top -497%",
            end: "top -512%",
            scrub: 3
        }
    });

    scrollChange4.to("#main", {
        backgroundColor: "#0F0D0D"
    }, "page4");

    scrollChange4.to("#page3-part3 h3", {
        color: "#FFFFFF"
    }, "page4");

    scrollChange4.to("#page3", {
        borderBottomColor: "#FFFFFF"
    }, "page4");

    scrollChange4.to(".text h1", {
        color: "#FFFFFF"
    }, "page4");

    scrollChange4.to("#page4 p", {
        color: "#FFFFFF"
    }, "page4");
};

tl4Anime();

// Image Hover Effect for Page 5
function pag5Anime() {
    const preloadedImages = []; // Array to store preloaded images

    // Preload the images and store them in the array
    rows.forEach((row) => {
        const img = new Image();
        img.onload = () => {
            preloadedImages.push(img); // Add the loaded image to the array
        };
        img.src = row.dataset.image;
    });

    function cursorOnRows(img) {
        cursor.classList.add('cursor-blend');
        cursor.classList.add('cursor-img');

        // Set the cursor size based on the image's natural dimensions
        cursor.style.width = 405 + 'px';
        cursor.style.height = 315 + 'px';
        cursor.style.borderRadius = "5px";

        // Append the image to the cursor element
        cursor.innerHTML = ''; // Clear any existing content
        cursor.appendChild(img);
    }

    rows.forEach((row, index) => {
        if (index == 0) {
            return;
        }
        row.addEventListener('mouseenter', function () {
            cursorOnRows(preloadedImages[index - 1]); // Use the preloaded image from the array
        });
    });

    rows.forEach((row) => {
        row.addEventListener('mouseleave', function () {
            cursor.classList.remove('cursor-blend');
            cursor.classList.remove('cursor-img');

            // Reset cursor size and hide it
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.borderRadius = '50%';
            cursor.innerHTML = '';
        });
    });
};

pag5Anime();