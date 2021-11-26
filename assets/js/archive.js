JSON.parse(localStorage.getItem("deleteditems")).forEach((element) => {
  let result = JSON.parse(element)
  const div1 = document.createElement("div")
  div1.classList.add("container")
  div1.setAttribute("id", result.id)
  const div2 = document.createElement("div")
  div2.classList.add("deleteitem")
  div2.innerHTML = "<img src='assets/image/icon3bin.svg'>"
  const div3 = document.createElement("div")
  div3.classList.add("jokeitem", "animate")
  // div3.textContent = result.name
  div3.innerHTML = "<img src='assets/image/profile1.svg' class='placearticleitem1'>" + result.name
  div1.appendChild(div2)
  div1.appendChild(div3)
  document.querySelector("main").appendChild(div1)
})