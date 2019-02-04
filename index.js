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
  newLi.value = retrieveEmployeeInformation();
  const list = document.querySelector('.employee-list');
  list.append(newLi);
}
