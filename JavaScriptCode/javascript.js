function pl(){
       
        for(var i=0;i<arguments.length;i++){
                $("#output").append(arguments[i]+"<br>");
        }
}

function PrintProps(obj,functions){
        
        for(var propName in obj){
            
            if(typeof obj[propName] != "function")
            {    
                $("#output").append(propName+"=>"+obj[propName]+"<br>");
            }
        }
        
}


//getElementById

function Dom(){
      
      $("#justDiv").css("width","100px");
      $("#justDiv").css("background","#abc");  
      var domEl = document.getElementById("justDiv").style;
      
      PrintProps(domEl);
}

$(document).ready(function(){
        $("#output").append("Jquery init complete<br>");
        
        Dom();
        
        //window.name = "blya";
       // window.open("http://google.com","blya","menubar=no,width=400");
        /*
        for(var v in this){
            $("#output").append(v+":"+this[v]+"<br>");
        }
        */
    });