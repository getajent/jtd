// Imago Games Project - Quantum Reality System
class ImagoGamesSystem {
    constructor() {
        this.init();
    }

    init() {
        this.setupGalleryInteractions();
        this.setupScrollAnimations();
        this.setupParticleSystem();
        this.setupQuantumNavigation();
        this.setupGamingEffects();
    }


    // Gallery Interactions
    setupGalleryInteractions() {
        const galleryPortals = document.querySelectorAll('.gallery-portal');

        galleryPortals.forEach(portal => {
            // Gaming hover effects
            portal.addEventListener('mouseenter', () => {
                this.createGamingHoverEffect(portal);
            });

            // Enhanced cursor interaction with gaming feel
            portal.addEventListener('mousemove', (e) => {
                const rect = portal.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                const image = portal.querySelector('.portal-image');
                image.style.transform = `scale(1.1) translate(${(x - 50) * 0.15}px, ${(y - 50) * 0.15}px)`;
                
                // Gaming glow effect
                portal.style.boxShadow = `0 0 20px rgba(0,255,136,0.5)`;
            });

            portal.addEventListener('mouseleave', () => {
                const image = portal.querySelector('.portal-image');
                image.style.transform = 'scale(1)';
                portal.style.boxShadow = 'none';
            });

            // Open lightbox on click
            portal.addEventListener('click', (e) => {
                const targetImage = portal.querySelector('.portal-image');
                if (!targetImage) return;
                this.openLightbox(targetImage.getAttribute('src'), targetImage.getAttribute('alt'));
            });
        });
    }

