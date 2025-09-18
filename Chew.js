const photoInput = document.getElementById('photoInput');
        const photoContainer = document.getElementById('photoContainer');
        const photoPlaceholder = document.getElementById('photoPlaceholder');
        const uploadedPhoto = document.getElementById('uploadedPhoto');

        photoContainer.addEventListener('click', () => {
            photoInput.click();
        });

        photoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    uploadedPhoto.src = e.target.result;
                    document.getElementById('defaultPhoto').style.display = 'none';
                    document.getElementById('fallbackPhoto').style.display = 'none';
                    uploadedPhoto.classList.remove('hidden');
                };
                reader.readAsDataURL(file);
            }
        });

        photoContainer.addEventListener('dragover', (e) => {
            e.preventDefault();
            photoContainer.classList.add('border-pink-400', 'bg-pink-50');
        });

        photoContainer.addEventListener('dragleave', (e) => {
            e.preventDefault();
            photoContainer.classList.remove('border-pink-400', 'bg-pink-50');
        });

        photoContainer.addEventListener('drop', (e) => {
            e.preventDefault();
            photoContainer.classList.remove('border-pink-400', 'bg-pink-50');
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                const file = files[0];
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        uploadedPhoto.src = e.target.result;
                        document.getElementById('defaultPhoto').style.display = 'none';
                        document.getElementById('fallbackPhoto').style.display = 'none';
                        uploadedPhoto.classList.remove('hidden');
                    };
                    reader.readAsDataURL(file);
                }
            }
        });

        const surpriseBtn = document.getElementById('surpriseBtn');
        const surpriseMessage = document.getElementById('surpriseMessage');

        surpriseBtn.addEventListener('click', () => {
            surpriseMessage.classList.remove('hidden');
            surpriseMessage.scrollIntoView({ behavior: 'smooth' });
            
            for (let i = 0; i < 20; i++) {
                createFloatingHeart();
            }
            
            surpriseBtn.textContent = 'Thích hem? 💕';
            surpriseBtn.classList.add('pulse-heart');
        });

        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.textContent = ['💕', '🤍', '💖', '💗', '🩷'][Math.floor(Math.random() * 5)];
            heart.className = 'fixed text-2xl pointer-events-none z-50';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = window.innerHeight + 'px';
            heart.style.animation = `floatUp 3s ease-out forwards`;
            heart.style.color = ['#fce7f3', '#fdf2f8', '#f9a8d4', '#fbcfe8', '#f3e8ff'][Math.floor(Math.random() * 5)];
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }

        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatUp {
                to {
                    transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);