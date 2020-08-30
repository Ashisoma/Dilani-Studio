$(document).ready(function(){
    $("#design").click(function(){
        $("#p1-hide").show()
        $("#design").hide()
    });
});

$(document).ready(function(){
    $("#devpt").click(function(){
        $("#p2-hide").show()
        $("#devpt").hide()
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

