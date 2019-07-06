function execute1(){
var x = document.getElementById('1').value;
var y = document.getElementById('2').value;
var sum = Number(x) + Number(y);

if(x=="" || y==""){
alert('ERROR:TEXTBOXES IS EMPTY')
}else{
    alert('Sum is: '+sum);
}

}

function execute2(){
    var x = document.getElementById('1').value;
    var y = document.getElementById('2').value;
    var sub = Number(x) - Number(y);

    if(x=="" || y==""){
alert('ERROR:TEXTBOXES IS EMPTY')
}else{
    alert('Sub is: '+sub);
}
    
    
    }

    function execute3(){
        var x = document.getElementById('1').value;
        var y = document.getElementById('2').value;
        var multi = Number(x) * Number(y);

        if(x=="" || y==""){
            alert('ERROR:TEXTBOXES IS EMPTY')
            }else{
                alert('Multi is: '+multi);
            }
                
        
       
        }
        function execute4(){
            var x = document.getElementById('1').value;
            var y = document.getElementById('2').value;
            var divi = Number(x) / Number(y);

            if(x=="" || y==""){
                alert('ERROR:TEXTBOXES IS EMPTY')
                }else{
                    alert('Divi is: '+divi);
                }
            
           
            }