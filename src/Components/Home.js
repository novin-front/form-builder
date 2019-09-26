import React from 'react'

import '../assets/style.css'
import Header from '../MainPage/Header'
import AboutHomepage from '../MainPage/AboutHomepage'
import Footer from '../MainPage/Footer'
export default function Home() {
    return (
        <div>
            <Header/>
            <main id="main">
                <AboutHomepage/>
                <Footer/>
            </main>
        </div>
    )
}
