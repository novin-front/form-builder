import React from 'react'

export default function Footer() {
    return (
    <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6 footer-info">
            <h3>فرم ساز ما</h3>
                            <p>در یک فرم ساده، شما می توانید نظرات سایر افراد را به راحتی بررسی کنید و به اطلاعات مورد نیاز خود دست پیدا کنید. حتی برای قسمت تماس در وبسایت ها هم نیاز به یک فرم دارید. برنامه نویس های حرفه ای می توانند به راحتی یک فرم مخصوص شما بسازند اما اگر یک فرم رایگان بخواهید، می توانید از سرویس های آنلاین فرم ساز استفاده کنید تا یک فرم آنلاین رایگان و سفارشی داشته باشید.</p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="# ">صفحه اصلی</a></li>
              <li><a href="# ">درباره ما</a></li>
              <li><a href="# ">خدمات ما</a></li>
              <li><a href="# ">درباره تیم ما</a></li>
              <li><a href="# ">قوانین ما</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>ارتباط با ما</h4>
            <p>
              تهران سهروردی شمالی <br/>
             خیابان خرمشهر<br/>
              کوچه حسینی <br/>
              <strong>تلفن:</strong> 09192018492<br/>
              <strong>ایمیل:</strong> info@example.com<br/>
            </p>

            <div className="social-links">
              <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
              <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
              <a href="#" className="instagram"><i className="fa fa-instagram"></i></a>
              <a href="#" className="google-plus"><i className="fa fa-google-plus"></i></a>
              <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
            </div>

          </div>

          <div className="col-lg-3 col-md-6 footer-newsletter">
            <h4>پاسخگوی همه نیازها</h4>
                            <p>اگر یک فرم ساز سریع و راحت می خواهید، فرمالو در خدمت شماست. اما فرمالو فقط سریع و راحت نیست! فرمالو برای حرفه ای هاست. امکانات حرفه ای فرمالو شما را از هرگونه هزینه اضافی، برنامه نویسی سنگین و مصرف منابع بالا حفظ می کند.</p>
            <form action="" method="post">
              <input type="email" name="email"/><input type="submit"  value="عضویت"/>
            </form>
          </div>

        </div>
      </div>
    </div>
        <div className="container">
      <div className="copyright">
        &copy;تمامی حقوق برای سایت محمد یزدان پناه محفوظ می باشد.
            
      </div>
      <div className="credits">

        طراحی شده توسط <a href="# ">محمد یزدان پنا</a>
      </div>
    </div>
  </footer>
    )
}
