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
document.getElementById('saiba_mais_btn2').addEventListener('click', function() {
    var moreInfo = document.getElementById('more-infoi');
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
document.getElementById('saiba_mais_btn3').addEventListener('click', function() {
    var moreInfo = document.getElementById('more-infof');
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

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoDiv.innerHTML = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const imc = peso / (altura * altura);



    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

    resultadoDiv.innerHTML = `Seu IMC é ${imc.toFixed(2)} (${categoria})`;
}
