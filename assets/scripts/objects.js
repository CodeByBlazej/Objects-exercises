const movieList = document.getElementById('movie-list');

movieList.style.backgroundColor = 'red';
movieList.style.display = 'block';

let person = {
  'first name': 'Blazej',
  age: 30,
  hobbies: ['motorcycles', 'business'],
  greet: function() {
    alert('hi there!');
  }
};

// ...
// person.age = 31;
// person.age = undefined;
// person.age = null;
person.isAdmin = true;
delete person.age;

console.log(person['first name']);
