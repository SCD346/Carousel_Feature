//Image array
const images = ['https://cdnmedia.endeavorsuite.com/images/catalogs/16119/products/detail/79f37c96-a83e-4f60-8474-9629a900d922.jpg',
 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdFlkx8B6niGNN9-hUr8JIm6aHWLUW2oXnRQ&usqp=CAU',
 'https://s3-eu-west-1.amazonaws.com/crash.net/visordown.com/field/image/65212.jpg',
 'https://mcn-images.bauersecure.com/PageFiles/489837/BMW_RnineT_01.jpg']

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
