$(document).ready(function(){
        $("#output").append("Jquery init complete<br>");
        for(var v in this){
            $("#output").append(v+":"+this[v]+"<br>");
        }
    });