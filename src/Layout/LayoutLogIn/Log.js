import FromImage from "./image/form.png";
import Footer from "../ExportFooter";


import classNames from "classnames/bind";
import styles from './form.module.scss';
import { Outlet, Link} from "react-router-dom";

const cx = classNames.bind(styles);

function Form() {
    return (
        <>
            <div className={cx('layoutLog')}>
                <div className={cx('formLogin')}>
                    <h2 className={cx('form__header')}>
                        Đăng Nhập
                    </h2>
                    <div className={cx('form__main')}>
                        <div className={cx('form__main-content')}>
                            <form className={cx('form__input')}>
                                <label htmlFor ="ID"><b>Tài Khoản</b></label>
                                <input name = "ID" type = "text" placeholder="Họ tên hoặc số điện thoại" className = {cx('input-id')}/>
                                <br></br>
                                <label htmlFor ="psw"><b>Mật Khẩu</b></label>
                                <input type="password" name = "psw" className={cx('input-psw')} placeholder="Vui lòng nhập mật khẩu"/>
                            </form>

                            <div className={cx('form__submit')}>
                                <button type = "button" className = {cx('submit-log')}>Đăng Nhập</button>
                                <p className={cx('require-psw')}>Bạn quên mật khẩu?</p>
                            </div>
                            <div className={cx('suggest-sign')}>
                                <p className={cx('suggest-text')}>Bạn chưa có tài khoản?</p>
                                <Link to="/sign" >
                                    <button type = "button" className = {cx('submit-sign')}>Đăng Ký</button>
                                </Link>
                            </div>

                            {/* <div className="clause">
                                <input type = "checkbox" className="checked-clause"/>
                                <p className="clause-text">Tôi đã đọc đồng ý với tất cả các
                                    <a>điều khoản!</a>
                                </p>
                            </div> */}
                        </div>
                        <div className={cx('form__main-img')}>
                            <img src={FromImage} className = {cx('ad-img')}/>
                        </div>
                    </div>
                </div>   
            </div>
            <Footer/>  
        </>     
    )
}

export default Form