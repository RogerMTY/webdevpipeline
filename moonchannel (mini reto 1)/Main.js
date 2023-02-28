// This JQuery function simulates a post into the manga board, 
// AJAX permits the change to be applied in real time with the load function.

$(document).ready(function(){
    $("#miboton1").click(function(){
        $.ajax({
            url: "mng.html",
            success: function(){
                $("#threadtitle").load("mng.html #title").fadeIn("500")
                $("#threadbody").load("mng.html #bodyy").fadeIn("500")
                $("#threadfile").attr("src","berserk.jpeg")
                $("#threadfile").show("slow");
            }
        });
    });
});

// This function also simulates a post, but to the videogames board, AJAX is also used.

$(document).ready(function(){
    $("#miboton3").click(function(){
        $.ajax({
            url: "vg.html",
            success: function(){
                $("#threadtitle").load("vg.html #title").fadeIn("500")
                $("#threadbody").load("vg.html #bodyy").fadeIn("500")
                $("#threadfile").attr("src","pepsiman.jpeg")
                $("#threadfile").show("slow");
            }
        });
    });
});

// This function also simulates a post, but to the anime board, AJAX is also used.

$(document).ready(function(){
    $("#miboton2").click(function(){
        $.ajax({
            url: "an.html",
            success: function(){
                $("#threadtitle").load("an.html #title").fadeIn("500")
                $("#threadbody").load("an.html #bodyy").fadeIn("500")
                $("#threadfile").attr("src","lain.jpeg")
                $("#threadfile").show("slow");
            }
        });
    });
});

// This function also simulates a post, but to a different board, AJAX is also used.

$(document).ready(function(){
    $("#miboton4").click(function(){
        $.ajax({
            url: "ft.html",
            success: function(){
                $("#threadtitle").load("ft.html #title").fadeIn("500")
                $("#threadbody").load("ft.html #bodyy").fadeIn("500")
                $("#threadfile").attr("src","keto.jpeg")
                $("#threadfile").show("slow");
            
            }
        });
    });
});



 