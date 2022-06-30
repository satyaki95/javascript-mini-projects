const container = document.querySelector('.container');
const URL = 'https://picsum.photos/200/300?random=1';

function getRandNum(){
  return Math.floor(Math.random() * 100);
}


function loadImages(numImages =10){
    let i=0;
    while(i < numImages){
        const img = document.createElement('img');
        img.src = `${URL}${getRandNum()}`;
        container.appendChild(img);
        i++;
    }
}

loadImages();

window.addEventListener('scroll', () => {
    const {scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight ){

        console.log("i am at bottom");
        loadImages();
    }

});