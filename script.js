count=0;
function button(){
var a=parseInt(document.getElementById("no").value);
var b=document.getElementById("color1").value;
var c=document.querySelector('input[name="shape"]:checked').value;
var shape=document.querySelector("#result");


for(i=1;i<=a;i++){ 

  
    
    if(c=="square"){
    count++;
    var square=document.createElement("div");
    // shape.classList.add("square");
    shape.appendChild(square);
    square.className="square";
    square.style.backgroundColor = b;
    square.textContent=count;

    }
    

    else if(c=="rectangle"){
        count++;
     var rectangle=document.createElement("div");
    //  shape.classList.add("rectangle");
     shape.appendChild(rectangle);
     rectangle.className="rectangle";
     rectangle.style.backgroundColor = b;
     rectangle.textContent=count;
   
     }

     else if(c=="circle"){
        count++;
    var circle=document.createElement("div");
    // shape.classList.add("circle");
     shape.appendChild(circle);
     circle.className="circle";
     circle.style.backgroundColor = b;
     circle.textContent=count;
   
   
     }
}
}
