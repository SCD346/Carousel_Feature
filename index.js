//Image array
const images = ['https://iili.io/dEedPf.png', 'https://iili.io/dEeHns.png', 'https://iili.io/dEeJMG.png', 'https://iili.io/dEe3F4.png']

let currentImgIndex = 0

//Setting image from images array
const mainImage = document.getElementById('mainImage')
//console.log(img)
mainImage.setAttribute('src', images[0])
//console.log(images[0])

//getter set up
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

console.log((images[3]))

//event listener set up
next.addEventListener('click', () => {
    //function to manipulate the images
    //console.log('next works')//logs to console when user clicks 'next' button
    //currentImgIndex += 1
        if(currentImgIndex >= images.length - 1){
            currentImgIndex = 0
        } else {
            currentImgIndex += 1
        }
    mainImage.setAttribute('src', images[currentImgIndex])
})


prev.addEventListener('click', () => {
    //function to manipulate the images
    console.log('prev works')//logs to console when user clicks 'next' button
    //currentImgIndex -= 1
    if (currentImgIndex <= 1) {
        currentImgIndex = 3
    } else {
        currentImgIndex -= 1
    } 
    mainImage.setAttribute('src', images[currentImgIndex])
})
