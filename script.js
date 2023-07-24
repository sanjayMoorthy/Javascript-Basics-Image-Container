// let parent = document.querySelector(".parentImg")

// let childImg = document.querySelectorAll(".childImg")


// for(let i=0;i<childImg.length;i++){
//     childImg[i].addEventListener("click",()=>{
//         for(let k=0;k<childImg.length;k++){
//             childImg[k].classList.remove("active")
//         }
//         childImg[i].classList.add("active")
//         changeImg()

//     })
// }

// function changeImg(){
//     for(let j=0;j<childImg.length;j++){{
//         if(childImg[j].classList.contains("active")){
//             parent.src = childImg[j].src
//         }
//     }}
// }


// let natureImg = document.getElementsByClassName("childImg")

// for(let i=0; i<natureImg.length; i++){
//     natureImg[i].addEventListener("click",()=>{
//         let mainImage_container = document.querySelector(".imageMain")
//         let natureView = document.querySelector(".natureView")
//         let natureImg_list = document.querySelector(".natureImage_list")
//         let nuimg = document.querySelector(".nature-1")
//         mainImage_container.style.display="none"
//         natureView.style.display="block"
//         natureView.append(natureImg[i])
//         natureImg_list.append()

//     })
// }

let images = document.querySelectorAll(".childImg")
let childImges = document.querySelector(".childImgDiv")
let page1 = document.querySelector(".page1")
let page2 = document.querySelector(".page2")
let parent = document.querySelector(".parent")



let previousButton = document.querySelector("#leftBtn")
let nextButton = document.querySelector("#rightBtn")
let closeButton = document.querySelector("#closeBtn")

// for count ++ html tag to arry 
let arrayImages = []

// loop for get a all image in html to javascript
for (let i = 0; i < images.length; i++) {
    arrayImages.push(images[i])

    //create a img tag to uppend  html to divTag
    let createImg = document.createElement("img")
    createImg.setAttribute("class","childIMGS")
    createImg.src = images[i].src
    childImges.append(createImg)

    createImg.addEventListener("click", (e) => {
        
        let imgs = document.querySelectorAll(".childIMGS")
        for (let s = 0; s < imgs.length; s++) {
            imgs[s].classList.remove("active")
        }
        e.target.classList.add("active")
        parent.src = createImg.src

    })
}

let imgelament = document.getElementsByClassName("childIMGS")
// console.log(imgelament)

document.querySelector(".nature").addEventListener("click", (e) => {
    page1.style.display = "none"
    page2.style.display = "block"
    parent.src = e.target.src
})


let count = 0 
nextButton.addEventListener("click",()=>{
    count++
    // console.log(count);
    if(count>arrayImages.length-1){
        count = 0
    }
    parent.src = arrayImages[count].src

    for(let r=0; r<imgelament.length; r++){
        if(parent.src == imgelament[r].src){
            imgelament[r].classList.add("active")
        }
        else{
            imgelament[r].classList.remove("active")
        }
    }
})


previousButton.addEventListener("click",()=>{
    count--
    // console.log(count);
    if(count< 0){
       count = arrayImages.length-1
    }
    parent.src = arrayImages[count].src

    for(let r=0; r<imgelament.length; r++){
        if(parent.src == imgelament[r].src){
            imgelament[r].classList.add("active")
        }
        else{
            imgelament[r].classList.remove("active")
        }
    }

})

closeButton.addEventListener("click",()=>{
    page1.style.display = "block"
    page2.style.display = "none"
})