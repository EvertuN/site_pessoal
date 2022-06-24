//alert('Clube de Regatas do Flamengo!!!');
/*
let t1 = document.getElementById('titulo');
t1.innerHTML = 'Futsal';
//t1.style.border = '2px solid red';
t1.style.fontSize = '70pt';
t1.style.backgroundColor = 'black'
t1.style.color = 'white'
t1.style.textAlign = 'center'
*/

//segunda forma
if(descricao.innerHTML.length > 100) {
    alert('Você tem muito texto neste parágrafo!!!');
    descricao.style.color = 'red';
}

//terceira forma de seleção
let l1 = document.querySelector('#linha1');
l1.style.backgroundColor = 'red';

let itens = document.getElementsByTagName('li');
console.log(itens[8]);

let itens_acoes = document.querySelectorAll('#lista_acoes li');
console.log(itens_acoes);

let mensagem = '';
for(let i=0; i<itens.length; i++){
    mensagem += itens[i].innerHTML + "\n";
}
alert(mensagem);

mensagem = '';
itens_acoes.forEach(function(l,i){
    mensagem += l + '-' + l.innerHTML + '\n'
});
alert(mensagem);


let t1 = document.getElementById('titulo');
texto_ant = t1.innerHTML;
tam_fonte = t1.style.fontSize;

t1.onmouseover = function(){
t1.innerHTML = 'Futsal';
//t1.style.border = '2px solid red';
t1.style.fontSize = '70pt';
t1.style.backgroundColor = 'black'
t1.style.color = 'white'
t1.style.textAlign = 'center'
}
t1.onmouseout = function(){
    t1.innerHTML = texto_ant;
    t1.style.border = 'none';
    t1.style.fontSize = tam_fonte;

}

itens_acoes.forEach(function(it){
    it.ondblclick = function(e){
        e.preventDefault();
        let v1 = Math.floor(Math.random()*255);
        let v2 = Math.floor(Math.random()*255);
        let v3 = Math.floor(Math.random()*255);
        it.style.backgroundColor = 'rgb(' + v1 + ',' + v2 + ',' + v3 + ')'; 
    }
});