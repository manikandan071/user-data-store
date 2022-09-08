
function todo(){
    var name=document.getElementById('demo').value;
    var y=document.getElementById('demo1');
    var x=document.createElement('h5');
     x.innerText=name;
     y.appendChild(x);
     console.log(y);
}



