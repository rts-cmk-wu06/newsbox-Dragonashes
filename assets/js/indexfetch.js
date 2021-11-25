fetch('https://jsonplaceholder.typicode.com/users')
  .then(users => users.json())
  .then(users => {
    users.forEach(element => {
      const div1 = document.createElement("div")
      div1.classList.add("container", "placearticle")
      div1.setAttribute("id", element.id)
      const div2 = document.createElement("div")
      div2.classList.add("deleteitem")
      div2.textContent = "Delete"
      div2.innerHTML = "<img src='assets/image/icon1archive.svg'>"
      const div3 = document.createElement("div")
      div3.classList.add("jokeitem", "animate")
      // div3.textContent = element.name
      div3.innerHTML = "<img src='assets/image/profile2.svg' class='placearticleitem1'>" + element.name
      div1.appendChild(div2)
      div1.appendChild(div3)
      document.querySelector("main").appendChild(div1)
    });
  })