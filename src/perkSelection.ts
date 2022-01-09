// randomPerkGenerator...how it works:
// 1. variable perkOneOptions stores the keys from perk_1 object
// 2. randomInteger reads the random integer value generated by the getRndInteger function
// 3. perkOne[perkOneOptions[randomInteger]] value is located by the function...
// 4. i.e. randomInteger = 4...the function accesses object perkOne: , locates the 4th key option_4: ,
// 5. and produces the value of option_4: 'kill chain'

// const perkOne = {
//     option_0: 'double time',
//     option_1: 'cold blooded',
//     option_2: 'e.o.d.',
//     option_3: 'quick fix',
//     option_4: 'kill chain',
//     option_5: 'scavenger',
// };

// let perkOneOptions = Object.keys(perkOne)

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// let randomInteger = getRndInteger(0, perkOneOptions.length)
// console.log('option_ ', randomInteger)

// function randomPerkGenerator() {
//     let perkOneOptions = Object.keys(perkOne);
//     let perkOneRandomSelection = perkOne[perkOneOptions[randomInteger]]
//     return perkOneRandomSelection
// }
// console.log('perkOne: ' + randomPerkGenerator())


const perkOneOptions  = ['double time', 'cold blooded', 'e.o.d.', 'quick fix', 'kill chain', 'scavenger']

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomPerkGenerator() {
    const randomInt = getRndInteger(0, perkOneOptions.length)
    return perkOneOptions[randomInt]
}
console.log('perkOne: ' + randomPerkGenerator())