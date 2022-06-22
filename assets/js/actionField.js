const radioCreateField = document.getElementById('guest-create');
const searchField = document.getElementById('search-field');
const createField = document.getElementById('create-field');


function getActionField(){
 
    if(radioCreateField.checked){
        createField.style.display = 'block';
        searchField.style.display = 'none';
    }
    else{
        createField.style.display = 'none';
        searchField.style.display = 'block';
    }
}