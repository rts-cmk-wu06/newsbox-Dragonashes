var checked1 = JSON.parse(localStorage.getItem('checkbox1zaal1'))
var checked2 = JSON.parse(localStorage.getItem('checkbox1zaal2'))
var checked3 = JSON.parse(localStorage.getItem('checkbox1zaal3'))
var checked4 = JSON.parse(localStorage.getItem('checkbox1zaal4'))
var checked5 = JSON.parse(localStorage.getItem('checkbox1zaal5'))
if (checked1 == true) {
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