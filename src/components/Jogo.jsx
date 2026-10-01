import React, { useState } from 'react'
import './Jogo.css'

function Jogo() {
    const[emoji,setsetEmoji] = useState('🙂')
    let emojis = ["😎","😒","🤣","😉","😏",'🤦‍♂️','😨','🤑','😵‍💫','🤓','😵','🙂']
    function sortear(){
        let i = Math.floor(Math.random()*12)
        setsetEmoji(emojis[i])
    }
  return (
    <div className='Jogo'>
        <button className='bt-emoji' onClick={sortear}>
        <p className='p-emoji'>{emoji}</p>
        </button>
    </div>
  )
}

export default Jogo