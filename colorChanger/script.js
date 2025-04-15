const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');




buttons.forEach(function (button){
    
    button.addEventListener('click', function(e){
        switch(e.target.id){
            case "white":
                body.style.backgroundColor = e.target.id;
                body.style.color = "black";
                break;

            case "black":
                body.style.backgroundColor = e.target.id;
                body.style.color = "white";
                break;
            
            case "red":
                body.style.backgroundColor = e.target.id;
                body.style.color = "white";
                break;
            
            case "blue":
                body.style.backgroundColor = e.target.id;
                body.style.color = "white";
                break;

            case "green":{
                body.style.backgroundColor = e.target.id;
                body.style.color = "white";
                break;
            }
            
            case "cyan":{
                body.style.backgroundColor = e.target.id;
                body.style.color = "black";
                break;
            }

            case "magenta":{
                body.style.backgroundColor = e.target.id;
                body.style.color = "black";
                break;
            }

            case "gray":{
                body.style.backgroundColor = e.target.id;
                body.style.color = "white";
                break;
            }

            default:{
                document.html.style.backgroundColor = "wheat";
            }
        }
    })

} );