//posição e tamanho da bolinha
let xBolinha = 300; //posição eixo x bolinha
let yBolinha = 200; //posição eixo y bolinha
let diametro = 20; //diametro total da bolinha
let raio = diametro / 2; //comando para entender as extremidades da bolinha

//velocidade bolinha
let velocidadeXBolinha = 6; //velocidade eixo x bolinha
let velocidadeYBolinha = 6; //velocidade eixo y bolinha

//tamanho raquete
let tamanhoXRaquete = 10;
let tamanhoYRaquete = 90;

//posição da raquete1
let xRaquete1 = 5;
let yRaquete1 = 150;

//posição da raquete2
let xRaquete2 = 580;
let yRaquete2 = 150;
let velocidadeRaquete2;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

let colidiu = false;

function setup() {
  createCanvas(600, 400); //tamanho da tela
  trilha.loop();
}

//função que armazena as principais informações
function draw() {
  background(0); //cor de fundo
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBolinha();
  mostraRaquete1();
  mostraRaquete2();
  movimentaRaquete1();
  movimentaRaquete2();
  verificaColisaoRaquete(xRaquete1, yRaquete1);
  verificaColisaoRaquete(xRaquete2, yRaquete2);
  incluiPlacar();
  marcaPontos();
  bolinhaNaoFicaPresa();
}

function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBolinha(){
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete1() {
  rect(xRaquete1, yRaquete1, tamanhoXRaquete, tamanhoYRaquete);
}

function mostraRaquete2() {
  rect(xRaquete2, yRaquete2, tamanhoXRaquete, tamanhoYRaquete);
}

function movimentaRaquete1() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete1 -= 10
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete1 += 10
  }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23;
    }
}


function verificaColisaoRaquete() {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, tamanhoXRaquete, tamanhoYRaquete, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x, y, tamanhoXRaquete, tamanhoYRaquete, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaquete2() {
  if (keyIsDown(87)) {
    yRaquete2 -= 10
  }
  if (keyIsDown(83)) {
    yRaquete2 += 10
  }
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,165,0));
  rect(150, 10, 40, 20);
  fill(color(255,165,0));
  rect(450, 10, 40, 20)
  fill(255);
  text(meusPontos, 170, 26);
  fill(255);
  text(pontosDoOponente, 470, 26);
}

function marcaPontos() {
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 10) {
    pontosDoOponente +=1;
    ponto.play();
  }
}