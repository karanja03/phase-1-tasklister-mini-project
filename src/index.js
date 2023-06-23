document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById('create-task-form')
  let mainLi=document.getElementById('tasks')
  form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const input=document.querySelector("#new-task-description");
    const inputValue=input.value
    if(inputValue){
      const newList=document.createElement('li');
    const btn=document.createElement('button')
    btn.textContent=  'x'
    btn.addEventListener('click',deleteButton)
      newList.innerText=`${inputValue} `;
      newList.append(btn);
      
      mainLi.appendChild(newList)
      input.value='';
    }


   
})
})
function deleteButton(e){
  e.target.parentNode.remove()
}



