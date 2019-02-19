
/*global $, console*/

$(function () {
    'use strict';
    
    $(".featuredWork li").on("click", function () {
        if ($(this).data("class") === "all") {
            $(".featuredWork .row .col").css({
                transition: "all .5s",
                opacity: "1"
            });
        } else {
            $(".featuredWork .row .col").css({
                transition: "all .5s",
                opacity: ".3"
            });
            $($(this).data("class")).css({
                transition: "all .5s",
                opacity: "1"
            });
        }
    });
    
});