import useWindowSize from "../../core/hooks/useWindowSize";
import {useState} from "react";
import Link from "next/link";
import styles from './styles.module.scss'
import Marquee from 'react-double-marquee';

function AdminPanelLayout({children}) {
    const size = useWindowSize()
    const [asideState, setAsideState] = useState(false)
    const response = 1234

    return (
        <div className={'container'}>
            <div className={styles.adminP}>
                <header className={styles.adminP__header}>
                    {
                        response >= size.width?
                            <button onClick={()=> setAsideState(!asideState)}>+</button>:''
                    }

                </header>
                {
                    asideState
                        ? <div style={{
                                height: '100vh',
                                width:'100vw',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                background: '#00000096',
                                zIndex: 9
                            }}
                                 onClick={()=> setAsideState(!asideState)}
                            >
                                <aside style={asideState?{left:'0'}:{}} className={styles.adminNav}>
                                    {
                                        response >= size.width?
                                            <button onClick={()=> setAsideState(!asideState)}>-</button>:''
                                    }
                                    <Link href={'/admin/panel'}
                                          className={styles.adminNav__link}>
                                        Главная
                                    </Link>
                                    <Link href={'/admin/panel/new-post'}
                                          className={styles.adminNav__link}>
                                        Создать статью
                                    </Link>
                                    <Link href={'/admin/auth'}
                                          className={styles.adminNav__link + ' ' + styles.adminNav__link_log_out}>
                                        Выход
                                    </Link>
                                </aside>
                            </div>
                        : null
                }
                <div className={styles.adminP__body}>
                    {
                        asideState
                            ? null
                            : <aside style={asideState?{left:'0'}:{}} className={styles.adminNav}>
                                {
                                    response >= size.width?
                                        <button onClick={()=> setAsideState(!asideState)}>-</button>:''
                                }
                                <Link href={'/admin/panel'}
                                      className={styles.adminNav__link}>
                                    Главная
                                </Link>
                                <Link href={'/admin/panel/new-post'}
                                      className={styles.adminNav__link}>
                                    Создать статью
                                </Link>
                                <Link href={'/admin/auth'}
                                      className={styles.adminNav__link + ' ' + styles.adminNav__link_log_out}>
                                    Выход
                                </Link>
                            </aside>
                    }
                    <div className={styles.adminP__editPage}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPanelLayout;