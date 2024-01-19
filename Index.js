
    
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        setInterval(nextSlide, 3000);



        function w3_open() {
            document.getElementById("mySidebar").style.display = "block";
        }
        function w3_close() {
            document.getElementById("mySidebar").style.display = "none";
        }

//for testimonial


        document.addEventListener("DOMContentLoaded", function () {
            const changingText = document.getElementById("changingText");
            const texts = ["I’m so much grateful to TBL. A platform where I gained connection with other organizations that helped me healed after undergoing abortion which almost took my life.", "TBL, an organisation I will never forget. I almost committed suicide but when I found TBL, they gave me hope of living again. Actually, I was abused by my uncle, from there I entered into prostitution but inside me, I was tired of the life I was living. Thank God, I found TBL the night I decided to end my life. ", " I was sexually abused by my father at a tender age and I lived with the stigma till my adolescent period when I found out about TBL where I obtained help to connect with other organizations that were after my welfare."]; // Diiferent desired texts 
            let currentIndex = 0;
        
            function changeText() {
                changingText.textContent = texts[currentIndex];
                currentIndex = (currentIndex + 1) % texts.length;
            }
        
            // Initial text change
            changeText();
        
            
            setInterval(changeText, 8000);
        });


//for popup
        
    document.addEventListener('DOMContentLoaded', function () {
        var overlay = document.getElementById('overlay');

        // Open the popup 
        setTimeout(openPopup, 8000); 

        
        function openPopup() {
            overlay.style.display = 'flex';
        }

        
        function closePopup() {
            overlay.style.display = 'none';
        }

        // Close popup if clicked outside the popup
        overlay.addEventListener('click', function (event) {
            if (event.target === overlay) {
                closePopup();
            }
        });
    });
        
