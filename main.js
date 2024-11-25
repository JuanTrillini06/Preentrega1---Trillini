let magnitud;
let unidadInicial;
let valorInicial = 0;
let unidadFinal;
let resultado = 0;
let nuevoCalculo = "si"
function long() {
    resultado = valorInicial;
    while (unidadInicial != unidadFinal) {
        switch (unidadInicial) {
            case "kilometro":
                switch (unidadFinal) {
                    case "metro":
                        resultado = valorInicial * 1000;
                        unidadInicial = "metro";
                        break;
                    default:
                        valorInicial = valorInicial * 1000;
                        unidadInicial = "metro";
                        break;
                };
                break;
            case "metro":
                switch (unidadFinal) {
                    case "centimetro":
                        resultado = valorInicial * 100;
                        unidadInicial = "centimetro";
                        break;
                    case "kilometro":
                        resultado = valorInicial / 1000;
                        unidadInicial = "kilometro";
                        break;
                    default:
                        valorInicial = valorInicial * 100;
                        unidadInicial = "centimetro";
                        break;
                };
                break;
            case "centimetro":
                switch (unidadFinal) {
                    case "milimetro":
                        resultado = valorInicial * 10;
                        unidadInicial = "milimetro";
                        break;
                    case "metro":
                        resultado = valorInicial / 100;
                        unidadInicial = "metro";
                        break;
                    default:
                        valorInicial = valorInicial * 10;
                        unidadInicial = "milimetro";
                        break;
                };
                break;
            case "milimetro":
                switch (unidadFinal) {
                    case "centimetro":
                        resultado = valorInicial / 10 ;
                        unidadInicial = "centimetro";
                        break;
                    default:
                        valorInicial = valorInicial / 1000;
                        unidadInicial = "metro";
                        break;
                };
                break
            default:
                alert("Unidad inicial y/o final incorrectos");
                unidadInicial = unidadFinal;
                break;
        };
    };
    alert("El resultado es: " + resultado + " " +unidadFinal);
};
function vol() {
    resultado = valorInicial;
    while (unidadInicial != unidadFinal) {
        switch (unidadInicial) {
            case "litro":
                switch (unidadFinal) {
                    case "mililitro":
                        resultado = valorInicial * 1000;
                        unidadInicial = "mililitro";
                        break;
                    default:
                        if (unidadFinal!="mililitro"||unidadFinal!="centimetro cubico"||unidadFinal!="metro cubico") {
                            alert("Unidad final incorrecta");
                            unidadInicial = unidadFinal
                            break;
                        }
                        valorInicial = valorInicial * 1000;
                        unidadInicial = "mililitro";
                        break;
                };
                break;
            case "mililitro":
                switch (unidadFinal) {
                    case "centimetro cubico":
                        resultado = valorInicial;
                        unidadInicial = "centimetro cubico";
                        break;
                    case "litro":
                        resultado = valorInicial / 1000;
                        unidadInicial = "litro";
                        break;
                    default:
                        valorInicial = valorInicial;
                        unidadInicial = "centimetro cubico";
                        break;
                };
                break;
            case "centimetro cubico":
                switch (unidadFinal) {
                    case "metro cubico":
                        resultado = valorInicial / 1000000;
                        unidadInicial = "metro cubico";
                        break;
                    case "mililitro":
                        resultado = valorInicial;
                        unidadInicial = "mililitro";
                    default:
                        if (unidadFinal!="mililitro"||unidadFinal!="centimetro cubico"||unidadFinal!="metro cubico") {
                            alert("Unidad final incorrecta");
                            unidadInicial = unidadFinal
                            break;
                        }
                        valorInicial = valorInicial;
                        unidadInicial = "mililitro";
                        break;
                };
                break;
                case "metro cubico":
                    switch (unidadFinal) {
                        case "centimetro cubico":
                            resultado = valorInicial * 1000000;
                            unidadInicial = "centimetro cubico";
                            break;
                        default:
                            valorInicial = valorInicial * 1000000;
                            unidadInicial = "centimetro cubico";                         
                            break;
                    };
                    break;
            default:
                alert("Unidad inicial y/o final incorrectos");
                unidadInicial = unidadFinal;
                break;
        };
    };
    alert("El resultado es: " + resultado + " " +unidadFinal);
};
function peso() {
    resultado = valorInicial;
    while (unidadInicial != unidadFinal) {
        switch (unidadInicial) {
            case "kilogramo":
                switch (unidadFinal) {
                    case "gramo":
                        resultado = valorInicial * 1000;;
                        unidadInicial = "gramo";;
                        break;
                    case "newton":
                        resultado = valorInicial * 9.8;
                        unidadInicial = "newton";
                        break
                    default:
                        alert("Unidad final incorrecta");
                        unidadInicial = unidadFinal;
                        break;
                };
                break;
            case "gramo":
                switch (unidadFinal) {
                    case "kilogramo":
                        resultado = valorInicial / 1000;
                        unidadInicial = "kilogramo";
                        break;
                    default:
                        valorInicial = valorInicial / 1000;
                        unidadInicial = "kilogramo";    
                        break;
                };
                break;
            case "newton":
                switch (unidadFinal) {
                    case "kilogramo":
                        resultado = valorInicial / 9.8;
                        unidadInicial = "kilogramo";
                        break;
                    default:
                        valorInicial = valorInicial / 9.8;
                        unidadInicial = "kilogramo";                        
                        break;
                };
                break;
            default:
                alert("Unidad inicial y/o final incorrectos");
                unidadInicial = unidadFinal;
                break;
        };
    };
    alert("El resultado es: " + resultado + " " +unidadFinal);
};
while (nuevoCalculo == "si"){
    magnitud = prompt("Introduzca la magnitud a convertir:\nlongitud \nvolumen \npeso");
    switch (magnitud) {
        case "longitud":
            unidadInicial = prompt("Introduzca la unidad inicial: \nkilometro \nmetro \ncentimetro \nmilimetro");
            valorInicial = parseFloat(prompt("Introduzca el valor: "));
            unidadFinal = prompt("Introduzca la unidad final: \nkilometro \nmetro \ncentimetro \nmilimetro");
            long();
            break;
        case "volumen":
            unidadInicial = prompt("Introduzca la unidad inicial: \nlitro \nmililitro \nmetro cubico \ncentimetro cubico");
            valorInicial = parseFloat(prompt("Introduzca el valor: "));
            unidadFinal = prompt("Introduzca la unidad final: \nlitro \nmililitro \nmetro cubico \ncentimetro cubico");
            vol();
            break;
        case "peso":
            unidadInicial = prompt("Introduzca la unidad inicial: \nkilogramo \ngramo \nnewton");
            valorInicial = parseFloat(prompt("Introduzca el valor: "));
            unidadFinal = prompt("Introduzca la unidad final: \nkilogramo \ngramo \nnewton");
            peso();
            break;
        default:
            break;
    }
    nuevoCalculo = prompt("Desea hacer otro calculo? \nsi/no");
}