/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {
    // 20/02/24 : Ajout d'une surcouche pour retirer menu quand clic hors menu
    // 20/02/24 : Ajout d'une surcouche pour retirer menu quand clic hors menu
    let menu_icon_box = document.querySelector(".menu_icon_box");
    let box = document.querySelector(".box");
    menu_icon_box.onclick = function(){
        menu_icon_box.classList.toggle("active");
        box.classList.toggle("active_box");
    }
    document.onclick = function(e){
        if (!menu_icon_box.contains(e.target) && !box.contains(e.target) ) {
            menu_icon_box.classList.remove('active');            
            box.classList.remove('active_box');  
        }
    }
    // 20/02/24 : Ajout d'une surcouche pour retirer menu quand clic hors menu
    // 20/02/24 : Ajout d'une surcouche pour retirer menu quand clic hors menu

    /*
    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })
    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });
    function _toggleMenuIcon() {
        console.log("_toggleMenuIcon");  
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }
    */

    // Scroll to top button appear
    let scrollToTopVisible = false;
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        
        if (document.documentElement.scrollTop > 100) {
            console.log("coucou:"+scrollToTopVisible);            
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            console.log("coucou");      
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
