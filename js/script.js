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

 

  
$(document).ready(function getResponse(){
    var name = document.getElementById("#name").value();
    $("#submit").click(function(){
        alert("Hi, " + name + " .Your message has been received!")
    })
 
})

$(document).ready(function(){
    $("#row").hover(function(){
    
    })
})

