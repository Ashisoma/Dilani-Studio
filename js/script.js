$(document).ready(function(){
    $("img#design").click(function(){
        $("#p1-hide").show()
        $("#design").hide()
    },function(){
        $("#p1-hide").click(function(){
            $("#design").show()
            $("#p1-hide").hide()
        })
    });
    $("#p2-hide").click(function(){
        $("#p2-hide").show()
        $("#devpt").hide()

    });
        $("#p3-hide").click(function(){
            $("#p3-hide").show()
            $("#project").hide()    
    });
});
 

  
$(document).ready(function(){
    var name = parseInt("#name");
    $("#submit").click(function(){
    var name = 

        alert("Hi, " + name + " .Your message has been received!")
    })
 
})

$(document).ready(function(){
    $("#images").hover(function(){
        var see = ["p1-hide", "p2-hide", "p3-hide"]
    
    })
})

