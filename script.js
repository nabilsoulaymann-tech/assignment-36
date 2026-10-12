let hello  = document.getElementById('name');
let age = document.getElementById('age');
let nb = document.getElementById('nb');
let result = document.getElementById('result');
let ticketpr;


let tktname = document.getElementById('tktname');
let priceperticket = document.getElementById('prtkt');
let numberoftickets = document.getElementById('nbtkt');
let ttlprice = document.getElementById('ttlpr');

function Clear(){
    age.value='';
    hello.value='';
nb.value='';
tktname.innerText='';
priceperticket.innerHTML = '';
numberoftickets.innerHTML = '';
ttlprice.innerHTML = '';
}
function calculateTicket(){
    if (age.value < 12){
    ticketpr = 5;
};
if (age.value >= 12 && age.value >= 18){
    ticketpr = 7;
};
if (age.value > 18){
    ticketpr = 10;
};

tktname.innerText = hello.value+"'s Ticket";
priceperticket.innerHTML = 'Price per ticket:'+ ticketpr+'$';
numberoftickets.innerHTML = 'Number of tickets: '+nb.value;
ttlprice.innerHTML = 'total: '+eval(nb.value*ticketpr)+'$';
}

