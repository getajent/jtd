// GhostTasks Project - Quantum Reality Script

class GhostTasksQuantumReality {
    constructor() {
        this.currentReality = 'ghosttasks';
        this.isActive = false;
        this.quantumState = 'invisible';
        this.init();
    }

    init() {
        this.activateReality();
        this.setupLightbox();
        this.setupPortalEffects();
        this.setupParticleSystem();
        this.setupSmoothScrolling();
        this.setupRealityEntrance();
        this.setupValueAnimations();
        this.setupTypographyDemo();
    }

    // Activate Reality System
    activateReality() {
        this.isActive = true;
        console.log('GhostTasks Quantum Reality activated');
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
        const galleryPortals = document.querySelectorAll('.gallery-portal[data-src], .animation-showcase img, .application-image');
        const lightboxOverlay = document.querySelector('.lightbox-overlay');
        const lightboxImage = document.querySelector('.lightbox-image');
        const lightboxClose = document.querySelector('.lightbox-close');

        if (!lightboxOverlay || !lightboxImage || !lightboxClose) return;

        galleryPortals.forEach(portal => {
            portal.addEventListener('click', (e) => {
                e.preventDefault();
                const imageSrc = portal.dataset.src || portal.src;
                if (imageSrc) {
                    lightboxImage.src = imageSrc;
                    lightboxImage.alt = portal.alt || 'GhostTasks Project Image';
                    lightboxOverlay.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Close lightbox
        const closeLightbox = () => {
            lightboxOverlay.classList.remove('active');
            document.body.style.overflow = '';
            setTimeout(() => {
                lightboxImage.src = '';
            }, 300);
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
        const portalElements = document.querySelectorAll('.principle-node, .value-quantum, .application-item, .nav-portal');
        
        portalElements.forEach(portal => {
            portal.addEventListener('mouseenter', () => {
                this.activatePortal(portal);
            });
            
            portal.addEventListener('mouseleave', () => {
                this.deactivatePortal(portal);
            });
        });
    }

    activatePortal(portal) {
        portal.style.transform = 'translateY(-5px) scale(1.02)';
        portal.style.transition = 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)';
        
        // Add glow effect
        const glowIntensity = this.quantumState === 'invisible' ? '0 10px 30px rgba(119, 141, 169, 0.4)' : '0 10px 30px rgba(119, 141, 169, 0.2)';
        portal.style.boxShadow = glowIntensity;
    }

    deactivatePortal(portal) {
        portal.style.transform = 'translateY(0) scale(1)';
        portal.style.boxShadow = 'none';
    }

    // Particle System
    setupParticleSystem() {
        const particleUniverse = document.querySelector('.particle-universe');
        if (!particleUniverse) return;

        // Generate additional particles
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.setProperty('--delay', `${Math.random() * 10}s`);
            particle.style.setProperty('--duration', `${8 + Math.random() * 4}s`);
            particle.style.left = `${Math.random() * 100}%`;
            // GhostTasks colors: Spectral Blue, Shadow Blue, Phantom White
            particle.style.background = i % 3 === 0 ? '#778DA9' : i % 3 === 1 ? '#415A77' : '#E0E1DD';
            particleUniverse.appendChild(particle);
        }

        // Pulse effect
        setInterval(() => {
            if (this.isActive) {
                this.triggerScalingPulse();
            }
        }, 8000);
    }

    triggerScalingPulse() {
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            setTimeout(() => {
                particle.style.animation = 'none';
                particle.offsetHeight; // Trigger reflow
                particle.style.animation = `float ${8 + Math.random() * 4}s linear infinite`;
            }, index * 100);
        });
    }

    // Smooth Scrolling
    setupSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    // Reality Entrance
    setupRealityEntrance() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reality-active');
                    this.animateSection(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    animateSection(section) {
        const elements = section.querySelectorAll('.section-disruptor, .quantum-description, .principle-node, .value-quantum, .typeface-display, .application-item');
        
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            }, index * 100);
        });

        // Set initial state
        elements.forEach(element => {
            if (!element.style.opacity) {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
            }
        });
    }

    // Value Animations
    setupValueAnimations() {
        const valueElements = document.querySelectorAll('.value-quantum');
        
        valueElements.forEach(value => {
            value.addEventListener('mouseenter', () => {
                const symbol = value.querySelector('.value-symbol');
                if (symbol) {
                    symbol.style.transform = 'scale(1.2) rotate(10deg)';
                    symbol.style.transition = 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)';
                }
            });
            
            value.addEventListener('mouseleave', () => {
                const symbol = value.querySelector('.value-symbol');
                if (symbol) {
                    symbol.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        });
    }

    // Typography Demo
    setupTypographyDemo() {
        const weightSamples = document.querySelectorAll('.weight-sample');
        
        weightSamples.forEach(sample => {
            sample.addEventListener('mouseenter', () => {
                const example = sample.querySelector('.weight-example');
                if (example) {
                    example.style.color = '#E0E1DD'; // Phantom White
                    example.style.transform = 'scale(1.05)';
                    example.style.transition = 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)';
                }
            });
            
            sample.addEventListener('mouseleave', () => {
                const example = sample.querySelector('.weight-example');
                if (example) {
                    example.style.color = '#ffffff';
                    example.style.transform = 'scale(1)';
                }
            });
        });
    }

    // Performance Optimization
    throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Cleanup
    destroy() {
        this.isActive = false;
        console.log('GhostTasks Quantum Reality deactivated');
    }
}

// Initialize Reality System
document.addEventListener('DOMContentLoaded', () => {
    const ghostTasksReality = new GhostTasksQuantumReality();
    
    // Expose to global scope for debugging
    window.GhostTasksReality = ghostTasksReality;
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
    if (window.GhostTasksReality) {
        if (document.hidden) {
            window.GhostTasksReality.isActive = false;
        } else {
            window.GhostTasksReality.isActive = true;
        }
    }
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GhostTasksQuantumReality;
}
