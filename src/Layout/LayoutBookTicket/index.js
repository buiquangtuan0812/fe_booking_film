import { useEffect, useRef, useState,} from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import Image2 from "./image/combo.png";
import Image1 from "./image/685fb2351e1741caa3a1d3297d313c85.jpg";

import Heading from '../ExportDefaut';
import Footer from '../ExportFooter';


import classNames from "classnames/bind";
import style from "./style.module.scss";

import {GrFormClose} from "react-icons/gr";

const cx = classNames.bind(style);

function BookTicket() {

    const location = useLocation();
    const { room, name, nameFilm, imgFilm, nameCinema, tokenUser, date} = location.state;
    const roomContent =  room.contentRoom;
    const token = tokenUser;

    const [close, setClose] = useState(true);
    const [close2, setClose2] = useState(true);
    const [priceWater, setPriceWater] = useState(30000);
    const [priceFood, setPriceFood] = useState(35000);
    const [totalPrice, setPrice] = useState(65000);
    const [totalPrice2, setPrice2] = useState(350000);

    const [typeWater, setType] = useState("Pepsi");
    const [sizeWater, setSize] = useState("S");
    const [quanWater, setQuan] = useState(1);
    const [sizeBong, setSizeBong] = useState("S");
    const [quanBong, setQuanBong] = useState(1);

    const [moneySate, setMoneySate] = useState(0);    
    const [totalMoney, setMoney] = useState(0);
    const [infoProduct, setInfor] = useState([]);

    const [datas, setData] = useState({});
    const [dataSeate, setDateSeate] = useState([]);
    const [seateBook, setSeateBook] = useState([]);
    const [classSate, setClass] = useState("");
    const [numberSate, setNumber] = useState("");
    const [dataSeateBooked, setDataSeateBooked] = useState({});

    useEffect(()=> {
        axios
            .get('http://localhost:8080/api/seat/list', {headers : {"Authorization" : `Bearer ${token}`}, params:{showTimeId:9}})
            .then(res=>setDateSeate(res.data))
            .catch(err=>console.log(err))
    }, []);

    const setTypeSeate = (type, booked) => {
        if (booked==true) {
            
            return 'seate__booked';
        }
        else if (type >= 10 && type<17) {
            return 'seate__vip';
        }
        else if (type < 10) {
            return 'seate__vip-nav';
        }
        else {
            return 'seate__normal';
        }
    }

    const setInfoSeate = (price, position, sate) => {
        setMoneySate(price+moneySate);
        const data = [...seateBook];
        data.push(position);
        setSeateBook(data);
        const dataSeate = {
            "book_date": "2022-11-19",
            "total": price,
            "showTime": 55,
            "seatSet":data
        }
        setDataSeateBooked(dataSeate);
        var ans = "";
        for (var i = 0; i < data.length; i++) {
            if (i === data.length-1) {
                ans += "H" + data[i];
            }
            else {
                ans += "H" + data[i] + ", ";
            }
        }
        console.log(ans);
        setNumber(ans);
    }
    const listSeate = 
    dataSeate.map(seate => {
        return (
            <li key ={seate.id}>
                <span className={cx(setTypeSeate(seate.id, seate.booked))} onClick={()=>setInfoSeate(seate.price, seate.id)}>{seate.id}</span>
            </li>
        )
    })

    const handleChange = (e) => {
        setSize(e);
        if (e === "S") {
            setPriceWater(30000);
        }
        if (e === "M") {
            setPriceWater(35000);
        }
        if (e === "L") {
            setPriceWater(40000);
        }
        setPrice(priceFood + priceWater);
    }

    const handleChangeFood = (e) => {
        setSizeBong(e);
        if (e === "S") {
            setPriceFood(35000);
        }
        if (e === "M") {
            setPriceFood(40000);
        }
        if (e === "L") {
            setPriceFood(45000);
        }
        setPrice(priceFood + priceWater);
    }

    const handleQuantity = (e) => {
        setQuan(e);
        switch(e) {
            case "2":
                setPriceWater(60000);
                break;
            case "3":
                setPriceWater(70000);
                break;
            case "4":
                setPriceWater(80000);
                break;
            case "5":
                setPriceWater(100000);
                break;
            default:
                setPriceWater(30000);
        }
        setPrice(priceFood + priceWater);
    };

    const handleQuantity2 = (e) => {
        setQuanBong(e);
        switch(e) {
            case "2":
                setPriceFood(70000);
                break;
            case "3":
                setPriceFood(80000);
                break;
            case "4":
                setPriceFood(90000);
                break;
            case "5":
                setPriceFood(100000);
                break;
            default:
                setPriceFood(35000);
        }
        setPrice(priceFood + priceWater);
    };

    const setDefaultPrice = () => {
        setPriceFood(30000);
        setPriceWater(35000);
    };

    const handleClose = () => {
        setClose(!close);
    };

    const handleClose2 = () => {
        setClose2(!close2);
    };

    const showBill1 = (event) => {
        setClose(!close);
        const info = [];
        const value = event.currentTarget;
        const lst = [...value.childNodes];
        for (let i = 0; i<lst.length;i++) {
            if (lst[i].innerText) {
                info.push(lst[i].innerText);
            }
            else {
                info.push(lst[i].currentSrc);
            }
        }
        const str = info[1];
        const temp = str.split("\n");
        info.push(temp[0]);
        setInfor(info);
    };

    const showBill2 = (event) => {
        setClose2(!close2);
        const info = [];
        const value = event.currentTarget;
        const lst = [...value.childNodes];
        for (let i = 0; i<lst.length;i++) {
            if (lst[i].innerText) {
                info.push(lst[i].innerText);
            }
            else {
                info.push(lst[i].currentSrc);
            }
        }
        const str = info[1];
        const temp = str.split("\n");
        info.push(temp[0]);
        setInfor(info);
    };

    const setTotalPrice = () => {
        setClose(!close);
        setMoney(priceFood + priceWater);
        infoProduct.push(typeWater);
        infoProduct.push(sizeWater);
        infoProduct.push(quanWater);
        infoProduct.push(sizeBong);
        infoProduct.push(quanBong);
        const data = {
            nameFilm: nameFilm,
            nameCinema: nameCinema,
            film: roomContent,
            imgFilm: imgFilm,
            number: 1,
            sate: "D1",
            moneyFilm: moneySate,
            product: infoProduct,
            moneyPro: priceFood + priceWater,
        };
        setData(data);
    }
    const setTotalPrice2 = () => {
        setMoney(350000);
        setClose2(!close2);
        infoProduct.push(typeWater);
        infoProduct.push(sizeWater);
        infoProduct.push(quanWater);
        infoProduct.push(sizeBong);
        infoProduct.push(quanBong);
        const data = {
            nameFilm: nameFilm,
            nameCinema: nameCinema,
            film: roomContent,
            imgFilm: imgFilm,
            number: 1,
            sate: "D1",
            moneyFilm: moneySate,
            product: infoProduct,
            moneyPro: 350000,
        };
        setData(data);
    }

    const handleType = (type) => {
        setType(type);
    };

    const Convert = (value) => {
        if (value==0) {
            return "0 đ";
        }
        else {
            var ans = value.toString(10);
            return ans.substr(0, ans.length-3) + "." + ans.substr(-3) + " đ";
        }
    }
    const handleSubmit = () => {
        axios
            .post('http://localhost:8080/api/booking/add', dataSeateBooked, {headers : {"Authorization" : `Bearer ${token}`}})
            .then(response=>console.log(response))
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <Heading name = {name}/>
            <div className={cx('cb')}>
                <div className={cx('container__bookticket')}>
                    <h3 className={cx('book__heading')}>Chọn ghế</h3>
                    <div className={cx('bookticket__select')}>
                        <div className={cx('bookticket__select-age')}>
                            <span className={cx('select-number')}>Số người</span>
                            <span>
                                <select className={cx('option-member')}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </span>
                        </div>
                        <div className={cx('bookticket__select-member')}>
                            <span className={cx('select-number')}>Trẻ em</span>
                            <span>
                                <select className={cx('option-member')}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </span>
                        </div>
                        <div className={cx('bookticket__select-note')}>
                            <span className={cx('text-note')}>Có thể chọn tối đa 6 người.(Max:6)</span>
                        </div>
                    </div>

                    <h4 className={cx('screen')}>Screen</h4>

                    <div className={cx('bookticket__sate')}>
                        <div className={cx('img-des')}>
                            <img src={imgFilm}/>
                        </div>

                        <ul className={cx('bookticket__sate-select')}>
                            {listSeate}
                        </ul>

                        <ul className={cx('bookticket__sate-type')}>
                            <li className={cx('bookticket__sate-vip')}>
                                Ghế Vip
                            </li>
                            <li className={cx('bookticket__sate-normal')}>
                                Ghế thường
                            </li>
                        </ul>
                    </div>

                    <div className={cx('bookticket__sate-note')}>
                        <ul className={cx('bookticket__sate-note-list')}>
                            <li className={cx('bookticket__sate-note-item1')}>
                            Ghế đã chọn
                            </li>
                            <li className={cx('bookticket__sate-note-item2')}>
                                <span className={cx('chair')}></span>
                                <span className={cx('chair-type')}>Ghế có thể chọn</span>
                            </li>
                            <li className={cx('bookticket__sate-note-item3')}>
                                <span className={cx('chair')}></span>
                                <span className={cx('chair-type')}>Ghế đã mua</span>
                            </li>
                            <li className={cx('bookticket__sate-note-item4')}>
                                Ghế không thể chọn
                            </li>
                        </ul>
                    </div>

                </div>  
            </div>
            <div className={cx('cbn')}>
                <div className={cx('container__book-nav')}>
                    <div className={cx('bookticket__food')}>
                    <h3>Đặt bỏng ngô và nước</h3>
                    <div className={cx('container__option')} onClick={showBill1}>
                        <img className={cx('option-des')} src={Image1}/>
                        <div className={cx('option')}>
                            <p>HAMONY COUPLE</p>
                            <div className={cx('price-option')}>
                                <span>Giá bán online</span>
                                135.000
                                <span className={cx('price')}>đ</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('container__option')} onClick={showBill2}>
                        <img className={cx('option-des')} src={Image2}/>
                        <div className={cx('option')}>
                            <p>Black Panther CB1</p>
                            <div className={cx('price-option')}>
                                <span>Giá bán online</span>
                                350.000
                                <span className={cx('price')}>đ</span>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={cx((close ? 'hide' : 'book__details'))}>
                        <div className={cx('book__details-heading')}>
                            <h3>Chi Tiết Sản Phẩm</h3>
                            <h3>HAMONY COUPLE</h3>
                            <div>
                                <GrFormClose onClick={()=> {handleClose()
                                    setDefaultPrice()}}/>
                            </div>
                        </div>
                        <h4>Chọn tùy chọn</h4>
                        <div className={cx('book__drink')}>
                            <span className={cx('select-water')}>Nước uống</span>
                            <span className={cx('select-type')}>Loại
                                <select className={cx('water-type')} onChange={(e)=> handleType(e.target.value)}>
                                    <option value="Pepsi">Pepsi</option>
                                    <option value="Coca">Coca</option>
                                    <option value="7 Up">7 Up</option>
                                </select>
                            </span>
                            <span className={cx('select-size')}>Size
                                <select className={cx('water-size')} onChange={(e)=> handleChange(e.target.value)}>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                            </span>
                            <span>Số Lượng
                                <select className={cx('water-quantity')} onChange = {(e) => handleQuantity(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </span>
                        </div>
                        <div className={cx('book__food')}>
                            <span className={cx('select-food')}>Bỏng ngô</span>
                            <span className={cx('select-size')}>Size
                                <select className={cx('food-size')}  onChange={(e)=>handleChangeFood(e.target.value)}>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                            </span>
                            <span>Số Lượng
                                <select className={cx('food-quantity')} onChange={(e) => handleQuantity2(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </span>
                        </div>
                        <div className={cx('submit')}>
                            <div className={cx('total')}>Tổng số
                                <span className={cx('total-price')}>{Convert(totalPrice)}</span>
                            </div>
                            <div className = {cx('btn-submit')}>
                                <button onClick={setTotalPrice}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>

                    <div className={cx((close2 ? 'hide' : 'book__details'))}>
                        <div className={cx('book__details-heading')}>
                            <h3>Chi Tiết Sản Phẩm</h3>
                            <h3>Black Panther CB1</h3>
                            <div>
                                <GrFormClose onClick={()=> {handleClose2()
                                    setDefaultPrice()}}/>
                            </div>
                        </div>
                        <h4>Chọn tùy chọn</h4>
                        <div className={cx('book__drink')}>
                            <span className={cx('select-water')}>Nước uống</span>
                            <span className={cx('select-type')}>Loại
                                <select className={cx('water-type')}>
                                    <option value="Pepsi">Pepsi</option>
                                    <option value="Coca">Coca</option>
                                    <option value="7 Up">7 Up</option>
                                </select>
                            </span>
                            <span className={cx('select-size')}>Size
                                <select className={cx('water-size')} onChange={(e)=> handleChange(e.target.value)}>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                            </span>
                            <span>Số Lượng
                                <select className={cx('water-quantity')} onChange = {(e) => handleQuantity(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </span>
                        </div>
                        <div className={cx('book__food')}>
                            <span className={cx('select-food')}>Bỏng ngô</span>
                            <span className={cx('select-size')}>Size
                                <select className={cx('food-size')} onChange={(e)=>handleChangeFood(e.target.value)}>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                </select>
                            </span>
                            <span>Số Lượng
                                <select className={cx('food-quantity')} onChange={(e) => handleQuantity2(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </span>
                        </div>
                        <div className={cx('movie-cup')}>Movie Cup - Black Panther (Bottle)</div>
                        <div className={cx('submit')}>
                            <div className={cx('total')}>Tổng số
                                <span className={cx('total-price')}>{Convert(totalPrice2)}</span>
                            </div>
                            <div className = {cx('btn-submit-1')}>
                                <button onClick={setTotalPrice2}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    </div>

                </div> 
            </div>

            <div className={cx('container__bill')}>
                <div className={cx('bill__details')}>
                    <div className={cx('bill__film')}>
                        <h5 className={cx('bill-heading')}>Phim chiếu rạp</h5>
                        <div className={cx('bill__film-info')}>
                            <img src ={imgFilm}/>
                            <p className={cx('bill__film-info-name')}>{nameFilm}</p>
                        </div>
                    </div>

                    <div className={cx('bill__info')}>
                        <h5 className={cx('bill-heading')}>Thông tin vé</h5>
                        <div className={cx('bill__info-date')}>
                            <span>Ngày</span>
                            <span>{date}</span>
                        </div>
                        <div className={cx('bill__info-time')}>
                            <span>Giờ chiếu</span>
                            <span>{roomContent[1]}</span>
                        </div>
                        <div className={cx('bill__info-movie')}>
                            <span>Rạp chiếu</span>
                            <span>Hà Đông</span>
                        </div>
                        <div className={cx('bill__info-room')}>
                            <span>Phòng chiếu</span>
                            <span>{roomContent[0]}</span>
                        </div>
                        <div className={cx('bill__info-sate')}>
                            <span>Số ghế</span>
                            <span>{numberSate}</span>
                        </div>
                        <div className={cx('price-bill-info')}>{Convert(moneySate)}</div>
                    </div>

                    <div className={cx('bill__product')}>
                        <h5 className={cx('bill-heading')}>Thông tin sản phẩm</h5>
                        <div className={cx('bill__product-detail')}>
                            <span className={cx((infoProduct[2] ? 'select': "none-select"))}>{(infoProduct[2] ? infoProduct[2] : "Vui lòng chọn sản phẩm")}</span>
                            <span>{(infoProduct[2] ? Convert(totalMoney) : "")}</span>
                        </div>
                        <div className={cx('price-bill-product')}>{Convert(totalMoney)}</div>
                    </div>

                    <div className={cx('bill__money')}>
                        <h5 className={cx('bill-heading')}>Tổng tiền đơn hàng</h5>
                        <div className={cx('bill__money-sate')}>
                            <span>Đặt ghế</span>
                            <span>{Convert(moneySate)}</span>
                        </div>
                        <div className={cx('bill__money-buy')}>
                            <span>Mua hàng</span>
                            <span>{Convert(totalMoney)}</span>
                        </div>
                        <div className={cx('price-money')}>{Convert(moneySate + totalMoney)}</div>
                        <div className={cx('btn__confirm')}>
                            <Link to={'payment'} state={{name: (name) ? name : "", data: datas, tokenUser: token, date: date, seates: seateBook}}>
                                <button onClick={handleSubmit}>Xác Nhận</button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default BookTicket;