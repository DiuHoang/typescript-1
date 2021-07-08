import React, { useState } from 'react'
import { LOGIN_URL } from '../../api/api_constants'
import Text from '../../model/loginText.json'
import { MENU_ITEM } from '../../config'

const Login: React.FunctionComponent = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validationMsg, setValidationMsg] = useState({})
    const [message, setMessage] = useState('')

    const validateAll = () => {
        const msg = {}
        if (username == '') {
            msg.username = Text.inputUsername
        }
        if (password == '') {
            msg.password = Text.inputPassword
        }
        setValidationMsg(msg)
        if (Object.keys(msg).length > 0) return false
        return true
    }

    const onLogin = () => {
        const isValid = validateAll()
        if (!isValid) return
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }

            fetch(LOGIN_URL, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    data.token
                        ? (setMessage(''),
                          (document.cookie = 'setStudent=' + JSON.stringify(data)),
                          (document.cookie = 'setStudentId=' + data.id),
                          (document.cookie = 'setStudentName=' + username),
                          window.location.assign(MENU_ITEM.HOME))
                        : setMessage(data.message)
                })
        } catch (error) {}
    }

    return (
        <div>
            <section className='banner'>
                <div className='banner-img'>
                    <img src={Text.imageBanner} />
                </div>
                <div className='page-title'>
                    <div className='container'>
                        <h1>{Text.titleLogin}</h1>
                    </div>
                </div>
            </section>
            <section className='breadcrumb white-bg'>
                <div className='container'>
                    <ul>
                        <li>
                            <a href='/'>{Text.titleHome}</a>
                        </li>
                        <li>
                            <a>{Text.titleLogin}</a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='w3l-workinghny-form'>
                <div className='workinghny-form-grid'>
                    <div className='wrapper'>
                        <div className='logo'>
                            <h1>
                                <a className='brand-logo' href='#'>
                                    <span></span>{' '}
                                </a>
                            </h1>
                        </div>
                        <div className='workinghny-block-grid'>
                            <div className='workinghny-left-img align-end'>
                                <img src={Text.iconLogin} className='img-responsive' alt='img' />
                            </div>
                            <div className='form-right-inf'>
                                <div className='login-form-content'>
                                    <div className='signin-form'>
                                        <div className='one-frm'>
                                            <label>{Text.labelUsername}</label>
                                            <input
                                                type='text'
                                                name='username'
                                                id='username'
                                                required
                                                onChange={(val) => setUsername(val.target.value)}
                                            />
                                            <p className='validate-text'>{validationMsg.username}</p>
                                        </div>
                                        <div className='one-frm'>
                                            <label>{Text.labelPassword}</label>
                                            <input
                                                type='password'
                                                name='password'
                                                id='password'
                                                required
                                                onChange={(val) => setPassword(val.target.value)}
                                            />
                                            <p className='validate-text'>{validationMsg.password}</p>
                                        </div>
                                        <p className='validate-text'>{message}</p>
                                        <button className='btn btn-style mt-3' onClick={onLogin}>
                                            {Text.btnLogin}{' '}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Login
