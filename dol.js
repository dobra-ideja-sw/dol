$(document).ready(function() {
    $('#text p:not(:first)').hide();
    $('#pageno').text( '1/' + $('#text p').length);
    $("#content").hide();
    
    $('#navigation-left').click(function() {
        var prev = $('#text p:visible').prev();
        if (prev.length==0) {
            return false;
        }
        $('#text p:visible').hide();
        prev.fadeIn();
        
        $('#pageno').text(parseInt($('#text p:visible').index() + 1) + '/' + $('#text p').length);
    });
    
    $('#navigation-right').click(function() {
        var next = $('#text p:visible').next();
        if (next.length==0) {
            return false;
        }
        $('#text p:visible').hide();
        next.fadeIn();
        
        $('#pageno').text(parseInt($('#text p:visible').index() + 1) + '/' + $('#text p').length);
    });

    $("#intro").click(function() {
        $.get("./uvod.html", function(data) {
            //console.log("data: " + data.activeElement.outerHTML);
            if (data.activeElement) {
                $("#content").html(data.activeElement.outerHTML);
            } else {
                $("#content").html(data);
            }
        })
        $("#box").hide();
        $("#content").fadeIn();
    })
});