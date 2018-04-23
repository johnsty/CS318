/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("click-to-scroll").style.marginLeft = "57%";
    document.getElementById("mobile-nav-menu").style.marginLeft = "250px";
    document.getElementById("mobile-nav-menu").classList.toggle('open-nav');
    document.getElementById("signature").classList.toggle('open-nav');
    document.getElementById("signature").style.marginLeft = "300px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("click-to-scroll").style.marginLeft = "auto";
    document.getElementById("mobile-nav-menu").style.marginLeft = "0";
    document.getElementById("mobile-nav-menu").classList.remove('open-nav');
    document.getElementById("signature").style.marginLeft = "0";
    document.getElementById("signature").classList.remove('open-nav');
}

function scrollToID() {
    document.getElementById("container").scrollIntoView({ 
        behavior: 'smooth' 
    });
}