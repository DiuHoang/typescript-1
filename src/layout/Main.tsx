import 'glider-js/glider.min.css'
import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'

const Header = dynamic(() => import('./header'))
const Footer = dynamic(() => import('./footer'))

type Props = { children?: ReactNode }
export default function Main({ children }: Props) {
    return (
        <div className='wapper'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
