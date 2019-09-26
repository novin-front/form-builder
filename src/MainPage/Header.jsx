import React from 'react'
import introImg from '../img/intro-img.svg';
export default function Header() {
    return (
        <section id="intro" className="clearfix">
            <div className="container">

                <div className="intro-img">
                    <img src={introImg} alt="" className="img-fluid" />
                </div>

                <div className="intro-info">
                    <h2>ابزاری کاربردی برای ساخت فرم های شما</h2>
                    <div>
                        <a href="#about" className="btn-get-started scrollto">شروع کنید</a>
                        <a href="#services" className="btn-services scrollto">درباره این سرویس</a>
                    </div>
                </div>

            </div>
        </section>
    )
}
