import Image from 'next/image'
import React from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { AngleDownIcon, BennitoIcon } from '../SVGs/SVGs'
import AboutBennito from './AboutBennito'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Services from './Services'

type Props = {}

export default function LandingPage({ }: Props) {
    const {width, height, tailwindWidth} = useWindowSize()
    return (
        <div className='bg-white   fixed overflow-x-scroll h-full w-full   scrollbar-hide    '>
            <Header />
            <Hero width={width} />
            <AboutBennito width={width} tailwindWidth={tailwindWidth} />
            <Services />
            {/* <AboutUs /> */}
            <Footer />
        </div>
    )
}