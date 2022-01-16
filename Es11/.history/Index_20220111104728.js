const Btn = document.getElementById('Btn');


Btn.addEventListener('click', async function () {
   const modules = await import('./Files.js');
   modules.Saludando() 
});


const ABIGNUMBER = 9007199254740991n;

const AnotherBIGNUMBER = BigInt(9007199254740991n);

console.log(ABIGNUMBER);
console.log(AnotherBIGNUMBER);




const Promise1 = new Promise((Resolver, reject)=> reject('Reject')); 

const Promise2 = new Promise((Resolver, reject)=> reject('Reject 1'));

const Promise3 = new Promise((Resolver, reject)=> reject('Reject 2'));


Promise.allSettled([Promise1, Promise2 , Promise3])
   .then(responder => console.log(responder));


   
   