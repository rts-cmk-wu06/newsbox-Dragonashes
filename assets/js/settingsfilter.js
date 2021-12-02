function save1() {
  var checkbox = document.querySelector('#checkbox1zaal1')
  localStorage.setItem('checkbox1zaal1', checkbox.checked)
}
function load1() {
  var checked = JSON.parse(localStorage.getItem('#checkbox1zaal1'))
  document.querySelector("#checkbox1zaal1").checked = checked
}
load1();

function save2() {
  var checkbox = document.querySelector('#checkbox1zaal2')
  localStorage.setItem('checkbox1zaal2', checkbox.checked)
}
function load2() {
  var checked = JSON.parse(localStorage.getItem('#checkbox1zaal2'))
  document.querySelector("#checkbox1zaal2").checked = checked
}
load2();

function save3() {
  var checkbox = document.querySelector('#checkbox1zaal3')
  localStorage.setItem('checkbox1zaal3', checkbox.checked)
}
function load3() {
  var checked = JSON.parse(localStorage.getItem('#checkbox1zaal3'))
  document.querySelector("#checkbox1zaal3").checked = checked
}
load3();

function save4() {
  var checkbox = document.querySelector('#checkbox1zaal4')
  localStorage.setItem('checkbox1zaal4', checkbox.checked)
}
function load4() {
  var checked = JSON.parse(localStorage.getItem('#checkbox1zaal4'))
  document.querySelector("#checkbox1zaal4").checked = checked
}
load4();

function save5() {
  var checkbox = document.querySelector('#checkbox1zaal5')
  localStorage.setItem('checkbox1zaal5', checkbox.checked)
}
function load5() {
  var checked = JSON.parse(localStorage.getItem('#checkbox1zaal5'))
  document.querySelector("#checkbox1zaal5").checked = checked
}
load5();