import Link from 'next/link'
import type { Question } from '../../../types'
import Answer from '../../components/answer'
import { MENU_ITEM } from '../../config'

export default function QuizResult() {
    if (typeof window === 'undefined') return <div />
    const questionList: Question[] = JSON.parse(sessionStorage.getItem('questionList')!) || []
    return (
        <>
            <div>
                <section className='banner'>
                    <div className='banner-img'>
                        <img src='/images/banner/quiz.jpg' />
                    </div>
                    <div className='page-title'>
                        <div className='container'>
                            <h1>Kết quả trắc nghiệm</h1>
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
                        <h2>Kết quả trắc nghiệm</h2>
                    </div>
                    <div className='row'>
                        <div className='col-sm-8 col-md-9'>
                            {questionList.length === 0 ? (
                                <div className='leaderboard'>Bạn chưa có kết quả nào</div>
                            ) : (
                                <div className='qustion-box'>
                                    {questionList.map((q: Question, index: number) => (
                                        <div key={index} className='qustion'>
                                            {q.text}
                                            <Answer answerList={q.answerList} currentAnswer={q.answer} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
