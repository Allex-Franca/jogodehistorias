import React, { useState } from 'react'
import './Jogo.css'

function Jogo() {
const [emoji, setEmoji] = useState(['🙂', '🙂', '🙂'])
  let emojis = ["😎","😒","🤣","😉","😏","🤦‍♂️","😨","🤑","😵‍💫","🤓","😵","🙂","😀","😂","😍","🥰","😘","😜","🤪","🤔","😐","😑","🙄","😬","😮","😲","😱","😢","😭","😡","🤬","😤","😳","🥺","😴","🤢","🤮","🤫","🤭","🫣","🫡","😇","🥳","🤩","😌","😔","😞","😟","😕","🙁","☹️","😣","😖","😫","😩","🥹","😶","🫢","😯","😦","😧","😰","😥","😓","🤗","🫠","😈","👿","💀","👻","👽","🤖","💩","🤝","👏","👍","👎","🙏","💪","🙌","🤷‍♂️","🤷‍♀️","🙋‍♂️","🙋‍♀️","💔","❤️","💕","💢","💥","💫","💦","💨","🔥","✨","⭐","🌟","❓","❗","‼️","⁉️","💡","🎉","🎁","🎂","🎈","🏆","⚡","🌈","☀️","🌙","🌧️","❄️","🌪️","🌊","🍕","🍔","🍎","🍺","☕","🚗","✈️","🚀","🏠","🏫","🏥","🏪","💰","💵","📱","💻","📚","🔑","🔒","🔓","🕵️‍♂️","👮‍♂️","👨‍⚕️","👩‍⚕️","👨‍🍳","👩‍🍳","👨‍🎓","👩‍🎓","👑","🧙‍♂️","🧛‍♂️","🧟‍♂️","🧞‍♂️","🦸‍♂️","🦹‍♂️","🐶","🐱","🐭","🐰","🦊","🐻","🐼","🐸","🐵","🐔","🐧","🦁","🐯","🐺","🦄","🐲"];
function sortear() {
  let i = Math.floor(Math.random() * 165)
  let i2 = Math.floor(Math.random() * 165)
  let i3 = Math.floor(Math.random() * 165)
  
    setEmoji([emojis[i], emojis[i2], emojis[i3]])
}
return (
    <div className='Jogo'>
        <button className='bt-emoji' onClick={sortear}>
        <p className='p-emoji'>{emoji[0]}</p>
        </button>
        <button className='bt-emoji' onClick={sortear}>
        <p className='p-emoji'>{emoji[1]}</p>
        </button>
        <button className='bt-emoji' onClick={sortear}>
        <p className='p-emoji'>{emoji[2]}</p>
        </button>

    </div>
  )
}

export default Jogo