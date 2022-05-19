var imagenes = ["imagenes/Banner-4.jpg", "imagenes/banner-5.jfif", "imagenes/banner-6.jpg" ]
var cont = 0;

function carrusel(contenedor){
    contenedor.addEventListener("click", e =>{
        var atras = contenedor.querySelector(".atras");
        var adelante = contenedor.querySelector(".adelante");
        var img = contenedor.querySelector("#imagen");
        var tgt = e.target;

        if (tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont-1];
                cont--;
            }else{
                img.src = imagenes[imagenes.length - 1];
                cont = imagenes.length - 1;
            }
        }else if (tgt == adelante){
            if(cont < imagenes.length-1){
                img.src = imagenes[cont+1];
                cont++;
            }else{
                img.src = imagenes[0];
                cont = 0;
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    var contenedor = document.querySelector(".contenedor");
    carrusel(contenedor);
});

$(document).ready(function(){
    var altura = $(".caja").offset().top;

    $(window).on("scroll", function(){
        if ($(window).scrollTop() > altura){
            $(".caja").addClass("menu-fixed");
        }else{
            $(".caja").removeClass("menu-fixed");
        }
    });
});