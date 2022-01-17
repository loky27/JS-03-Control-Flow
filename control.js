//dia de semana
const dayWeek=(day)=>{
    switch (day) {
        case 0:
            return 'domingo';
        case 1:
            return 'lunes';
        case 2:
            return 'martes';
        case 3:
            return 'miercoles'
        case 4:
            return 'jueves'
        case 5:
            return 'viernes'
        case 6:
            return 'savaso'
        default:
            return 'valor no valido'
    }
};
const transMonth=(string)=>(
    monthYear(string.toUpperCase())
)
const dayYear=(day)=>{
    switch (key) {
        case day>=0 && day<=31 :
            return 'Enero'
        case day>31 && day<=59:
            return 'Febrero'
        case day>59 && day<=90:
            return 'Marzo'
        case day>90 && day<=120:
            return 'Abril'
        case day>120 && day<=151:
            return 'Mayo'
        case day>151 && day<=181:
            return 'Junio'
        case day>181 && day<=212:
            return 'Julio'
        case day>212 && day<=243:
            return 'Agosto'
        case day>243 && day<=273:
            return 'Septiembre'
        case day>273 && day<=304:
            return 'Octubre'
        case day>304 && day<=334:
            return 'Noviembre'
        case day>334 && day<=365:
            return 'Diciembre'
        default:
            return 'Error'
    }
}
const monthYear=(month)=>{
switch (month) {
    case 'ENERO':
        return 0
    case 'FEBRERO':
        return 31
    case 'MARZO':
        return 59
    case 'ABRIL':
        return 90
    case 'MAYO':    
        return 120
    case 'JUNIO':    
        return 151
    case 'JULIO':    
        return 181
    case 'AGOSTO':    
        return 212
    case 'SEPTIEMBRE':    
        return 243
    case 'OCTUBRE':    
        return 273
    case 'NOVIEMBRE':    
        return 304
    case 'DICIEMBRE':    
        return 334
    default:
        return 'ERROR'
        
}
}
const strNumber=(a,callback)=>{
    if(typeof(a)=='number'){
        return callback(a)
    }
    else{
        return a
    }

}
//delimita dias del año
const vaDayNumber=(day)=>(day>=0 && day<=365 ? day :'error dayNumber')
//delimita dias de la semana
const vaFirstDayNumber=(day)=>(day>=0 && day<=6 ? day :'error firstDay')
//delimitar hora
const vaHour=(hour)=>(hour>=0 && hour<=23 ? hour :'error hour')
//transforma pm a 24hr
const transf=(string)=>(string[1]=='p'? parseInt(string[0])+12 : parseInt(string[0]))
//define horario
const dayHour=(hour)=>(hour>=9 && hour<=18 ? ' es horario comercial' : ' no es horario comercial')
//definir el dia
const defDay=(day)=>(day>=1 && day <=5 ? 'es un dia comercial' : 'no es un dia comercial')
//parte uno
const businessHours=(dayNumber,hourNumber)=>{
    return 'El '+dayWeek(dayNumber)+ defDay(dayWeek(dayNumber))+'a las'+hourNumber+'hrs pero '+dayHour(hourNumber)
}
const onePart=()=>{
    var {
        day=prompt('ingresa un dia domingo=0 ... savado=6'),
        hour=prompt('ingresa hora en 24hr ejemplo:6pm = 18')
    };
    return businessHours(day,hour)
}
//

const loopWeek=(day,num)=>{
    for (let index = 1; index < num; index++) {
        if (day==6) {
            day=0
        }
        day++
    }
}
//1 de enero en 2022 es savado
//parte dos
const getDayNumber=(yearDayNumber ,janFirstDaynumber=6)=>{
    var day=yearDayNumber%7;
    day==0 ? dayWeek(janFirstDaynumber) : dayWeek(loopWeek(janFirstDaynumber,day))
};
const impDay=()=>{
    var day=prompt('ingresa el dia'),month=prompt('ingresa el mes "Enero","Febrero"')
    day=parseInt(day)
    var dayPlus=monthYear(month)
    return day+dayPlus
}
//parte tres
const yearBusinessHours=()=>{
    var hour=prompt('ingresa hora'),day=impDay()
    return businessHours(getDayNumber(day),hour)
}
//Challenge
const challenge=()=>{
    const d = new Date();
    let hour = d.getHours(); 
    let day = d.getDay();
    return businessHours(day,hour) 
}