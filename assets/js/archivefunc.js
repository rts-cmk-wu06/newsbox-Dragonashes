let trash = []
let touchcoordstart
let touchcoordmove
var deletebtnwidth = window.screen.width * 40 / 100
let touchelement
let touchcoordend
if (localStorage.getItem("deleteditems")) {
  trash = JSON.parse(localStorage.getItem("deleteditems"))
}
document.querySelector("main").addEventListener("touchstart", (e) => {
  touchelement = e.target
  parentelement = e.target.parentElement
  touchcoordstart = Math.floor(e.touches[0].clientX)
  touchelement.addEventListener("touchmove", (e) => {
    if (touchelement.classList === 'deleteitem') {
      touchcoordmove = Math.floor(e.touches[0].clientX)
      if (
        touchcoordmove < touchcoordstart &&
        touchcoordmove > touchcoordstart - (deletebtnwidth)
      ) {
        touchelement.style.transform = `translateX(${touchcoordmove - touchcoordstart}px)`
      }
    }
  }, { passive: true })
  touchelement.addEventListener("touchend", (e) => {
    touchcoordend = Math.floor(e.changedTouches[0].clientX)
    if (touchcoordend < touchcoordstart - deletebtnwidth / 2) {
      touchelement.style.transform = `translateX(-${deletebtnwidth}px)`
    } else {
      touchelement.style.transform = `translateX(${e.target.offsetLeft})`
    }
  }, { passive: true })
  parentelement.querySelector(".deleteitem").addEventListener("click", (e) => {
    let userobject = {
      id: parentelement.id,
      name: parentelement.querySelector(".jokeitem").textContent
    }
    trash = trash.filter((item) => userobject.id != JSON.parse(item).id)
    if (trash.length > 0) {
      localStorage.setItem("deleteditems", JSON.stringify(trash))
    } else {
      localStorage.clear()
    }
    setTimeout(() => {
      parentelement.classList.add("fadeout")
    }, 0)
    setTimeout(() => {
      parentelement.remove()
    }, 900)
  }, { passive: true })
}, { passive: true })