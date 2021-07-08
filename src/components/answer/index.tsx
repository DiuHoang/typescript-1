import React, { MouseEvent, useEffect, useRef } from 'react'


type AnswerList = { key: string | number; text: string }
type AnswerProps = { answerList: AnswerList[]; currentAnswer: string | number; onSelect?: (key: string | null) => void }

export default function Answer({ answerList, currentAnswer, onSelect = () => {} }: AnswerProps) {
    const radioRef = useRef<HTMLDivElement>(null)

    const onCheckboxClick = (event: MouseEvent<HTMLInputElement>) => {
        console.log(`e`, event.currentTarget.checked)
    }

    useEffect(() => {
    }, [currentAnswer, answerList])

    return (
        <div ref={radioRef} className='ans'>
            
            {answerList?.map((a) => (
                <div key={a.key} className='ans-slide'>
                    <label className='label_checkbox' data-key={a.key} htmlFor={`checkbox-${a.key}`}>
                        <input
                            name='sample-radio'
                            id={`checkbox-${a.key}`}
                            data-key={a.key}
                            type='checkbox'
                            onClick={onCheckboxClick}
                        />
                        <div className="text-checkbox">
                        {a.text}
                        </div>
                    </label>
                    

                </div>
            ))}
            
        </div>
    )
}
