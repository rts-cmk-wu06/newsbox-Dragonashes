// fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
//   .then(users => users.json())
//   .then(users => {
//     console.log(users)
//     console.log(users.results[0])
//     users.forEach(element => {
//       const div1 = document.createElement("div")
//       div1.classList.add("container")
//       div1.setAttribute("id", element.id)
//       const div2 = document.createElement("div")
//       div2.classList.add("deleteitem")
//       div2.textContent = "Delete"
//       div2.innerHTML = "<img src='assets/image/icon1archive.svg'>"
//       const div3 = document.createElement("div")
//       div3.classList.add("jokeitem", "animate")
//       div3.textContent = element.name
//       // div3.innerHTML = "<img src='assets/image/profile2.svg' class='placearticleitem1'>" + element.name
//       div1.appendChild(div2, div3)
//       document.querySelector("main").appendChild(div1)
//     });
//   })

var checked1 = JSON.parse(localStorage.getItem('checkbox1zaal1'))
var checked2 = JSON.parse(localStorage.getItem('checkbox1zaal2'))
var checked3 = JSON.parse(localStorage.getItem('checkbox1zaal3'))
var checked4 = JSON.parse(localStorage.getItem('checkbox1zaal4'))
var checked5 = JSON.parse(localStorage.getItem('checkbox1zaal5'))
console.log(checked1)
console.log(checked2)
console.log(checked3)
console.log(checked4)
if (checked1 == true) {
  // data.results[0].section
  fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
    .then(response => response.json())
    .then(data => {
      document.querySelector("#genre1").innerHTML = `
        <div class=genreplacement>
          <div class=genreborder>
            <img src=assets/image/icon5genre.svg>
          </div>
          <h2>${data.section}</h2>
          <img src=assets/image/icon7arrowdown.svg class=genreplacement-right>
        </div>
      `
      data.results.forEach(myFunction);
      function myFunction(item, index) {
        if (item.section == "world") {
          // #world
          document.querySelector("#world").innerHTML += `
            <div class="container" id="${index}">
              <div class=deleteitem><img src='assets/image/icon1archive.svg'></div>
              <div class="jokeitem animate">
                <img src="assets/image/profile2.svg" class="placearticleitem1">
                <h3 class="placearticleitem2">${data.results[index].title}</h3>
                <span class="cardtext placearticleitem2">${data.results[index].abstract}</span>
              </div>
            </div>
          `;
        }
      }
    });
}



