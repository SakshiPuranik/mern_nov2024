const numbers=[1,2,3,4,5]
const doubled=numbers.map(num =>num*2);
console.log(doubled);

const filter_numbers=[1,2,3,4,5]
const even=filter_numbers.filter(num=>num%2);
console.log(even);

const sum_numbers=[1,2,3,4,5]
const sum=sum_numbers.reduce((accumalator,currentvalue)=> accumalator+currentvalue,0);
console.log(sum);

