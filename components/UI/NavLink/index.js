import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavLink({href, children, myClassName, myActiveClassName}) {
    const {asPath} = useRouter()

    function tst() {
        // if (href.includes(path[1]) ) {
        //     return myActiveClassName
        // }
        if ('/'+asPath.replaceAll('/', ' ').split(' ')[1] === href) {
            return myActiveClassName
        }

    }


    return (
        <Link
            href={href}
            className={myClassName + ' ' + tst()}
        >
            {children}
        </Link>
    )
}