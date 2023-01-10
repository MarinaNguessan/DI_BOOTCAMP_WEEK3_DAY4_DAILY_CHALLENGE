/* Création du tabelau vide */
const tasks = [];
let divTasks = document.getElementsByClassName('listTasks')[0];
console.log(divTasks)

/* Creation de la fonction */



function addTask(event){
    event.preventDefault()
    let formInput = document.getElementById('Input');
   // let baliseButton = document.getElementById('formButton')
    console.log(tasks)
    if(formInput.value != ""){
        tasks.push(formInput.value);
        
    }
     // ajout du tableau dans la <div class="listTasks"></div>
     let paragraph = document.createElement('p');
     let text = document.createTextNode(formInput.value) 
    let icone = document.createElement('i')
     icone.classList.add("fa-solid", "fa-x")
     
     icone.addEventListener('click' , function(event){
        divTasks.removeChild(event.target.parentElement)
     })
    let check = document.createElement('input')
    check.setAttribute('type', 'checkbox' )
    check.addEventListener('input', done)
    paragraph.appendChild(icone);
    paragraph.appendChild(check);
    paragraph.appendChild(text);
     divTasks.appendChild(paragraph);
     formInput.value = ''; 
      

};

function done(even){
    let paragraph = even.target.closest('p')  
    console.log(paragraph.lastElementChild)
    if(even.target.checked == true){
        paragraph.classList.add("souligne")  
        
   }
   else{
    paragraph.classList.remove("souligne")
   }
    
  };

  let AllIconeDelete = document.getElementsByClassName("fa-solid")
  console.log(AllIconeDelete)

 function remove(even){
     
  }