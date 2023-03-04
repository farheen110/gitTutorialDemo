
function saveTolocalStorage(event){
   event.preventDefault();
   const name = event.target.name.value;
   const email = event.target.email.value;
   const phonenumber = event.target.phonenumber.value;

   const obj = {
      name,
      email, 
      phonenumber
   }
   localStorage.setItem(obj.email, JSON.stringify(obj));
   showUserOnScreen(obj);
}
function showUserOnScreen(obj){
   const parentElement = document.getElementById('listOfitems');
   const childElement = document.createElement('li');
   childElement.textContent = obj.name + ' - ' + obj.email + ' - ' + obj.phonenumber 

   //adding deleteBtn
   const deleteBtn = document.createElement('input');
   deleteBtn.type = "button";
   deleteBtn.value = 'Delete';
   deleteBtn.onclick = () => {
      localStorage.removeItem(obj.email);
      localStorage.removeChild(childElement);
   }

   //adding editBtn
   const editBtn = document.createElement('input');
   editBtn.type = "button";
   editBtn.value = 'Edit';

   editBtn.onclick = () => {
      localStorage.removeItem(obj.email);
      localStorage.removeChild(childElement);
      
   }
   childElement.appendChild(deleteBtn);
   childElement.appendChild(editBtn);
   parentElement.appendChild(childElement);
   
   
} 