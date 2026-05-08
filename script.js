// Carousel ke liye data array (har slide ka content)
const carouselData = [
    {
        img: "images/carousel-1.png", // product image
        bg: "#0cdfb5", // background color
        bgText : "images/background-text.png", // background text image
        title: "Sublime <br/> Lime" // heading (HTML break ke saath)
    },

    {
        img: "images/carousel-2.png",
        bg: "#e15f08",
        bgText : "images/background-text.png",
        title: "Caramel <br/> Crave"
    },

    {
        img: "images/carousel-3.png",
        bg: "#824e60",
        bgText : "images/background-text.png",
        title: "Creamy <br/> Coffee"
    }
]

// Current slide ka index (starting me 0 = first item)
let currentIndex = 0


// DOM elements select kar rahe hain (HTML se)
const carouselImg = document.querySelector(".carousel-img") // main image
const backgroundText = document.querySelector(".background-text") // background image
const textH1 = document.querySelector(".text h1") // heading text
const body = document.body // pura body (background change ke liye)


// Arrow buttons select
const leftArrow = document.querySelector(".bx-arrow-left-stroke") // left arrow
const rightArrow = document.querySelector(".bx-arrow-right-stroke") // right arrow


// Animation function (jab bhi slide change ho)
function AnimateElement(){

    // Pehle purani animation remove kar rahe hain
    carouselImg.classList.remove("animate-top")
    backgroundText.classList.remove("animate-right")
    textH1.classList.remove("animate-scale")


    // Force reflow (browser ko bolte hain reset kar animation)
    // iska matlab: animation dobara start ho sake
    void carouselImg.offsetWidth

    // Dobara animation add kar rahe hain (restart ho jayegi)
    carouselImg.classList.add("animate-top")
    backgroundText.classList.add("animate-right")
    textH1.classList.add("animate-scale")
}



// Carousel update function (UI change karta hai)
function updateCarousel(index){

    // Current index ka data uthaya
    const data = carouselData[index]

    // Image change
    carouselImg.src = data.img

    // Background text image change
    backgroundText.src = data.bgText

    // Heading change (innerHTML use kiya kyunki <br> hai)
    textH1.innerHTML = data.title

    // Body ka background color change
    body.style.background = data.bg

    // Animation run karo
    AnimateElement();
}


// Right arrow click event
rightArrow.addEventListener("click" , ()=>{

    // Index increase (next slide)
    // % ka use kiya looping ke liye (last ke baad first)
    currentIndex = (currentIndex + 1) % carouselData.length

    // UI update
    updateCarousel(currentIndex)
})

// Left arrow click event
leftArrow.addEventListener("click" , ()=>{

    // Index decrease (previous slide)
    // + length isliye taki negative na ho
    currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length

    // UI update
    updateCarousel(currentIndex)
})


// Initial load pe first slide show
updateCarousel(currentIndex)


// Auto slide change (har 4 second me)
setInterval(() => {

    // Next slide
    currentIndex = (currentIndex + 1) % carouselData.length

    // UI update
    updateCarousel(currentIndex)

}, 4000) // 4000ms = 4 seconds