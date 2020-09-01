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
    $("#submit").click(function(){
        alert("Hi, " + name + " .Your message has been received!")
    })
 
})

$(document).ready(function(){
    $(".work1").hover(function(){
        $("#hide-1").toggle();
    })
    $(".work2").hover(function(){
        $("#hide-2").toggle();
    })
    $(".work3").hover(function(){
        $("#hide-3").toggle();
    })
    $(".work4").hover(function(){
        $("#hide-4").toggle();
    })
    $(".work5").hover(function(){
        $("#hide-5").toggle();
    })
    $(".work6").hover(function(){
        $("#hide-6").toggle();
    })
    $(".work7").hover(function(){
        $("#hide-7").toggle();
    })
    $(".work8").hover(function(){
        $("#hide-8").toggle();
    })
});

