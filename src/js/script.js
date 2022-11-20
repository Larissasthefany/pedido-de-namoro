// Declaração das variáveis.
const buttonYes = document.querySelector('.yes');
const buttonNo = document.querySelector('.no');
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const title = document.querySelector('.title1 h1');
const heart = document.querySelector('.content2 img');
// Regule no Array abaixo as posições que o Button "Não" deve fugir do Mouse!!!
const positions = ['-360', '388', '-299', '336', '-255', '220', '233', '266', '-315', '300']; 
// Evento de Transição de tela.
buttonYes.addEventListener('click',()=>{
    content1.style.display = 'none';
    content2.style.display = 'block';
    title.textContent = `Você fez a melhor escolha!😊(Aí de vc se n tivesse apertado nesse sim🤡🔪)`;
    title.style.fontSize = '1.6rem';
});
// Função de animação do coração.
function heartBeat(){
    if(heart.style.width == '320px' && heart.style.height == '300px'){
        heart.style.width = '270px';
        heart.style.height = '250px';
        heart.style.transition = 'ease .5s';
    }else{
        heart.style.width = '320px';
        heart.style.height = '300px';
        heart.style.transition = 'ease .5s';
    }
}
// Função para fazer o botão fugir do Mouse no eixo Y (|).
function runButtonY(){  
    let randomArray = parseInt(Math.random() * positions.length);
    this.style.transform = `translateY(${positions[randomArray]}px)`;
    this.style.transition = 'ease .1s';
}
// Função para fazer o botão fugir do Mouse no eixo X (_).
function runButtonX(){  
    let randomArray = parseInt(Math.random() * positions.length);
    this.style.transform = `translateX(${positions[randomArray]}px)`;
}
// Declaração/Ativação das funções.
buttonNo.addEventListener('mouseover', runButtonY);
buttonNo.addEventListener('mouseout', runButtonX);
setInterval(heartBeat, 300);
