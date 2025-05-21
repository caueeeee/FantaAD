// Criação de uma timeline do GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: 1,
    }
})

tl.to(
    '#fanta',
    {
        top: '120%', // Move o elemento com o id 'fanta para 120% do topo da tela'
        left: '0%',
    },
    'orange'
); // Nomeando esse trecho de animação como 'orange' para sincronuzação

tl.to(
    '#laranja-cortada',
    {
        top: '155%', // Move o elemento 'orange-cut' para 160% do topo
        left: '20%', // Move o elemento para 23% da esquerda
    },
    'orange'
); // Nomeando esse trecho de animação como 'orange' para 

tl.to(
    '#laranja',
    {
        width: '15%', // Reduz a largura do elemento com o id 'orange' para 15%
        top: '160%', // Move o elemento 'orange' para 160% do topo
        right: '10%',
    },
    'orange'
); // Sincrnoizando com o trecho de animação 'orange'

tl.to(
    '#folha',
    {
        top: '110%', // Move o elemento 'orange-cut' para 110% do topo
        rotate: '530deg', // Rotaciona o elemento em 130 graus
        left: '70%', // Move o elemento para 70% da esquerda
    },
    'orange'
); // Nomeando esse trecho de animação como 'orange' para sincronuzação

tl.to(
    '#folha2',
    {
        top: '110%', // Move o elemento 'orange-cut' para 110% do topo
        rotate: '530deg', // Rotaciona o elemento em 130 graus
        left: '0%', // Move o elemento para 70% da esquerda
    },
    'orange'
); // Nomeando esse trecho de animação como 'orange' para sincronuzação

// Criando outra TIMELINE

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '70% 50%', // Fim da animação (topo da tela atinge 50% da altura quando estiver 20% da sessão .three)
        scrub: 1,
        markers: false // DEPURAÇÃO
    }
})

// Definindo a animação dos elementos com a timenilne 'tl2'
tl2.from(
    '.lemon1',
    {
        rotate: '-50deg', // Inicia o elemento com classe 'lemon1' rotacionando
        left: '-100%', // Inicia o elemento fora da tela, à esquerda (-100%)
        top: '-50%', //Inicia o elemento ligeiramente abaixo da tela (110%) do topo
    },
    'ca'
) // Nomeando este trecho de animação com 'ca' para sincronização

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg', // Inicia o elemento com classe 'lemon1' rotacionando
        left: '-110%', // Inicia o elemento fora da tela, à esquerda (-100%)
        top: '-30%', //Inicia o elemento ligeiramente abaixo da tela (110%) do topo
    },
    'ca'
) // Nomeando este trecho de animação com 'ca' para sincronização

tl2.from(
    '.lemon2',
    {
        rotate: '-50deg', // Inicia o elemento com classe 'lemon1' rotacionando
        left: '100%', // Inicia o elemento fora da tela, à esquerda (-100%)
        top: '-30%', //Inicia o elemento ligeiramente abaixo da tela (110%) do topo
    },
    'ca'
) // Nomeando este trecho de animação com 'ca' para sincronização

tl2.from(
    '#pepsi',
    {
        rotate: '90deg', // Inicia o elemento com classe 'lemon1' rotacionando
        left: '100%', // Inicia o elemento fora da tela, à esquerda (-100%)
        top: '-30%', //Inicia o elemento ligeiramente abaixo da tela (110%) do topo
    },
    'ca'
) // Nomeando este trecho de animação com 'ca' para sincronização

tl2.to(
    '#laranja-cortada',
    {
        width: '18%',
        left : '42%',
        top: '207%',
      },
    'ca'
) // Nomeando este trecho de animação com 'ca' para sincronização

tl2.to(
    '#fanta',
    {
        width: '35%',
        left : '33%',
        top: '216%',
      },
    'ca'
) // Nomeando este trecho de animação com 'ca' para sincronização