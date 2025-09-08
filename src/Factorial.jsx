import React, {useState} from "react";

function Factorial() {
  const [num, setNum] = useState("");
  const [disp, setDisp] = useState("");

  const fct=()=>{
    let fact=1;
    for (let i=2;i<=num;i++){
      fact=fact*i;
    }
    setDisp(fact);
  };

  return(
    <div className="box">
      <h3>Factorial:</h3>
      <label htmlFor="nmb">Number: </label>
      <input id="nmb" type="number" value={num} onChange={(e)=>setNum(Number(e.target.value))}
      />
      <button className="btn" onClick={fct}>Check</button>
      <h1>{disp}</h1>
    </div>
  );
}

export default Factorial;
