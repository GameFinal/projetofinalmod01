/*
Variáveis para armazenar os status do personagem (1,0 ponto);
Perguntas que alterarão esses status do personagem (1,0 ponto);
Laço de repetição que determinará os ciclos em que a história vai se passar. Determinar o que acontecerá ao final do ciclo e como ficarão os status. (1,0 ponto);
Variável para controle da passagem do tempo (1,0 ponto);
Variáveis de controle dos status e situações da história (1,0 ponto);
Condicionais para alterações dessas variáveis (1,5 ponto);
Funções para executar cada uma das tarefas (1,5 ponto);
Conteúdo de condicionais, laços, funções e objetos bem aplicados (2,0 pontos);
*/
const prompt = require("prompt-sync")();


console.log(`'Bruxo' conseguiu entender seu ultimo feito e agora passa por uma fase nova ao qual jamais havia vivido; uma era de paz e tranquilidade. 
Na qual tentará viver uma vida "normal" ou menos "perturbada".

Nessa aventura, Crowster será interpretado por você e todas as ações escolhidas por você usuario.

Bruxo apos salvar o mundo, volta para sua antiga vila para ajudar na reconstrução total, ele se sentia culpado e preferiu ajeitar as coisas.
Conseguiu uma barraca modesta perto da entrada da vila para que conseguisse ver e ouvir os perigos possiveis chegando antes de todos e ao 
mesmo tempo estar pronto para o dia de trabalho antes de todos. Sua rotina começa as 4:30h da manhã, indo até as 19:20h da tarde e não para 
nem aos domingos. de 19:30h até o dia seguinte ele se resguarda para seus afazeres domesticos, treinamentos de magia e combate, lazer e outras coisas que 
desejar fazer, lembrando que deverá dormir pelo menos 5h por dia.

Neste ponto você passa a controlar 'bruxo', decidindo suas proximas ações atravéz de escolhas onde a cada decisão tomada, mudará seu final. Você precisará
fazer escolhas que vão fazer o tempo passar, dependendo de cada tarefa o tempo passará mais rapido ou mais devagar, sendo que cada minima terefa gastará 30min
e o maximo 5h, sendo que será impossivel desfazer uma ação depois de executada, levando a proxima escolha até que o jogo tenha um fim ou você conclusa seus objetivos
principais. Caso prefira não usar seu nome, o nome do personagem será por padrão Crowster. 

Principais objetivo:
1- Ajudar na reconstrução da vila.
2- Tornar-se um bruxo Especialista ou Master.
3- Dominar Alquimia e Herbalismo.
4- Dominar todos os quatro elementos(água, terra, fogo, vento).

Objetivos secundarios:
1- Aprender uma nova profissão.
2- Receba um titulo.
3- Consiga ao menos um item especial ou exclusivo.
4- Ache um amuleto de poder(anel, cordão ou brinco).
5- Mate ou cace uma criatura Alfa.
6- Ajude alguém.
7- Converse com o sabio.
8- Torne-se guardião da vila.   `);
console.log();

console.log(`${nome}, acorda às 4:30h todo dia, toma um banho, arruma suas coisas para o dia de trabalho, toma café e sai para seus afazeres.
Ao sair pela porta de casa olha para o céu e admiria por uns instantes o amanhecer, havia muito tempo que não fazia isso em paz, mesmo assim 
da uma olhada aos arredores do portão principal da vila para garantir que não há ameaças proximas e segue para:`);
let escolha = prompt(`Qual lugar você quer ir primeiro? Para ir a: 1-Centro da vila / 2-Os muros / 3-Torres de vigia / 4-Docas / 5-Taberna. `);

if(escolha === 1){
   função => centro
}else if(escolha === 2){

}else if(escolha === 3){

}else if(escolha === 4){

}else if(escolha === 5){

}else{
    console.log();
}


if(escolha === 1){

}else if(escolha === 2){

}else if(escolha === 3){

}else if(escolha === 4){

}else if(escolha === 5){

}else{
    console.log();
}




if(escolha === 1){

}else if(escolha === 2){

}else if(escolha === 3){

}else if(escolha === 4){

}else if(escolha === 5){

}else{
    console.log();
}




if(escolha === 1){

}else if(escolha === 2){

}else if(escolha === 3){

}else if(escolha === 4){

}else if(escolha === 5){

}else{
    console.log();
}




if(escolha === 1){

}else if(escolha === 2){

}else if(escolha === 3){

}else if(escolha === 4){

}else if(escolha === 5){

}else{
    console.log();
}




if(escolha === 1){

}else if(escolha === 2){

}else if(escolha === 3){

}else if(escolha === 4){

}else if(escolha === 5){

}else{
    for(){
        
    }
}
}

