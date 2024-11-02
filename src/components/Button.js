import React from 'react'

function Button({buttons, isSelected, setIsSelected}) {
  return (
    <div className='button-container'>
        {
            buttons.map((text, index)=>{
                return <button class="button" className={isSelected == index ? "selected-button" : 'button'} onClick={()=>setIsSelected(index)}> {text} </button>

            })
        }
    </div>
  )
}

export default Button
