// ==========================================
// Animation and interactivity for the portfolio website
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Set current year for footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // ==========================================
    // Logo click - back to top or navigate to home
    // ==========================================
    const logoLink = document.querySelector('.logo a');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            // Check if we're on the home page
            const isHomePage = window.location.pathname === '/' || 
                               window.location.pathname === '/index.html' || 
                               window.location.pathname.endsWith('/index.html');
            
            if (isHomePage) {
                // If on homepage, prevent default and scroll to top
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
            // If not on homepage, allow default navigation to home
        });
    }
    
    // ==========================================
    // Page loader animation
    // ==========================================
    const loader = document.querySelector('.loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    });
    
    // ==========================================
    // Custom cursor
    // ==========================================
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if (cursorDot && cursorOutline && window.innerWidth > 768 && !('ontouchstart' in window)) {
        const cursorElements = [cursorDot, cursorOutline];
        let mouseX = 0;
        let mouseY = 0;
        let dotX = 0;
        let dotY = 0;
        let outlineX = 0;
        let outlineY = 0;
        let lastMouseMoveTime = 0;
        const throttleDelay = 10; // Throttle to once per 10ms
        
        // Cursor movement with throttling
        window.addEventListener('mousemove', (e) => {
            const currentTime = Date.now();
            if (currentTime - lastMouseMoveTime < throttleDelay) return;
            
            lastMouseMoveTime = currentTime;
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        // Use requestAnimationFrame for smoother animation
        function animateCursor() {
            // Smooth movement for dot
            const dotEasing = 0.2;
            dotX += (mouseX - dotX) * dotEasing;
            dotY += (mouseY - dotY) * dotEasing;
            
            // Slower movement for outline
            const outlineEasing = 0.1;
            outlineX += (mouseX - outlineX) * outlineEasing;
            outlineY += (mouseY - outlineY) * outlineEasing;
            
            // Apply transforms directly (more efficient than GSAP for this purpose)
            cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate3d(-50%, -50%, 0)`;
            cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate3d(-50%, -50%, 0)`;
            
            requestAnimationFrame(animateCursor);
        }
        
        // Start the animation loop
        requestAnimationFrame(animateCursor);
        
        // Hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .skill-item, .service-card, .portfolio-item, .filter-btn, .motto-word, #feature-video');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                document.body.classList.add('cursor-hover');
                // Still use GSAP for hover effect as it's not called frequently
                gsap.to(cursorOutline, {
                    scale: 1.5,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            });
            
            el.addEventListener('mouseleave', () => {
                document.body.classList.remove('cursor-hover');
                gsap.to(cursorOutline, {
                    scale: 1,
                    duration: 0.3,
                    ease: "back.out(1.7)"
                });
            });
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            gsap.to(cursorElements, {
                opacity: 0,
                duration: 0.3
            });
        });
        
        document.addEventListener('mouseenter', () => {
            gsap.to(cursorElements, {
                opacity: 1,
                duration: 0.3
            });
        });
    } else if (cursorDot && cursorOutline) {
        // Hide cursor elements on mobile/touch devices or smaller screens
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
    }
    
    // ==========================================
    // Header scroll effect
    // ==========================================
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // ==========================================
    // Mobile menu toggle
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
        
        // Close menu when link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }
    
    // ==========================================
    // Smooth scrolling for anchor links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
	
    // ==========================================
    // Active navigation link on scroll
    // ==========================================
    const sections = document.querySelectorAll('.section');
    
    function setActiveNavLink() {
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (sectionId && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    setActiveNavLink(); // Set active on page load
    
    // ==========================================
    // Section animations on scroll
    // ==========================================
    function animateSections() {
        // Add .in-view class to sections when they enter viewport
        sections.forEach(section => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top 80%',
                onEnter: () => section.classList.add('in-view'),
                once: true
            });
        });
        
        // Add order to staggered children
        const staggeredElements = [
            '.service-card',
            '.timeline-item',
            '.motto-word'
        ];
        
        staggeredElements.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach((el, index) => {
                el.style.setProperty('--order', index);
            });
        });
    }
    
    animateSections();
    
    // ==========================================
    // Portfolio filtering
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterButtons.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get the filter value
                const filterValue = button.getAttribute('data-filter');
                
                // Filter the portfolio items
                if (filterValue === 'all') {
                    // Show all items
                portfolioItems.forEach(item => {
                        gsap.to(item, {
                            opacity: 1,
                            scale: 1,
                            duration: 0.5,
                            ease: 'power2.out',
                            clearProps: 'all',
                            onStart: () => {
                        item.style.display = 'block';
                            }
                        });
                    });
                    } else {
                    // Filter items
                    portfolioItems.forEach(item => {
                        const categories = item.getAttribute('data-category');
                        
                        if (categories.includes(filterValue)) {
                            gsap.to(item, {
                                opacity: 1,
                                scale: 1,
                                duration: 0.5,
                                ease: 'power2.out',
                                clearProps: 'all',
                                onStart: () => {
                            item.style.display = 'block';
                                }
                            });
                        } else {
                            gsap.to(item, {
                                opacity: 0,
                                scale: 0.9,
                                duration: 0.5,
                                ease: 'power2.out',
                                onComplete: () => {
                                item.style.display = 'none';
                                }
                            });
                        }
                    });
                    }
            });
        });
    }
    
    // ==========================================
    // Video section functionality
    // ==========================================
    const featureVideo = document.getElementById('feature-video');
    const videoInfo = document.querySelector('.video-info');
    
    if (featureVideo && videoInfo) {
        // Play video with sound on click
        featureVideo.addEventListener('click', () => {
            if (featureVideo.muted) {
                featureVideo.muted = false;
                
                // Show temporary message
                const soundMessage = document.createElement('div');
                soundMessage.className = 'sound-message';
                soundMessage.textContent = 'Sound On';
                soundMessage.style.cssText = `
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background-color: var(--primary);
                    color: white;
                    padding: 8px 16px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 500;
                    opacity: 1;
                    transition: opacity 0.5s;
                    z-index: 100;
                `;
                
                document.querySelector('.video-wrapper').appendChild(soundMessage);
                
                setTimeout(() => {
                    soundMessage.style.opacity = '0';
                    setTimeout(() => {
                        soundMessage.remove();
                    }, 500);
                }, 2000);
                
                // Hide info text
                gsap.to(videoInfo, {
                    opacity: 0,
                    duration: 0.5
                });
                
                // Request fullscreen if supported
                if (featureVideo.requestFullscreen) {
                    featureVideo.requestFullscreen();
                } else if (featureVideo.webkitRequestFullscreen) {
                    featureVideo.webkitRequestFullscreen();
                } else if (featureVideo.msRequestFullscreen) {
                    featureVideo.msRequestFullscreen();
                }
            }
        });
        
        // Handle fullscreen exit
        document.addEventListener('fullscreenchange', () => {
            if (!document.fullscreenElement) {
                featureVideo.muted = true;
                
                // Show info text again
                gsap.to(videoInfo, {
                    opacity: 1,
                    duration: 0.5
                });
            }
        });
    }
    
    // ==========================================
    // Motto section text animation
    // ==========================================
    const mottoWords = document.querySelectorAll('.motto-word');
    
    mottoWords.forEach((word, index) => {
        // Set delay based on order
        word.style.setProperty('--order', index);
        
        // Add special hover effect
        word.addEventListener('mouseenter', () => {
            gsap.to(word, {
                scale: 1.1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        word.addEventListener('mouseleave', () => {
            gsap.to(word, {
                scale: 1,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            });
        });
        
        // Add click effect
        word.addEventListener('click', () => {
            gsap.timeline()
                .to(word, {
                    scale: 0.95,
                    duration: 0.1,
                    ease: 'power2.in'
                })
                .to(word, {
                    scale: 1.1,
                    duration: 0.2,
                    ease: 'back.out(1.5)'
                })
                .to(word, {
                    scale: 1,
                    duration: 0.3,
                    ease: 'elastic.out(1, 0.3)'
            });
        });
    });
    
    // ==========================================
    // Parallax effect for background shapes
    // ==========================================
    const shapes = document.querySelectorAll('.shape');
    
    if (shapes.length && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth) - 0.5;
            const y = (clientY / window.innerHeight) - 0.5;
            
            shapes.forEach(shape => {
                let depth = 20;
                if (shape.classList.contains('shape-1')) {
                    depth = 30;
                } else if (shape.classList.contains('shape-3')) {
                    depth = 10;
                }
                
                gsap.to(shape, {
                    x: x * depth,
                    y: y * depth,
                    duration: 1,
                    ease: 'power1.out'
        });
    });
});
    }
    
    // ==========================================
    // Character-by-character text animation
    // ==========================================
    function createSplitText(element) {
        const text = element.textContent;
        element.innerHTML = '';
        
        // Create wrapper for each character
        for (let i = 0; i < text.length; i++) {
            let charSpan = document.createElement('span');
            charSpan.className = 'char';
            charSpan.style.setProperty('--char-index', i);
            charSpan.textContent = text[i] === ' ' ? '\u00A0' : text[i];
            // Add inline opacity to ensure visibility
            charSpan.style.opacity = '1';
            charSpan.style.transform = 'translateY(0)';
            element.appendChild(charSpan);
        }
    }
    
    const textElements = document.querySelectorAll('.hero-title, .section-title');
    textElements.forEach(element => {
        createSplitText(element);
        
        // Make immediately visible, then add animations for subsequent views
        const chars = element.querySelectorAll('.char');
        chars.forEach(char => {
            char.style.opacity = '1';
            char.style.transform = 'translateY(0)';
        });
        
        ScrollTrigger.create({
            trigger: element,
            start: 'top 90%',
            onEnter: () => {
                gsap.to(element.querySelectorAll('.char'), {
                    opacity: 1,
                    y: 0,
                    stagger: 0.02,
                    duration: 0.4,
                    ease: 'power2.out'
                });
            },
            once: true
    });
});

    // ==========================================
    // Portfolio item page transitions
    // ==========================================
    const portfolioLinks = document.querySelectorAll('.portfolio-item');
    
    portfolioLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href && !href.startsWith('#')) {
                e.preventDefault();
                
                // Create transition element if it doesn't exist
                let transition = document.querySelector('.page-transition');
                if (!transition) {
                    transition = document.createElement('div');
                    transition.className = 'page-transition';
                    document.body.appendChild(transition);
                }
                
                // Activate transition
                transition.classList.add('active');
                
                // Navigate after transition completes
                setTimeout(() => {
                    window.location.href = href;
                }, 500);
            }
        });
    });
    
    // ==========================================
    // Save and restore scroll position
    // ==========================================
    // Save scroll position before page unload
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('scrollPosition', window.scrollY);
    });
    
    // Restore scroll position on page load
    const savedScrollPosition = localStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
        window.scrollTo(0, parseInt(savedScrollPosition));
    }
});