$("select").change(function () {
    console.log($(this).val())
})
$("button").click(function (event) {
    //el event y event.preventDefault son para prevenir que la página se recargue o que haga la función que trae por defecto"
    event.preventDefault()
    console.log($("select").val())
    var option = $("select").val()
    var zodiacText = ""

    if (option == Ari) {
        zodiacText = Lib
    } else if (option == Tau) {
        zodiacText = Tau
    } else if (option == Gem) {
        zodiacText = Gem
    } else if (option == Can) {
        zodiacText = Can
    } else if (option == Leo) {
        zodiacText = Leo
    } else if (option == Vir) {
        zodiacText = Vir
    } else if (option == Lib) {
        zodiacText = Lib
    } else if (option == Esc) {
        zodiacText = Esc
    } else if (option == Sag) {
        zodiacText = Sag
    } else if (option == Cap) {
        zodiacText = Cap
    } else if (option == Acu) {
        zodiacText = Acu
    } else if (option == Pis) {
        zodiacText = Pis
    }

    $("#myModal").modal()
    $("result").text(zodiacText)
})

var Ari = "Tu destino no se afecta porque seas Aries"
var Tau = "Tu destino no se afecta porque seas Tauro"
var Gem = "Tu destino no se afecta porque seas Géminis"
var Can = "Tu destino no se afecta porque seas Cáncer"
var Leo = "Tu destino no se afecta porque seas Leo"
var Vir = "Tu destino no se afecta porque seas Virgo"
var Lib = "Tu destino no se afecta porque seas Libra"
var Esc = "Tu destino no se afecta porque seas Escorpio"
var Sag = "Tu destino no se afecta porque seas Sagitario"
var Cap = "Tu destino no se afecta porque seas Capricornio"
var Acu = "Tu destino no se afecta porque seas Acuario"
var Pis = "Tu destino no se afecta porque seas Piscis"