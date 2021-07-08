import dynamic from 'next/dynamic'

import { MENU_ITEM } from '../../config'

const Lookup = dynamic(() => import('../../views/look-up'))
const Quiz = dynamic(() => import('../../views/quiz'))
const QuizResult = dynamic(() => import('../../views/quiz-result'))
const SignUp = dynamic(() => import('../../views/signup'))

const NotFound = dynamic(() => import('../../views/not-found'))
const Login = dynamic(() => import('../../views/login'))
const StudentProfile = dynamic(() => import('../../views/student-profile'))

export default function Page() {
    if (typeof window === 'undefined') return <div>Loading</div>
    switch (location.pathname) {
        case MENU_ITEM.QUIZ_INTRO:
            return <Quiz />
        case MENU_ITEM.QUIZ_RESULT:
            return <QuizResult />
        case MENU_ITEM.SIGN_UP:
            return <SignUp />
        case MENU_ITEM.LOOK_UP_STUDY_SCORE:
            return <Lookup />
        case MENU_ITEM.LOGIN:
            return <Login />
        case MENU_ITEM.STUDENT_PROFILE:
            return <StudentProfile />
        default:
            return <NotFound />
    }
}
