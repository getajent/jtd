// Sol og Strand Project - Quantum Reality Script

class SolOgStrandQuantumReality {
    constructor() {
        this.currentReality = 'sos';
        this.isActive = false;
        this.quantumState = 'holiday';
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
        console.log('Sol og Strand Quantum Reality activated');
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
        portal.style.boxShadow = '0 20px 40px rgba(255,193,7,0.2)';
        
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
        const sections = document.querySelectorAll('.project-overview, .project-gallery, .values-showcase, .navigation-matrix');
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    animateSection(section) {
        const elements = section.querySelectorAll('.section-disruptor, .quantum-description, .principle-node, .gallery-portal, .value-quantum, .nav-portal');
        
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

    // Particle System Enhancement
    setupParticleSystem() {
        const particles = document.querySelectorAll('.particle');
        
        particles.forEach((particle, index) => {
            // Randomize particle positions
            const randomLeft = Math.random() * 100;
            const randomDelay = Math.random() * 5;
            const randomDuration = 6 + Math.random() * 4;
            
            particle.style.left = `${randomLeft}%`;
            particle.style.animationDelay = `${randomDelay}s`;
            particle.style.animationDuration = `${randomDuration}s`;
            
            // Add some variety to particle sizes
            if (Math.random() > 0.7) {
                particle.style.width = '3px';
                particle.style.height = '3px';
                particle.style.opacity = '0.8';
            }
        });
    }

    // Value Icon Animation
    setupValueIcons() {
        const valueQuantums = document.querySelectorAll('.value-quantum');
        
        valueQuantums.forEach(value => {
            const icon = value.querySelector('.value-icon');
            
            value.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.1) rotateY(15deg)';
                icon.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
            });
            
            value.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1) rotateY(0deg)';
            });
        });
    }

    // Utility method for creating quantum effects
    createQuantumEffect(element, options = {}) {
        const defaults = {
            duration: 0.6,
            delay: 0,
            ease: 'cubic-bezier(0.23, 1, 0.32, 1)',
            transform: 'translateY(0) scale(1)',
            opacity: 1
        };
        
        const config = { ...defaults, ...options };
        
        setTimeout(() => {
            element.style.opacity = config.opacity;
            element.style.transform = config.transform;
            element.style.transition = `all ${config.duration}s ${config.ease}`;
        }, config.delay * 1000);
    }
}

// Navigation Enhancement
class QuantumNavigation {
    constructor() {
        this.setupNavEffects();
    }

    setupNavEffects() {
        const navLinks = document.querySelectorAll('.nav-link');
        const navPortals = document.querySelectorAll('.nav-portal');
        
        // Nav link hover effects
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-2px)';
                link.style.color = 'var(--sos-primary)';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0)';
                link.style.color = 'var(--reality-white)';
            });
        });

        // Portal navigation effects
        navPortals.forEach(portal => {
            portal.addEventListener('mouseenter', () => {
                portal.style.transform = 'translateY(-2px)';
                portal.style.borderColor = 'var(--sos-primary)';
            });
            
            portal.addEventListener('mouseleave', () => {
                portal.style.transform = 'translateY(0)';
                portal.style.borderColor = 'rgba(255,193,7,0.3)';
            });
        });
    }
}

// Performance Optimization
const optimizePerformance = () => {
    // Throttle scroll events
    let ticking = false;
    
    const updateScrollEffects = () => {
        const scrollY = window.scrollY;
        const particles = document.querySelectorAll('.particle');
        
        // Subtle parallax effect for particles
        particles.forEach((particle, index) => {
            const speed = 0.1 + (index * 0.02);
            particle.style.transform = `translateY(${scrollY * speed}px)`;
        });
        
        ticking = false;
    };
    
    const onScroll = () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Sol og Strand Quantum Reality - Initializing...');
    
    // Initialize main reality system
    const sosReality = new SolOgStrandQuantumReality();
    
    // Setup value icons after reality is initialized
    sosReality.setupValueIcons();
    
    // Initialize navigation
    new QuantumNavigation();
    
    // Setup performance optimizations
    optimizePerformance();
    
    console.log('Sol og Strand Quantum Reality - Fully activated!');
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when tab is not visible
        const particles = document.querySelectorAll('.particle');
        
        particles.forEach(particle => {
            particle.style.animationPlayState = 'paused';
        });
    } else {
        // Resume animations when tab becomes visible
        const particles = document.querySelectorAll('.particle');
        
        particles.forEach(particle => {
            particle.style.animationPlayState = 'running';
        });
    }
});

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SolOgStrandQuantumReality, QuantumNavigation };
}
