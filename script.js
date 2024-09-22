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
    ".menu_icone",
    ".nav_list",
    ".nav_list li",
);
mobilenavbar.init();

document.getElementById('saiba_mais_btn').addEventListener('click', function() {
    var moreInfo = document.getElementById('more-info');
    if (moreInfo.classList.contains('hidden')) {
        moreInfo.classList.remove('hidden');
        moreInfo.classList.add('show');
        this.innerText = 'Mostrar menos';
    } else {
        moreInfo.classList.add('hidden');
        moreInfo.classList.remove('show');
        this.innerText = 'Saiba mais';
    }
});
