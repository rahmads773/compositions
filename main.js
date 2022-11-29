
document.querySelector("body").style.overflowX = "hidden"
// ============== responsive navbar =================

let menu = document.querySelector("header .menu")
let navbar = document.querySelector("header .navbar")
menu.addEventListener("click",(eo) => {
    navbar.classList.toggle("active")
    menu.classList.toggle("active")
})

// ==================== slider show =======================

let bullets =  document.querySelectorAll(".slider .bullets li")
let imgs =  document.querySelectorAll(".slider .imgs img")
// let imgArray = ["imgs/img3.webp","imgs/img1.jpg","imgs/img2.jpg","imgs/img3.jpg"]
let imgObj = {
 img1:{
  src:"imgs/img3.webp",
  data:"img-1"
 },
 img2:{
  src:"imgs/img2.jpg",
  data:"img-2"
 },
 img3:{
  src:"imgs/img3.jpg",
  data:"img-3"
 },
 img4:{
  src:"imgs/img3.jpg",
  data:"img-4"
 },
 img5:{
  src:"imgs/img2.jpg",
  data:"img-5"
 }
}
let imgObj1 = Object.entries(imgObj)

bullets.forEach((bullet,index) => {
  bullet.addEventListener("click",() => {
    bullets.forEach((bullet) => {
      bullet.classList.remove("active")
    })
    imgs.forEach((ele) => {
      ele.classList.remove("active")
    })
    bullet.classList.add("active")
   imgObj1.forEach((ele) => {
    if(ele[1].data === imgs[index].dataset.img){
      imgs[index].classList.add("active")
    }
   })
  })
})

let i = 0 
setInterval(() => {
if(i === imgs.length){
i = 0
}
  bullets.forEach((bullet) => {
    bullet.classList.remove("active")
  })
  imgs.forEach((ele) => {
    ele.classList.remove("active")
  })
  imgs[i].classList.add("active")
  bullets[i].classList.add("active")
  i++;

},4000)