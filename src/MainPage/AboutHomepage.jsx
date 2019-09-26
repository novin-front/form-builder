import React from 'react'
import aboutImg from '../img/about-img.svg';
import aboutExtraOne from '../img/about-extra-1.svg'
import aboutExtraTwo from '../img/about-extra-2.svg'
export default function AboutHomepage() {
    return (
    <section id="about">
      <div className="container">

        <header className="section-header">
          <h3>ساختن فرم آنلاین</h3>
                    <p>با فرم ساز رایگان فرمالو، به راحتی در چند ثانیه هرگونه فرم دلخواهی را کاملا رایگان بسازید، در وبسایت خود قرار دهید و نتایج را آنالیز کنید</p>
        </header>

        <div className="row about-container">

          <div className="col-lg-6 content order-lg-1 order-2">
            <p>
             فرم ساز انلاین ما با هدف ساده ساختن فرآیند ساخت هرگونه فرم ساده و پیشرفته ای بدون هیچ دانش برنامه نویسی ساخته شده است. در چند ثانیه فرم مطلوب خود را بسازید و منتشر کنید. حتی می توانید فرم های خود را در وبسایت خود اضافه و استفاده نمایید.
            </p>

            <div className="icon-box wow fadeInUp">
              <div className="icon"><i className="fa fa-shopping-bag"></i></div>
              <h4 className="title"><a href="">سادگی در عین کارایی</a></h4>
                            <p className="description">برای سادگی کار بخش ساخت فرم به صورت مرحله ای (step by step) طراحی شده تا افراد مبتدی هم به راحتی بتونن باش کار کنند و گیج نشن!</p>
            </div>

            <div className="icon-box wow fadeInUp" data-wow-delay="0.2s">
              <div className="icon"><i className="fa fa-photo"></i></div>
              <h4 className="title"><a href="">تنوع در رنگ آمیزی فرم ها</a></h4>
                            <p className="description">می تونی هر رنگی برای فرم هات انتخاب کنی تا با سلیقه خودت جور باشه. اینم برای اونایی که سلیقه های خیلی خاص دارن!</p>
            </div>

            <div className="icon-box wow fadeInUp" data-wow-delay="0.4s">
              <div className="icon"><i className="fa fa-bar-chart"></i></div>
              <h4 className="title"><a href="">دریافت اطلاعات به صورت لحظه ای</a></h4>
                            <p className="description">همون لحظه که کاربران فرم رو پر می کنند اطلاعات ارسالی شون میاد توی پیوی تلگرامت و inbox ایمیلت.</p>
            </div>

          </div>

          <div className="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
            <img src={aboutImg} className="img-fluid" alt=""/>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 wow fadeInUp">
            <img src={aboutExtraOne} className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>فرم های کارآمد درست کنید، اطلاعات خود را تحلیل کنید</h4>
            <p>
             
فرم ها و نظرسنجی های مختلف به تعداد دلخواه و رایگان درست کنید! فرم هایی مثل فراخوان ارسال مقاله، فرم ثبت نام، فرم استخدام، فرم نظرسنجی های کوچک و بزرگ و حتی فرم های تماس با ما و سفارش برای کسب و کار خود ایجاد نمایید. فرم ساز پیشرفته ما را امتحان کنید و فرمتان را مستقیما در وبسایت خود قرار دهید!
                          
            </p>
            <p>
               فرم ساز ما برخلاف فرم ساز گوگل کاملا با وبسایت شما یکپارچه می شود و می‌توان از فرمالو به عنوان فرم ساز وردپرس، فرم ساز جوملا و هر سیستم ساخت وبسایت دیگری استفاده نمود.
            </p>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
            <img src={aboutExtraTwo} className="img-fluid" alt=""/>
          </div>

          <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                        <h4>سبک‌بندی فرم مطابق با کسب و کار شما</h4>
            <p>
              امروز در انزل وب بهترین ابزار های فرم ساز آنلاین رایگان را به شما معرفی می کنیم تا به هر دلیلی که نیاز به ساخت یک فرم آنلاین برای ارتباط بیشتر ، ثبت نام ، پر کردن داده های مورد نیاز و.. کاربران وبلاگ یا وب سایت خود دارید، به سادگی این کار را انجام دهید.
            </p>
            <p>
              قطعا یکی از راه های پیشرفت کسب و کار، بررسی نظر مشتریان و کاربران است. بهترین راه این کار هم ساخت یک فرم می باشد تا به صورت آنلاین با بازخورد افراد آشنا شوید و یا با آن ها در ارتباط بمانید.
            </p>
          </div>
          
        </div>

      </div>
    </section>
    )
}
