import './CircleButton.css'

const CircleButton = ({label, onClickHandler}) => {
    return <button className="CircleButton" role="button" onClick={() => onClickHandler()}>
        {label}
    </button>
}

export default CircleButton;