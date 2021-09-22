// literal array
const faculties = [
  'Filsafat',
  'Pendidikan',
  'Ekonomi',
  'Pertanian',
  'Ilmu Komputer',
  'Keperawatan',
  'Pascasarjana'
];

// faculties.push('ASMIK', 'Kedokteran', 'Teknik');
// faculties.unshift('Kesehatan Masyarakat');

// console.log(faculties);
// console.log(faculties.length);

// faculties.pop();
// console.log(faculties);
// console.log(faculties.length);

// faculties.shift();
// console.log(faculties);
// console.log(faculties.length);


// high order functions
// forEach
// faculties.forEach(function(faculty) {
//   console.log(faculty);
// });

// map
const books = [
  {
    isbn: '123-1223-123',
    title: 'Book Title One',
    author: 'John Doe',
    isPublished: true
  },
  {
    isbn: '123-1223-153',
    title: 'Book Title Two',
    author: 'Merry Weather',
    isPublished: false
  },
  {
    isbn: '123-4332-123',
    title: 'Book Title Three',
    author: 'Alicia Palmer',
    isPublished: true
  },
];

// const bookTitles = books.map(function(buku) {
//   return `${buku.title} : ${buku.isbn}`;
// });

// console.log(bookTitles);


// filter
// const publishedBooks = books.filter(function(buku) {
//   return buku.isPublished === true;
// });

// console.log(publishedBooks);


// sort
console.log(faculties.sort());

const array1 = [1, 30, 4, 21, 100000];

array1.sort(function(a, b) {
  return b - a;
});

console.log(array1);


// reduce

const array2 = [];
array2[0] = 'Satu';
array2.push(2);

console.log(array2);
