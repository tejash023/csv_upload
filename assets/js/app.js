$(document).ready(function() {
  $('#dataTable').DataTable();
});

const toggleMode = document.querySelector('.fa-moon');

toggleMode.addEventListener('click', function(){
  console.log('Hi');
})