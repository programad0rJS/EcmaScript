const Data = {
    Frontend: 'HTML,CSS,JS',
    Backend: 'Angular'
}

const Entries = Object.entries(Data);
console.log(Entries);
console.log(Entries.length);




const Data = {
    Frontend: 'HTML,CSS,JS',
    Backend: 'Angular, React'
}

const Values = Object.values(Data);
console.log(Values);
console.log(Values.length);



const string = 'Hola Mundo ';
console.log(string.padStart(7, 'Hi'));
console.log(string.padEnd(12, '------'));

const Obj = {
    names: 'Oscar'

}

const Hello__Words = () => {
    return new Promise((Resolver, Reject) => {
        (true)
            ? setTimeout(() => Resolver('Hello__Word'), 3000)
            : Reject(new Error('Test Error'))
    });
};

const Hello_Async = async () => {
    const Saludar = await Hello__Words();

    console.log(Saludar);
}

Hello_Async();


const AnotherFunction = async () => {
    try {
        const Hello = await Hello__Words()
        console.log(Hello);
    } catch (err) {
        console.log(err);
    }
}
AnotherFunction();



