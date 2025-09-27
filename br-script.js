// BR Project - Quantum Reality Script

class BRProjectQuantumReality {
    constructor() {
        this.currentReality = 'br';
        this.isActive = false;
        this.quantumState = 'retail';
        this.init();
    }

    init() {
        this.activateReality();
        this.setupLightbox();
        this.setupPortalEffects();
        this.setupParticleSystem();
        this.setupSmoothScrolling();
        this.setupRealityEntrance();
    }

    // Activate Reality System
    activateReality() {
        this.isActive = true;
        console.log('BR Danmark Quantum Reality activated');
        this.triggerEntranceAnimations();
    }

    triggerEntranceAnimations() {
        // Hero section entrance
        const heroElements = document.querySelectorAll('.project-meta, .project-title, .identity-tags, .project-showcase');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
                element.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
            }, index * 150);
        });

        // Set initial states for entrance animations
        heroElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px) scale(0.95)';
        });
    }

    // Lightbox System
    setupLightbox() {
        const galleryPortals = document.querySelectorAll('.gallery-portal[data-src]');
        const lightboxOverlay = document.querySelector('.lightbox-overlay');
        const lightboxImage = document.querySelector('.lightbox-image');
        const lightboxClose = document.querySelector('.lightbox-close');

        if (!lightboxOverlay || !lightboxImage || !lightboxClose) return;

        // Open lightbox
        galleryPortals.forEach(portal => {
            portal.addEventListener('click', () => {
                const imageSrc = portal.getAttribute('data-src');
                const imageAlt = portal.querySelector('.portal-image').alt;
                
                lightboxImage.src = imageSrc;
                lightboxImage.alt = imageAlt;
                lightboxOverlay.classList.add('active');
                
                // Prevent body scroll
                document.body.style.overflow = 'hidden';
                
                // Entrance animation
                lightboxImage.style.opacity = '0';
                lightboxImage.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    lightboxImage.style.opacity = '1';
                    lightboxImage.style.transform = 'scale(1)';
                    lightboxImage.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
                }, 50);
            });
        });

        // Close lightbox
        const closeLightbox = () => {
            lightboxOverlay.classList.remove('active');
            document.body.style.overflow = '';
            
            // Exit animation
            lightboxImage.style.opacity = '0';
            lightboxImage.style.transform = 'scale(0.9)';
        };

        lightboxClose.addEventListener('click', closeLightbox);
        lightboxOverlay.addEventListener('click', (e) => {
            if (e.target === lightboxOverlay) {
                closeLightbox();
            }
        });

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // Portal Effects
    setupPortalEffects() {
        const galleryPortals = document.querySelectorAll('.gallery-portal');
        
        galleryPortals.forEach(portal => {
            portal.addEventListener('mouseenter', () => {
                this.activatePortal(portal);
            });
            
            portal.addEventListener('mouseleave', () => {
                this.deactivatePortal(portal);
            });
        });

        // Set initial states
        galleryPortals.forEach(portal => {
            portal.style.transform = 'translateY(0) scale(1)';
            portal.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
        });
    }

    activatePortal(portal) {
        const portalImage = portal.querySelector('.portal-image');
        const portalMeta = portal.querySelector('.portal-meta');
        
        portal.style.transform = 'translateY(-5px) scale(1.02)';
        portal.style.boxShadow = '0 20px 40px rgba(255,74,107,0.2)';
        
        if (portalImage) {
            portalImage.style.transform = 'scale(1.1)';
        }
        
        if (portalMeta) {
            portalMeta.style.transform = 'translateY(0)';
        }
    }

    deactivatePortal(portal) {
        const portalImage = portal.querySelector('.portal-image');
        const portalMeta = portal.querySelector('.portal-meta');
        
        portal.style.transform = 'translateY(0) scale(1)';
        portal.style.boxShadow = 'none';
        
        if (portalImage) {
            portalImage.style.transform = 'scale(1)';
        }
        
        if (portalMeta) {
            portalMeta.style.transform = 'translateY(100%)';
        }
    }

    // Smooth Scrolling for Navigation
    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Reality Entrance Effects
    setupRealityEntrance() {
        // Intersection Observer for scroll-triggered animations
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateSection(entry.target);
                }
            });
        }, observerOptions);

        // Observe sections
        const sections = document.querySelectorAll('.project-overview, .project-gallery, .navigation-matrix');
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    animateSection(section) {
        const elements = section.querySelectorAll('.section-disruptor, .quantum-description, .principle-node, .gallery-portal, .nav-portal');
        
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
                element.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            }, index * 100);
        });

        // Set initial states
        elements.forEach(element => {
            if (!element.style.opacity) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px) scale(0.95)';
            }
        });
    }

    setupParticleSystem() {
        const particleUniverse = document.querySelector('.particle-universe');
        if (!particleUniverse) return;

        this.createParticles(particleUniverse);
        this.startParticleAnimation();
    }

    createParticles(container) {
        const particleCount = 15;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random positioning
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 8 + 's';
            particle.style.animationDuration = (8 + Math.random() * 4) + 's';
            
            container.appendChild(particle);
        }
    }

    startParticleAnimation() {
        // Additional particle effects can be added here
        setInterval(() => {
            this.createQuantumGlitch();
        }, 5000);
    }

    createQuantumGlitch() {
        const glitchElements = document.querySelectorAll('.title-fragment, .section-disruptor');
        
        glitchElements.forEach(element => {
            element.style.textShadow = '2px 0 #ff4a6b, -2px 0 #ff7676';
            setTimeout(() => {
                element.style.textShadow = '';
            }, 100);
        });
    }

    setupQuantumNavigation() {
        const navLinks = document.querySelectorAll('.nav-link, .nav-portal');
        
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                this.animateNavEntry(link);
            });
            
            link.addEventListener('mouseleave', () => {
                this.animateNavExit(link);
            });
        });

        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    animateNavEntry(element) {
        element.style.transform = 'translateY(-2px)';
        element.style.boxShadow = '0 5px 15px rgba(255, 74, 107, 0.3)';
    }

    animateNavExit(element) {
        element.style.transform = 'translateY(0)';
        element.style.boxShadow = 'none';
    }

    // Keyboard shortcuts
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Escape to close lightbox
            if (e.key === 'Escape') {
                this.closeLightbox();
            }
            
            // Space to pause animations
            if (e.key === ' ' && e.ctrlKey) {
                e.preventDefault();
                this.toggleAnimations();
            }
        });
    }

    toggleAnimations() {
        document.body.classList.toggle('animations-paused');
    }

    // Performance optimization
    optimizePerformance() {
        // Reduce animations on low-performance devices
        if (navigator.hardwareConcurrency < 4) {
            document.body.classList.add('reduced-motion');
        }

        // Pause animations when tab is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                document.body.classList.add('animations-paused');
            } else {
                document.body.classList.remove('animations-paused');
            }
        });
    }

    // Initialize quantum field effects
    initQuantumField() {
        const hero = document.querySelector('.project-hero');
        if (!hero) return;

        let mouseX = 0;
        let mouseY = 0;

        hero.addEventListener('mousemove', (e) => {
            mouseX = e.clientX / window.innerWidth;
            mouseY = e.clientY / window.innerHeight;
            
            hero.style.setProperty('--mouse-x', mouseX);
            hero.style.setProperty('--mouse-y', mouseY);
        });
    }

    // Error handling
    handleErrors() {
        window.addEventListener('error', (e) => {
            console.warn('BR Project System Error:', e.error);
        });
    }
}

