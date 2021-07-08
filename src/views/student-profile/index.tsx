import React, { useEffect, useState, Fragment } from 'react'
import type { Student } from '../../../types/Student'
import { STUDENT_URL } from '../../api/api_constants'
import Text from '../../model/profileText.json'
import { MENU_ITEM } from '../../config'

export default function StudentProfile() {
    const [student, setStudent] = useState<Student>({})

    const studentProfile = Object.fromEntries(
        document.cookie.split(/; /).map((c) => {
            const [key, value] = c.split('=', 2)
            return [key, decodeURIComponent(value)]
        })
    )
    const checkStudent = studentProfile.setStudent ? true : false

    const getProfile = async () => {
        fetch(STUDENT_URL + studentProfile.setStudentId)
            .then((res) => res.json())
            .then((student) => {
                if (student.status == 500) {
                    throw new Error(Text.errorServer)
                } else {
                    setStudent(student)
                }
            })
    }
    useEffect(() => {
        getProfile()
    }, [])

    const renderTableData = () => {
        const { code, name, image, schoolYearName, className, email, tel, birthday, startDate } = student
        return (
            <tbody>
                <div>
                    <tr>
                        <td className='td-default'>{Text.fullname} </td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td className='td-default'>{Text.codeStudent}</td>
                        <td>{code}</td>
                    </tr>
                    <tr>
                        <td className='td-default'>{Text.source}</td>
                        <td>{schoolYearName}</td>
                    </tr>
                    <tr>
                        <td className='td-default'>{Text.class}</td>
                        <td>{className}</td>
                    </tr>
                </div>
                <div>
                    <tr>
                        <td className='td-default'>{Text.email}</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td className='td-default'>{Text.birthday}</td>
                        <td>
                            {new Intl.DateTimeFormat('en-GB', {
                                day: '2-digit',
                                year: 'numeric',
                                month: '2-digit'
                            }).format(birthday)}
                        </td>
                    </tr>
                    <tr>
                        <td className='td-default'>{Text.phoneNumber}</td>
                        <td>{tel}</td>
                    </tr>
                </div>
            </tbody>
        )
    }
    return (
        <Fragment>
            <>
                {checkStudent == false ? (
                    <div>
                        <section className='banner'>
                            <div className='banner-img'>
                                <img src='/images/banner/aboutUs-banner.jpg' />
                            </div>
                            <div className='page-title'>
                                <div className='container'>
                                    <h1>{Text.pageNotFound}</h1>
                                </div>
                            </div>
                        </section>
                        <div className='page-404'>
                            <div className='container'>
                                <div className='section-title'>
                                    <h2>{Text.informMessage}</h2>

                                    <p>
                                        {' '}
                                        <button className='btn btn-style mt-3'>
                                            <a href={MENU_ITEM.LOGIN} className='btnLogin-profile'>
                                                {Text.requestLoginbtn}
                                            </a>
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <section className='banner'>
                            <div className='banner-img'>
                                <img src={Text.imageBanner} />
                            </div>
                            <div className='page-title'>
                                <div className='container'>
                                    <h1>{Text.titleProfile}</h1>
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
                                        <a>{Text.titleProfile}</a>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section className='container'>
                            <div className='my-account'>
                                <div className='account-tab'>
                                    <ul>
                                        <li className='active'>
                                            <a href='#' id='profile'>
                                                {Text.profileTab}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='tab-content profile-con open'>
                                    <div className='profile-page-desktop'>
                                        <div className='top-left'>
                                            <img src={student.image} />
                                            <br />
                                            <br />
                                        </div>
                                        <div className='top-right'>
                                            <div className='top-right-infor'>
                                                <table>{renderTableData()}</table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='profile-page-mobile'>
                                        <div className='on-infor'>
                                            <table>{renderTableData()}</table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </>
        </Fragment>
    )
}
