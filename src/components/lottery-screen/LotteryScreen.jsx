import { useCallback, useEffect, useMemo, useState } from "react"
import LotteryCard from "../lottery-card/LotteryCard"
import './LotteryScreen.css'
import LotterySearch from "../lottery-search/LotterySearch"
import LotteryFilterButton from "../lottery-filter-buttons/LotteryFilterButton"
import store from "../../store/store"
import arraySort from "../../utils/arraySort"
import jack2 from '../../../src/assets/jackpot2.png'
import jack1 from '../../../src/assets/jackpotIcon1.jpg'
import ErrorMessage from "../error-message/ErrorMessage"
import Loading from "../loading/Loading"

const LotteryScreen = () => {

    const storeState = store.getState()
    const [cards, setCards] = useState(storeState.lotteryList)
    useEffect(() => {
        setCards(storeState.lotteryList)
    }, [storeState.lotteryList])


    const onFilterButtonClick = (selectedCategory) => {
        const index = selectedCategoryArray.findIndex(item => item === selectedCategory);
        if (index !== -1) {
            setSelectedCategory(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
        }
        else {

            setSelectedCategory([...selectedCategoryArray, selectedCategory])
        }
    }




    const [searchText, setSearchText] = useState('')
    const [selectedCategoryArray, setSelectedCategory] = useState([])



    const searchLotteryHandler = (value) => {
        setSearchText(value);

    }

    const searchTextRegex = new RegExp(searchText, 'i');
    let filterCards = cards.filter(card => searchTextRegex.test(card.name))
    filterCards = filterCards.filter(card => selectedCategoryArray.findIndex(item => item === card.category))

    const sortedFilterdCards = useMemo(() => {
        return arraySort(filterCards)
    }, [filterCards]);
    return <div className="LotteryScreen">
        <div className="container">
            <div className="search-filter-container">
                <div className="search-container">
                    <LotterySearch onChangeHandler={searchLotteryHandler} />
                </div>
                <div className="filter-buttons-container">
                    <LotteryFilterButton label='jackpot' onClickHandle={onFilterButtonClick} />
                    <LotteryFilterButton label='Draw Time' onClickHandle={onFilterButtonClick} />
                    <LotteryFilterButton label='Lottery Name' onClickHandle={onFilterButtonClick} />
                </div>

            </div>
            <div className="card-container">
                {storeState.loading ? <Loading /> :
                    cards && cards.length > 0 ?
                        sortedFilterdCards.map((item) => <LotteryCard key={item.id} {...item} imageUrl={item.id % 2 === 0 ? jack1 : jack2} />)
                        :
                        <ErrorMessage ErrorMessage={storeState.error} />
                }
            </div>

        </div>
    </div>
}

export default LotteryScreen;