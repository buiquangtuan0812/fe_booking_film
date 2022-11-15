import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

import classNames from "classnames/bind";
import Style from "./style.module.scss";


import Heading from '../ExportDefaut';
import Footer from '../ExportFooter';
import axios from "axios";


const cx = classNames.bind(Style);


function BuyTicket() {

    let {id} = useParams();
    const index = id;

    const [InfoFilm, setInfo] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8080/api/movies/list')
            .then (res => {
                setInfo(res.data[id]);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const contentRoom = []

    const getContentRoom = (event) => {
        const value = event.currentTarget;
        const lst = [...value.childNodes];
        for (let i = 0; i<lst.length;i++) {
            contentRoom.push(lst[i].innerText);
        }
    }

    return (
        <div>
            <Heading />
            
            <div className= {cx('buyticket__container')}>
                <div className={cx('buyticket__time')}>
                    <div className={cx('time__heading')}>
                        <h4>Lịch Chiếu</h4>
                        <div className={cx('time__heading-title')}>
                            <span>10</span>
                            2022 October
                        </div>
                    </div>
                    <div className={cx('time__day')}>
                        <ul className={cx('time__list')}>
                            <li className={cx('time__item')}>
                                <p>Hai</p>
                                <p>10</p>
                            </li>    
                            <li className={cx('time__item')}>
                                <p>Ba</p>
                                <p>11</p>
                            </li>
                            <li className={cx('time__item')}>
                                <p>Tư</p>
                                <p>12</p>
                            </li>
                            <li className={cx('time__item')}>
                                <p>Năm</p>
                                <p>13</p>
                            </li>
                            <li className={cx('time__item')}>
                                <p>Sáu</p>
                                <p>14</p>
                            </li>
                            <li className={cx('time__item')}>
                                <p>Bảy</p>
                                <p>15</p>
                            </li>
                            <li className={cx('time__item')}>
                                <p>CN</p>
                                <p>16</p>
                            </li>
                        </ul>    
                    </div>
                </div>

                <div className={cx('buyticket__cinema')}>
                    <div className={cx('cinema__area')}>
                        <div className={cx('cinema__area-name')}>Group III Cinema</div>
                        <div className={cx('cinema__area-position')}>Km 10 Nguyễn Trãi - Hà Đông - Hà Nội</div>
                        <div className={cx('cinema__area-location')}>Vị trí</div>
                    </div>
                    
                    <div className={cx('time__show')}>
                        <ul className={cx('time__show-list')}>
                            <li> 
                                <Link to={`/bookticket/id=${index}`} state={{room: {contentRoom}}} onClick={getContentRoom}>
                                    <div className={cx('cinema__room-id')}>Screen01</div>
                                    <div className={cx('cinema__room-time')}>10:00~11:45</div>
                                    <div className={cx('cinema__room-seat')}>50/100 Ghế ngồi</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/bookticket/id=${index}`} onClick={getContentRoom}>
                                    <div className={cx('cinema__room-id')}>Screen02</div>
                                    <div className={cx('cinema__room-time')}>12:00~13:45</div>
                                    <div className={cx('cinema__room-seat')}>100/100 Ghế ngồi</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/bookticket/id=${index}`} onClick={getContentRoom}>
                                    <div className={cx('cinema__room-id')}>Screen03</div>
                                    <div className={cx('cinema__room-time')}>14:00~15:45</div>
                                    <div className={cx('cinema__room-seat')}>40/100 Ghế ngồi</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/bookticket/id=${index}`} onClick={getContentRoom}>
                                    <div className={cx('cinema__room-id')}>Screen04</div>
                                    <div className={cx('cinema__room-time')}>16:00~17:45</div>
                                    <div className={cx('cinema__room-seat')}>76/100 Ghế ngồi</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/bookticket/id=${index}`} onClick={getContentRoom}>
                                    <div className={cx('cinema__room-id')}>Screen05</div>
                                    <div className={cx('cinema__room-time')}>18:00~19:45</div>
                                    <div className={cx('cinema__room-seat')}>89/100 Ghế ngồi</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/bookticket/id=${index}`} onClick={getContentRoom}>
                                    <div className={cx('cinema__room-id')}>Screen06</div>
                                    <div className={cx('cinema__room-time')}>20:00~21:45</div>
                                    <div className={cx('cinema__room-seat')}>80/100 Ghế ngồi</div>
                                </Link>
                            </li>
                            <li>
                                <Link to={`/bookticket/id=${index}`} onClick={getContentRoom}>
                                    <div className={cx('cinema__room-id')}>Screen07</div>
                                    <div className={cx('cinema__room-time')}>22:00~23:45</div>
                                    <div className={cx('cinema__room-seat')}>65/100 Ghế ngồi</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className={cx('cinema__info')}>
                <div className={cx('cinema__info-date')}>
                    <span>Ngày</span>
                    <span>10/10/2022</span>
                </div>
                <div className={cx('cinema__info-name')}>
                    <span>Rạp</span>
                    <span>Hà Đông</span>
                </div>
                <div className={cx('cinema__info-film')}>
                    <span>Phim</span>    
                    <span>{InfoFilm.name}</span>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default BuyTicket;