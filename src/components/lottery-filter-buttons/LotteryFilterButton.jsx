import { useState } from 'react';
import './LotteryFilterButton.css'



const LotteryFilterButton = ({ label, onClickHandle }) => {
   const [clicked, setClicked] = useState(false)
   return <button className={'LotteryFilterButton ' + (clicked ? 'clicked' : '')} role='button' onClick={() => { setClicked(clicked => !clicked); onClickHandle(label) }}>{label}</button>
}

export default LotteryFilterButton;