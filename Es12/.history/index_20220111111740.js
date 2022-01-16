const string = 'Javascript es Una_Tec_E_e_eee_zo_yu_es_feo_ ';
const Rem = string.replace('Javascript', 'Python')
console.log(string);


// replaceAll es I_G_U_A_L  replace





class Message {
    #show(val) {
        console.log(val);
    };

    get #add(val){
        // ...
    }
}
const message_2 = new Message();


message_2.show('Hola Mundo ');


const Promise_1 = new Promise((Resolver, Reject) => Reject('1'));


const Promise_2 = new Promise((Resolver, Reject) => Reject('2'));


const Promise_3 = new Promise((Resolver, Reject) => Reject('3'));

Promise.any([Promise_1, Promise_2, Promise_3]) 
     .then(Re => console.log(Re));


class Any_Class {
    constructor(elements) {
        this.ref = new WeakRef(elements)
    }
    // {...}
}


let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);


let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);



let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);