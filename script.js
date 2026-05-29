/* =========================================
   RAG WEBSITE JAVASCRIPT
   Minimal Professional Animations
========================================= */


/* =========================================
   FADE IN ANIMATION
========================================= */

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('show');

        }

    });

},

{
    threshold: 0.15
}

);

sections.forEach((section) => {

    observer.observe(section);

});


/* =========================================
   ACTIVE NAVIGATION HIGHLIGHT
========================================= */

const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {

            current = section.getAttribute('id');

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove('active');

        if (
            link.getAttribute('href') === `#${current}`
        ) {
            link.classList.add('active');
        }

    });

});


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        target.scrollIntoView({
            behavior: 'smooth'
        });

    });

});


/* =========================================
   SCROLL PROGRESS BAR
========================================= */

const progressBar = document.createElement('div');

progressBar.classList.add('progress-bar');

document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* =========================================
   TYPEWRITER EFFECT FOR HERO
========================================= */

const heroTitle = document.querySelector('.hero h1');

if(heroTitle){

    const text = heroTitle.innerText;

    heroTitle.innerText = "";

    let i = 0;

    function typeWriter(){

        if(i < text.length){

            heroTitle.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeWriter, 50);

        }

    }

    typeWriter();

}


/* =========================================
   CARD HOVER ANIMATION
========================================= */

const cards = document.querySelectorAll(
'.card, .feature-box'
);

cards.forEach((card)=>{

    card.addEventListener('mouseenter',()=>{

        card.style.transform =
        'translateY(-8px)';

    });

    card.addEventListener('mouseleave',()=>{

        card.style.transform =
        'translateY(0px)';

    });

});


/* =========================================
   COUNT ANIMATION
========================================= */

function animateValue(id,start,end,duration){

    let range = end - start;

    let current = start;

    let increment = end > start ? 1 : -1;

    let stepTime = Math.abs(
        Math.floor(duration / range)
    );

    const obj = document.getElementById(id);

    if(!obj) return;

    let timer = setInterval(function(){

        current += increment;

        obj.innerHTML = current;

        if(current == end){

            clearInterval(timer);

        }

    },stepTime);

}


/* =========================================
   TOOLTIP FOR RAG TERMS
========================================= */

const terms = document.querySelectorAll('.term');

terms.forEach(term => {

    term.addEventListener('mouseenter', () => {

        term.style.color = '#60a5fa';

    });

    term.addEventListener('mouseleave', () => {

        term.style.color = 'white';

    });

});


/* =========================================
   BACK TO TOP BUTTON
========================================= */

const topBtn = document.createElement('button');

topBtn.innerHTML = "↑";

topBtn.classList.add('top-btn');

document.body.appendChild(topBtn);

window.addEventListener('scroll',()=>{

    if(window.scrollY > 400){

        topBtn.style.display='block';

    }

    else{

        topBtn.style.display='none';

    }

});

topBtn.addEventListener('click',()=>{

    window.scrollTo({

        top:0,

        behavior:'smooth'

    });

});


/* =========================================
   RAG WORKFLOW ANIMATION
========================================= */

const workflowSteps =
document.querySelectorAll('.step');

workflowSteps.forEach((step,index)=>{

    step.style.opacity = "0";

    setTimeout(()=>{

        step.style.opacity = "1";

        step.style.transition = "1s";

    },index * 300);

});


/* =========================================
   WELCOME MESSAGE
========================================= */

setTimeout(()=>{

console.log(
"🚀 Welcome to RAG Explained!"
);

},1000);


/* =========================================
   END
========================================= */