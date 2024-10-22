function toggleMode() {
     //if(html.classList.contains('light')) {
    //   html.classList.remove('light')
    //}else {
    // html.classList.add('light')
    //}
    const html = document.documentElement
    html.classList.toggle("light")
    
    //pegar a tag img 
    const img = document.querySelector("#profile img")

    //substituir a imagem
    if(html.classList.contains("light")) {
        //se tiver light mode, adicionar imagem light
        img.setAttribute("src", "./assets/avataradrilight.jpg")
    } else {
        //set tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avataradrian.jpg")
    }
    }
