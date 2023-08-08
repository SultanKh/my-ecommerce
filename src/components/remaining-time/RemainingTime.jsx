import React, { useEffect, useState } from 'react';
import './RemainingTime.css'
const RemainingTime = ({ dueDate }) => {
    const [remainingTime, setRemainingTime] = useState('');
    const [days, setDays] = useState('')
    const [hours, setHours] = useState('')

    const dueDateObjDisplay = new Date(dueDate); 
    useEffect(() => {
        // Function to calculate remaining time
        const calculateRemainingTime = () => {
            const dueDateObj = new Date(dueDate);
            const currentTime = new Date();

            const timeDifference = dueDateObj.getTime() - currentTime.getTime();

            if (timeDifference <= 0) {
                // The lottery has already expired
                setRemainingTime('Expired');
            } else {
                // Calculate remaining time
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

                setDays(days);
                setHours(hours);
                setRemainingTime(`${days} days ${hours} hours`);
            }
        };

        calculateRemainingTime();
    }, [dueDate]);

    return (
        <div className="lottery-card">
            {remainingTime === 'Expired' ? <p className='fulldate-display'>Expired</p> : 
            days < 4 ?
            // <p> {remainingTime}</p>
            <div className='day-hour-display'>
                <div>0{days}</div> Days
                <br/>
                <div>{hours}</div> Hours
            </div>

            : <p className='fulldate-display'>{dueDateObjDisplay.toDateString()}</p>
            }

        </div>
    );
};

export default RemainingTime;
