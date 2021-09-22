// object - literal
const student = {
  nim: 105011810001,
  regNo: 's180001',
  prodi: 'SI',
  faculty: 'FIK',
  firstName: 'John',
  lastName: 'Doe',
  gender: 'M',
  isRegistered: true,
  address: {
    city: 'Airmadidi',
    postalCode: 95371,
    province: 'Sulawesi Utara'
  },
  hobbies: ['berenang', 'traveling', 'membaca']
};

// console.log(student?.address?.street);

// optional chaining: ?.

// destructuring
console.log(student.firstName);

const {firstName, gender, address: {province}} = student;
console.log(student.address.province);
console.log(province);
