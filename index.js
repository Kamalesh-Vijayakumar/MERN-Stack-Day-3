import { generate, count } from "random-words"
console.log(generate(10));


import generateName from 'sillyname';

const sillyName = generateName();
for(var i = 0;i<10;i++){
    var sillyname = generateName();
    console.log(sillyname);
}
