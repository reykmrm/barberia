const array1 = [1,3,4]; 
const rta1 = array1.reduce((total, item) => total + item, 0);
console.log(rta1)

const array = ['🐸','🐱','🐹']; 
const rta2 = array.filter(item => item === '🐸');
console.log(rta2)

const array3 = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta3 = array3.flat();
console.log(rta3)

const array4 = [11,1,13,99,8]; 
array4.sort((a,b) => a - b);
console.log(array3)

const array5 = [['🐸','🐱'],'🐹', ['🐯']]; 
const rta = array5.flat();
console.log(rta)