// ======================================
// Smooth Scroll
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute('href')
        );

        if(target){

            target.scrollIntoView({
                behavior:'smooth'
            });

        }

    });

});


// ======================================
// Active Navbar
// ======================================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 200;

        if(window.scrollY >= sectionTop){

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }

    });

});


// ======================================
// Progress Bar
// ======================================

const progressBar =
document.createElement("div");

progressBar.className =
"progress-bar";

document.body.appendChild(
progressBar
);

window.addEventListener("scroll",()=>{

    const totalHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (window.scrollY / totalHeight) * 100;

    progressBar.style.width =
    progress + "%";

});


// ======================================
// Back To Top Button
// ======================================

const topBtn =
document.createElement("button");

topBtn.innerHTML =
'<i class="bi bi-arrow-up"></i>';

topBtn.className =
"top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display="block";

    }
    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick = ()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};