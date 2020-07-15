// add querySelectors
const form = document.querySelector('form')
const input = document.querySelector('#txtTaskName')
const btnDeleteAll = document.querySelector('#btnDeleteAll')
const taskList = document.querySelector('#task-list')

eventListeners()

function eventListeners(){
    //submit event
    form.addEventListener('submit', addNewItem)

    //delete one item
    taskList.addEventListener('click', deleteItem)

    //delete all
    btnDeleteAll.addEventListener('click', deleteAllItems)
}

// addNewItem function 

function addNewItem(e){

    if(input.value===''){
        alert('Add new item')
    }

    //create li
    const li = document.createElement('li')
    li.className='list-group-item list-group-item-secondary'
    li.appendChild(document.createTextNode(input.value))

    //create a
    const a = document.createElement('a')
    a.classList= 'delete-item float-right'
    a.setAttribute('href', '#')
    a.innerHTML= '<i class="fas fa-times"></i>'

    // a to li
    li.appendChild(a)
    
    // add li to ul

    taskList.appendChild(li)

    //clear input
    input.value=''

    e.preventDefault()
}

//deleteItem function

function deleteItem(e){

    if(e.target.className==='fas fa-times'){  //ıf I press the button

        e.target.parentElement.parentElement.remove()  // access to ul, if I press the button, delete ul (to reach button to ul, use 2 times parent element)
    }

    e.preventDefault()
}

//deleteAllItems function

function deleteAllItems(e){

    if(confirm('Are you sure')){
        taskList.innerHTML=''
    }
    e.preventDefault()
}
