    document.addEventListener("DOMContentLoaded", function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            const targets = document.querySelectorAll('.img-content3 img, .content-pic-1 img, .img-insidesportcontent-2 img, .img-product img ');
            targets.forEach(target => observer.observe(target));
        });


const changeimgProduct = document.querySelector('.change-product')
const dots  = document.querySelectorAll('.dot')


// Product Image
const colorImage={
    white: '../Template/whitewatch.png', 
    black: '../Template/showcasewatch.png',
    blue: '../Template/bluewatch.png',
    purple: '../Template/purplewatch.png', 
    green: '../Template/greenwatch.png'
}


dots.forEach(dot =>{
    dot.addEventListener('click', function(){
        const color = dot.dataset.color
        changeimgProduct.src = colorImage[color]
    })
})





// ===== LOGIN =====
  const cartIcon = document.querySelector('.cart-icon');
  const userIcon = document.querySelector('.user-icon');
  const loginModal = document.querySelector('.login-modal');
  const overlay = document.querySelector('.overlay');
  const loginClose = document.querySelector('.login-modal .close');
  const btnbuysection = document.getElementById('loginsection-btn-buy');

  const btnbuy = document.querySelector('.btn-buy');


  function openLoginModal() {
    loginModal?.classList.add('active');
    overlay?.classList.add('active');
  }

  function closeLoginModal() {
    loginModal?.classList.remove('active');
    overlay?.classList.remove('active');
  }
  cartIcon?.addEventListener('click', openLoginModal);
  userIcon?.addEventListener('click', openLoginModal);
  btnbuy?.addEventListener('click', openLoginModal);
  btnbuysection?.addEventListener('click', openLoginModal);
  loginClose?.addEventListener('click', closeLoginModal);


  // ===== LOGOUT =====
  const userLogout = document.querySelector('.user-logout');
  const logoutModal = document.querySelector('.logout-modal');
  const logoutClose = document.querySelector('.logout-modal .close');

  function openLogoutModal() {
    logoutModal?.classList.add('active');
    overlay?.classList.add('active');
  }

  function closeLogoutModal() {
    logoutModal?.classList.remove('active');
    overlay?.classList.remove('active');
  }

  userLogout?.addEventListener('click', openLogoutModal);
  logoutClose?.addEventListener('click', closeLogoutModal);


  // ===== overlay close =====
  overlay?.addEventListener('click', () => {
    closeLoginModal();
    closeLogoutModal();
  });

const plusbtn =document.querySelector('.plus')
const minusbtn =document.querySelector('.minus')
const qty = document.querySelector('.qty')


plusbtn.addEventListener('click', function(){
    qty.value++


})


minusbtn.addEventListener('click', function(){
    if(qty.value > 1){
        qty.value--
    }

})


// Add Items to cart

const additems = document.querySelector('#addtocart')


if(additems){
    additems.addEventListener('click', function(){
    const qtyInput = document.querySelector('.qty');
    
    const product = {
        name: additems.dataset.name , 
        price: Number(additems.dataset.price) , 
        img : selectedImg || additems.dataset.img , 
        qty : Number(qtyInput ? qtyInput.value : 1) , 
        color: hasColor ? selectedColor : null , 
    
    }


    // check color
    const colorDots = document.querySelectorAll('.dot');
    const hasColor = colorDots.length > 0;

    

    // กันข้อมูลไม่ครบ
    if(!product.name || !product.price || !product.img){
        alert("Data invalid")
        return ; 
    }
    if(hasColor && !product.color){
        alert("Please select a color")
        return ; 

    }
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    //  รวมสินค้าที่ซํ้ากัน
    const existingItem = cart.find(item => item.name === product.name && item.color === product.color);
    
    if (existingItem) {
        existingItem.qty += product.qty;
    } else {
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    window.location.href = '/UserSection/cart.html'
    

    })
    
}

// SHOW CART (หน้า cart.html)



  