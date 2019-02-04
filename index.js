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
  const new = document.create('li');
  new.value = retrieveEmployeeInformation();
  const list = document.querySelector('.employee-list');
  list.append(new);
}
