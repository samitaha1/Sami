var slider_content = document.getElementById('box');

let image =["http://hinooma.mitchatnim.co.il/img/0353/453","http://hinooma.mitchatnim.co.il/img/0353/460", "http://hinooma.mitchatnim.co.il/img/0353/462","http://hinooma.mitchatnim.co.il/img/0353/445","http://hinooma.mitchatnim.co.il/img/0353/454","http://hinooma.mitchatnim.co.il/img/0353/437","http://hinooma.mitchatnim.co.il/img/0353/441","http://hinooma.mitchatnim.co.il/img/0353/442"];

var i = image.length;

function nextImage(){
    if (i<image.length) {
        i= i+1;
    }else{
        i = 1;
    }
      slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
}

function prewImage(){
    if (i<image.length+1 && i>1) {

        i= i-1;
    }else{
        i = image.length;
    }
      slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

}
    function validation(){
        var user = document.getElementById('user').value;
        var mobileNumber = document.getElementById('mobileNumber').value;
        var emails = document.getElementById('emails').value;
        var guest = document.getElementById('gues').value;
        var coue = document.getElementById("coue").value;
        if(user == ""){
            document.getElementById('username').innerHTML =" Please fill the username field";
            return false;
        }
        if((user.length <= 2) || (user.length > 20)) {
            document.getElementById('username').innerHTML =" Username lenght must be between 2 and 20";
            return false;	
        }
        if(!isNaN(user)){
            document.getElementById('username').innerHTML ="only characters are allowed";
            return false;
        }

        if(mobileNumber == ""){
            document.getElementById('mobileno').innerHTML ="Please fill the mobile NUmber field";
            return false;
        }
        if(isNaN(mobileNumber)){
            document.getElementById('mobileno').innerHTML ="user must write digits only not characters";
            return false;
        }
        if(mobileNumber.length<9){
            document.getElementById('mobileno').innerHTML ="mobile must be between 9 digit /10 digit"; 
            return false;
        }
        if(mobileNumber.length>10){
            document.getElementById('mobileno').innerHTML ="mobile must be between 9 digit /10 digit"; 
            return false;
        }
        if(emails == ""){
            document.getElementById('emailids').innerHTML ="Please fill the email idx` field";
            return false;
        }
        if(emails.indexOf('@') <= 0 ){
            document.getElementById('emailids').innerHTML ="@ Invalid Position";
            return false;
        }

        if((emails.charAt(emails.length-4)!='.') && (emails.charAt(emails.length-3)!='.')){
            document.getElementById('emailids').innerHTML =". Invalid Position";
            return false;
        }

        if(guest<=0){
            document.getElementById('numb').innerHTML ="Please fill legal field";
            return false;
        }
      if(isNaN(guest)){
            document.getElementById('numb').innerHTML ="user must write digits only not characters";
            return false;
        }
        if(coue == ""){
            document.getElementById('count').innerHTML="please fill the text";
            return false;
        }
    }
 var table = document.getElementById("table"),rIndex,cIndex;
            
            for(var i = 1; i < table.rows.length; i++)
            {
                for(var j = 0; j < table.rows[i].cells.length; j++)
                {
                    table.rows[i].cells[j].onclick = function()
                    {
                        rIndex = this.parentElement.rowIndex;
                        cIndex = this.cellIndex+1;
                        console.log("Row : "+rIndex+" , Cell : "+cIndex);
                    };
                }
            }

     function count_down(obj){
         var element = document.getElementById('count');
         element.innerHTML = 200-obj.value.length;
         if(200-obj.value.length<0){
             document.getElementById('count').innerHTML="stop!";
            
         }
     }
     function scaleup(obj,size){
         obj.style.fontSize=size;
     }
function alerto(){
        
}