document.addEventListener("DOMContentLoaded", () => {
    let lastScroll = window.pageYOffset; 
    const nav = document.querySelector("nav"); 

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset; 
        if (currentScroll > lastScroll) {
            nav.classList.add("hidden"); 
        } else {
            nav.classList.remove("hidden"); 
        }
        lastScroll = currentScroll; 
    });
});