    createGamingHoverEffect(portal) {
        // Create gaming-style particle burst
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '6px';
                particle.style.height = '6px';
                particle.style.background = '#00FF88';
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '1000';
                particle.style.boxShadow = '0 0 10px #00FF88';
                
                const rect = portal.getBoundingClientRect();
                particle.style.left = `${rect.left + Math.random() * rect.width}px`;
                particle.style.top = `${rect.top + Math.random() * rect.height}px`;
                
                document.body.appendChild(particle);
                
                // Gaming particle animation
                particle.animate([
                    { 
                        transform: 'translateY(0) scale(1)', 
                        opacity: 1,
                        boxShadow: '0 0 10px #00FF88'
                    },
                    { 
                        transform: 'translateY(-80px) scale(0)', 
                        opacity: 0,
                        boxShadow: '0 0 30px #00FF88'
                    }
                ], {
                    duration: 1200,
                    easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
                }).onfinish = () => {
                    document.body.removeChild(particle);
                };
            }, i * 150);
        }
    }

    // Lightbox controls
    openLightbox(src, altText = '') {
        const overlay = document.querySelector('.lightbox-overlay');
        const img = document.querySelector('.lightbox-image');
        if (!overlay || !img) return;

        img.src = src;
        img.alt = altText;
        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');

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

        if (this._lightboxKeyHandler) {
            document.removeEventListener('keydown', this._lightboxKeyHandler);
            this._lightboxKeyHandler = null;
        }
    }

    // Gaming-specific effects
    setupGamingEffects() {
        // Create periodic "system scan" effect
        setInterval(() => {
            this.createSystemScan();
        }, 8000);

        // Gaming UI sounds simulation (visual feedback)
        const interactiveElements = document.querySelectorAll('.nav-link, .nav-portal, .gallery-portal');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.createUIFeedback(element);
            });
        });
    }

    createSystemScan() {
        const scanLine = document.createElement('div');
        scanLine.style.position = 'fixed';
        scanLine.style.top = '0';
        scanLine.style.left = '0';
        scanLine.style.width = '100%';
        scanLine.style.height = '2px';
        scanLine.style.background = 'linear-gradient(90deg, transparent, #00FF88, transparent)';
        scanLine.style.zIndex = '999';
        scanLine.style.pointerEvents = 'none';
        
        document.body.appendChild(scanLine);
        
        scanLine.animate([
            { transform: 'translateY(0)', opacity: 0.8 },
            { transform: 'translateY(100vh)', opacity: 0 }
        ], {
            duration: 3000,
            easing: 'linear'
        }).onfinish = () => {
            document.body.removeChild(scanLine);
        };
    }

    createUIFeedback(element) {
        const feedback = document.createElement('div');
        feedback.style.position = 'absolute';
        feedback.style.width = '4px';
        feedback.style.height = '4px';
        feedback.style.background = '#00FF88';
        feedback.style.borderRadius = '50%';
        feedback.style.pointerEvents = 'none';
        feedback.style.zIndex = '1001';
        feedback.style.boxShadow = '0 0 15px #00FF88';
        
        const rect = element.getBoundingClientRect();
        feedback.style.left = `${rect.right - 5}px`;
        feedback.style.top = `${rect.top + 5}px`;
        
        document.body.appendChild(feedback);
        
        feedback.animate([
            { transform: 'scale(1)', opacity: 1 },
            { transform: 'scale(3)', opacity: 0 }
        ], {
            duration: 400,
            easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
        }).onfinish = () => {
            document.body.removeChild(feedback);
        };
    }


    // Scroll Animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        this.animateElement(entry.target);
                    }, index * 100);
                }
            });
        }, observerOptions);

        // Observe elements for gaming-style animation
        const animateElements = document.querySelectorAll('.principle-node, .gallery-portal, .nav-portal');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px) rotateX(15deg)';
            observer.observe(el);
        });
    }

    animateElement(element) {
        element.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0) rotateX(0deg)';
        
        // Add gaming glow on entrance
        setTimeout(() => {
            element.style.boxShadow = '0 0 20px rgba(0,255,136,0.3)';
            setTimeout(() => {
                element.style.boxShadow = 'none';
                element.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
            }, 500);
        }, 300);
    }

    // Enhanced Particle System
    setupParticleSystem() {
        const particleUniverse = document.querySelector('.particle-universe');
        
        // Gaming-style particles
        for (let i = 0; i < 25; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.setProperty('--delay', `${Math.random() * 8}s`);
                particle.style.setProperty('--duration', `${6 + Math.random() * 12}s`);
                particle.style.left = `${Math.random() * 100}%`;
                
                // Random gaming particle effects
                const effects = ['pulse', 'glow', 'normal'];
                const effect = effects[Math.floor(Math.random() * effects.length)];
                
                if (effect === 'pulse') {
                    particle.style.animation += ', gaming-pulse 2s ease-in-out infinite';
                } else if (effect === 'glow') {
                    particle.style.boxShadow = '0 0 10px #00FF88';
                }
                
                const size = 2 + Math.random() * 4;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                particleUniverse.appendChild(particle);
            }, i * 300);
        }
        
        // Add gaming pulse animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes gaming-pulse {
                0%, 100% { transform: scale(1); opacity: 0.6; }
                50% { transform: scale(1.5); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    // Quantum Navigation
    setupQuantumNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                this.createGamingNavEffect(link);
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

    createGamingNavEffect(link) {
        // Gaming-style navigation effect
        const effect = document.createElement('div');
        effect.style.position = 'absolute';
        effect.style.width = '8px';
        effect.style.height = '8px';
        effect.style.background = '#00FF88';
        effect.style.borderRadius = '50%';
        effect.style.pointerEvents = 'none';
        effect.style.zIndex = '1001';
        effect.style.boxShadow = '0 0 20px #00FF88';
        
        const rect = link.getBoundingClientRect();
        effect.style.left = `${rect.left + rect.width / 2}px`;
        effect.style.top = `${rect.top + rect.height / 2}px`;
        
        document.body.appendChild(effect);
        
        effect.animate([
            { 
                transform: 'scale(1) rotate(0deg)', 
                opacity: 1,
                boxShadow: '0 0 20px #00FF88'
            },
            { 
                transform: 'scale(30) rotate(360deg)', 
                opacity: 0,
                boxShadow: '0 0 50px #00FF88'
            }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
        }).onfinish = () => {
            document.body.removeChild(effect);
        };
    }

    // Gaming cursor trail
    setupGamingCursor() {
        let cursorTrail = [];
        
        document.addEventListener('mousemove', (e) => {
            cursorTrail.push({ 
                x: e.clientX, 
                y: e.clientY, 
                time: Date.now() 
            });
            
            // Keep only recent trail points
            cursorTrail = cursorTrail.filter(point => Date.now() - point.time < 800);
            
            // Create gaming trail particles
            if (Math.random() < 0.15) {
                this.createGamingTrailParticle(e.clientX, e.clientY);
            }
        });
    }

    createGamingTrailParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.width = '3px';
        particle.style.height = '3px';
        particle.style.background = '#00FF88';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '998';
        particle.style.boxShadow = '0 0 8px #00FF88';
        
        document.body.appendChild(particle);
        
        particle.animate([
            { 
                transform: 'scale(1)', 
                opacity: 0.8,
                boxShadow: '0 0 8px #00FF88'
            },
            { 
                transform: 'scale(0)', 
                opacity: 0,
                boxShadow: '0 0 20px #00FF88'
            }
        ], {
            duration: 600,
            easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
        }).onfinish = () => {
            if (document.body.contains(particle)) {
                document.body.removeChild(particle);
            }
        };
    }
}

// Initialize the Imago Games System
document.addEventListener('DOMContentLoaded', () => {
    const system = new ImagoGamesSystem();
    system.setupGamingCursor();
});

// Gaming page load effect
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.filter = 'hue-rotate(180deg)';
    document.body.style.transition = 'all 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.filter = 'hue-rotate(0deg)';
        // Clear filter after transition to avoid creating a containing block
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 900);
    }, 200);
});
