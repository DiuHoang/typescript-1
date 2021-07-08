import type { AppProps } from 'next/app'
import Main from '../layout/Main'
import '../style/home.css'
import '../style/login.css'
import '../style/profile.css'
import '../style/quiz.css'
import '../style/responsive.css'
import '../style/signup.css'
import '../style/viewpoint.css'

function MyApp({ Component, pageProps }: AppProps) {
    // if (typeof window === 'undefined') {
    //     return <div className='wrapper'>Loading</div>
    // }
    return (
        <Main>
            <Component {...pageProps} />
        </Main>
    )
}

export default MyApp
