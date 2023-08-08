import './LotteryButton.css'

const LotteryButton = ({label, onClickHandler, role = 'main'}) => {
    return <button className={"LotteryButton " + role} onClick={() => onClickHandler()} role="button">{label}</button>
}

export default LotteryButton