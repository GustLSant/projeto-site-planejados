const div_imagem_expandida = document.getElementById("container-imagens-g")
const img_element = document.getElementById("container-ig__img")

const imgs_pequenas = [
    "url('imagens/planejados/imagens_pequenas/00-pequena.jpg')",
    "url('imagens/planejados/imagens_pequenas/01-pequena.jpg')",
    "url('imagens/planejados/imagens_pequenas/02-pequena.jpg')",
    "url('imagens/planejados/imagens_pequenas/03-pequena.jpg')",
    "url('imagens/planejados/imagens_pequenas/04-pequena.jpg')",
    "url('imagens/planejados/imagens_pequenas/05-pequena.jpg')",
    "url('imagens/planejados/imagens_pequenas/06-pequena.jpg')",
    "url('imagens/planejados/imagens_pequenas/07-pequena.jpg')",
    "url('imagens/planejados/imagens_pequenas/08-pequena.jpg')",
    "url('imagens/planejados/imagens_pequenas/09-pequena.jpg')",
    "url('imagens/planejados/imagens_pequenas/10-pequena.jpg')",
    "url('imagens/planejados/imagens_pequenas/11-pequena.jpg')"

]
const imgs_grandes = [
    "imagens/planejados/imagens_grandes/00-grande.jpg",
    "imagens/planejados/imagens_grandes/01-grande.jpg",
    "imagens/planejados/imagens_grandes/02-grande.jpg",
    "imagens/planejados/imagens_grandes/03-grande.jpg",
    "imagens/planejados/imagens_grandes/04-grande.jpg",
    "imagens/planejados/imagens_grandes/05-grande.jpg",
    "imagens/planejados/imagens_grandes/06-grande.jpg",
    "imagens/planejados/imagens_grandes/07-grande.jpg",
    "imagens/planejados/imagens_grandes/08-grande.jpg",
    "imagens/planejados/imagens_grandes/09-grande.jpg",
    "imagens/planejados/imagens_grandes/10-grande.jpg",
    "imagens/planejados/imagens_grandes/11-grande.jpg"
]

var idx_imagem_atual = 0


config_imagens_pequenas()


function resize_pagina(){
    // if(window.innerWidth < window.innerHeight){
    //     img_element.classList.add("mobile")
    //     console.log("mobile")
    // }
    // else{
    //     console.log("pc")
    //     img_element.classList.remove("mobile")
    // }
    //element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;

    // console.log(img_element.clientWidth)
    // console.log(window.innerWidth)
    // if(img_element.clientWidth > window.innerWidth){
    //      img_element.classList.add("mobile")
    //     console.log("imagem maior q tela")
    // }
    // else{
    //     console.log("imagem menor q tela")
    //     // img_element.classList.remove("mobile")
    // }
}


function config_imagens_pequenas(){
    var inicio_id = "main__imagem-"

    for (let count=0; count<12; count++){
        if(count < 10){
            var div = document.getElementById(inicio_id+"0"+count)
            div.style.backgroundImage = imgs_pequenas[count]
        }
        else{
            var div = document.getElementById(inicio_id+count)
            div.style.backgroundImage = imgs_pequenas[count]
        }   
    }
}


function click_div_expandivel(_id_descricao){
    document.getElementById(_id_descricao).classList.toggle("ativo")
}


function click_imagem(_id_imagem){
    idx_imagem_atual = _id_imagem
    div_imagem_expandida.classList.add("ativo")
    img_element.src = imgs_grandes[_id_imagem]
}


function click_fechar_imagem(){
    div_imagem_expandida.classList.remove("ativo")
}


function click_mudar_imagem(_direcao){
    var idx_max = imgs_pequenas.length -1

    if(_direcao == -1){
        if(idx_imagem_atual == 0){
            idx_imagem_atual = idx_max
            img_element.src = imgs_grandes[idx_imagem_atual]
        }
        else{
            idx_imagem_atual -= 1
            img_element.src = imgs_grandes[idx_imagem_atual]
        }
    }
    else{
        if(idx_imagem_atual == idx_max){
            idx_imagem_atual = 0
            img_element.src = imgs_grandes[idx_imagem_atual]
        }
        else{
            idx_imagem_atual += 1
            img_element.src = imgs_grandes[idx_imagem_atual]
        }
    }
}
