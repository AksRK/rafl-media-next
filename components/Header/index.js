import styles from './styles.module.scss'
import {useState} from "react";
import Link from 'next/link'
import useWindowSize from "../../core/hooks/useWindowSize";
import SocialLink from "../UI/SocialLink";
import Logo from "../UI/Logo";
import NavBar from "../NavBar";


function Header({routes}) {
    const size = useWindowSize()
    const [burgerState, setBurgerState] = useState(false)
    const mobile = 1220

    return (
        <header className={styles.header}>
            <div className={styles.header__logoWrp}>
                <Link className={styles.header__img} href={'/'} style={{
                    color: burgerState ? '#000000' : '#ffffff'
                }}>
                    <Logo burgerState={burgerState}/>
                </Link>
                <div style={burgerState?{color:'#000000'}:{}} className={styles.header__text} >
                    <p>— независимое издание, освещающее эстетическую сторону российского футбола</p>
                </div>
            </div>
            {
                mobile >= size.width
                    ? <>
                        <button onClick={()=> setBurgerState(!burgerState)}
                                className={styles.burgerButton}
                                style={burgerState?{background:'#000000', color:'#ffffff'}:{}}>
                            {
                                burgerState?'Закрыть':'Меню'
                            }
                        </button>
                        <div style={burgerState?{top:'0'}:{top:'-530px'}} className={styles.burgerMenu}>
                            <div style={burgerState?{opacity:'100%',}:{}} className={styles.burgerMenu__content}>
                                <div style={!burgerState?{opacity:'0'}:{}} className={styles.burgerMenu__navWrp}>
                                    <NavBar routes={routes}/>
                                </div>


                                <div className={styles.burgerMenu__socialWrp}>
                                    <SocialLink url={'https://vk.com'} social={'inst'} black={true}/>
                                    <SocialLink url={'https://vk.com'} social={'tg'} black={true}/>
                                    <SocialLink url={'https://vk.com'} social={'vk'} black={true}/>
                                    <SocialLink url={'https://vk.com'} social={'yt'} black={true}/>
                                </div>

                            </div>
                        </div>
                    </>
                    : <NavBar routes={routes}/>
            }

        </header>
    )
}

export default Header;