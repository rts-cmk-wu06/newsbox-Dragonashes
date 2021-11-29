function save() {
  var checkbox = document.getElementById('checkbox1zaal1')
  localStorage.setItem('checkbox1zaal1', checkbox.checked)
}
function load() {
  var checked = JSON.parse(localStorage.getItem('checkbox1zaal1'))
  document.getElementById("checkbox1zaal1").checked = checked
}
load();