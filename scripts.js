$("p").click(function () {
    $(this).hide()
})
$("button").click(function () {
    $("p").show()
})
$("#sayHello").click(function () {
    alert("Hola clase")
    console.log("la página dice hola")
})
$(".jumbotron").mouseenter(function(){
    alert("uh lalá")
})

$("#bigBtn").dblclick(function(){
    alert("uyuuui")
})
$("input").keypress(function(){
    $("h2").text($(this).val())
    console.log($(this).val())
})