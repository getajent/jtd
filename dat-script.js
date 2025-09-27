// DAT Project - Quantum Reality System
class DATProjectSystem {
    constructor() {
        this.init();
    }

    init() {
        this.setupGalleryInteractions();
        this.setupScrollAnimations();
        this.setupParticleSystem();
        this.setupQuantumNavigation();
    }

    
    // Lightbox controls (same behavior as IMAGOGAMES)
    openLightbox(src, altText = '') {
        const overlay = document.querySelector('.lightbox-overlay');
        const img = document.querySelector('.lightbox-image');
        if (!overlay || !img) return;

        img.src = src;
        img.alt = altText;
        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        const onKey = (ev) => {
            if (ev.key === 'Escape') {
                this.closeLightbox();
            }
        };
        this._lightboxKeyHandler = onKey;
        document.addEventListener('keydown', onKey);

        // Close on click outside image
        overlay.addEventListener('click', (ev) => {
            if (ev.target === overlay) this.closeLightbox();
        }, { once: true });

        const closeBtn = document.querySelector('.lightbox-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeLightbox(), { once: true });
        }
    }

    closeLightbox() {
        const overlay = document.querySelector('.lightbox-overlay');
        const img = document.querySelector('.lightbox-image');
        if (!overlay || !img) return;

        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
        img.removeAttribute('src');
        img.removeAttribute('alt');
        document.body.style.overflow = '';

        if (this._lightboxKeyHandler) {
            document.removeEventListener('keydown', this._lightboxKeyHandler);
            this._lightboxKeyHandler = null;
        }
    }

    // Gallery Interactions
    setupGalleryInteractions() {
        const galleryPortals = document.querySelectorAll('.gallery-portal');

        galleryPortals.forEach(portal => {
            // Hover effects
            portal.addEventListener('mouseenter', () => {
                this.createHoverEffect(portal);
            });

            // Enhanced cursor interaction
            portal.addEventListener('mousemove', (e) => {
                const rect = portal.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                const image = portal.querySelector('.portal-image');
                image.style.transform = `scale(1.1) translate(${(x - 50) * 0.1}px, ${(y - 50) * 0.1}px)`;
            });

            portal.addEventListener('mouseleave', () => {
                const image = portal.querySelector('.portal-image');
                image.style.transform = 'scale(1)';
            });

            // Open lightbox on click
            portal.addEventListener('click', () => {
                const targetImage = portal.querySelector('.portal-image');
                if (!targetImage) return;
                this.openLightbox(targetImage.getAttribute('src'), targetImage.getAttribute('alt'));
            });
        });
    }

    createHoverEffect(portal) {
        // Create quantum particle effect on hover
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '4px';
                particle.style.height = '4px';
                particle.style.background = '#FF4A6B';
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '1000';
                
                const rect = portal.getBoundingClientRect();
                particle.style.left = `${rect.left + Math.random() * rect.width}px`;
                particle.style.top = `${rect.top + Math.random() * rect.height}px`;
                
                document.body.appendChild(particle);
                
                // Animate particle
                particle.animate([
                    { transform: 'translateY(0) scale(1)', opacity: 1 },
                    { transform: 'translateY(-50px) scale(0)', opacity: 0 }
                ], {
                    duration: 1000,
                    easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
                }).onfinish = () => {
                    document.body.removeChild(particle);
                };
            }, i * 100);
        }
    }

    // Scroll Animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.principle-node, .gallery-portal, .nav-portal');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            observer.observe(el);
        });
    }

    animateElement(element) {
        element.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }

    // Particle System
    setupParticleSystem() {
        const particleUniverse = document.querySelector('.particle-universe');
        
        // Add more dynamic particles
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.setProperty('--delay', `${Math.random() * 5}s`);
                particle.style.setProperty('--duration', `${5 + Math.random() * 10}s`);
                particle.style.left = `${Math.random() * 100}%`;
                
                // Random particle sizes
                const size = 1 + Math.random() * 3;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                particleUniverse.appendChild(particle);
            }, i * 200);
        }
    }

    // Quantum Navigation
    setupQuantumNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                this.createNavEffect(link);
            });
        });

        // Smooth scroll for anchor links
        const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
        smoothScrollLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    createNavEffect(link) {
        // Create quantum ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.width = '4px';
        ripple.style.height = '4px';
        ripple.style.background = '#FFFF00';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.zIndex = '1001';
        
        const rect = link.getBoundingClientRect();
        ripple.style.left = `${rect.left + rect.width / 2}px`;
        ripple.style.top = `${rect.top + rect.height / 2}px`;
        
        document.body.appendChild(ripple);
        
        ripple.animate([
            { transform: 'scale(1)', opacity: 1 },
            { transform: 'scale(20)', opacity: 0 }
        ], {
            duration: 600,
            easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
        }).onfinish = () => {
            document.body.removeChild(ripple);
        };
    }

    // Quantum Time Display
    updateQuantumTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        // Update time display if element exists
        const timeDisplay = document.querySelector('.quantum-time');
        if (timeDisplay) {
            timeDisplay.textContent = timeString;
        }
    }

    // Enhanced page interactions
    setupEnhancedInteractions() {
        // Add subtle parallax to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.project-hero');
            
            if (hero) {
                hero.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
        });

        // Add mouse trail effect
        let mouseTrail = [];
        document.addEventListener('mousemove', (e) => {
            mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
            
            // Keep only recent trail points
            mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 500);
            
            // Create trail particles occasionally
            if (Math.random() < 0.1) {
                this.createTrailParticle(e.clientX, e.clientY);
            }
        });
    }

    createTrailParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = '#FF4A6B';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '999';
        
        document.body.appendChild(particle);
        
        particle.animate([
            { transform: 'scale(1)', opacity: 0.8 },
            { transform: 'scale(0)', opacity: 0 }
        ], {
            duration: 500,
            easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
        }).onfinish = () => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        };
    }
}

// Initialize the DAT Project System
document.addEventListener('DOMContentLoaded', () => {
    new DATProjectSystem();
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
