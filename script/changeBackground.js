document.querySelector('button').addEventListener('click', changeBg)


function changeBg (){
    const arrColorCodes = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let color="#";
    for(i=0; i < 6; i++){
      //  color += arrColorCodes[Math.floor(Math.random()*16)];
      color += arrColorCodes[Math.floor(Math.random()*16)];
    }
   document.querySelector('h2').textContent = "Color code: " + color;
document.body.style.backgroundColor = color;
}

//setInterval(changeBg, 3000);