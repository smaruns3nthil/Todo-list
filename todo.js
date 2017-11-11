$(".fa-plus-circle").click(function () {
    $("input").slideToggle(500);
})

$("input").keypress(function (e) {

    if(e.keyCode==13)
    {
        var t1=" <div class=\"element\">\n" +
            " <i class=\"fa fa-trash trash\" aria-hidden=\"true\"></i>\n" +
            "<span class=\"sp\">";
        var t3="</span>\n" +
            "</div>";
        var t2=$(this).val();
        var t4=t1+t2+t3;
        // console.log(t4);
        $(".todo").append(t4);
        $(this).val("");
        listen();
    }
})
function listen()
{
$(".element").on("mouseenter",function () {
    $(this).children().fadeIn();
})
$(".element").on("mouseleave",function () {
    $(this).children(".trash").fadeOut();
})
$(".sp").on("click",function () {
    // $(this).toggleClass("sp1");
    var f=false;
    if(f==true)
    {
        $(this).removeClass("sp1");
    }
    else
    {
        $(this).addClass("sp1");
    }
    f=!f;
})
$(".trash").on("click",function () {
    $(this).parent().remove();
})
}