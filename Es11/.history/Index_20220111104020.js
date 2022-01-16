const Btn = document.getElementById('Btn');


Btn.addEventListener('click', async function () {
   const modules = await import('./Files.js');
   modules.Saludando() 
});


const ABIGNUMBER = 90039204294n;

const AnotherBIGNUMBER = BigInt(90039204294);

console.log(ABIGNUMBER);
console.log(AnotherBIGNUMBER);