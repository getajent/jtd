// Save the scroll position before the page unloads
window.onbeforeunload = function () {
    localStorage.setItem('scrollPosition', window.scrollY);
};

// Restore the scroll position when the page loads
window.onload = function () {
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
        window.scrollTo(0, savedScrollPosition);
    }
};

// Select the planet element
const planet = document.querySelector('.planet-background');

// Function to rotate the planet based on scroll
function rotatePlanetOnScroll() {
    // Get the amount of scroll, in pixels
    const scrollY = window.scrollY;

    // Calculate the rotation based on the scroll position
    // You can adjust the value (e.g., 0.1) to control the speed of rotation
    const rotation = scrollY * 0.1;

    // Apply the rotation to the planet
    planet.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
}

// Listen for the scroll event
window.addEventListener('scroll', rotatePlanetOnScroll);

// Document content loaded event listener
document.addEventListener('DOMContentLoaded', () => {
    const portfolioSection = document.querySelector('.portfolio-section');
    const bigCompanies = document.querySelector('.big-companies');

    // Check if element is partially visible in the viewport
    function isElementPartiallyInViewport(el) {
        const rect = el.getBoundingClientRect();
        const threshold = 0.5;
        const visibleHeight = rect.bottom < window.innerHeight ? rect.bottom : window.innerHeight - rect.top;
        return (visibleHeight / rect.height) > threshold;
    }

    // Apply animation when the portfolio section is in view
    function applyAnimation() {
        if (isElementPartiallyInViewport(portfolioSection)) {
            bigCompanies.classList.add('highlight-color');
        } else {
            bigCompanies.classList.remove('highlight-color');
        }
    }

    // Initial check
    applyAnimation();

    // Add scroll event listener
    window.addEventListener('scroll', applyAnimation);
});

// GSAP ScrollTrigger animations for portfolio items
gsap.registerPlugin(ScrollTrigger);

// Animation for the portfolio items to activate on scroll without disappearing
gsap.utils.toArray('.portfolio-item').forEach(item => {
    gsap.from(item, {
        opacity: 0, 
        y: 100, 
        duration: 1, 
        scrollTrigger: {
            trigger: item,
            start: "top 80%", 
            end: "top 30%",
            scrub: true, // Smooth animation as you scroll
            // Remove the "end" property to prevent disappearing
            toggleActions: "play none none none", // Keeps it visible when scrolled into view
        },
    });
});

// Hover effect for portfolio items
gsap.utils.toArray('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            backgroundColor: "#00c8ff", // Light blue on hover
            scale: 1.03, // Minor scaling on hover
            duration: 0.3,
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            backgroundColor: "transparent", // Reset background
            scale: 1, // Reset scale
            duration: 0.3,
        });
    });
});

document.addEventListener('scroll', () => {
    const video = document.getElementById('scroll-video');
    const videoSection = document.querySelector('.video-section');
    const rect = videoSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calculate how much of the video section is visible
    const scrollProgress = Math.min(1, Math.max(0, 1 - rect.top / viewportHeight));

    // Set video width based on scroll progress
    const maxWidth = 100; // Full screen width in vw
    const minWidth = 50; // Starting width in vw
    const newWidth = minWidth + scrollProgress * (maxWidth - minWidth);
    video.style.width = `${newWidth}vw`;
});

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('scroll-video');

    // Play video with sound and go fullscreen on click
    video.addEventListener('click', () => {
        video.muted = false;
        video.play();
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });

    // Detect when exiting fullscreen and mute the video
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            video.muted = true;
        }
    });

    document.addEventListener('webkitfullscreenchange', () => {
        if (!document.webkitFullscreenElement) {
            video.muted = true;
        }
    });

    document.addEventListener('msfullscreenchange', () => {
        if (!document.msFullscreenElement) {
            video.muted = true;
        }
    });
});

    document.addEventListener('DOMContentLoaded', () => {
        gsap.registerPlugin(ScrollTrigger);

        // Target the motto text
        gsap.fromTo(
            ".motto-text",
            { scale: 0, opacity: 0 }, // Start state
            {
                scale: 1.5, // Enlarged size
                opacity: 1, // Fully visible
                duration: 1, // Animation duration
                scrollTrigger: {
                    trigger: ".motto-section", // Trigger on motto section
                    start: "top 80%", // When top of section reaches 80% of viewport
                    end: "top 10%", // When top of section reaches 30% of viewport
                    scrub: true, // Smooth animation as you scroll
                },
            }
        );
    });
	
// Adding functionality for a custom cursor hover effect
const customCursor = document.createElement('div');
customCursor.id = 'custom-cursor';
customCursor.innerHTML = '<span id="cursor-text">Play</span>';
document.body.appendChild(customCursor);

const cursorElement = document.getElementById('custom-cursor');
const cursorText = document.getElementById('cursor-text');
const videoElement = document.getElementById('scroll-video');

// Move the custom cursor with the mouse
window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    cursorElement.style.left = `${x}px`;
    cursorElement.style.top = `${y}px`;
});

// Hover effect for the video
videoElement.addEventListener('mouseenter', () => {
    cursorElement.style.opacity = '1';
    cursorElement.style.transform = 'scale(1)'; // Scale up the cursor
    cursorText.textContent = 'Play';
    videoElement.style.cursor = 'none'; // Hide the default cursor
});

videoElement.addEventListener('mouseleave', () => {
    cursorElement.style.opacity = '0';
    cursorElement.style.transform = 'scale(0)'; // Scale down the cursor
    videoElement.style.cursor = 'auto'; // Restore the default cursor
});

// Fixing linkedin icon
const linkedinIcon = document.querySelector('.linkedin-icon');
document.body.appendChild(linkedinIcon); // Moves it directly to the body

// motto section fix
document.addEventListener('DOMContentLoaded', () => {
    const words = document.querySelectorAll('.motto-text span');
    words.forEach((word, index) => {
        word.style.setProperty('--delay', `${index * 0.2}s`);
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        },
        { threshold: 0.5 }
    );

    words.forEach((word) => observer.observe(word));
});

// Connect section
document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Title
    const phrases = ["Connect", "Stay Connected", "Let's Work Together"];
    let index = 0;
    setInterval(() => {
        document.querySelector(".section-title").textContent = phrases[index];
        index = (index + 1) % phrases.length;
    }, 3000);
});

// Projects
document.addEventListener('DOMContentLoaded', () => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const transitionElement = document.createElement('div');
    transitionElement.classList.add('page-transition');
    document.body.appendChild(transitionElement);

    portfolioItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetHref = item.getAttribute('href');

            // Activate the transition
            transitionElement.classList.add('active');

            // Wait for the animation to complete, then navigate
            setTimeout(() => {
                window.location.href = targetHref;
            }, 500); // Match the transition duration
        });
    });
	
	// Description scroll trigger
	gsap.registerPlugin(ScrollTrigger);

gsap.to('.about-description', {
    backgroundSize: '100%', // Full gradient on scroll
    ease: 'none',
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
    },
});

});