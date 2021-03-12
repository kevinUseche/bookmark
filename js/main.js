const btnMenu = document.querySelector('#btn-menu');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', function(){
    menu.classList.toggle('open');
    if(menu.getAttribute('class') == 'menu open'){
        btnMenu.children[0].classList.add('white');
    }else{
        btnMenu.children[0].classList.remove('white');
    }
});

/* scroll */
let lastScroll = 0;
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll){
        if(menu.getAttribute('class').includes('open')){
            menu.classList.remove('open');
            btnMenu.children[0].classList.remove('white');
        }
    }
    lastScroll = currentScroll;
});


const btnsMenuItems = document.querySelectorAll('.menu-items .item a');
const features = document.querySelectorAll('.content-features > div');

btnsMenuItems.forEach((a) => {
    a.addEventListener('click', function(e){
        e.preventDefault();
        btnsMenuItems[0].classList.remove('item-active');
        btnsMenuItems[1].classList.remove('item-active');
        btnsMenuItems[2].classList.remove('item-active');
        a.classList.add('item-active');

        features[0].classList.remove('feature-active');
        features[1].classList.remove('feature-active');
        features[2].classList.remove('feature-active');
        document.querySelector('#' + a.getAttribute('href')).classList.add('feature-active');
    });
});

/* frequentyl questions */
const btnQuestions = document.querySelectorAll('.header-question a');

btnQuestions.forEach((a) => {
    a.addEventListener('click', (e)=>{
        e.preventDefault();
        if(a.children[0].getAttribute('class') == 'fas fa-chevron-up red'){
            a.children[0].className = "fas fa-chevron-down";
            a.parentNode.parentNode.childNodes[3].classList.remove('view-question');
        }else{
            a.children[0].className = "fas fa-chevron-up red";
            a.parentNode.parentNode.childNodes[3].classList.add('view-question');
        }
    });
});