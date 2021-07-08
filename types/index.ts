export interface Question {
    text: string
    answer: string
    answerList: AnswerList[]
}
interface AnswerList {
    key: number
    text: string
}
