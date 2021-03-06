import Link from 'next/link'
import { MENU_ITEM } from '../../config'

export default function Header() {
    if (typeof window === 'undefined') return <div />
    const studentProfile = Object.fromEntries(
        document.cookie.split(/; /).map((c) => {
            const [key, v] = c.split('=', 2)
            return [key, decodeURIComponent(v)]
        })
    )
    const checkStudent = studentProfile.setStudent ? true : false
    const checkStudentName = studentProfile.setStudentName
    const onLogout = () => {
        document.cookie = 'setStudent=;'
        document.cookie = 'setStudentId=;'
        document.cookie = 'setStudentName=;'
        window.location.reload()
    }

    return (
        <header id='header' className='fiexd'>
            <div className='container'>
                <nav id='nav-main'>
                    <div className='navbar navbar-inverse'>
                        <div className='navbar-header'>
                            <Link href={MENU_ITEM.HOME}>
                                <a className='navbar-brand'>
                                    <img src='/images/logo.png' />
                                </a>
                            </Link>
                            <button
                                type='button'
                                className='navbar-toggle'
                                data-toggle='collapse'
                                data-target='.navbar-collapse'>
                                <span className='icon-bar' />
                                <span className='icon-bar' />
                                <span className='icon-bar' />
                            </button>
                        </div>
                        <div className='navbar-collapse collapse'>
                            <ul className='nav navbar-nav'>
                                <li className={getClassName(location.pathname === MENU_ITEM.HOME)}>
                                    <Link href={MENU_ITEM.HOME}>
                                        <a>Trang ch???</a>
                                    </Link>
                                </li>
                                <li className={getClassName(location.pathname.includes(MENU_ITEM.SIGN_UP))}>
                                    <Link href={MENU_ITEM.SIGN_UP}>
                                        <a>????ng k?? h???c</a>
                                    </Link>
                                </li>
                                <li className={getClassName(location.pathname.includes(MENU_ITEM.LOOK_UP))}>
                                    <a>Tra c???u</a>
                                    <ul>
                                        <li>
                                            <Link href={MENU_ITEM.LOOK_UP_STUDY_SCORE}>
                                                <a>Tra c???u ??i???m</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={MENU_ITEM.LOOK_UP_LEARNING_OUTCOMES}>
                                                <a>Tra c???u k???t qu??? h???c t???p</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={getClassName(location.pathname.includes(MENU_ITEM.QUIZ))}>
                                    <a>Tr???c nghi???m</a>
                                    <ul>
                                        <li>
                                            <Link href={MENU_ITEM.QUIZ_INTRO}>
                                                <a>L??m tr???c nghi???m</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={MENU_ITEM.QUIZ_RESULT}>
                                                <a>K???t qu??? tr???c nghi???m</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className={getClassName(location.pathname.includes(MENU_ITEM.FORUM))}>
                                    <Link href={MENU_ITEM.FORUM}>
                                        <a>Di???n ????n</a>
                                    </Link>
                                </li>
                                {checkStudent === false ? (
                                    <li className={getClassName(location.pathname === MENU_ITEM.LOGIN)}>
                                        <Link href={MENU_ITEM.LOGIN}>
                                            <a>????ng nh???p</a>
                                        </Link>
                                    </li>
                                ) : (
                                    <li className={getClassName(location.pathname === MENU_ITEM.STUDENT_PROFILE)}>
                                        <a>Xin ch??o {checkStudentName}</a>
                                        <ul>
                                            <li>
                                                <Link href={MENU_ITEM.STUDENT_PROFILE}>
                                                    <a>Trang c?? nh??n</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href={MENU_ITEM.HOME}>
                                                    <a onClick={onLogout}>????ng xu???t</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

const getClassName = (active: boolean) => {
    return active ? 'sub-menu active' : 'sub-menu'
}
