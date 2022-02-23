import React from 'react'

const Dice = ({diceObject,hold}) => {  
  const styles = {
                backgroundColor: diceObject.held ? "#dfdb16" : ""
            }   
   
    let dice 
        switch (diceObject.value){
              
            case 1:
                dice= (<div className="first-face">
                        <span className="pip"></span>
                </div>)
                break;
            case 2:
                    dice= (<div className="second-face">
                        <span className="pip"></span>
                        <span className="pip"></span>
                    </div>)
                    break;
            case 3:
                    dice=  (<div className="third-face">
                            <span className="pip"></span>
                            <span className="pip"></span>
                            <span className="pip"></span>
                    </div>)
                    break;
            case 4:
                    dice= (<div className="fourth-face">
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
                    dice=   (<div className="fifth-face">
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
                    dice=  (<div className="sixth-face">
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
    <div  className='held' style={styles} onClick={(e)=> hold (e,diceObject.id)}>
      {dice}
    </div>
  )
}

export default Dice
