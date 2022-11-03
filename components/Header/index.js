import styles from './styles.module.scss'
import {useState} from "react";
import Link from 'next/link'
import useWindowSize from "../../core/hooks/useWindowSize";
import SocialLink from "../UI/SocialLink";
import NavLink from "../UI/NavLink";
import { useRouter } from 'next/router'
import Logo from "../UI/Logo";

function Header() {
    const {asPath} = useRouter()
    const size = useWindowSize()
    const [burgerState, setBurgerState] = useState(false)
    const mobile = 1220

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