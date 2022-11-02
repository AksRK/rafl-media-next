import styles from '../styles/about-project.module.scss'
import DefaultLayout from "../layouts/DefaultLayout";
import { useRouter } from 'next/router'
import MyMain from "../components/MyMain";
import SocialLink from "../components/UI/SocialLink";

export default function AboutProject() {
    const {asPath} = useRouter()

    return (
        <DefaultLayout activePage={asPath}>
            <MyMain bigPadding={true}>
                <div className={styles.aboutProject}>
                    <h2 style={{maxWidth:'700px'}} className={'page-title'}>
                        Russian Aesthetics Football League
                    </h2>

                    <div className={styles.aboutProject__description}>
                        <p>
                            Независимое издание, освещающее эстетическую сторону российского футбола.
                            Мы формулируем новое восприятие игры через процессы, происходящие вокруг неё.
                        </p>
                        <p>
                            Область наших интересов затрагивает культуру, дизайн и продукты футбольных процессов страны.
                        </p>
                        <p>
                            RAFL открывает доступ футбольной аудитории к уникальному контенту,
                            позволяя сместить акцент внимания от негативных элементов российского
                            футбола в пользу удовольствия от процессов вокруг него
                        </p>
                        <p>
                            Мы хотим объединять футбольных людей новой формации, которые воспринимают игру
                            через визуальную призму, Новости, сьемки, репортажи, обзоры,
                            специальные проекты – все это транслирует для наших читателей важные смыслы,
                            сохраняя эстетику любимой игры
                        </p>
                    </div>
                    <div className={styles.aboutProjectCards}>
                        <div className={styles.aboutProjectCards__item}>
                            <div className={styles.aboutProjectCards__img}>
                                {/*<img src="src/pages/Client/AboutProject/AboutProject" alt=""/>*/}
                            </div>
                            <h3 className={styles.aboutProjectCards__title}>
                                {'Игорь \n Селенов'}
                            </h3>
                            <div className={styles.aboutProjectCards__social}>
                                <SocialLink url={'https://vk.com'} social={'inst'} black={true}/>
                                <SocialLink url={'https://vk.com'} social={'vk'} black={true}/>
                            </div>
                        </div>
                        <div className={styles.aboutProjectCards__item}>
                            <div className={styles.aboutProjectCards__img}>
                                {/*<img src="src/pages/Client/AboutProject/AboutProject" alt=""/>*/}
                            </div>
                            <h3 className={styles.aboutProjectCards__title}>
                                {'Игорь \n Зверев'}
                            </h3>
                            <div className={styles.aboutProjectCards__social}>
                                <SocialLink url={'https://vk.com'} social={'inst'} black={true}/>
                                <SocialLink url={'https://vk.com'} social={'vk'} black={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </MyMain>
        </DefaultLayout>
    )
}