function res(val){
      const result = document.getElementById("result").value+=val
}



function solve(){
    let x = document.getElementById("result").value;
    let y = eval(x); // 
    document.getElementById("result").value = y;
    document.getElementById("result").style.background = "black";
    document.getElementById("cal").style.color = "black";
    if(x <= 0)
        {
      document.getElementById("result").value = "0";
      }
    
}

function clr(){
    document.getElementById("result").value=" ";
    document.getElementById("result").style.background = "#181F32";
    document.getElementById("cal").style.color = "white";
}
function del(){
    let x = document.getElementById("result").value;
    document.getElementById("result").value = x.slice(0,-1);
}
