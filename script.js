class Mobilenavbar {
    constructor(menuIcon, navList, navLinks) {
        this.menuIcon = document.querySelector(menuIcon);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3}s`);
        });
      }
    

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.menuIcon.addEventListener("click", this.handleClick);
    }
    
    init() {
        if (this.menuIcon) {
            this.addClickEvent();
        }
        return this;
    }

}    

const mobilenavbar = new Mobilenavbar(
    ".menu-icon",
    ".nav-list",
    ".nav-list li",
);
mobilenavbar.init();
