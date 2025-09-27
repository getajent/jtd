// Fakturify Project - Quantum Reality JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Lightbox functionality
    const galleryPortals = document.querySelectorAll('.gallery-portal[data-src]');
    const lightboxOverlay = document.querySelector('.lightbox-overlay');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxClose = document.querySelector('.lightbox-close');
    
    // Open lightbox
    galleryPortals.forEach(portal => {
        portal.addEventListener('click', function() {
            const imageSrc = this.getAttribute('data-src');
            const imageAlt = this.querySelector('.portal-image').alt;
            
            lightboxImage.src = imageSrc;
            lightboxImage.alt = imageAlt;
            lightboxOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    function closeLightbox() {
        lightboxOverlay.classList.remove('active');
        document.body.style.overflow = '';
        // Don't clear image src/alt to prevent "no image" issue when opening consecutive lightboxes
    }
    
    lightboxClose?.addEventListener('click', closeLightbox);
    
    lightboxOverlay?.addEventListener('click', function(e) {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });
    
    // ESC key to close lightbox
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Parallax effect for particles
    const particles = document.querySelectorAll('.particle');
    let ticking = false;
    
    function updateParticles() {
        const scrollY = window.pageYOffset;
        
        particles.forEach((particle, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrollY * speed);
            particle.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParticles);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.principle-node, .process-step, .feature-quantum, .system-component, .gallery-portal'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Random particle positioning
    particles.forEach(particle => {
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 10;
        const randomDuration = 8 + Math.random() * 4;
        
        particle.style.left = randomLeft + '%';
        particle.style.setProperty('--delay', randomDelay + 's');
        particle.style.setProperty('--duration', randomDuration + 's');
    });
    
    // Hover effects for gallery portals
    galleryPortals.forEach(portal => {
        portal.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        portal.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });
    
    // Add loading states for images
    const images = document.querySelectorAll('.portal-image, .showcase-image');
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.addEventListener('load', function() {
                this.style.transition = 'opacity 0.3s ease';
                this.style.opacity = '1';
            });
        }
    });
    
    // Keep consistent emerald color throughout the page
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Copy to clipboard functionality for color swatches
    const colorSwatches = document.querySelectorAll('.color-swatch');
    colorSwatches.forEach(swatch => {
        swatch.addEventListener('click', function() {
            const color = window.getComputedStyle(this).backgroundColor;
            
            // Convert RGB to HEX
            const rgb = color.match(/\d+/g);
            const hex = '#' + rgb.map(x => {
                const hex = parseInt(x).toString(16);
                return hex.length === 1 ? '0' + hex : hex;
            }).join('');
            
            navigator.clipboard.writeText(hex).then(() => {
                // Show temporary feedback
                const originalTitle = this.title;
                this.title = 'Copied: ' + hex;
                setTimeout(() => {
                    this.title = originalTitle;
                }, 2000);
            });
        });
    });
    
    // Preload critical images
    const criticalImages = [
        'fakturify/dashboard-main.jpg',
        'fakturify/invoice-list.jpg',
        'fakturify/invoice-detail.jpg',
        'fakturify/analytics.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
    
    // Performance optimization: Defer non-critical animations
    setTimeout(() => {
        particles.forEach(particle => {
            particle.style.animation = particle.style.animation || 'quantum-float var(--duration) infinite linear';
        });
    }, 1000);
    
});

// Add cursor following effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.quantum-cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Error handling for missing images
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        console.warn('Missing image:', e.target.src);
    }
}, true);
