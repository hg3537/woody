// fixed navbar
// to top
let arrowtop = document.querySelector(`.top`);
window.addEventListener(`scroll`, () =>
{
    document.querySelector(`.navbar`).classList.toggle(`fixed-navbar`, window.scrollY >= 30);
    document.documentElement.scrollTop >= 700 ? arrowtop.classList.add(`fadeup`) : arrowtop.classList.remove(`fadeup`);

});
// change background
let imgbackground = [ `css/img/carousel-1.jpg`, `css/img/carousel-2.jpg`, `css/img/carousel-3.jpg` ];
let landingimg = document.querySelector(`.landing img`);

setInterval(() =>
{
    let rordomnum = Math.floor(Math.random() * imgbackground.length);
    landingimg.src = imgbackground[ rordomnum ];
}, 1100);
// let about-container
let aboutcontainer = document.querySelector(`.about`);
let settop = aboutcontainer.offsetTop;
let countbox = document.querySelectorAll(`.box-count .count-num`);
let start = false;
window.onscroll = function ()
{
    if (document.documentElement.scrollTop >= settop)
    {
        if (!start)
        {
            countbox.forEach(numb =>
            {
                let goal = numb.dataset.target;
                let conunt = setInterval(() =>
                {
                    numb.textContent++;
                    if (numb.textContent == goal)
                    {
                        clearInterval(conunt);
                    }
                }, 500 / goal);
            });
            start = true;
        }
    }
};
// show navbar by navbar-toggler-icon
let navbartoggle = document.querySelector(`.navbar-toggler-icon`);


navbartoggle.addEventListener(`click`, () =>
{
    document.querySelector(`.collapse`).classList.toggle(`sm-navbar`);

});
let navitems = document.querySelectorAll(`.nav-item`);
navitems.forEach(navitem =>
{
    navitem.addEventListener(`click`, () =>
    {
        document.querySelector(`.collapse`).classList.remove(`sm-navbar`);
    });
});
// tabs

const btngroup = Array.from(document.querySelectorAll(`.project-btn .btn`));
const rowproject = document.querySelectorAll(`.row-project`);
btngroup.forEach(btn =>
{
    btn.addEventListener(`click`, e =>
    {
        var id = e.target.dataset.id;
        btngroup.forEach(btn =>
        {
            btn.classList.remove(`tab-btn-active`);
            e.currentTarget.classList.add(`tab-btn-active`);
        });
        if (id === `row-project`)
        {
            rowproject.forEach(row =>
            {
                row.classList.remove(`d-none`);
            });

        } else
        {
            rowproject.forEach(row =>
            {
                row.classList.add(`d-none`);
            });
            let activerow = document.getElementById(id);
            activerow.classList.remove(`d-none`);
        }

    });
});

// anamations

const observteam = new IntersectionObserver(opations =>
{
    opations.forEach(opation =>
    {
        opation.isIntersecting ? document.querySelectorAll(`.team-card`).forEach(card => { card.classList.add(`fadeup`); }) : null;
    });
});
observteam.observe(document.querySelector(`.team-container`));
/* dark mode */
let darkmode = document.querySelector(`.dark-mode`);
darkmode.addEventListener(`click`, () =>
{
    document.querySelector(`.Carousel`).classList.toggle(`dark-bg`)
    document.querySelector(`.about`).classList.toggle(`dark-bg`)
    document.querySelector(`.feature`).classList.toggle(`dark-bg`)
    document.querySelector(`.team`).classList.toggle(`e4-bg`)
    document.querySelector(`.Projects`).classList.toggle(`e4-bg`)
    document.querySelector(`.service`).classList.toggle(`e4-bg`)
    document.querySelectorAll(`.card`).forEach(card =>
    {
        card.classList.toggle(`dark-bg`)
})
    document.querySelectorAll(`.card-header`).forEach(head =>
    {
        head.classList.toggle(`dark-border`);
    });
    document.querySelectorAll(`.box-count`).forEach(head =>
    {
        head.classList.toggle(`dark-border`);
    });
   
})
















