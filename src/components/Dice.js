import React from 'react'

const Dice = ({diceObject,hold}) => {  
  const styles = {
                backgroundColor: diceObject.held ? "white" : "#d448a6",
                boxShadow:diceObject.held ? "inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7, inset -5px 0 #d7d7d7" :"inset 0 5px #d448a6"
        }   
   
    let dice 
        switch (diceObject.value){
              
            case 1:
                dice= (<div className="first-face" style={styles} > 
                        <span className="pip"></span>
                </div>)
                break;
            case 2:
                    dice= (<div className="second-face" style={styles}>
                        <span className="pip"></span>
                        <span className="pip"></span>
                    </div>)
                    break;
            case 3:
                    dice=  (<div className="third-face" style={styles}>
                            <span className="pip"></span>
                            <span className="pip"></span>
                            <span className="pip"></span>
                    </div>)
                    break;
            case 4:
                    dice= (<div className="fourth-face" style={styles}>
                            <div className="column">
                            <span className="pip"></span>
                            <span className="pip"></span>
                            </div>
                            <div className="column">
                            <span className="pip"></span>
                            <span className="pip"></span>
                            </div>
                        </div>)
                    break;
            case 5:
                    dice=   (<div className="fifth-face" style={styles}>
                            <div className="column">
                            <span className="pip"></span>
                            <span className="pip"></span>
                            </div>
                            <div className="column">
                            <span className="pip"></span>
                            </div>
                            <div className="column">
                            <span className="pip"></span>
                            <span className="pip"></span>
                            </div>
                        </div>)
                    break;
            case 6:
                    dice=  (<div className="sixth-face" style={styles}>
                            <div className="column">
                            <span className="pip"></span>
                            <span className="pip"></span>
                            <span className="pip"></span>
                            </div>
                            <div className="column">
                            <span className="pip"></span>
                            <span className="pip"></span>
                            <span className="pip"></span>
                            </div>
                        </div>)
                    break;
            default:
                    return
    }

  return (
    <div  className='held'  onClick={(e)=> hold (e,diceObject.id)}>
      {dice}
    </div>
  )
}

export default Dice
