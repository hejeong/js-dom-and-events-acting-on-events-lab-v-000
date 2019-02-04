function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation(){
  return $('input').val();
}

function addNewElementAsLi(){
  let newLi = document.createElement('li');
  newLi.innerHTML = retrieveEmployeeInformation();
  const list = document.querySelector('.employee-list');
  list.appendChild(newLi);
}

function addNewLiOnClick(){
  let submit = document.querySelector("input[type = 'submit']");
  submit.addEventListener('click', function(){
    addNewElementAsLi();
    document.querySelector('input').value = '';
  })
  
}
