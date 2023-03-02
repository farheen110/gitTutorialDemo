let submitBtn = document.getElementById('submit');
let form = document.getElementById('my-form');

form.addEventListener('submit', (e) => {
   e.preventDefault();
});

submitBtn.addEventListener('click', (e) => {
   let name = document.getElementById('name');
   let email = document.getElementById('email');
   name = name.value;
   localStorage.setItem('name', name);
   email = email.value;
   localStorage.setItem('email', email);

   
   let myObj = {
      name,
      email
         
 };

 let myObj_serialized = JSON.stringify(myObj);
 localStorage.setItem("myObj", myObj_serialized);
 let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));
 console.log(myObj_deserialized);                                                   

});
