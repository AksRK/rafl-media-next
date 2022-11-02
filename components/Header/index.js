import styles from './styles.module.scss'
import {useState} from "react";
import Link from 'next/link'
import useWindowSize from "../../hooks/useWindowSize";
import SocialLink from "../UI/SocialLink";
import NavLink from "../UI/NavLink";
import { useRouter } from 'next/router'

function Header() {
    const {asPath} = useRouter()
    const size = useWindowSize()
    const [burgerState, setBurgerState] = useState(false)
    const mobile = 1220
    const logoImg = <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} fill={burgerState?'#000000':'#ffffff'} viewBox="0 0 438.6 81.81"><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><path d="M61.3,0H0V81.73H20.43V61.3h61.3V81.73h20.43V61.3L91.94,51.08l10.22-10.22V20.43L81.73,0ZM81.73,40.86H20.43V20.43h61.3Z"/><path d="M178.47,0H137.6L117.17,20.43v61.3H137.6V61.3h61.3V81.73h20.43V20.43L198.9,0ZM198.9,40.86H137.6V20.43h61.3Z"/><polygon points="295.63 0.08 275.2 0.08 254.77 0.08 234.34 20.52 234.34 40.95 234.34 61.38 234.34 81.81 254.77 81.81 254.77 61.38 275.2 61.38 295.63 61.38 316.07 61.38 316.07 40.95 295.63 40.95 275.2 40.95 254.77 40.95 254.77 20.52 275.2 20.52 295.63 20.52 316.07 20.52 336.5 20.52 336.5 0.08 316.07 0.08 295.63 0.08"/><polygon points="412.81 61.38 392.37 61.38 371.94 61.38 371.94 40.95 371.94 20.52 371.94 0.08 351.51 0.08 351.51 20.52 351.51 40.95 351.51 61.38 371.94 81.81 392.37 81.81 412.81 81.81 438.6 81.81 438.6 61.38 412.81 61.38"/></g></g></svg>

    const headerNavBar = () => {
        return (
            <nav className={styles.headerNav}>
                <NavLink
                    href={'/posts'}
                    myClassName={styles.headerNav__link}
                    myActiveClassName={styles.headerNav__link_active}>
                    <span>Тело Поста Тест</span>
                </NavLink>
                <NavLink
                    href={'/'}
                    myClassName={styles.headerNav__link}
                    myActiveClassName={styles.headerNav__link_active}>
                    <span>Медиа</span>
                </NavLink>
                <NavLink
                    href={'/community'}
                    myClassName={styles.headerNav__link}
                    myActiveClassName={styles.headerNav__link_active}>
                    <span>Комьюнити</span>
                </NavLink>
                <a className={styles.headerNav__link} href=""><span>Студия</span></a>
                <NavLink
                    href={'/about-project'}
                    myClassName={styles.headerNav__link}
                    myActiveClassName={styles.headerNav__link_active}>
                    <span>О проекте</span>
                </NavLink>
                <NavLink
                    href={'/contacts'}
                    myClassName={styles.headerNav__link}
                    myActiveClassName={styles.headerNav__link_active}>
                    <span>Контакты</span>
                </NavLink>
            </nav>
        )
    }
    return (
        <header className={styles.header}>
            <div className={styles.header__logoWrp}>
                <Link className={styles.header__img} href={'/'}>
                    {logoImg}
                </Link>
                <div style={burgerState?{color:'#000000'}:{}} className={styles.header__text} >
                    <p>— независимое издание, освещающее эстетическую сторону российского футбола</p>
                </div>
            </div>
            {
                mobile >= size.width?
                    <>
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
                                    {headerNavBar()}
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

                    :headerNavBar()
            }

        </header>
    )
}

export default Header;