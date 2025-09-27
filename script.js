// REVOLUTIONARY GRAPHIC DESIGN PORTFOLIO
// Truly innovative interactions - No conventional patterns
// Optimized performance - No laggy cursor

class QuantumPortfolioReality {
    constructor() {
        this.currentReality = 'identity';
        this.isActive = false;
        this.quantumState = 'creating';
        this.init();
    }

    init() {
        this.activateReality();
        this.setupTimeReality();
        this.setupQuantumNavigation();
        this.setupDimensionGrid();
        this.setupRealityForm();
        this.setupQuantumObserver();
        this.setupFullscreenVideo();
    }

    // Activate Reality System
    activateReality() {
        this.isActive = true;
        this.updateQuantumState();
        this.triggerRealityEntrance();
    }

    updateQuantumState() {
        const states = ['CREATING', 'INNOVATING', 'DESIGNING', 'EVOLVING'];
        const realityElement = document.querySelector('.reality-state');
        
        if (realityElement) {
            let index = 0;
            setInterval(() => {
                realityElement.textContent = states[index];
                index = (index + 1) % states.length;
            }, 3000);
        }
    }

    triggerRealityEntrance() {
        // Animate identity fragments
        const nameLayers = document.querySelectorAll('.name-layer');
        const manifestoFragments = document.querySelectorAll('.manifesto-fragment');
        const metricClusters = document.querySelectorAll('.metric-cluster');

        // Staggered name animation
        nameLayers.forEach((layer, index) => {
            setTimeout(() => {
                layer.style.opacity = '1';
                layer.style.transform = 'translateY(0) translateX(0)';
            }, index * 200);
        });

        // Manifesto reveal
        setTimeout(() => {
            manifestoFragments.forEach((fragment, index) => {
                setTimeout(() => {
                    fragment.style.opacity = '1';
                    fragment.style.transform = 'translateY(0)';
                }, index * 150);
            });
        }, 600);

        // Metrics activation
        setTimeout(() => {
            metricClusters.forEach((cluster, index) => {
                setTimeout(() => {
                    cluster.style.opacity = '1';
                    cluster.style.transform = 'scale(1) translateY(0)';
                }, index * 100);
            });
        }, 1000);
    }

    // Time Reality Display
    setupTimeReality() {
        const timeElement = document.querySelector('.current-time');
        
        if (timeElement) {
            const updateTime = () => {
                const now = new Date();
                const timeString = now.toLocaleTimeString('en-US', {
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });
                timeElement.textContent = timeString;
            };
            
            updateTime();
            setInterval(updateTime, 1000);
        }
    }

    // Quantum Navigation System
    setupQuantumNavigation() {
        const navPoints = document.querySelectorAll('.nav-point');
        
        navPoints.forEach(point => {
            point.addEventListener('click', () => {
                const target = point.getAttribute('data-target');
                this.navigateToReality(target);
                this.activateNavPoint(point);
            });
        });
    }

