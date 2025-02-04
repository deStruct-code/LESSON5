const swiper = new Swiper('.swiper', {

    breakpoints: {
      320: 
      {enabled: true,} ,
      768: 
      {enabled: false, }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
    },
    
    spaceBetween: 16,
    slidesPerView: 'auto',
    
  });

const width = window.screen.width;
const readMore = document.querySelector('.read-more');
const hideMore = document.querySelector('.hide-more');
const brandList = document.querySelector('.brandList');



readMore.addEventListener('click', function(e){
  brandList.classList.add('brandList__full');
  readMore.classList.add('hidden');
  hideMore.classList.remove('hidden');
});

hideMore.addEventListener('click', function(e){
    brandList.classList.remove('brandList__full');
    readMore.classList.remove('hidden');
    hideMore.classList.add('hidden');
});
