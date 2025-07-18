class AboutController {
            constructor() {
                this.aboutSection = document.getElementById('aboutSection');
                this.aboutTitle = document.getElementById('aboutTitle');
                this.aboutSubtitle = document.getElementById('aboutSubtitle');
                this.aboutImages = document.getElementById('aboutImages');
                this.statsSection = document.getElementById('statsSection');
                this.aboutProgress = document.getElementById('aboutProgress');
                this.progressDots = document.querySelectorAll('.about-progress .progress-dot');
                
                this.facilityItems = document.querySelectorAll('.facility-item');
                this.facilityImages = document.querySelectorAll('.facility-image');
                this.backgroundImages = document.querySelectorAll('.about-bg');
                
                this.facilities = ['default', 'laboratorium', 'perpustakaan', 'aula', 'asrama', 'kantin'];
                this.currentFacility = 0;
                
                this.init();
            }

            init() {
                this.bindEvents();
                this.updateAbout();
                
                // Show initial elements
                setTimeout(() => {
                    this.aboutTitle.classList.add('show');
                }, 300);
                
                setTimeout(() => {
                    this.aboutSubtitle.classList.add('show');
                }, 500);
                
                setTimeout(() => {
                    this.aboutImages.classList.add('show');
                }, 700);
            }

            bindEvents() {
                window.addEventListener('scroll', () => {
                    this.updateAbout();
                }, { passive: true });

                // Progress dots
                this.progressDots.forEach((dot, index) => {
                    dot.addEventListener('click', () => {
                        this.scrollToFacility(index);
                    });
                });
            }

            updateAbout() {
                const rect = this.aboutSection.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const sectionHeight = this.aboutSection.offsetHeight;
                
                let scrollProgress = 0;
                if (rect.top <= 0 && rect.bottom > windowHeight) {
                    scrollProgress = Math.max(0, Math.min(1, 
                        -rect.top / (sectionHeight - windowHeight)
                    ));
                } else if (rect.top > 0) {
                    scrollProgress = 0;
                } else {
                    scrollProgress = 1;
                }

                // Show/hide progress indicator
                if (rect.top <= 0 && rect.bottom > windowHeight) {
                    this.aboutProgress.classList.add('show');
                } else {
                    this.aboutProgress.classList.remove('show');
                }

                // Update progress dots
                const currentSection = Math.floor(scrollProgress * 6);
                this.progressDots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentSection);
                });

                // Show facility items progressively
                this.facilityItems.forEach((item, index) => {
                    const itemTrigger = 0.3 + (index * 0.1);
                    if (scrollProgress >= itemTrigger) {
                        item.classList.add('show');
                        item.style.transitionDelay = `${index * 0.1}s`;
                    }
                });

                // Show stats section
                if (scrollProgress >= 0.8) {
                    this.statsSection.classList.add('show');
                }

                // Auto-cycle through facilities based on scroll
                const autoFacility = Math.floor(scrollProgress * 6);
                if (autoFacility !== this.currentFacility && autoFacility <= 5) {
                    this.setActiveFacility(autoFacility);
                }
            }

            setActiveFacility(index) {
                if (this.currentFacility === index) return;
                
                this.currentFacility = index;
                const facilityName = this.facilities[index];

                // Update facility items
                this.facilityItems.forEach((item, i) => {
                    item.classList.toggle('active', i === index - 1);
                });

                // Update images
                this.facilityImages.forEach((img) => {
                    img.classList.remove('active');
                });
                
                const activeImage = document.getElementById(`img-${facilityName}`);
                if (activeImage) {
                    activeImage.classList.add('active');
                }

                // Update background
                this.backgroundImages.forEach((bg) => {
                    bg.classList.remove('active');
                });
                
                const activeBg = document.getElementById(`bg-${facilityName}`);
                if (activeBg) {
                    activeBg.classList.add('active');
                }
            }

            scrollToFacility(facilityIndex) {
                const sectionHeight = this.aboutSection.offsetHeight;
                const windowHeight = window.innerHeight;
                const maxScroll = sectionHeight - windowHeight;
                const targetScroll = (facilityIndex / 6) * maxScroll;
                
                window.scrollTo({
                    top: this.aboutSection.offsetTop + targetScroll,
                    behavior: 'smooth'
                });
            }
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            new AboutController();
        });