let inicio = document.querySelector('.inicio');
let logo = document.querySelectorAll('.logo-header');
let logoSpan = document.querySelectorAll('.logo');


window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {

            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });


        setTimeout(() => {
            logoSpan.forEach((span, idx) => {

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');

                }, (idx + 1) * 50)
            })

        },2000);

        setTimeout(() => {
            // inicio.classList.remove('active');
           
            inicio.style.top="-133vh";
            

        }, 3800);

    })

})

