// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 23;
// if (x === 23) console.log(23);

// const calcage = birthyear => 2037 - birthyear;

// let abcxyz = 5471;
// console.log(abcxyz);


///////////////////////////////////////////

// CODING CHALLENGE ### 1

const data1 = [17, 21, 23];

const data2 = [12, 5, -5, 0, 4];
console.log(`...${data1[0]}'c...${data1[1]}'c...${data1[2]}'c...`);

const printCast = function (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++){
        str +=  `${arr[i]}'c in ${i + 1}days...`;
    }
    console.log('...'+ str);
}

printCast(data1)