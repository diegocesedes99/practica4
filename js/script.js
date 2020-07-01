let terminar = false;
let array = [];

while(!terminar){
    let numero = prompt('Ingrese cualquier número');

    if (!isNaN(parseInt(numero))){
        array.push(numero);
    } else{
        if(numero==""){
            terminar=true;
            console.log(array);

            //SACAR PROMEDIO
            let suma=array.reduce((previous, current)=>current+=previous);
            let promedio=suma/array.length;
            console.log('El resultado del promedio es: ',promedio);

            //PONER EN ORDEN 
            array.sort((a,b)=>a-b);

            //SACAR EL MENOR
            let numero_menor=Math.min.apply(null,array);
            console.log('El número menor es: ',numero_menor);

            //SACAR EL MAYOR
            let numero_mayor=Math.max.apply(null,array);
            console.log('El número menor es: ',numero_mayor);
            
            //SACAR LA MEDIANA
            let mediana1=Math.floor((array.length-1)/2);
            let mediana2=Math.ceil((array.length-1)/2);
            let mediana=(array[mediana1]+array[mediana2])/2;
            console.log('La mediana es: ',mediana);
        }
    }

}