if (checked2 == true) {
  // data.results[0].section
  fetch("https://api.nytimes.com/svc/topstories/v2/health.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
    .then(response => response.json())
    .then(data => {
      document.querySelector("#genre2").innerHTML = `
        <div class=genreplacement>
          <div class=genreborder>
            <img src=assets/image/icon5genre.svg>
          </div>
          <h2>${data.section}</h2>
          <img src=assets/image/icon7arrowdown.svg class=genreplacement-right>
        </div>
      `
      data.results.forEach(myFunction);
      function myFunction(item, index) {
        if (item.section == "health") {
          // #world
          document.querySelector("#health").innerHTML += `
            <div class="container" id="${index}">
              <div class=deleteitem2><img src='assets/image/icon1archive.svg'></div>
              <div class="jokeitem animate">
                <img src="assets/image/profile2.svg" class="placearticleitem1">
                <h3 class="placearticleitem2">${data.results[index].title}</h3>
                <span class="cardtext placearticleitem2">${data.results[index].abstract}</span>
              </div>
            </div>
          `;
        }
      }
    });
}














if (checked3 == true) {
  // data.results[0].section
  fetch("https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
    .then(response => response.json())
    .then(data => {
      document.querySelector("#genre3").innerHTML = `
        <div class=genreplacement>
          <div class=genreborder>
            <img src=assets/image/icon5genre.svg>
          </div>
          <h2>${data.section}</h2>
          <img src=assets/image/icon7arrowdown.svg class=genreplacement-right>
        </div>
      `
      data.results.forEach(myFunction);
      function myFunction(item, index) {
        if (item.section == "sports") {
          // #world
          document.querySelector("#sports").innerHTML += `
            <div class="container" id="${index}">
              <div class=deleteitem2><img src='assets/image/icon1archive.svg'></div>
              <div class="jokeitem animate">
                <img src="assets/image/profile2.svg" class="placearticleitem1">
                <h3 class="placearticleitem2">${data.results[index].title}</h3>
                <span class="cardtext placearticleitem2">${data.results[index].abstract}</span>
              </div>
            </div>
          `;
        }
      }
    });
}















if (checked4 == true) {
  // data.results[0].section
  fetch("https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
    .then(response => response.json())
    .then(data => {
      document.querySelector("#genre4").innerHTML = `
        <div class=genreplacement>
          <div class=genreborder>
            <img src=assets/image/icon5genre.svg>
          </div>
          <h2>${data.section}</h2>
          <img src=assets/image/icon7arrowdown.svg class=genreplacement-right>
        </div>
      `
      data.results.forEach(myFunction);
      function myFunction(item, index) {
        if (item.section == "us") {
          // #world
          document.querySelector("#politics").innerHTML += `
            <div class="container" id="${index}">
              <div class=deleteitem2><img src='assets/image/icon1archive.svg'></div>
              <div class="jokeitem animate">
                <img src="assets/image/profile2.svg" class="placearticleitem1">
                <h3 class="placearticleitem2">${data.results[index].title}</h3>
                <span class="cardtext placearticleitem2">${data.results[index].abstract}</span>
              </div>
            </div>
          `;
        }
      }
    });
}










if (checked5 == true) {
  // data.results[0].section
  fetch("https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
    .then(response => response.json())
    .then(data => {
      document.querySelector("#genre5").innerHTML = `
        <div class=genreplacement>
          <div class=genreborder>
            <img src=assets/image/icon5genre.svg>
          </div>
          <h2>${data.section}</h2>
          <img src=assets/image/icon7arrowdown.svg class=genreplacement-right>
        </div>
      `
      data.results.forEach(myFunction);
      function myFunction(item, index) {
        if (item.section == "travel") {
          // #world
          document.querySelector("#travel").innerHTML += `
            <div class="container" id="${index}">
              <div class=deleteitem2><img src='assets/image/icon1archive.svg'></div>
              <div class="jokeitem animate">
                <img src="assets/image/profile2.svg" class="placearticleitem1">
                <h3 class="placearticleitem2">${data.results[index].title}</h3>
                <span class="cardtext placearticleitem2">${data.results[index].abstract}</span>
              </div>
            </div>
          `;
        }
      }
    });
}







// fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
//   .then(response => response.json())
//   .then(data => {
//   document.querySelector("#genre1").innerHTML = `
//     <div class=genreplacement>
//       <div class=genreborder>
//         <img src=assets/image/icon5genre.svg>
//       </div>
//       <h2>${data.results[0].section}</h2>
//       <img src=assets/image/icon7arrowdown.svg class=genreplacement-right>
//     </div>
//   `
//   data.results.forEach(myFunction);
//   function myFunction(item, index) {
//     if (item.section == "world") {
//       document.querySelector("#world").innerHTML += `
//         <div class="placearticle">
//           <img src="assets/image/profile2.svg" class="placearticleitem1">
//           <h3 class="placearticleitem2">${data.results[index].title}</h3>
//           <span class="cardtext placearticleitem2">${data.results[index].abstract}</span>
//         </div>
//       `;
//     }
//   }
// });
// fetch("https://api.nytimes.com/svc/topstories/v2/health.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
//   .then(response => response.json())
//   .then(data => {
//     document.querySelector("#genre2").innerHTML = `
//     <div class=genreplacement>
//       <div class=genreborder>
//         <img src=assets/image/icon5genre.svg>
//       </div>
//       <h2>${data.section}</h2>
//       <img src=assets/image/icon7arrowdown.svg class=genreplacement-right>
//     </div>
//   `
//     data.results.forEach(myFunction);
//     function myFunction(item, index) {
//       if (item.section == "health" || item.section == "well") {
//         document.querySelector("#health").innerHTML += `
//         <div class="placearticle">
//           <img src="assets/image/profile2.svg" class="placearticleitem1">
//           <h3 class="placearticleitem2">${data.results[index].title}</h3>
//           <span class="cardtext placearticleitem2">${data.results[index].abstract}</span>
//         </div>
//       `;
//       }
//     }
//   })
// fetch("https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
//   .then(response => response.json())
//   .then(data => {
//     document.querySelector("#genre3").innerHTML = `
//     <div class=genreplacement>
//       <div class=genreborder>
//         <img src=assets/image/icon5genre.svg>
//       </div>
//       <h2>${data.section}</h2>
//       <img src=assets/image/icon7arrowdown.svg class=genreplacement-right>
//     </div>
//   `
//     data.results.forEach(myFunction);
//     function myFunction(item, index) {
//       if (item.section == "sports") {
//         document.querySelector("#sports").innerHTML += `
//         <div class="placearticle">
//           <img src="assets/image/profile2.svg" class="placearticleitem1">
//           <h3 class="placearticleitem2">${data.results[index].title}</h3>
//           <span class="cardtext placearticleitem2">${data.results[index].abstract}</span>
//         </div>
//       `;
//       }
//     }
//   })
// fetch("https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
//   .then(response => response.json())
//   .then(data => {
//     document.querySelector("#genre4").innerHTML = `
//     <div class=genreplacement>
//       <div class=genreborder>
//         <img src=assets/image/icon5genre.svg>
//       </div>
//       <h2>${data.section}</h2>
//       <img src=assets/image/icon7arrowdown.svg class=genreplacement-right>
//     </div>
//   `
//     data.results.forEach(myFunction);
//     function myFunction(item, index) {
//       if (item.section == "us") {
//         document.querySelector("#politics").innerHTML += `
//         <div class="placearticle">
//           <img src="assets/image/profile2.svg" class="placearticleitem1">
//           <h3 class="placearticleitem2">${data.results[index].title}</h3>
//           <span class="cardtext placearticleitem2">${data.results[index].abstract}</span>
//         </div>
//       `;
//       }
//     }
//   })
// fetch("https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
//   .then(response => response.json())
//   .then(data => {
//     document.querySelector("#genre5").innerHTML = `
//     <div class=genreplacement>
//       <div class=genreborder>
//         <img src=assets/image/icon5genre.svg>
//       </div>
//       <h2>${data.section}</h2>
//       <img src=assets/image/icon7arrowdown.svg class=genreplacement-right>
//     </div>
//   `
//     data.results.forEach(myFunction);
//     function myFunction(item, index) {
//       if (item.section == "travel") {
//         document.querySelector("#travel").innerHTML += `
//         <div class="placearticle">
//           <img src="assets/image/profile2.svg" class="placearticleitem1">
//           <h3 class="placearticleitem2">${data.results[index].title}</h3>
//           <span class="cardtext placearticleitem2">${data.results[index].abstract}</span>
//         </div>
//       `;
//       }
//     }
//   })