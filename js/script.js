let menu = document.getElementById('menu-btn');
let header = document.querySelector('.header');
let productsPreviewContainer = document.querySelector('.products-preview-container');
let productsPreview = productsPreviewContainer.querySelectorAll('.products-preview')

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
    document.body.classList.toggle('active');
}


window.onscroll=()=>{
    if(window.innerWidth < 1200){
        menu.classList.remove('fa-times');
        header.classList.remove('active');
        document.body.classList.remove('active');
    };
};

document.querySelectorAll('.products .slide .btn').forEach(detailBtn =>{
    detailBtn.onclick = () =>{
      productsPreviewContainer.style.display = 'block';
      let name = detailBtn.getAttribute('data-product');
      productsPreview.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        if(name == target){
         preview.style.display = 'flex';
        };
      });
    };
  });
  
  document.querySelectorAll('.products-preview-container .products-preview .fa-times').forEach(close =>{
    close.onclick = () =>{
      productsPreviewContainer.style.display = 'none';
      productsPreview.forEach(closePreview =>{
        closePreview.style.display = 'none';
      });
    };
  });

  var swiper = new Swiper(".products-slider", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  
  var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });