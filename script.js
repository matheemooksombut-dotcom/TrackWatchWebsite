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