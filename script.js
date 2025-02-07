const slider = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slider');
let currentIndex = 0 ;
const totalSlides = slides.length;
function autoSlide(){
    currentIndex++;
    slider.scrollTo({
        left: currentIndex * slider.clientWidth,
        behavior: 'smooth'
    });
    if(currentIndex === totalSlides-1){
         setTimeout(()=>{
            slider.scrollTo({
                left: 0,
                behavior: 'auto'
            });
            currentIndex = 0;
         } , 1000);
    }
}

setInterval(autoSlide , 3000);