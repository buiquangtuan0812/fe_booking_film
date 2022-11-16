import { useEffect, useState } from "react";
import axios from "axios";
import FromImage from "./image/R.jpg";
import Footer from "../ExportFooter";


import classNames from "classnames/bind";
import styles from './form.module.scss';
import { Outlet, Link} from "react-router-dom";

const cx = classNames.bind(styles);

function Form() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const getUserName = (event) => {
        setUserName(event);
    };
    const getPassword = (event) => {
        setPassword(event);
    };

    const sendInput = () => {
        const data = {
            "userName": userName,
            "password": password
        };

        axios
            .post('http://localhost:8080/login', data)
            .then(res => setToken(res))
            .catch(err => alert("Nhập lại đi cu"))
    };
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
                                <input name = "ID" type = "text" placeholder="Họ tên hoặc số điện thoại" className = {cx('input-id')} onChange={(e)=> getUserName(e.target.value)}/>
                                <br></br>
                                <label htmlFor ="psw"><b>Mật Khẩu</b></label>
                                <input type="password" name = "psw" className={cx('input-psw')} placeholder="Vui lòng nhập mật khẩu" onChange={(e) => getPassword(e.target.value)}/>
                            </form>

                            <div className={cx('form__submit')}>
                                <Link to={(token) ? "/home" : "/login"}>
                                    <button type = "button" className = {cx('submit-log')} onClick={sendInput}>Đăng Nhập</button>
                                </Link>
                                <p className={cx('require-psw')}>Bạn quên mật khẩu?</p>
                            </div>
                            <div className={cx('suggest-sign')}>
                                <p className={cx('suggest-text')}>Bạn chưa có tài khoản?</p>
                                <Link to="/sign" >
                                    <button type = "button" className = {cx('submit-sign')}>Đăng Ký</button>
                                </Link>
                            </div>
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