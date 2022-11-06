import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function DefaultLayout({children}) {
    const publicRoutes = [
        {link: '/posts', name: 'Тело Поста Тест'},
        {link: '/', name: 'Медиа'},
        {link: '/community', name: 'Комьюнити'},
        {link: '/about-project', name: 'О проекте'},
        {link: '/contacts', name: 'Контакты'},
    ]
    return (
        <div className={'container'}>
            <Header routes={publicRoutes}/>
            {children}
            <Footer/>
        </div>
    )
}