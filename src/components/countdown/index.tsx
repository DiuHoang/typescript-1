import { useEffect, useState } from 'react'

type Props = { initialMinute: number; initialSeconds: number; activeCountdown?: boolean }
export default function CountDown(props: Props) {
    const { initialMinute = 0, initialSeconds = 0, activeCountdown = false } = props
    const [minutes, setMinutes] = useState(initialMinute)
    const [seconds, setSeconds] = useState(initialSeconds)

    useEffect(() => {
        let myInterval: any
        if (activeCountdown) {
            myInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1)
                }
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(myInterval)
                    } else {
                        setMinutes(minutes - 1)
                        setSeconds(59)
                    }
                }
            }, 1000)
        }

        return () => {
            clearInterval(myInterval)
        }
    }, [seconds, minutes, activeCountdown])

    return (
        <>
            <div className='time-info'>Thời gian </div>
            {minutes === 0 && seconds === 0 ? null : (
                <div className='countdownHolder'>
                    <span className='countMinutes'>
                        <span className='position' style={{ marginRight: 5 }}>
                            <span className='digit static'>{minutes < 10 ? `0` : `${minutes}`.substr(0, 1)}</span>
                        </span>
                        <span className='position'>
                            <span className='digit static'>{minutes >= 10 ? `${minutes}`.substr(1, 2) : minutes}</span>
                        </span>
                    </span>
                    <span className='countDiv'></span>
                    <span className='countSeconds'>
                        <span className='position' style={{ marginRight: 5 }}>
                            <span className='digit static'>{seconds < 10 ? `0` : `${seconds}`.substr(0, 1)}</span>
                        </span>
                        <span className='position'>
                            <span className='digit static'>{seconds >= 10 ? `${seconds}`.substr(1, 2) : seconds}</span>
                        </span>
                    </span>
                </div>
            )}
        </>
    )
}
