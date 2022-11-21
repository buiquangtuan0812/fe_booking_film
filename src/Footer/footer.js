// import Image from './image/logo_footer.gif';
import styles from './footer.module.scss';
import classNames from 'classnames/bind';
import Image from "./image/footer_banner.jpg";

const cx = classNames.bind(styles);

function Footer(image) {
    return (
        <footer>
            <div className={cx('container')}>
                <section className={cx('footer')}>
                    <img className={cx('footer__up')} href="#" src = {Image} />
                    <div className={cx('footer__down')}>
                        <div className={cx('footer__company')}>
                            <ul className={cx('footer__link')}>
                                <li className={cx('footer__link_item')}>
                                    <a href="#">Chính sách khách hàng thường xuyên</a>
                                </li>
                                <li className={cx('footer__link_item')}> 
                                    <a href="#">Chính sách bảo mật thông tin</a>
                                </li>
                                <li> 
                                    <a href="#">Điều khoản sử dụng</a>
                                </li>
                            </ul>
                            <div className={cx('footer__info')}>
                                <p>Công ty TNHH PTIT CINEMA VIỆT NAM</p>
                                <p>Giấy CNĐKDN: 0908232002, đăng ký lần đầu ngày 20/08/2022, đăng ký thay đổi lần thứ 10 ngày 20/08/2022, cấp bởi Sở KHĐT Thành phố Hà Nội </p>
                                <p>Địa chỉ: Tầng 3-A2 HVCNBCVT, 96A Trần Phú, P.Mộ Lao, Hà Đông, Hà Nội, Việt Nam</p>
                                <p>Hotline: (028) 3775 2524</p>
                                <p>COPYRIGHT © PTIT.COM - ALL RIGHTS RESERVED.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer