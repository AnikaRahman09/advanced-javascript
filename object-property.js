const students = [
    {id: 21, name: 'Shila'},
    {id: 31, name: 'Mila'},
    {id: 41, name: 'Nila'},
    {id: 71, name: 'Lila'}
];

const names = students.map(student => student.name);
const ids = students.map(student => student.id);
console.log(names);
console.log(ids);


const bigger = students.filter(student => student.id > 40);
console.log(bigger);

const biggerOne = students.find(student => student.id > 40);
console.log(biggerOne);


