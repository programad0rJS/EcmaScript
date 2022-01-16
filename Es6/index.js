function newFuncion(Name, age, Country) {
    var Name = Name || 'Josue';
    var age = age || 14;
    var Country = Country || 'MX';
    console.log(Name, age, Country);
};

// es6
function newFuncion_2(Nombre = 'Oscar', Edad = 32, Country = 'MS') {
    console.log(Nombre, Edad, Country);
};
newFuncion_2();
newFuncion_2('Ricado', '23', 'MX');



let Hello = 'Hello';
let Word = 'Word';
let EpicPharse = Hello + ' ' + Word;


let EpicPharse_2 = `${Hello} ${Word}`;


console.log(EpicPharse_2);





let Lorem = 'Josue Es Mas Guapo Que Zhonyu, Zhonyu Es Feo Horrible Y Tiene Cara de Poto, \n' + 'La Chica Lo Consideran Como Rey, Chicas Mongolas JEJEJ ASI Son Ellas, Nacieron asi';

// es6
let Lorem_2 = `Josue Es Mas Guapo Que Zhonyu, Zhonyu Es Feo Horrible Y Tiene Cara de Poto, 
La Chica Lo Consideran Como Rey, Chicas Mongolas JEJEJ ASI Son Ellas, Nacieron asi
`;



let Person = {
    'Name': 'Oscar',
    'Edad': 24,
    'Country': 'MX'
};

console.log(Person.Name, Person.Edad);

// es6
let { Name, age } = Person;
console.log(Name, age);




let Team1 = ['Oscar', 'Julian', 'Ricardo'];

let Team_2 = ['Daniela', 'Juliana', 'Camila'];

// es6
let Education = ['David', ...Team1, ...Team_2];

console.log(Education);






let Name = 'Coke';
let Edad = 15;
// es5
obj = { Name: Name, Edad: Edad };

// es6 
Obj_2 = { Name, Edad };



const Nombre_Es = [
    { Name_Nombre: 'Oscar', Edad: 42 },

    { Name_Nombre: 'Josue', Edad: 12 },

    { Name_Nombre: 'Leo', Edad: 8 },
]


let Listas = Nombre_Es.map(function (e) {
    console.log(e.Name_Nombre);
});



 let Listas_2 = Nombre_Es.map(e =>
     console.log(e.Name_Nombre)
 );


class Calculator {
    constructor () {
        this.valueA = 0;
        this.valueB = 0;
    }

    Sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB
    }

}
  
const Calc = new Calculator();

console.log(Calc.Sum(6,6));


import { Saludar } from './Module';
Saludar()






function* Hello_Word() {
    if (true) {
        yield 'Hello, ';
    }

    if (true) {
        yield 'Word'
    }
};
const GeneratorHello = Hello_Word();
console.log(GeneratorHello.next().value);