import axios from 'axios';
import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './index.module.scss';
const cx = classNames.bind(styles);

function Sign() {

    const [userName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");
    const [year, setYear] = useState("1990");
    const [month, setMonth] = useState("01");
    const [day, setDay] = useState("01");

    const getName = (event) => {
        setName(event);
    }
    const getEmail = (event) => {
        setEmail(event);
    }
    const getPassword = (event) => {
        setPassword(event);
    }
    const getBirthday = () => {
        const birthdays = year + "-" + month + "-" + day;
        setBirthday(birthdays.toString());
    }

    const sendRequest = () => {
        getBirthday();
        console.log(birthday, typeof birthday);
        const data = {
            "userName": userName,
            "password": password,
            "name": userName,
            "email": email,
            "birthDate": birthday
        }
        axios
            .post('http://localhost:8080/register', data)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    };

    return (
        <div className={cx('container__layout')}>
            <div className={cx('formSign')}>
                <h2 className={cx('form__header')}>
                    Đăng Ký
                </h2>
                <div className={cx('sign__main')}>
                    <div className={cx('sign__main-content')}>
                        <form className={cx('form__input')}>
                            <label htmlFor ="ID"><b>Họ Và Tên</b>
                                <input name = "ID" type = "text" placeholder="" className = {cx('input-sign-id')} onChange={(e)=>getName(e.target.value)}/>
                            </label>
                            <br></br>
                            <label htmlFor ="psw"><b>Email</b>
                                <input type="text" name = "psw" className={cx('input-sign-number')} placeholder="email@gmail.com" onChange={(e)=>getEmail(e.target.value)}/>
                            </label>
                            <br></br>
                            <label htmlFor ="psw"><b>Mật Khẩu</b>
                                <input type="password" name = "psw" className={cx('input-sign-psw')} placeholder="Tối thiểu 6 kí tự" onChange={(e) => getPassword(e.target.value)}/>
                            </label>
                        </form>
                    </div>
                    <div className = {cx('select-birth')}>
                        <span>Ngày tháng năm sinh</span>
                        <span className = {cx('input-text')}>
                            <select className = {cx('options-year')} onChange={(e)=> setYear(e.target.value)}>
                                <option value ="1990">1990</option>
                                <option value ="1991">1991</option>
                                <option value ="1992">1992</option>
                                <option value ="1993">1993</option>
                                <option value ="1994">1994</option>
                                <option value ="1995">1995</option>
                                <option value ="1996">1996</option>
                                <option value ="1997">1997</option>
                                <option value ="1998">1998</option>
                                <option value ="1999">1999</option>
                                <option value ="2000">2000</option>
                                <option value ="2001">2001</option>
                                <option value ="2002">2002</option>
                                <option value ="2003">2003</option>
                            </select>
                        </span>
                        <span className = {cx('input-text')}>
                            <select className = {cx('options-month')} onChange={(e)=> setMonth(e.target.value)}>
                                <option value ="01">01</option>
                                <option value ="02">02</option>
                                <option value ="03">03</option>
                                <option value ="04">04</option>
                                <option value ="05">05</option>
                                <option value ="06">06</option>
                                <option value ="07">07</option>
                                <option value ="08">08</option>
                                <option value ="09">09</option>
                                <option value ="10">10</option>
                                <option value ="11">11</option>
                                <option value ="12">12</option>
                            </select>
                        </span>
                        <span className = {cx('input-text')}>
                            <select className = {cx('options-day')} onChange={(e)=> setDay(e.target.value)}>
                                    <option value ="01">01</option>
                                    <option value ="02">02</option>
                                    <option value ="03">03</option>
                                    <option value ="04">04</option>
                                    <option value ="05">05</option>
                                    <option value ="06">06</option>
                                    <option value ="07">07</option>
                                    <option value ="08">08</option>
                                    <option value ="09">09</option>
                                    <option value ="10">10</option>
                                    <option value ="11">11</option>
                                    <option value ="12">12</option>
                                    <option value ="13">13</option>
                                    <option value ="14">14</option>
                                    <option value ="15">15</option>
                                    <option value ="16">16</option>
                                    <option value ="17">17</option>
                                    <option value ="18">18</option>
                                    <option value ="19">19</option>
                                    <option value = "20">20</option>
                                    <option value ="21">21</option>
                                    <option value ="22">22</option>
                                    <option value ="23">23</option>
                                    <option value ="24">24</option>
                                    <option value ="25">25</option>
                                    <option value ="26">26</option>
                                    <option value ="27">27</option>
                                    <option value ="28">28</option>
                                    <option value ="29">29</option>
                                    <option value ="30">30</option>
                                    <option value = "31">31</option>
                            </select>
                        </span>
                    </div>
                    <div className={cx('btn-sign')}>
                        <div className={cx('clause-sign')}>
                            <p className={cx('clause-text-sign')}>
                                <input type = "checkbox" className={cx('check-clause')}/>
                                Tôi đã đọc đồng ý với tất cả các
                                <a> điều khoản!</a>
                            </p>
                        </div>
                        <button type = "button" className = {cx('btn-submit-sign')} onClick={sendRequest}>Đăng Ký</button>
                    </div>
                    {/* <div className="form__main-img">
                        <img src={FromImage} className = "ad-img"/>
                    </div> */}
                </div>
            </div>          
        </div>
    )
}

export default Sign