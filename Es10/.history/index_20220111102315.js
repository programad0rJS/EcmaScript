let Arrays = [1,2,3, [1,2,3, [1,2,3]]];


console.log(Arrays.flat(2));







let Arrays = [1,2,3,4,5];


console.log(Arrays.flatMap(values => [values, values * 2]));





let Hello_Words = '        HELLO_WORD';


console.log(Hello_Words.trimStart()); 


let Hello_Words = 'Hello_Word                 ';

console.log(Hello_Words.trimEnd());















try {
    
} catch  {
    
}


let Entries = [['Name', 'Josue'], ['Age', 12]];


console.log(Object.fromEntries(Entries));