$(document).ready(function() {
    var fontSize = 17;
    var titlefont = 28;
    var pgheadfont = 20;
    var indxhdfont = 26;
    var figfont = 20;


    /* Increase Text */
    $("#increase-text").click(function() {
        fontSize = fontSize + 1;
        titlefont = titlefont + 1;
        pgheadfont = pgheadfont + 1;
        indxhdfont = indxhdfont + 1;
        figfont = figfont + 1;
        $(".content-wrap").css("font-size", fontSize + "px");
        $(".pgtitle").css("font-size", titlefont + "px");
        $(".pghead").css("font-size", pgheadfont + "px");
        $(".indxhead").css("font-size", indxhdfont + "px");
        $(".figcp").css("font-size", figfont + "px");
    });


    /* Decrease Text */
    $("#decrease-text").click(function() {
        fontSize = fontSize - 1;
        titlefont = titlefont - 1;
        pgheadfont = pgheadfont - 1;
        indxhdfont = indxhdfont - 1;
        figfont = figfont - 1;
        $(".content-wrap").css("font-size", fontSize + "px");
        $(".pgtitle").css("font-size", titlefont + "px");
        $(".pghead").css("font-size", pgheadfont + "px");
        $(".indxhead").css("font-size", indxhdfont + "px");
        $(".figcp").css("font-size", figfont + "px");
    });



    /* Default */
    $("#normal-text").click(function() {
        fontSize = 17;
        titlefont = 28;
        pgheadfont = 20;
        indxhdfont = 26;
        figfont = 20;
        $(".content-wrap").css("font-size", fontSize + "px");
        $(".pgtitle").css("font-size", titlefont + "px");
        $(".pghead").css("font-size", pgheadfont + "px");
        $(".indxhead").css("font-size", indxhdfont + "px");
        $(".figcp").css("font-size", figfont + "px");
    });



});