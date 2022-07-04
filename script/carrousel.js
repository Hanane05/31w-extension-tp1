(function(){
    console.log("début du carrousel");
    // let elmGalerie = document.querySelector(".galerie")
    // console.log(elmGalerie);

    let elmGalerie__img = document.querySelectorAll('.galerie figure img');
    console.log(elmGalerie__img);

    for(const img of elmGalerie__img){
        img.addEventListener('mousedown', function () {
            console.log(img.getAttribute('src'));
        })
    }
})()