    navigateToReality(targetReality) {
        const targetSection = document.getElementById(targetReality);
            
            if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            this.currentReality = targetReality;
        }
    }

    activateNavPoint(activePoint) {
        const allPoints = document.querySelectorAll('.nav-point');
        allPoints.forEach(point => point.classList.remove('active'));
        activePoint.classList.add('active');
    }

    // Dimension Grid System
    setupDimensionGrid() {
        const projectPortals = document.querySelectorAll('.project-portal');
        const filterQuantums = document.querySelectorAll('.filter-quantum');
        
        // Portal interactions
        projectPortals.forEach(portal => {
            this.setupPortalEffects(portal);
        });
        
        // Filter system
        filterQuantums.forEach(filter => {
            filter.addEventListener('click', () => {
                const filterValue = filter.getAttribute('data-filter');
                this.filterPortals(filterValue);
                this.updateActiveFilter(filter);
        });
    });

        this.setupPortalEntrance();
    }

    setupPortalEffects(portal) {
        portal.addEventListener('mouseenter', () => {
            this.activatePortal(portal);
        });
        
        portal.addEventListener('mouseleave', () => {
            this.deactivatePortal(portal);
        });
    }

    activatePortal(portal) {
        const portalImage = portal.querySelector('.portal-image');
        
        portal.style.transform = 'scale(1.02)';
        portal.style.zIndex = '10';
        
        if (portalImage) {
            portalImage.style.transform = 'scale(1.1)';
            portalImage.style.filter = 'grayscale(0%)';
        }
    }

    deactivatePortal(portal) {
        const portalImage = portal.querySelector('.portal-image');
        
        portal.style.transform = 'scale(1)';
        portal.style.zIndex = '1';
        
        if (portalImage) {
            portalImage.style.transform = 'scale(1)';
            portalImage.style.filter = 'grayscale(100%)';
        }
    }

    filterPortals(filterValue) {
        const portals = document.querySelectorAll('.project-portal');
        
        portals.forEach(portal => {
            const categories = portal.getAttribute('data-category');
            const isAnimated = portal.dataset.animated === 'true';
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                // Show portal
                portal.style.opacity = '1';
                if (isAnimated) {
                    portal.style.transform = 'translateY(0) scale(1)';
                } else {
                    portal.style.transform = 'translateY(50px) scale(0.9)';
                }
                portal.dataset.filtered = 'false';
            } else {
                // Hide portal with filter effect
                portal.style.opacity = '0.3';
                if (isAnimated) {
                    portal.style.transform = 'translateY(0) scale(0.9)';
                } else {
                    portal.style.transform = 'translateY(50px) scale(0.8)';
                }
                portal.dataset.filtered = 'true';
                        }
                    });
                }

    updateActiveFilter(activeFilter) {
        const allFilters = document.querySelectorAll('.filter-quantum');
        allFilters.forEach(filter => filter.classList.remove('active'));
        activeFilter.classList.add('active');
    }

    setupPortalEntrance() {
        const portals = document.querySelectorAll('.project-portal');
        
        // Initial state
        portals.forEach(portal => {
            portal.style.opacity = '0';
            portal.style.transform = 'translateY(50px) scale(0.9)';
            portal.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            portal.dataset.animated = 'false';
            portal.dataset.filtered = 'false';
        });
        
        // Intersection observer for staggered entrance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting && entry.target.dataset.animated === 'false') {
                    setTimeout(() => {
                        // Check if portal is currently filtered out
                        const isFiltered = entry.target.dataset.filtered === 'true';
                        
                        if (!isFiltered) {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0) scale(1)';
                        } else {
                            entry.target.style.opacity = '0.3';
                            entry.target.style.transform = 'translateY(0) scale(0.9)';
                        }
                        entry.target.dataset.animated = 'true';
                    }, index * 100);
                }
            });
        }, { threshold: 0.2 });
        
        portals.forEach(portal => {
            observer.observe(portal);
        });
    }

    // Reality Form System
    setupRealityForm() {
        const form = document.querySelector('.reality-form');
        const inputs = document.querySelectorAll('.quantum-input, .quantum-textarea');
        
        if (!form) return;
        
        // Enhanced input interactions
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.style.borderColor = '#ffff00';
                input.style.boxShadow = '0 0 0 2px rgba(255,255,0,0.2)';
                input.style.transform = 'translateY(-2px)';
            });
            
            input.addEventListener('blur', () => {
                input.style.borderColor = '#ffffff';
                input.style.boxShadow = 'none';
                input.style.transform = 'translateY(0)';
        });
    });

        // Form submission
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.transmitReality(form);
        });
    }

    async transmitReality(form) {
        const transmitButton = form.querySelector('.reality-transmit');
        const originalText = transmitButton.innerHTML;
        
        // Quantum transmission sequence
        transmitButton.innerHTML = '<span class="transmit-text">TRANSMITTING...</span>';
        transmitButton.style.background = '#000000';
        transmitButton.style.color = '#ffff00';
        transmitButton.disabled = true;
        
        try {
            // Initialize EmailJS
            emailjs.init("i6t177iyN174EUGeO"); // Replace with your EmailJS public key from Account > General
            
            // Prepare form data
            const formData = {
                from_name: form.querySelector('input[name="name"]').value,
                from_email: form.querySelector('input[name="email"]').value,
                subject: form.querySelector('input[name="subject"]').value,
                message: form.querySelector('textarea[name="message"]').value,
                to_email: 'jevgenidesign@gmail.com'
            };
            
            // Send email using EmailJS
            const result = await emailjs.send(
                'service_1xlknos', // Your EmailJS service ID
                'template_cqx98da', // Replace with your actual template ID
                formData
            );
            
            console.log('Email sent successfully:', result);
            
            // Success animation
            transmitButton.innerHTML = '<span class="transmit-text">REALITY TRANSMITTED!</span>';
            transmitButton.style.background = '#ffff00';
            transmitButton.style.color = '#000000';
            
            setTimeout(() => {
                form.reset();
                transmitButton.innerHTML = originalText;
                transmitButton.style.background = '#ffff00';
                transmitButton.style.color = '#000000';
                transmitButton.disabled = false;
            }, 2000);
            
        } catch (error) {
            console.error('Email transmission failed:', error);
            
            // Error animation
            transmitButton.innerHTML = '<span class="transmit-text">TRANSMISSION FAILED</span>';
            transmitButton.style.background = '#ff0000';
            transmitButton.style.color = '#ffffff';
            
            setTimeout(() => {
                transmitButton.innerHTML = originalText;
                transmitButton.style.background = '#ffff00';
                transmitButton.style.color = '#000000';
                transmitButton.disabled = false;
            }, 3000);
        }
    }

    // Quantum Observer System
    setupQuantumObserver() {
        const sections = document.querySelectorAll('section');
    const observerOptions = {
            threshold: 0.4,
            rootMargin: '0px 0px -100px 0px'
    };

        const quantumObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                    this.activateQuantumSection(entry.target);
            }
        });
    }, observerOptions);

        sections.forEach(section => {
            quantumObserver.observe(section);
        });
    }

    activateQuantumSection(section) {
        const quantumElements = section.querySelectorAll('.philosophy-node, .method-quantum');
        
        quantumElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
            }, index * 50);
        });
    }

    // Fullscreen Video System
    setupFullscreenVideo() {
        const motionReel = document.getElementById('motion-reel');
        const showcaseFrame = document.querySelector('.showcase-frame');
        
        if (!motionReel || !showcaseFrame) return;
        
        // Create fullscreen overlay
        this.createFullscreenOverlay();
        
        // Add click handler
        showcaseFrame.addEventListener('click', () => {
            this.openFullscreenVideo();
        });
    }

    createFullscreenOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'fullscreen-video-overlay';
        overlay.innerHTML = `
            <div class="fullscreen-video-container">
                <div class="escape-hint">Press ESC to exit fullscreen</div>
                <video id="fullscreen-video" class="fullscreen-video" controls>
                    <source src="Portfoliopromo.mp4" type="video/mp4">
                </video>
                <div class="fullscreen-info">MOTION REEL — JEVGENI TUPITSON</div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        this.setupFullscreenControls(overlay);
    }

    openFullscreenVideo() {
        const overlay = document.querySelector('.fullscreen-video-overlay');
        const fullscreenVideo = document.getElementById('fullscreen-video');
        const originalVideo = document.getElementById('motion-reel');
        
        if (!overlay || !fullscreenVideo || !originalVideo) return;
        
        // Show overlay
        overlay.classList.add('active');
        
        // Sync video time and play with sound
        fullscreenVideo.currentTime = originalVideo.currentTime;
        fullscreenVideo.muted = false;
        fullscreenVideo.play();
        
        // Pause original video
        originalVideo.pause();
        
        // Lock body scroll
        document.body.style.overflow = 'hidden';
        
        // Create entrance effect
        this.createFullscreenEntrance();
    }

    setupFullscreenControls(overlay) {
        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.classList.contains('active')) {
                this.closeFullscreenVideo();
            }
        });
        
        // Click outside video to close
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.closeFullscreenVideo();
            }
        });
    }

    closeFullscreenVideo() {
        const overlay = document.querySelector('.fullscreen-video-overlay');
        const fullscreenVideo = document.getElementById('fullscreen-video');
        const originalVideo = document.getElementById('motion-reel');
        
        if (!overlay || !fullscreenVideo || !originalVideo) return;
        
        // Hide overlay
        overlay.classList.remove('active');
        
        // Sync back to original video and resume
        originalVideo.currentTime = fullscreenVideo.currentTime;
        originalVideo.play();
        
        // Pause fullscreen video
        fullscreenVideo.pause();
        
        // Unlock body scroll
        document.body.style.overflow = '';
        
        // Create exit effect
        this.createFullscreenExit();
    }

    createFullscreenEntrance() {
        const container = document.querySelector('.fullscreen-video-container');
        
        if (container) {
            container.style.transform = 'scale(0.8) translateY(50px)';
            container.style.opacity = '0';
            
            setTimeout(() => {
                container.style.transform = 'scale(1) translateY(0)';
                container.style.opacity = '1';
                container.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            }, 100);
        }
    }

    createFullscreenExit() {
        const container = document.querySelector('.fullscreen-video-container');
        
        if (container) {
            container.style.transform = 'scale(0.9) translateY(20px)';
            container.style.opacity = '0';
            container.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
        }
    }
}

// Initialize Reality System
document.addEventListener('DOMContentLoaded', () => {
    // Initial element setup
    const nameLayers = document.querySelectorAll('.name-layer');
    const manifestoFragments = document.querySelectorAll('.manifesto-fragment');
    const metricClusters = document.querySelectorAll('.metric-cluster');
    
    // Set initial states
    nameLayers.forEach(layer => {
        layer.style.opacity = '0';
        layer.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    });
    
    manifestoFragments.forEach(fragment => {
        fragment.style.opacity = '0';
        fragment.style.transform = 'translateY(30px)';
        fragment.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    });
    
    metricClusters.forEach(cluster => {
        cluster.style.opacity = '0';
        cluster.style.transform = 'scale(0.8) translateY(20px)';
        cluster.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });
    
    // Initialize the quantum portfolio reality
    new QuantumPortfolioReality();
});

// Performance optimizations
window.addEventListener('load', () => {
    // Defer heavy work to keep first load snappy
});

// Accessibility support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeElements = document.querySelectorAll('.active');
        activeElements.forEach(el => el.classList.remove('active'));
    }
});

// Reduced motion support
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}