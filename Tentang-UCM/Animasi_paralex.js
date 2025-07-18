function initParallax() {
            const parallaxElement = document.getElementById('parallaxBg');
            
            function updateParallax() {
                const scrolled = window.pageYOffset;
                const parallaxContainer = parallaxElement.closest('.section');
                const containerRect = parallaxContainer.getBoundingClientRect();
                const containerTop = scrolled + containerRect.top;
                
                // Hitung posisi relatif terhadap viewport
                const elementInView = containerRect.top < window.innerHeight && containerRect.bottom > 0;
                
                if (elementInView) {
                    // Kecepatan parallax (0.5 = setengah kecepatan scroll)
                    const speed = 0.5;
                    const yPos = -(scrolled - containerTop) * speed;
                    
                    // Apply transform
                    parallaxElement.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            }
            
            // Event listener untuk scroll
            window.addEventListener('scroll', updateParallax);
            window.addEventListener('resize', updateParallax);
            
            // Initial call
            updateParallax();
        }
        
        // Smooth scroll behavior
        function initSmoothScroll() {
            const scrollSpeed = 0.1;
            let scrollTarget = window.pageYOffset;
            let currentScroll = window.pageYOffset;
            
            function smoothScrollStep() {
                currentScroll += (scrollTarget - currentScroll) * scrollSpeed;
                
                if (Math.abs(scrollTarget - currentScroll) > 0.1) {
                    requestAnimationFrame(smoothScrollStep);
                }
            }
            
            window.addEventListener('scroll', () => {
                scrollTarget = window.pageYOffset;
                smoothScrollStep();
            });
        }
        
        // Fade in animation saat scroll
        function initScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Observe elements
            const animatedElements = document.querySelectorAll('.element');
            animatedElements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
                observer.observe(el);
            });
        }
        
        // Initialize semua fungsi saat DOM ready
        document.addEventListener('DOMContentLoaded', () => {
            initParallax();
            initScrollAnimations();
            
            console.log('🎯 Parallax effect initialized!');
            console.log('📝 Cara kerja:');
            console.log('1. Background bergerak dengan kecepatan 50% dari scroll');
            console.log('2. Content tetap pada posisi normal');
            console.log('3. Memberikan ilusi kedalaman 3D');
        });
        
        // Performance optimization
        let ticking = false;
        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(() => {
                    ticking = false;
                });
                ticking = true;
            }
        }