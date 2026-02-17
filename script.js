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
    white: 'Template/whitewatch.png', 
    black: 'Template/showcasewatch.png',
    blue: 'Template/bluewatch.png',
    purple: 'Template/purplewatch.png', 
    green: 'Template/greenwatch.png'
}


dots.forEach(dot =>{
    dot.addEventListener('click', function(){
        const color = dot.dataset.color
        changeimgProduct.src = colorImage[color]
    })
})

