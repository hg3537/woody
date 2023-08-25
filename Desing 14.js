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
console.log(countbox);
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
let btngroup = document.querySelectorAll(`.btn-group .btn`);
let Projects = document.querySelector(`.Projects`);
let rowproject = document.querySelectorAll(`.row-project`);


Projects.addEventListener(`click`, (e) =>
{
    const id = e.target.dataset.id;
    btngroup.forEach(btn =>
    {
        btn.classList.remove(`tab-btn-active`);
        e.target.classList.add(`tab-btn-active`);
    });
    if (id == `row-project`)
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
        const activerow = document.getElementById(id);
        activerow.classList.remove(`d-none`);
    }

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
















