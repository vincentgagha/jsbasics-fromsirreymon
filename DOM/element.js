// create the element
const p = document.createElement('p');
const text = document.createTextNode('Please fill in the form below to add new prodi.');


p.className = 'description';
p.id = 'form-description';

p.appendChild(text);

console.log(p);



// insert element
const main = document.querySelector('#main');
const form = document.querySelector('form');


main.insertBefore(p, form);
