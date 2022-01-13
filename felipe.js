function edad(ed,nomb) {
    if (ed>17 && ed <30) {
        return  '¡felicidades, '+nomb +' cumples con los requisitos par ser aceptado en el Bootcamp Java Full Stack de Generation!'
    } else {
        return 'no cumples con los requisistos para el programa'        
    }
}
function eje() {
    alert("este programa es para saber si cumples con los requisitos")
    var name=prompt('ingresa tu nombre')
    alert('bienbenido'+name)
    var eda=prompt('ingresa tu edad')
     alert(edad(eda,nom))
    console.log(name,eda)
}
eje()