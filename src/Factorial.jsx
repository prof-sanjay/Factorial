import React from "react";
function Factorial(){
    let number = 5;
    let fact = 1
    for(var i=2;i<=number;i++){
        fact=fact*i
    }
    return(
     <h1>{fact}</h1>   
    )
}
export default Factorial