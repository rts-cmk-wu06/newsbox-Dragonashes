fetch("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
  .then(response => response.json())
  .then(data => {
  document.querySelector("#genre1").innerHTML =
    "<div class=genreplacement><div class=genreborder><img src=assets/image/icon5genre.svg></div><h2>" +
      data.results[0].section +
    "</h2><img src=assets/image/icon7arrowdown.svg class=genreplacement-right></div>"
  data.results.forEach(myFunction);
  function myFunction(item, index) {
    if (item.section == "world") {
      document.querySelector("#world").innerHTML += `
        <div class="placearticle">
          <img src="assets/image/profile2.svg" class="placearticleitem1">
          <h3 class="placearticleitem2">${data.results[index].title}</h3>
          <span class="cardtext placearticleitem2">${data.results[index].abstract}</span>
        </div>
      `;
    }
  }
});
fetch("https://api.nytimes.com/svc/topstories/v2/health.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
  .then(response => response.json())
  .then(data => {
  document.querySelector("#genre2").innerHTML =
    "<div class=genreplacement><div class=genreborder><img src=assets/image/icon5genre.svg></div><h2>" +
    data.section +
    "</h2><img src=assets/image/icon7arrowdown.svg class=genreplacement-right></div>"
  data.results.forEach(myFunction);
  function myFunction(item, index) {
    if (item.section == "health" || item.section == "well") {
      document.querySelector("#health").innerHTML += `
        <div class="placearticle">
          <img src="assets/image/profile2.svg" class="placearticleitem1">
          <h3 class="placearticleitem2">${data.results[index].title}</h3>
          <span class="cardtext placearticleitem2">${data.results[index].abstract}</span>
        </div>
      `;
    }
  }
})
fetch("https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
  .then(response => response.json())
  .then(data => {
  document.querySelector("#genre3").innerHTML =
    "<div class=genreplacement><div class=genreborder><img src=assets/image/icon5genre.svg></div><h2>" +
      data.section +
    "</h2><img src=assets/image/icon7arrowdown.svg class=genreplacement-right></div>"
  data.results.forEach(myFunction);
  function myFunction(item, index) {
    if (item.section == "sports") {
      document.querySelector("#sports").innerHTML += `
        <div class="placearticle">
          <img src="assets/image/profile2.svg" class="placearticleitem1">
          <h3 class="placearticleitem2">${data.results[index].title}</h3>
          <span class="cardtext placearticleitem2">${data.results[index].abstract}</span>
        </div>
      `;
    }
  }
})
fetch("https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
  .then(response => response.json())
  .then(data => {
  document.querySelector("#genre4").innerHTML =
    "<div class=genreplacement><div class=genreborder><img src=assets/image/icon5genre.svg></div><h2>" +
      data.section +
    "</h2><img src=assets/image/icon7arrowdown.svg class=genreplacement-right></div>"
  data.results.forEach(myFunction);
  function myFunction(item, index) {
    if (item.section == "us") {
      document.querySelector("#politics").innerHTML += `
        <div class="placearticle">
          <img src="assets/image/profile2.svg" class="placearticleitem1">
          <h3 class="placearticleitem2">${data.results[index].title}</h3>
          <span class="cardtext placearticleitem2">${data.results[index].abstract}</span>
        </div>
      `;
    }
  }
})
fetch("https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=55NwTRr1fPA9ZChVHPonPlef6sRlaWGG")
  .then(response => response.json())
  .then(data => {
  document.querySelector("#genre5").innerHTML =
    "<div class=genreplacement><div class=genreborder><img src=assets/image/icon5genre.svg></div><h2>" +
      data.section +
    "</h2><img src=assets/image/icon7arrowdown.svg class=genreplacement-right></div>"
  data.results.forEach(myFunction);
  function myFunction(item, index) {
    if (item.section == "travel") {
      document.querySelector("#travel").innerHTML += `
        <div class="placearticle">
          <img src="assets/image/profile2.svg" class="placearticleitem1">
          <h3 class="placearticleitem2">${data.results[index].title}</h3>
          <span class="cardtext placearticleitem2">${data.results[index].abstract}</span>
        </div>
      `;
    }
  }
})