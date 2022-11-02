import styles from '../styles/sandbox.module.scss'
import {useState} from "react";

export default function Sandbox() {
    const [translateX, setTranslateX] = useState(0)
    const [currentCard, setCurrentCard] = useState(0)

    const cards = [
        {id:1, MyBackground:'red'},
        {id:2, MyBackground:'blue'},
        {id:3, MyBackground:'green'},
        {id:4, MyBackground:'silver'},
    ]

    console.log(cards.at(-1).id)

    function nextCard() {
        if (currentCard === cards.at(-1).id)
            setCurrentCard(0)
        return {transform:`translateX(-${641*currentCard}px)`}
    }
    function autoScroll() {
        setTimeout(()=> {
            setCurrentCard(currentCard + 1)
            autoScroll()
        }, 3000)
    }

    // autoScroll()
    

    return (
        <div style={{background:'white', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>


            <div className={styles.carousel}>
                <div style={nextCard()} className={styles.carousel__container}>
                    {/*<div className={styles.carouselCard}></div>*/}
                    {/*<div style={{background:'red'}} className={styles.carouselCard}></div>*/}
                    {/*<div style={{background:'blue'}} className={styles.carouselCard}></div>*/}
                    {
                        cards.map((el)=> {
                            return <div
                                onClick={()=>setCurrentCard(el.id-1)}
                                key={el.id}
                                style={{background:el.MyBackground}}
                                className={styles.carouselCard}><h1>{el.id}</h1></div>
                        })
                    }
                </div>
            </div>

            {/*<button onClick={()=> setTranslateX(translateX + 641)}>++++</button>*/}

            <button onClick={()=> setCurrentCard(currentCard === 0?cards.at(-1).id:currentCard - 1)}>prev</button>
            <button onClick={()=> setCurrentCard(currentCard+1)}>next</button>
        </div>
    )
}