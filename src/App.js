import { useState } from "react";
import Dice from "./components/Dice";
import Confetti from "react-confetti"

function App() {
  
  const randomNumber =()=> Math.trunc(Math.random()*6)+1
  const randomDices = Array.from({length: 10},(ele, i)=>({id:i,value:randomNumber(),held:false}))
  const [dices,setDices]= useState(randomDices)
  const [tenzies,setTenzies]= useState(false)
  
  const hold = (e,x) =>{
   
    if ( dices.every(dice => dice.value === dices[0].value)){
        setTenzies(true)
        setDices(prev => prev.map(dice => dice.id === x ? {...dice,held:!dice.held}:dice))
      }
      else{setDices(prev => prev.map(dice => dice.id === x ? {...dice,held:!dice.held}:dice))}  
       
  }
  const roll = ()=>{
    if(!tenzies){
      setDices(prev => prev.map(dice => dice.held ? dice: {...dice,value:randomNumber()}))
    }else{
      setTenzies(false)
      setDices(randomDices)
    }

  }
  
  return (
    <main>
      {tenzies && <Confetti/>}
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="die-container">
        { dices.map((dice)=>(<Dice  hold={hold} diceObject={dice} key={dice.id}/>)) }
      </div>
      <button className="roll-dice" onClick={roll}>  {tenzies ? "Start New Game":"Roll"} </button>
    </main>
     
    
  );
}

export default App;
 