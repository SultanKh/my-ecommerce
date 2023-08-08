import './DateDisplay.css'
const DateDisplay = () => {
    const currentDate = new Date().toLocaleDateString()
    const currentTime = new Date().toLocaleTimeString()


    return <div className="DateDisplay">
        {currentDate} {currentTime}
    </div>
}

export default DateDisplay;