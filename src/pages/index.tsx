import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'

const Home = dynamic(() => import('../views/home'))

const Root: NextPage = ({}) => {
    return <Home />
}
export default Root
