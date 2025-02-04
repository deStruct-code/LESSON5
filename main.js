const swiper = new Swiper('.swiper', {

    breakpoints: {
      320: 
      {enabled: true,} ,
      768: 
      { enabled: false, }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    spaceBetween: 16,
    slidesPerView: 'auto',
    
  });

const readMore = document.querySelector('.read-more');
const hideMore = document.querySelector('.hide-more');
const brandList = document.querySelector('.brandList');


readMore.addEventListener('click', function (e) {
    brandList.style.height = '100%';
    readMore.style.display = 'none';
    hideMore.style.display = 'inline-block';  
});

hideMore.addEventListener('click', function(e){
    brandList.style.height = '176px';
    readMore.style.display = 'inline-block';
    hideMore.style.display = 'none';
});
