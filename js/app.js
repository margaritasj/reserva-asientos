
// document.getElementsByClassName('premium').classList('activo-premium');

document.getElementById("reservar").addEventListener("click", reserve);

function reserve() {
    var option = prompt('¿En qué zona prefieres reservar tu asiento? \n 1. Primera clase \n 2. Económico');
    window.option.moveTo(0,150);

        if (option == 1){
                alert('Usted eligió Primera Clase');
        }else if (option == 2){
                alert('Usted eligió económico');
        }else{
                alert('número inválido, Por Favor intente de nuevo');
        }
}
