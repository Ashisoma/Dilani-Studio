$(document).ready(function(){
    $("#design").click(function(){
        $("#p1-hide").toggle()
        $("#design").toggle()
    });
});
$(document).ready(function(){
    $("#p1-hide").click(function(){
        $("#design").toggle()
        $("#p1-hide").toggle()
    });
});


$(document).ready(function(){
    $("#devpt").click(function(){
        $("#p2-hide").show()
        $("#devpt").hide()
    });
});
$(document).ready(function(){
    $("#p2-hide").click(function(){
        $("#devpt").toggle()
        $("#p2-hide").toggle()
    });
});
$(document).ready(function(){
    $("#project").click(function(){
        $("#p3-hide").show()
        $("#project").hide()
    });
});
$(document).ready(function(){
    $("#p3-hide").click(function(){
        $("#project").toggle()
        $("#p3-hide").toggle()
    });
});
 

  
$(document).ready(function getResponse(){
    var name = document.getElementById("#name").value();
    $("button#submit").click(function(){
        alert("Hi, " + name + " .Your message has been received!")
    })
    event.preventDefault()
 
})

$(document).ready(function(){
    $(".row1").hover(function(){
        $("#hide-1").toggle();
    })
    $(".row2").hover(function(){
        $("#hide-2").toggle();
    })
    $(".row3").hover(function(){
        $("#hide-3").toggle();
    })
    $(".row4").hover(function(){
        $("#hide-4").toggle();
    })
    $(".row5").hover(function(){
        $("#hide-5").toggle();
    })
    $(".row6").hover(function(){
        $("#hide-6").toggle();
    })
    $(".row7").hover(function(){
        $("#hide-7").toggle();
    })
    $(".row8").hover(function(){
        $("#hide-8").toggle();
    })
});

