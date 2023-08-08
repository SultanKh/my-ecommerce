import React from 'react';
import './LotteryItem.css'; // Assuming you saved the CSS styles in a file named "LotteryItem.css"
import { useParams } from 'react-router-dom';

const LotteryItem = () => {

    const { id } = useParams();
    return (
        <div className="lottery-details">
            <div className="lottery-details-header">
                <h2 className="lottery-title">lottery Title</h2>
                <p className="lottery-date">lottery Date - Time</p>
            </div>
            <p className="lottery-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et turpis eu libero finibus
                tincidunt. Suspendisse potenti. Nullam ac enim eget nisi euismod fringilla.
            </p>
            <div className="lottery-details-footer">
                <p className="lottery-location">Location: lottery Venue</p>
                <p className="lottery-attendees">Attendees: 100</p>
                <p className="lottery-attendees">ID: {id}</p>
            </div>
        </div>
    );
};

export default LotteryItem;
