import Link from 'next/link'
import { MENU_ITEM } from '../../config'
import React, { useState, useEffect } from 'react'
import { CANDIDATE_URL } from '../../api/api_constants'
import Info from '../../model/major.json'
import type { Major } from '../../../types/Major'

export default function Majors() {
    const [majors, setMajors] = useState<Major[]>([])
    const getMajors = async () => {
        await fetch(CANDIDATE_URL)
            .then((res) => res.json())
            .then((majors) => {
                if (majors == [] || majors == null) {
                    throw new Error(Info.messageError)
                } else {
                    setMajors(majors)
                }
            })
    }

    useEffect(() => {
        getMajors()
    }, [])
    return (
        <>
            <section className='banner'>
                <div className='banner-img'>
                    <img src='/images/banner/banner-img1.jpg' />
                </div>
                <div className='banner-text'>
                    <div className='container'>
                        <h1>{Info.title_banner_home}</h1>
                        <p>{Info.slogan}</p>
                        <div className='search-box'>
                            <input type='text' placeholder={Info.placeholderSearch} />
                            <input type='submit' value='' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='our-course'>
                <div className='popular_course pb--100'>
                    <div className='container'>
                        <div className='section-title'>
                            <h2>
                                {Info.section_title} <br></br>
                                <p>{Info.desShort}</p>
                            </h2>
                        </div>

                        <div className='rows'>
                            {majors.map((major, index) => (
                                <div className='col-lg-4 col-md-6' key={index}>
                                    <div className='single-course'>
                                        <div className='course-image'>
                                            <a href='#'>
                                                <img src={major.image ? major.image : Info.img_default} />
                                            </a>
                                        </div>
                                        <div className='course-content'>
                                            <div className='rating clearfix '>
                                                <div className='float-right'>
                                                    <Link
                                                        href={{
                                                            pathname: MENU_ITEM.SIGN_UP,
                                                            query: { major: major.id }
                                                        }}>
                                                        {(() => {
                                                            if (major.isEnroll) {
                                                                return <a>{Info.sign_up}</a>
                                                            } else {
                                                                return <a className='register'></a>
                                                            }
                                                        })()}
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className='bottom-text'>
                                                <h6>
                                                    <a href=''> {major.name}</a>
                                                </h6>
                                                <p>{major.description} </p>
                                            </div>
                                            <div className='info clearfix'>
                                                <div className='float-lefts'>
                                                    <p>
                                                        <i className='fa fa-clock-o' aria-hidden='true'></i>
                                                        {(() => {
                                                            if (major.duration < 12) {
                                                                return major.duration + ' ' + Info.MonthDuration
                                                            } else if (major.duration == 12) {
                                                                return major.duration / 12 + ' ' + Info.YearDuration
                                                            } else {
                                                                return (
                                                                    ((major.duration / 12) | 0) +
                                                                    ' ' +
                                                                    Info.YearDuration +
                                                                    ' ' +
                                                                    (major.duration % 12 <= 0
                                                                        ? ''
                                                                        : (major.duration % 12) +
                                                                          ' ' +
                                                                          Info.MonthDuration)
                                                                )
                                                            }
                                                        })()}
                                                    </p>
                                                </div>
                                                <div className='float-rights'>
                                                    <p>
                                                        <i className='fa fa-user' aria-hidden='true' />
                                                        {(() => {
                                                            if (major.isEnroll) {
                                                                return (
                                                                    major.numberOfStudents
                                                                        ?.toString()
                                                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
                                                                    ' ' +
                                                                    Info.titleNumberOfStudent
                                                                )
                                                            } else {
                                                                return Info.titleNumberOfStudent
                                                            }
                                                        })()}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
