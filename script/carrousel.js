(function(){
    console.log('Début du carrousel')
   
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerieImg = elmGalerie.querySelectorAll("figure figure img")
    let elmCarrousel = document.querySelector('.carrousel')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure')
    let elmCarrousel__fermeture = document.querySelector('.carrousel__fermeture')
    let elmCarrousel__radio = document.querySelector('.carrousel__radio')
    console.log(elmGalerieImg[0].getAttribute('src'))
    let index = 0
    let ancien_index = -1
    compteur = 0
    
    for (const img of elmGalerieImg){
        img.dataset.index = compteur++
        ajouter_elmImg(img)
        ajouter_elmRadio()
        
        img.addEventListener('mousedown',function(){
        elmCarrousel.classList.add('carrousel__ouvrir')
        index = this.dataset.index
        affiche_carrousel_img()
        
    })
    }

    //////////////////////////////Ajouter _elmimg
    function ajouter_elmImg(img){
        let elmImg = document.createElement('img')
        elmImg.classList.add('carrousel__figure__img')
        elmImg.setAttribute('src', img.getAttribute('src'))
        elmCarrousel__figure.appendChild(elmImg)
        elmImg.dataset.index =index
    }


    function ajouter_elmRadio()
    {
        let elmRadio = document.createElement('input')
        elmRadio.setAttribute('type', 'radio')
        elmRadio.setAttribute('name', 'radImg')
        elmRadio.dataset.index = index++
        elmCarrousel__radio.appendChild(elmRadio)
        elmRadio.addEventListener('mousedown',function(){
            index = this.dataset.index
            affiche_carrousel_img()
        })
    }

    function affiche_carrousel_img(){
        if (ancien_index !== -1){
            elmCarrousel__figure.children[ancien_index].classList.remove('carrousel__figure__img--activer')
        }

        elmCarrousel__radio.children[index].checked = true;
        
        elmCarrousel__figure.children[index].classList.add('carrousel__figure__img--activer')
        ancien_index = index
    }
    
    
    elmCarrousel__fermeture.addEventListener('mousedown', function(){
        elmCarrousel.classList.remove('carrousel__ouvrir')

        })

    
})()