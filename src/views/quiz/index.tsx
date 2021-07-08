import Link from 'next/link'
import { useState } from 'react'
import swal from 'sweetalert';
import { useRouter } from 'next/router'
import type { Question } from '../../../types'
import Answer from '../../components/answer'
import CountDown from '../../components/countdown'
import QuizSteps from '../../components/quiz-steps'
import { MENU_ITEM } from '../../config'

const quizList: Question[] = [
    {
        text: 'Để chuẩn bị hướng dẫn chính cho một đoàn khách du lịch, bạn quan tâm đến điều gì',
        answer: '',
        answerList: [
            { key: 1, text: 'Chương trình tour ' },
            { key: 2, text: 'Nội dung thuyết minh' },
            { key: 3, text: 'Hoạt náo' },
            { key: 4, text: 'Đối tượng khách' }
        ]
    },
    {
        text: 'Khi bắt đầu làm quen với khách trên xe, bạn quan tâm đến ai',
        answer: '',
        answerList: [
            { key: 1, text: 'Tài xế' },
            { key: 2, text: 'Trưởng đoàn khách' },
            { key: 3, text: 'Con trai (gái) đẹp' },
            { key: 4, text: 'Không quan tâm đến ai' }
        ]
    },
    {
        text: 'Khi giới thiệu về chương trình Tour, bạn sẽ nhấn mạnh với khách về điều gì',
        answer: '',
        answerList: [
            { key: 1, text: 'Nội quy đi tham quan' },
            { key: 2, text: 'Các dịch vụ khách được hưởng (ăn, uống, phòng nghỉ)' },
            { key: 3, text: 'Thời gian' },
            { key: 4, text: 'An toàn trong Tour' }
        ]
    },
    {
        text: 'Bạn quan tâm đến điều gì khi đi thực tập tour',
        answer: '',
        answerList: [
            { key: 1, text: 'Làm việc theo yêu cầu của HDV' },
            { key: 2, text: 'Quan sát hoạt động của HDV' },
            { key: 3, text: 'Học tập kinh nghiệm từ tài xế' },
            { key: 4, text: 'Giao lưu với khách hàng' }
        ]
    },
    {
        text: 'Khi thuyết minh về  các điểm tham quan bạn chú ý đến điều gì',
        answer: '',
        answerList: [
            { key: 1, text: 'Mô tả điểm tham quan' },
            { key: 2, text: 'Số chỗ ngồi trong một bàn' },
            { key: 3, text: 'Bố trí ghế ngồi và chén đũa cho em bé đi kèm' },
            { key: 4, text: 'Thời gian ăn' }
        ]
    },
    {
        text: 'Khi cho khách chơi trên xe, bạn quan tâm đến',
        answer: '',
        answerList: [
            { key: 1, text: 'Thái độ của khách khi chơi' },
            { key: 2, text: 'Yêu cầu tất cả phải cùng chơi, cùng hưởng ứng' },
            { key: 3, text: 'Chỉ cần một số khách chịu chơi là được' },
            { key: 4, text: 'Không quan tâm gì hết' }
        ]
    },
    {
        text: 'Trong quá trình đi thực tập Tour, nếu có khách nam (nữ) đeo đuổi bạn, bạn sẽ làm gì',
        answer: '',
        answerList: [
            { key: 1, text: 'Từ chối thẳng' },
            { key: 2, text: 'Nói mình đã có người yêu' },
            { key: 3, text: 'Nói khéo mình đang làm việc' },
            { key: 4, text: 'Hẹn gặp riêng' }
        ]
    },
    {
        text: 'Tại nhà hàng, bạn quan tâm đến',
        answer: '',
        answerList: [
            { key: 1, text: 'Thái độ của nhân viên phục vụ' },
            { key: 2, text: 'Số chỗ ngồi của khách' },
            { key: 3, text: 'Thực đơn' },
            { key: 4, text: 'Vệ sinh' }
        ]
    },
    {
        text: 'Khi phân phòng cho khách, bạn ưu tiên phòng đẹp, dưới đất cho ai',
        answer: '',
        answerList: [
            { key: 1, text: 'Trưởng đoàn' },
            { key: 2, text: 'Người già' },
            { key: 3, text: 'Vợ chồng có con nhỏ' },
            { key: 4, text: 'Con trai (gái) đẹp' }
        ]
    },
    {
        text: 'Khi xếp chỗ ngồi cho khách trên xe, bạn ưu tiên chỗ ngồi phía trên cho ai',
        answer: '',
        answerList: [
            { key: 1, text: 'Trưởng đoàn' },
            { key: 2, text: 'Người già' },
            { key: 3, text: 'Vợ chồng có con nhỏ' },
            { key: 4, text: 'Con trai (gái) đẹp' }
        ]
    }
]
export default function Quiz() {
    if (typeof window === 'undefined') return <div />
    const router = useRouter()
    const [quizIntro, setQuizIntro] = useState(true)

    const [currentQuestion, setCurrentQuestion] = useState<number>()
    const [questionList, _] = useState(quizList)

    const onQuestionChange = (direction: 'next' | 'prev') => {
        if (direction === 'next') {
            setCurrentQuestion(currentQuestion! + 1)
        } else if (direction === 'prev') {
            setCurrentQuestion(currentQuestion! - 1)
        }
    }

    const onSelectAnswer = (key: string | null) => {
        questionList[currentQuestion! - 1].answer = `${key}`
    }

    const onStartQuiz = () => {
        swal({ text: 'Bạn muốn bắt đầu làm trắc nghiệm?', buttons: 'Yes!' }).then(() => {
            setQuizIntro(false)
            setCurrentQuestion(1)
        })
    }
    const onSubmitQuiz = () => {
        swal({ text: 'Bạn đã kết thúc bài test!', icon: 'success' , buttons: 'Ok' }).then(() => {
            router.push(MENU_ITEM.QUIZ_RESULT)
            sessionStorage.setItem('questionList', JSON.stringify(questionList))
        })
    }

    const prevDisabled = currentQuestion === 1
    const nextDisabled = currentQuestion === quizList.length
    return (
        <div className='quiz-content'>
            <div>
                <section className='banner'>
                    <div className='banner-img'>
                        <img src='/images/banner/quiz.jpg' />
                    </div>
                    <div className='page-title'>
                        <div className='container'>
                            <h1>Quiz Intro</h1>
                        </div>
                    </div>
                </section>
                <section className='breadcrumb white-bg'>
                    <div className='container'>
                        <ul>
                            <li>
                                <Link href={MENU_ITEM.HOME}>
                                    <a>Trang chủ</a>
                                </Link>
                            </li>
                            <li>
                                <a>Trắc nghiệm</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <section className='quiz-view'>
                <div className='container'>
                    <div className='quiz-title'>
                        <h2>Trắc nghiệm</h2>
                    </div>
                    <div className='row'>
                        <div className='col-sm-4 col-md-3'>
                            <CountDown
                                initialMinute={15}
                                initialSeconds={parseInt('00')}
                                activeCountdown={!quizIntro}
                            />
                            <QuizSteps
                                activeStep={!quizIntro}
                                quizList={questionList}
                                currentQuestion={currentQuestion}
                            />
                        </div>
                        <div className='col-sm-8 col-md-9'>
                            {quizIntro ? (
                                <div className='quiz-intro'>
                                    <h3>Giới thiệu</h3>
                                    <p>Kiểm tra trắc nghiệm thông qua cổng thông tin điện tử</p>
                                    <div className='start-btn'>
                                        <button className='btn' onClick={onStartQuiz}>
                                            Bắt đầu
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className='qustion-main'>
                                    <div className='qustion-box'>
                                        <div className='qustion'>{questionList[currentQuestion! - 1]?.text}</div>
                                     
                                        <Answer
                                            answerList={questionList[currentQuestion! - 1]?.answerList}
                                            currentAnswer={questionList[currentQuestion! - 1]?.answer}
                                            onSelect={onSelectAnswer}
                                        />
                                        <div className='btn-slide'>
                                            <button
                                                className={nextDisabled ? 'btn disabled' : 'btn'}
                                                disabled={nextDisabled}
                                                onClick={() => onQuestionChange('next')}>
                                                <i className='fa fa-angle-right' />
                                            </button>
                                            <button
                                                className={prevDisabled ? 'btn disabled' : 'btn'}
                                                disabled={prevDisabled}
                                                onClick={() => onQuestionChange('prev')}>
                                                <i className='fa fa-angle-left' />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='submit-quiz'>
                                        <a className='btn' onClick={onSubmitQuiz}>
                                            Kết thúc
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
