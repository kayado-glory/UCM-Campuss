 let isAnimating = false; // Flag untuk mencegah multiple clicks
        
        function switchSlideTab(index, button) {
            // Prevent multiple clicks during animation
            if (isAnimating) return;
            
            // Check if already active
            if (button.classList.contains('active')) return;
            
            isAnimating = true;
            
            // Get elements
            const tabs = document.querySelectorAll('.slide-tab');
            const contents = document.querySelectorAll('.slide-tab-content');
            const indicator = document.getElementById('slideIndicator');
            
            // Remove active classes
            tabs.forEach(tab => tab.classList.remove('active'));
            contents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });
            
            // Add active class to clicked tab
            button.classList.add('active');
            
            // Move indicator and animate color
            const targetTab = index === 0 ? 'visi' : 'misi';
            moveIndicator(indicator, index, targetTab);
            
            // Show content after a short delay
            setTimeout(() => {
                const targetContent = document.getElementById(`slideContent${index}`);
                targetContent.style.display = 'block';
                // Force reflow before adding active class
                targetContent.offsetHeight;
                targetContent.classList.add('active');
                
                // Reset animation flag after transition completes
                setTimeout(() => {
                    isAnimating = false;
                }, 300);
            }, 100);
        }

        function moveIndicator(indicator, index, targetTab) {
            // Move indicator
            indicator.style.left = index === 0 ? '0%' : '50%';
            
            // Animate color transition
            animateColorTransition(indicator, targetTab);
        }

        function animateColorTransition(indicator, targetTab) {
            const duration = 600; // Reduced duration
            const steps = 30; // Reduced steps for smoother performance
            const stepDuration = duration / steps;
            let currentStep = 0;

            // Color definitions
            const colors = {
                visi: {
                    start: [44, 90, 160],    // #2c5aa0 (biru)
                    middle: [0, 184, 148],   // #00b894 (hijau)
                    end: [0, 206, 201]       // #00cec9 (tosca)
                },
                misi: {
                    start: [0, 184, 148],    // #00b894 (hijau)
                    middle: [44, 90, 160],   // #2c5aa0 (biru)
                    end: [0, 56, 168]        // #0038a8 (biru tua)
                }
            };

            const targetColors = colors[targetTab];

            function animate() {
                currentStep++;
                const progress = Math.min(currentStep / steps, 1); // Ensure progress doesn't exceed 1
                
                let color1, color2, color3;
                
                if (progress <= 0.5) {
                    const t = progress * 2;
                    color1 = interpolateColor(targetColors.start, targetColors.middle, t);
                    color2 = interpolateColor(targetColors.start, targetColors.middle, t);
                    color3 = targetColors.end;
                } else {
                    const t = (progress - 0.5) * 2;
                    color1 = targetColors.middle;
                    color2 = interpolateColor(targetColors.middle, targetColors.end, t);
                    color3 = targetColors.end;
                }

                // Update background with gradient
                const gradient = `linear-gradient(135deg, rgb(${color1.join(',')}), rgb(${color2.join(',')}), rgb(${color3.join(',')}))`;
                indicator.style.background = gradient;
                
                // Update shadow
                const shadowColor = targetTab === 'visi' ? 
                    `rgba(0, 184, 148, ${0.3 + progress * 0.2})` : 
                    `rgba(44, 90, 160, ${0.3 + progress * 0.2})`;
                indicator.style.boxShadow = `0 ${4 + progress * 4}px ${12 + progress * 8}px ${shadowColor}`;
                
                // Update scale (reduced for smoother effect)
                indicator.style.transform = `scale(${1 + progress * 0.02})`;

                if (currentStep < steps) {
                    requestAnimationFrame(animate); // Use requestAnimationFrame for smoother animation
                }
            }

            requestAnimationFrame(animate);
        }

        function interpolateColor(color1, color2, t) {
            return [
                Math.round(color1[0] + (color2[0] - color1[0]) * t),
                Math.round(color1[1] + (color2[1] - color1[1]) * t),
                Math.round(color1[2] + (color2[2] - color1[2]) * t)
            ];
        }

        // Initialize on page load
        document.addEventListener('DOMContentLoaded', function() {
            const indicator = document.getElementById('slideIndicator');
            // Set initial state untuk Visi
            animateColorTransition(indicator, 'visi');
        });