console.log(`Depois de ajudar o povo da aldeia e concluir todos os objetivos pelos quais passou, ${nome} decidiu se mudar para as montanhas/campos/bosque/floresta.
Treinando novos bruxos, estudando mais sobre os elementos, praticando alquimia


Personagem:
        nomeBruxo:
        armadura=
        moeda= Xouro, Xprata, Xbronze, Xcobre, Xraridade.:
        energia= 
        humor=
        armadura=
        armas1=
        armas2=
        mochila=
    
const cicloDia = ['manhã', 'tarde', 'noite'];
const periodoMan = [manha]; //Momentos do dia da história
const periodoTar = [tarde];
const periodoNoi = [noite];

const moeda = [ouro, prata, bronze, cobre, raridades];
let ouro = 2;
let prata = 5;
let bronze = 10;
let cobre = 50;
let rar = 0;

const energia = [];
const sede = [];
const fome = [];
const vigor = [];
const atençao = [];
const vida = [];
15:30', '16', '16:30', '17', '17:30', '18', '18:30', '19'] 
const noite = ['19:30', '20', '20:30', '21', '21:30', '22', '22:30', '23', '23:30', '00', '00:30', '1','1:30', '2', '2:30', '3', '3:30', '4'];

const titulos = ['realeza', 'plebeu', 'coletor', 'fazendeiro', 'caçador', 'chefe', 'alto', 'sumo', 'baixo'];
const profissão = ['ferreiro', 'alquimia', 'herbalismo', 'medico', 'cozinheiro', 'joalheiro', 'minerador'];

const mochila = [armadura, armas, moeda, itens];

/*
nivel(inicio) dos pers.:(ajudante, estudando, aprendiz)
nivel(normal): denominação de cada um
nivel(expert):(aperfeiçoado, disciplinado, dominador, mestre prof)
nivel(unico):(Especialista, Master)
obs: sabio e guardião não possuem nivel pois são de posições muito singulares e unicas, e apenas ladrões, assassinos e hunters podem obter os niveis de
mercenário*/

const armas = [armaLonga, armaCurta, armaRanged];
const armadura = ['cabeça', 'ombros', 'peitoral', 'luvas', 'cinto', 'calça', 'sapato']; 
const amuleto = ['anel', 'cordão', 'brinco'];
const armaLonga = ['espada', 'lança', 'maça', 'machado', 'martelo', 'bastão'];
const armaCurta = ['espada', 'adaga', 'faca serimonial', 'punhal', 'glave'];
const armaRanged = ['arco', 'besta', 'cajado', 'facas de arremeço'];

/*niveis dos itens:([comum, basico, essencial,] [exclusivo, raro, ultra raro,] [epico, especial,] exclusivo.)
itens/armas exclusivas são feitas por ferreiros ou joalheiros*/





const sttsVital = [vida, energia, fome, sede, vigor, atençao, humor];

const status1 = [];  //stts para fome, vida, sede, atenção e energia
status1[0] = "excelente";
status1[1] = "bom";
status1[2] = "medio";
status1[3] = "baixo";
status1[4] = "pessimo";

const status2 = []; //stts para vigor(estado fisico do perso)
status2[0] = "ileso";
status2[1] = "contundido";
status2[2] = "machucado";
status2[3] = "sangrando";
status2[4] = "gravemente ferido"

const status3 = [];  //stts para humor
humor[0] = "Excelente";
humor[1] = "Bom";
humor[2] = "Normal";
humor[3] = "Mau";
humor[4] = "Estressado";

const bruxo = {
    nome : `José`,
    idade: 20,
}




function momentoAleatorio() {
  const randompro4 = Math.floor(Math.random() * periodo.length);

  const momentoInicial = periodo[randompro4];
  return momentoInicial;
}

const nome = prompt(`Digite seu nome ou deixe em branco para padrão`);
if (nome = void){
    console.log('nome padrão escolhido')
}else{
    console.log(`${nome} será o nome do bruxo.);  //será alterado depois

const nome = prompt("Digite seu nome para iniciar: "); // Jogador colocará seu nome para haver um rappot entre o jogo e o jogador

console.log(``)

const humor = [
  "Triste",
  "Feliz",
  "Frustrado",
  "Normal",
  "Estressado",
  "Euforico",
];

console.log(humor)
const taberna = (humor) => {
  console.log(`Bem-vindo a Taberna grande Bruxo!`);

  for (; ;) {

    let resphumor = prompt(`Como está se sentindo agora? `);

    if (resphumor !== "feliz") {

      let resphumor = prompt(`Como deseja melhora? `);
    } else {
      const irVila = prompt("Vamos reconstruir a vila? ")

      if (irVila === "sim") {
        
      let escolha = prompt(`Qual lugar você quer ir primeiro? Para ir a: 1-Centro da vila  2-Os muros  3-Torres de vigia  4-Docas 5-Taberna. `);

        docas();
    
        break
      }
    }
    
  }
};


const docas = () => {
console.log("só pra saber")
}

taberna();




