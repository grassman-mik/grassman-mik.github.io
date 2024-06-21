let venp = document.getElementById('1');
let klep = document.getElementById('2');
let ambp = document.getElementById('3');
let kaep = document.getElementById('4');
let lisp = document.getElementById('5');
let venb = document.getElementById('6');
let kleb = document.getElementById('7');
let ambb = document.getElementById('8');
let kaeb = document.getElementById('9');
let lisb = document.getElementById('10');

venb.addEventListener('click',() => {
    klep.style.display = 'none';
    ambp.style.display = 'none';
    kaep.style.display = 'none';
    lisp.style.display = 'none';
    venp.style.display = 'block';
    


})

kleb.addEventListener('click',() => {   
    venp.style.display = 'none';
    ambp.style.display = 'none';
    kaep.style.display = 'none';
    lisp.style.display = 'none';
    klep.style.display = 'block';
})

ambb.addEventListener('click',() => {

    klep.style.display = 'none';
    venp.style.display = 'none';
    kaep.style.display = 'none';
    lisp.style.display = 'none';
    ambp.style.display = 'block';
})

kaeb.addEventListener('click',() => {   
    klep.style.display = 'none';
    ambp.style.display = 'none';
    venp.style.display = 'none';
    lisp.style.display = 'none';
    kaep.style.display = 'block';
})

lisb.addEventListener('click',() => {
    klep.style.display = 'none';
    ambp.style.display = 'none';
    kaep.style.display = 'none';
    venp.style.display = 'none';
    lisp.style.display = 'block';
})

start();
window.addEventListener('resize', start);
var n;
function start(){
  n = 160+document.documentElement.clientWidth-1903;
  if(n<0)
    {       
        n=0;
    }
  console.log(n);
  
  venp.style.marginLeft = n+'px';
  klep.style.marginLeft = n+'px';
  ambp.style.marginLeft = n+'px';
  kaep.style.marginLeft = n+'px';
  lisp.style.marginLeft = n+'px';
}