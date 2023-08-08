import { useEffect, useState } from 'react';
import './LotteryCard.css'
import LotteryCardBack from './LotteryCardBack';

import jack1 from '../../assets/jackpotIcon1.jpg'
import LotteryButton from '../lottery-button/LotteryButton';
import CircleButton from '../circle-button/CircleButton';
import DateDisplay from '../date-display/DateDisplay';
import RemainingTime from '../remaining-time/RemainingTime';
const LotteryCard = ({ name, description, imageUrl, dueDate }) => {

    const [isFliped, setIsFlipped] = useState(false)

    const onClickPlayHandler = () => { }
    const onClickFullResults = () => { }
    const onClickNumberHandler = () => {
        window.location.href = 'https://www.calottery.com/';
     }


    const onClickBackHandler = () => {
        setIsFlipped(isFliped => !isFliped)
    }


    const onClickShowResults = () => {
        setIsFlipped(isFliped => !isFliped)
    }

    const dueDateObj = new Date(dueDate);
    const currentTime = new Date();

    const timeDifference = dueDateObj.getTime() - currentTime.getTime();
    const isExpired = timeDifference <= 0 ? true : false

    return <div className={"card" + (isExpired ? ' disabled' : '')} >
        <div className={'card-inner' + (isFliped ? ' is-flipped' : '')} >
            <div className='card-frontside'>
                <div className="card-content">
                    <div className='result-button-container'>
                        <LotteryButton label='Results &#8631;' onClickHandler={onClickShowResults} role='secondary' />
                    </div>
                    <div className='icon-name-container'>
                        <div className="icon-container">
                            <img src={imageUrl} alt='' />
                        </div>
                        <div className="card-title">{name}
                        </div>

                    </div>
                    <div className='card-subtext'>{name}</div>
                </div>
                <div className='card-footer'>
                    <div className='due-date-container'>
                        <RemainingTime dueDate={dueDate} />
                    </div>

                </div>

            </div>

            <div className='card-backside'>

                <div className='card-content'>

                    <div className='back-button-container'>
                        <CircleButton onClickHandler={onClickBackHandler} label='&#8631;' />
                    </div>

                    <div className='data-container'>
                        <DateDisplay />
                    </div>
     


                    <div className='numbers-container'>
                        <CircleButton onClickHandler={onClickNumberHandler} label='1' />
                        <CircleButton onClickHandler={onClickNumberHandler} label='2' />
                        <CircleButton onClickHandler={onClickNumberHandler} label='3' />
                        <CircleButton onClickHandler={onClickNumberHandler} label='4' />
                        <CircleButton onClickHandler={onClickNumberHandler} label='5' />
                        <CircleButton onClickHandler={onClickNumberHandler} label='6' />

                    </div>
                    <div className='buttons-container'>
                        <LotteryButton onClickHandler={onClickFullResults} label='Full Results' />
                        <LotteryButton onClickHandler={onClickPlayHandler} label='Play Now' />
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default LotteryCard;