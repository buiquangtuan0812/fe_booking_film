import classNames from "classnames/bind";
import Style from "./style.module.scss";
import Heading from "../ExportDefaut";

const cx = classNames.bind(Style);

function LayoutPay() {
    return (
        <div>
            <Heading />
            <div className={cx('body__pay')}>
                <div className={cx('container__layout')}>
                    <h3 className={cx('heading__pay')}>Đặt hàng/Thanh toán</h3>
                    <div className={cx('money__bill')}>
                        <div className={cx('money__film')}>
                            <div className={cx('img__des')}>
                                <img src="https://media.lottecinemavn.com/Media/MovieFile/MovieImg/202210/10945_104_100002.jpg"/>
                            </div>
                            <div className={cx('content__film')}>
                                <h4 className={cx('content__film-name')}>CHIẾN BINH BÁO ĐEN 2: WAKANDA BẤT DIỆT (2D)</h4>
                                <div className={cx('content__film-info')}>
                                    <span className={cx('content__film-info-title')}>Ngày chiếu</span>
                                    <span className={cx('content__film-info-day')}>14/11/2022</span>
                                    <span className={cx('content__film-info-title')}>Lịch chiếu phim</span>
                                    <span className={cx('content__film-info-time')}>20:00-21:00</span>
                                    <span className={cx('content__film-info-cinema')}>Rạp chiếu Hà Đông</span>
                                </div>

                                <div className={cx('content__film-info')}>
                                    <span className={cx('content__film-info-title')}>Phòng chiếu</span>
                                    <span className={cx('content__film-info-room')}>Screen 01</span>
                                    <span className={cx('content__film-info-title')}>Số người</span>
                                    <span className={cx('content__film-info-number')}>2</span>
                                    <span className={cx('content__film-info-title')}>Ghế ngồi</span>
                                    <span className={cx('content__film-info-sate')}>D1, D2</span>
                                </div>

                            </div>
                            <div className={cx('content__film-money')}>
                                <strong className={cx('number-money')}>220.000</strong>
                                <span className={cx('unit-money')}>đ</span>
                            </div>
                        </div>

                        <div className={cx('money__nav')}>
                            <div className={cx('img__description')}>
                                <img className={cx('img__description-food')} src="https://media.lottecinemavn.com/Media/WebAdmin/685fb2351e1741caa3a1d3297d313c85.jpg"/>
                            </div>

                            <div className={cx('content__food')}>
                                <h4 className={cx('content__food-name')}>HAMONY COUPLE</h4>
                                <div className={cx('content__food-info')}>
                                    <span className={cx('content__food-info-title')}>Loại</span>
                                    <span className={cx('content__food-info-type')}>Pepsi</span>
                                    <span className={cx('content__food-info-title')}>Size</span>
                                    <span className={cx('content__food-info-size')}>M</span>
                                    <span className={cx('content__food-info-title')}>Số lượng</span>
                                    <span className={cx('content__food-info-quan')}>2</span>
                                </div>
                                <div className={cx('content__food-info')}>
                                    <span className={cx('content__food-info-title')}>Combo bắp rang bơ</span>
                                    <span className={cx('content__food-info-quan')}>1</span>
                                </div>
                            </div>
                            <div className={cx('content__food-money')}>
                                <strong className={cx('number-money')}>200.000</strong>
                                <span className={cx('unit-money')}>đ</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('total__bill')}>
                        <div className={cx('total__bill-head')}>Tổng số tiền đặt hàng</div>
                        <div className={cx('total__bill-money')}>
                            <span>420.000</span>
                            <span className={cx('total__bill-money-unit')}>đ</span>
                        </div>
                    </div>

                    <div className={cx('acept__bill')}>
                        <div className={cx('rule__bill')}>
                            <input type="checkbox" name=""/>
                            <span>Tôi đã đọc và đồng ý với 
                                <a> Điều kiện và Điều khoản</a>
                            </span>
                        </div>
                        <div className={cx('btn__acept')}>
                            <button>Đặt vé</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutPay;