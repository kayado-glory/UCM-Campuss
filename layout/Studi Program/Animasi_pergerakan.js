let currentIndex = 0;
        const totalChoices = 5;

        function updateDisplay() {
            const choiceItems = document.querySelectorAll('.choice-item');
            const backgroundOverlay = document.getElementById('backgroundOverlay');
            const choiceDisplay = document.getElementById('choiceDisplay');
            
            // Add slide animation
            choiceDisplay.classList.add('slide-animation');
            
            // Hide all choices
            choiceItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // Show current choice
            choiceItems[currentIndex].classList.add('active');
            
            // Update background
            const currentBg = choiceItems[currentIndex].getAttribute('data-bg');
            backgroundOverlay.className = `background-overlay ${currentBg}`;
            
            // Update counter
            document.getElementById('choiceCounter').textContent = `${currentIndex + 1} dari ${totalChoices}`;
            
            // Remove animation class after animation completes
            setTimeout(() => {
                choiceDisplay.classList.remove('slide-animation');
            }, 500);
        }

        function nextChoice() {
            currentIndex = (currentIndex + 1) % totalChoices;
            updateDisplay();
        }

        function previousChoice() {
            currentIndex = (currentIndex - 1 + totalChoices) % totalChoices;
            updateDisplay();
        }

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                previousChoice();
            } else if (e.key === 'ArrowRight') {
                nextChoice();
            } else if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const activeChoice = document.querySelector('.choice-item.active');
                const link = activeChoice.querySelector('.select-button');
                window.open(link.href, '_blank');
            }
        });

        // Initialize display
        updateDisplay();