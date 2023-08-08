import './LotterySearch.css'

const LotterySearch = ({ onChangeHandler }) => {

    return <>
        <div className="form__group">
            <input type="text" className="form__input" id="name" placeholder="Search Any Thing..." required="" onChange={(e) => onChangeHandler(e.target.value)} />
        </div>
    </>
}

export default LotterySearch;