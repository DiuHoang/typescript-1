import React, { useEffect, useState, Fragment, FormEvent } from 'react'
import { GET_MAJORS } from '../../api/api_constants'
import { COURCEREGIS_URL } from '../../api/api_constants'
import { useRouter } from 'next/router'
import text from '../../model/courseRegister.json'
import type { ICandidate } from '../../../types/CourseRegister'

const SignUp: React.FC<ICandidate> = ({}) => {
    const [candidates, setCandidate] = useState({
        code: '',
        name: '',
        birthday: '',
        tel: '',
        email: '',
        registDate: '',
        isDormitory: '',
        image: '',
        sex: '',
        identification: '',
        profiles: [],
        statusId: '',
        classId: '',
        majorsId: '',
        major: [],
        loading: true,
        error: false
    })
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setCandidate({ ...candidates, loading: true })
        const user = {
            code: candidates.code,
            name: candidates.name,
            birthday: candidates.birthday,
            tel: candidates.tel,
            email: candidates.email,
            registDate: candidates.registDate,
            isDormitory: candidates.isDormitory,
            image: candidates.image,
            sex: candidates.sex,
            identification: candidates.identification,
            profiles: candidates.profiles,
            statusId: candidates.statusId,
            classId: candidates.classId,
            majorsId: candidates.majorsId
        }
        fetch(COURCEREGIS_URL, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((response) => response.json())
            .then((user) => {
               setCandidate(user)
            })
    }

    const [majors, setMajor] = useState({
        code: '',
        name: '',
        fee: null,
        duration: null,
        description: '',
        isEnroll: true,
        image: '',
        numberOfStudents: null
    })
    const router = useRouter()
    const testvalue = router.query.major
    const getData = async () => {
        fetch(GET_MAJORS + testvalue)
            .then((res) => res.json())
            .then((majors) => {
                setMajor(majors)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    const onNameChange = async (e: any) => {
        const { name, value } = e.currentTarget
        const n = name as keyof ICandidate
        // @ts-ignore
        setCandidate({
            ...candidates,
            [n]: value
        })
    }
    const handleFileInput = async (e: any) => {
        const { name } = e.currentTarget
        const image = name as keyof ICandidate
        setCandidate({
            ...candidates,
            image: URL.createObjectURL(e.target.files[0])
        })
    }
    return (
        <Fragment>
            <div className='container'>
                <div className='containerSignup'>
                    <div className='frmSignUp'>
                        <div className='leftSign'>
                            <img src={majors.image} />
                        </div>
                        <div className='rightSign'>
                            <div className='pdGroupinfoTop'>
                                <div className='rightSignFist'>
                                    <div className='pageHeader'>
                                        <h1 className='title'>{majors.name}</h1>
                                    </div>
                                    <div className='pagePrice'>
                                        <span className='price'>{majors.fee}</span>
                                        <p>{majors.description}</p>
                                    </div>
                                    <div className='modaltitle'>
                                        <h4 className='modalTitle'>{text.TitleCourse}</h4>
                                    </div>
                                    <div className='titleForm'>
                                        <p>{text.Titlerequestinput}</p>
                                        <p>
                                            <b>{text.emailContact} </b>
                                            {text.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pageForm'>
                        <form className='formCourse' onSubmit={handleSubmit} method='post' action=''>
                            <div className='contentForm'>
                                <div className='rowform'>
                                    <p id='contactitle'>{text.thongtinll}</p>
                                    <div className='formrow'>
                                        <div className='formGroup'>
                                            <label>{text.code}</label>
                                            <input
                                                required
                                                type='text'
                                                id='code'
                                                name='code'
                                                value={candidates.code}
                                                onChange={onNameChange}
                                                className='ContactFormName'
                                            />
                                        </div>
                                        <div className='formGroup'>
                                            <label>
                                                <span style={{ color: 'red' }}> *</span>
                                                {text.name}
                                            </label>
                                            <input
                                                required
                                                type='text'
                                                id='name'
                                                name='name'
                                                value={candidates.name}
                                                onChange={onNameChange}
                                                className='ContactFormName'
                                            />
                                        </div>
                                    </div>
                                    <div className='formrow'>
                                        <div className='formGroup'>
                                            <label>
                                                <span style={{ color: 'red' }}>*</span>
                                                {text.Email}
                                            </label>
                                            <input
                                                required
                                                type='email'
                                                id='email'
                                                name='email'
                                                value={candidates.email}
                                                onChange={onNameChange}
                                                className='ContactFormName'
                                            />
                                        </div>
                                        <div className='formGroup'>
                                            <label>
                                                <span style={{ color: 'red' }}>*</span>
                                                {text.sdt}
                                            </label>
                                            <input
                                                required
                                                type='text'
                                                id='sdt'
                                                name='tel'
                                                value={candidates.tel}
                                                onChange={onNameChange}
                                                className='ContactFormName'
                                            />
                                        </div>
                                    </div>
                                    <div className='formrow'>
                                        <div className='formGroup'>
                                            <label>{text.indentification}</label>
                                            <input
                                                type='text'
                                                id='CMNN'
                                                name='identification'
                                                value={candidates.identification}
                                                onChange={onNameChange}
                                                className='ContactFormName'
                                            />
                                        </div>
                                        <div className='formGroup'>
                                            <label>{text.Birthday}</label>
                                            <input
                                                type='text'
                                                id='date2'
                                                name='birthday'
                                                value={candidates.birthday}
                                                onChange={onNameChange}
                                                className='ContactFormName'
                                            />
                                        </div>
                                    </div>
                                    <div className='formrow'>
                                        <div className='formGroup'>
                                            <label>{text.gender}</label>
                                            <br />
                                            <select
                                                id='dropdown'
                                                name='sex'
                                                value={candidates.sex}
                                                onChange={onNameChange}>
                                                <option value='1'>{text.nam1}</option>\{' '}
                                                <option value='2'>{text.nu}</option>
                                            </select>
                                        </div>
                                        <div className='formGroup'>
                                            <label>{text.uploadfileTitle}</label>
                                            <div className='file-upload'>
                                                <div className='image-upload-wrap'>
                                                    <input
                                                        name='image'
                                                        id='image'
                                                        onChange={handleFileInput}
                                                        type='file'
                                                        accept='image/*'
                                                    />
                                                    <div className='drag-text'>
                                                        <i className='fa fa-upload' aria-hidden='true'></i>
                                                        <h3>{text.upload}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='formrowimg'>
                                        <div className='upload_image'>
                                            <div className='image-upload-wrap'>
                                                <label>
                                                    <img src={candidates.image ? candidates.image : text.iconAvata} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <p id='contactitle'>{text.thongtinddawngkis}</p>
                                    <div className='formrow'>
                                        <div className='formGroup'>
                                            <label>{text.isDorm}</label>
                                            <br />
                                            <select
                                                id='dropdown2'
                                                name='isDormitory'
                                                value={candidates.isDormitory}
                                                onChange={onNameChange}>
                                                <option value='false'>{text.yes}</option>
                                                <option value='true'>{text.no}</option>
                                            </select>
                                        </div>
                                        <div className='formGroup'>
                                            <label>{text.isDateRegister}</label>
                                            <input
                                                type='text'
                                                id='date'
                                                name='registDate'
                                                onChange={onNameChange}
                                                className='ContactFormName'
                                            />
                                        </div>
                                    </div>
                                    <div className='formrow'>
                                        <div className='formGroup'>
                                            <button type='submit' className='btn btn-primary btn-lg eduButton'>
                                                {text.btnRegis}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SignUp
