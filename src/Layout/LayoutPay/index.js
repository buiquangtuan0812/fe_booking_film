import { useState } from "react";
import { useLocation } from "react-router-dom";

import classNames from "classnames/bind";
import Style from "./style.module.scss";
import Heading from "../ExportDefaut";
import Footer from "../ExportFooter";

const cx = classNames.bind(Style);

function LayoutPay() {

    const location = useLocation();
    const {name, data} = location.state; 
    const [isChecked, setCheck]= useState(false);

    const handle = () => {
        if (isChecked) {
            alert("Bạn đã đặt vé thành công!");
        }
        else {
            alert("Bạn cần đồng ý với điều khoản của chúng tôi trước khi đặt vé!");
        }
    };
    const Convert = (value) => {
        if (value==0) {
            return "0 đ";
        }
        else {
            var ans = value.toString(10);
            return ans.substr(0, ans.length-3) + "." + ans.substr(-3);
        }
    }
    return (
        <div>
            <Heading name = {name}/>
            <div className={cx('body__pay')}>
                <div className={cx('container__layout')}>
                    <h3 className={cx('heading__pay')}>Đặt trước</h3>
                    <div className={cx('money__bill')}>
                        <div className={cx('money__film')}>
                            <div className={cx('img__des')}>
                                <img src={data.imgFilm}/>
                            </div>
                            <div className={cx('content__film')}>
                                <h4 className={cx('content__film-name')}>{data.nameFilm}</h4>
                                <div className={cx('content__film-info')}>
                                    <span className={cx('content__film-info-title')}>Ngày chiếu</span>
                                    <span className={cx('content__film-info-day')}>14/11/2022</span>
                                    <span className={cx('content__film-info-title')}>Lịch chiếu phim</span>
                                    <span className={cx('content__film-info-time')}>{data.film[1]}</span>
                                    <span className={cx('content__film-info-cinema')}>{data.nameCinema}</span>
                                </div>

                                <div className={cx('content__film-info')}>
                                    <span className={cx('content__film-info-title')}>Phòng chiếu</span>
                                    <span className={cx('content__film-info-room')}>{data.film[0]}</span>
                                    <span className={cx('content__film-info-title')}>Số người</span>
                                    <span className={cx('content__film-info-number')}>{data.number}</span>
                                    <span className={cx('content__film-info-title')}>Ghế ngồi</span>
                                    <span className={cx('content__film-info-sate')}>{data.sate}</span>
                                </div>

                            </div>
                            <div className={cx('content__film-money')}>
                                <strong className={cx('number-money')}>{Convert(data.moneyFilm)}</strong>
                                <span className={cx('unit-money')}>đ</span>
                            </div>
                        </div>

                        <div className={cx('money__nav')}>
                            <div className={cx('img__description')}>
                                <img className={cx('img__description-food')} src={data.product[0]}/>
                            </div>

                            <div className={cx('content__food')}>
                                <h4 className={cx('content__food-name')}>{data.product[2]}</h4>
                                <div className={cx('content__food-info')}>
                                    <span className={cx('content__food-info-title')}>Loại</span>
                                    <span className={cx('content__food-info-type')}>{data.product[3]}</span>
                                    <span className={cx('content__food-info-title')}>Size</span>
                                    <span className={cx('content__food-info-size')}>{data.product[4]}</span>
                                    <span className={cx('content__food-info-title')}>Số lượng</span>
                                    <span className={cx('content__food-info-quan')}>{data.product[5]}</span>
                                </div>
                                <div className={cx('content__food-info')}>
                                    <span className={cx('content__food-info-title')}>Combo bắp rang bơ</span>
                                    <span className={cx('content__food-info-quan')}>{data.product[7]}</span>
                                </div>
                            </div>
                            <div className={cx('content__food-money')}>
                                <strong className={cx('number-money')}>{Convert(data.moneyPro)}</strong>
                                <span className={cx('unit-money')}>đ</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('total__bill')}>
                        <div className={cx('total__bill-head')}>Tổng số tiền đặt hàng</div>
                        <div className={cx('total__bill-money')}>
                            <span>{Convert(data.moneyFilm + data.moneyPro)}</span>
                            <span className={cx('total__bill-money-unit')}>đ</span>
                        </div>
                    </div>

                    <div className={cx('acept__bill')}>
                        <div className={cx('rule__bill')}>
                            <input type="checkbox" name="" onClick={()=>setCheck(!isChecked)}/>
                            <span>Tôi đã đọc và đồng ý với 
                                <a> Điều kiện và Điều khoản</a>
                            </span>
                        </div>
                        <div className={cx('btn__acept')}>
                            <button onClick={handle}>Đặt vé</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default LayoutPay;