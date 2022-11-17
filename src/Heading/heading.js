import { AiFillFacebook } from "react-icons/ai";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BiLogIn, BiUserCircle } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";
import QRImage from "./image/qr.png"
import Logo from "./image/logo.png";

import React, {useState} from "react";
import {Route, Link, Routes, Outlet} from "react-router-dom";

import classNames from 'classnames/bind';
import styles from './heading.module.scss';
const cx = classNames.bind(styles);

function Heading(nameUser) {

    const iconUser = (value) => {
        if (value!="") {
            return <BiUserCircle className={cx('icon-login')}/>
        }
        else {
            return <BiLogIn className={cx('icon-login')}/>
        }
    }

    return (
        <header>
            <div className = {cx('heading')}>
                <div className = {cx('linkApp')}>
                    <ul className = {cx('links')}>
                        <li className = {cx('link-item')}>
                            <a className = {cx('linkQr')}>
                                APP Ticket
                            </a>

                            <div className={cx('imgScan')}>
                                <h3 className={cx('heading-scan')}>SCAN ME!</h3>
                                <img src={QRImage} className={cx('qr-img')}/>
                            </div>

                        </li>
                        <li className = {cx('link-item')}>
                            <a href="" className = {cx('linkFacebook')}>
                                <AiFillFacebook className={cx('icon-facebook')}/>
                                Ticket Facebook
                            </a>
                        </li>
                    </ul>
                </div>

                <div className={cx('heading__navbar')}>
                    <ul className={cx('navbar__items')}>
                        <li className={cx('navbar__item')}>
                            <Link className = {cx('navbar__item-login')} to="/login">
                                {iconUser(nameUser.name)}
                                {(nameUser.name) ? nameUser.name : "Đăng Nhập"}
                            </Link>
                        </li>
                        <li className={cx('navbar__item')}>
                            <a className = {cx('navbar__item-member')}>
                                <BsFillPersonCheckFill className={cx('icon-member')}/>
                                Thành Viên
                            </a>
                        </li>
                        <li className={cx('navbar__item')}>
                            <a className = {cx('navbar__item-service')}>
                                <RiCustomerService2Line className={cx('icon-cus')}/>
                                CSKH
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className = {cx('nav__heading')}>
                <h2 className={cx('logo')}>
                    <Link to="/home">
                        <img className={cx('logo-img')} src = {Logo} />
                        <span className={cx('logo-name')}>GROUP 3</span>
                    </Link>
                </h2>

                <div className = {cx('options')}>
                    <ul className = {cx('options__list')}>
                        <li className = {cx('option__items')}>
                            <a>Quà Tặng</a>
                        </li>
                        <li className = {cx('option__items')}>
                            <a>Mua Vé</a>
                        </li>
                        <li className = {cx('option__items')}>
                            <Link to='/list_films'>Phim</Link>
                        </li>
                        <li className = {cx('option__items')}>
                            <a>RẠP Chiếu Phim</a>
                        </li>
                        <li className = {cx('option__item')}>
                            <a>Khuyến Mãi</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet/>
        </header>
    )
    
}

export default Heading

