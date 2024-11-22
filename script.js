


window.onscroll = () => {

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 200);
};

const typed = new Typed('.text-animate',{
    strings:[,'Front End Developer','Web Developer', ''],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

