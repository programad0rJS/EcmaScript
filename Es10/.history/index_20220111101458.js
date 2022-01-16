let Arrays = [1,2,3, [1,2,3, [1,2,3]]];


console.log(Arrays.flat(2));







let Arrays = [1,2,3,4,5];


console.log(Arrays.flatMap(values => [values, values * 2]));