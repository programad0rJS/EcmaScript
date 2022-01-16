const Btn = document.getElementById('Btn');


Btn.addEventListener('click', async function () {
   const modules = await import('./Files.js');
   modules.Saludando() 
});