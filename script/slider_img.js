function slideImg(){
    const arr = ['pic1.jpg', 'pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg','pic6.jpg','pic7.jpg','pic8.jpg'];

    let img = arr[Math.floor(Math.random()*8)];
    document.querySelector('img').src = "./images/" + img;
}

document.querySelector('button').onclick = slideImg

// setInterval(
//     slideImg,    
//      3000
//      );