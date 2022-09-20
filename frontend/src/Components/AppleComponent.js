import React,{useState} from 'react'

function AppleComponent() {

    const [numberOfApple,setnumberOfApple]=useState(1)

    function AppleDisplay(numberOfApple){
        if (numberOfApple === 0 || numberOfApple === 1){
            return `jhon has ${numberOfApple} apple`;
        } else if (numberOfApple > 1){
            return `jhon has ${numberOfApple} apple`;
        }else {
            return `jhon has ${numberOfApple} apple`;
        }

    }
  return (
    <>
    <div>
        <h1>{AppleDisplay(numberOfApple)}</h1> 
    </div>

    <button onClick={()=>setnumberOfApple((currentvalue)=>currentvalue+1) }>Increase</button>
    <button 
    style={{display: numberOfApple<=0 ? "None":''}}
    onClick={()=>setnumberOfApple(numberOfApple-1) }>Decrease</button>

    </>
  )
}

export default AppleComponent