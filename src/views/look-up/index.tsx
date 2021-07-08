import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import text from '../../../src/model/viewpoint.json'
import type { Viewpoint, ViewpointCode } from '../../../types/Viewpoint'
import { VIEWPOINTOPTION_URL } from '../../api/api_constants'
import { MENU_ITEM } from '../../config'
import '../../pages/_app'

export default function Viewpoints() {
    const [detail, setDetail] = useState<Viewpoint | undefined>()
    const [viewpoint_code, setViewpoint_code] = useState<ViewpointCode[]>([])
    const [studentId, setStudentId] = useState<string | undefined>()
    const studentIdRef = useRef<string | undefined>()
    const getViewpoint = async () => {
        fetch(VIEWPOINTOPTION_URL)
            .then((res) => res.json())
            .then((viewpoint_code) => {
                if (viewpoint_code == [] || viewpoint_code == null) {
                    throw new Error(text.error)
                } else {
                    setViewpoint_code(viewpoint_code)
                }
            })
            .catch(() => {
                throw new Error(text.error)
            })
    }
    useEffect(() => {
        getViewpoint()
    }, [])

    useEffect(() => {
        studentId &&
            fetch(VIEWPOINTOPTION_URL + `/${studentId}/print-point`)
                .then((res) => res.json())
                .then((detailStudent) => setDetail(detailStudent))
    }, [studentId])

    return (
        <>
            <div>
                <section className='banner'>
                    <div className='banner-img'>
                        <img src='/images/banner/courses-banner.jpg' />
                    </div>
                    <div className='page-title'>
                        <div className='container'>
                            <h1>{text.title}</h1>
                        </div>
                    </div>
                </section>
                <section className='breadcrumb white-bg'>
                    <div className='container'>
                        <ul>
                            <li>
                                <Link href={MENU_ITEM.HOME}>{text.home}</Link>
                            </li>
                            <li>
                                <a>{text.search}</a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
            <div className='container'>
                <select className='question_inp' onChange={(e) => (studentIdRef.current = e.target.value)}>
                    <option selected>{text.placeholder1}</option>
                    {viewpoint_code.map((student, index) => (
                        <option value={student.id} key={index}>
                            {student.code}
                        </option>
                    ))}
                </select>
                <button className='question_bt' onClick={() => setStudentId(studentIdRef.current)}>
                    {text.btsearch}
                </button>
            </div>
            {detail && (
                <div className='container'>
                    <div className='name_hs'>
                        <h3>
                            {text.name} {detail.name}
                        </h3>
                        <h4>
                            {text.class} {detail?.classes?.map((item) => item.className).join(', ')}
                        </h4>
                        <h4>
                            {text.phase} {detail.schoolYearName}
                        </h4>
                    </div>
                    <br />
                    <h4 className='danhsachdiem'>{text.listscore}</h4>
                    {detail.points?.map((point, index) => (
                        <div key={index} className='big_listofpoint2'>
                            <div>
                                <hr className='hr' />
                                <div className='sub_listofpoint2'>
                                    <h4>
                                        {text.phase} {point.phase}
                                    </h4>
                                    <hr />
                                    <div className='sub2_listofpoint2'>
                                        {point.subjects.map((subject, index) => (
                                            <div key={index} className='sub_sub_listofpoint'>
                                                <div>
                                                    <p>
                                                        {text.subject} {subject.name}
                                                    </p>
                                                    <p>
                                                        {text.score} {subject.point}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h4 className='congra'>{text.congratulations}</h4>
                </div>
            )}
            <br />
        </>
    )
}