// Utility functions
const BRUtils = {
    // Smooth scroll to element
    scrollToElement(selector, offset = 0) {
        const element = document.querySelector(selector);
        if (element) {
            const y = element.offsetTop - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    },

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.right <= window.innerWidth
        );
    },

    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Generate random number between min and max
    random(min, max) {
        return Math.random() * (max - min) + min;
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('BR Danmark Quantum Reality - Initializing...');
    
    // Initialize main reality system
    const brReality = new BRProjectQuantumReality();
    
    // Add to global scope for debugging
    window.BRReality = brReality;
    window.BRUtils = BRUtils;
    
    console.log('BR Danmark Quantum Reality - Fully activated!');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause intensive animations when tab is hidden
        document.body.classList.add('tab-hidden');
    } else {
        document.body.classList.remove('tab-hidden');
    }
});

// Preload images for better performance
const preloadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
};

// Initialize image preloading
document.addEventListener('DOMContentLoaded', preloadImages);

// CSS Custom Properties for animations
document.documentElement.style.setProperty('--br-primary', '#FF4A6B');
document.documentElement.style.setProperty('--br-accent', '#FF7676');
document.documentElement.style.setProperty('--quantum-black', '#000000');

// Add initial animation styles to elements
const addInitialStyles = () => {
    const animatedElements = document.querySelectorAll(
        '.section-disruptor, .quantum-description, .principle-node, .gallery-portal'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
};

document.addEventListener('DOMContentLoaded', addInitialStyles);
