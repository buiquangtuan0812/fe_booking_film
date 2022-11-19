import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

import classNames from "classnames/bind";
import Style from "./style.module.scss";


import Heading from '../ExportDefaut';
import Footer from '../ExportFooter';
import axios from "axios";
import { BsReverseBackspaceReverse } from "react-icons/bs";


const cx = classNames.bind(Style);


function BuyTicket() {

    let {id} = useParams();
    const index = id;
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaWV1IiwiaWF0IjoxNjY4NzU5MTc2LCJleHAiOjg4MDY4NzU5MTc2fQ._A2KO2MfVL3cI812CC045nS-x6VN0sb0Fl27PmALim7QUSvNGsTGRUkY1rNFmhULB-fDNei9u8Mi86DEKxPkSA";
    
    const [nameUser, setName] = useState("");
    const location = useLocation();
    const [visiable, setVisiable] = useState(false);
    useEffect(() => {
        if (location.state) {
            setName(location.state.name);
        }
    })

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

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [dateOfWeek, setDate] = useState("");
    const Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    useEffect(() => {
        const date = new Date();
        const Month = date.getMonth() + 1;
        setDay(date.getDate());
        setMonth(Months[date.getMonth()]);
        setYear(date.getFullYear());
        setDate(day + "/" + Month + "/" + year);
    },[]);
    const [dataRoom, setDataRoom] = useState([]);
    useEffect(()=> {
        const Data = {
            movieId: index+1,
            theaterName: "Cinema HÀ ĐÔNG",
            startTime: "19/11/2022"
        }
        axios
        .get('http://localhost:8080/api/showtime/filter', { headers: {"Authorization" : `Bearer ${token}`}, params: Data })
        .then(response => setDataRoom(response.data))
        .catch(err => console.log(err))
    }, []);
    
    const [nameCinema, setNameCinema] = useState("Cinema HÀ ĐÔNG");
    
    const getDataRoom = 
    dataRoom.map(room => {
        const timeShow = room.startTime;
        const durationShow = InfoFilm.duration;
        const hourStart = parseInt(timeShow.slice(0, 2));
        const minuteStart = parseInt(timeShow.slice(3, 5));
        const hour = hourStart + parseInt(durationShow/60) + parseInt((parseInt(timeShow.slice(3, 5)) + durationShow%60)/60);
        const minutes = (parseInt(timeShow.slice(3, 5))) - (60*parseInt(minuteStart/60));
        const time = hourStart.toString() + ":" + minuteStart.toString() + "~" + hour.toString() + ":" + minutes.toString();
        const capacity = room.screen.capacity;

        return (
            <li key = {room.id}> 
                <Link to={`/bookticket/id=${index}`} state={{room: {contentRoom}, name: (nameUser) ? nameUser : "", nameFilm: InfoFilm.name, imgFilm: InfoFilm.smallImageURl, nameCinema: nameCinema}} onClick={(e) => {getContentRoom(e)}}>
                    <div className={cx('cinema__room-id')}>{room.screen.name}</div>
                    <div className={cx('cinema__room-time')}>{time}</div>
                    <div className={cx('cinema__room-seat')}>{`${capacity} Ghế ngồi`}</div>
                </Link>
            </li>
    )});
    
    const getDateOfWeek = (dates) => {
        const time = month + " " + dates + ", " + year; 
        const d = new Date(time);
        const days  = d.getDay();
        switch (days) {
            case 1:
                return "Hai";
                break;
            case 2:
                return "Ba"
                break;
            case 3:
                return "Tư"
                break;
            case 4:
                return "Năm"
                break;
            case 5:
                return "Sáu"
                break;
            case 6:
                return "Bảy"
                break;
            case 0:
                return "CN"
                break;
        }
    }
            
    const setWeek = (string) => {
        if (string==="Bảy") {
            return 'saturday';
        }
        else if (string==="CN") {
            return 'sunday';
        }
        else {
            return 'day';
        }
    }

    const handleSend = (event) => {
        setNameCinema(event.target.value);
        const jsonData = {
            movieId: InfoFilm.id,
            theaterName: event.target.value,
            startTime: "18/11/2022"
        }
        axios
            .get('http://localhost:8080/api/showtime/filter', { headers: {"Authorization" : `Bearer ${token}`}, params: jsonData })
            .then(response => setDataRoom(response.data))
            .catch(err => console.log(err))
    }
    const setTime = (days) => {
        setVisiable(true);
        const date = new Date();
        const month = date.getMonth() + 1;
        setDate(days + "/" + month + "/" + year);
        const jsonData = {
            movieId: InfoFilm.id,
            theaterName: nameCinema,
            startTime: days + "/" + month + "/" + year
        }
        axios
            .get('http://localhost:8080/api/showtime/filter', { headers: {"Authorization" : `Bearer ${token}`}, params: jsonData })
            .then(response => setDataRoom(response.data))
            .catch(err => console.log(err))
    }

    const listDays = [0, 1, 2, 3, 4, 5, 6];
    const renderDays = 
    listDays.map(idDays => {
        if (idDays==0) {
            return (
                <li key = {idDays} className={cx('time__item')} onClick={()=>setTime(day)}>
                    <p className={cx(setWeek(getDateOfWeek(day)))}>{getDateOfWeek(day)}</p>
                    <p className={cx(setWeek(getDateOfWeek(day)))}>{day}</p>
                </li>
            )
        }
        else {
            return (
                <li key = {idDays} className={cx('time__item')} onClick={()=>setTime(day+idDays)}>
                    <p className={cx(setWeek(getDateOfWeek(day+idDays)))}>{getDateOfWeek(day+idDays)}</p>
                    <p className={cx(setWeek(getDateOfWeek(day+idDays)))}>{day+idDays}</p>
                </li>
            )
        }
    });


    return (
        <div>
            <Heading name = {nameUser}/>
            
            <div className= {cx('buyticket__container')}>
                <div className={cx('buyticket__time')}>
                    <div className={cx('time__heading')}>
                        <h4>Lịch Chiếu</h4>
                        <div className={cx('time__heading-title')}>
                            <span>{day}</span>
                            2022 {month}
                        </div>
                    </div>
                    <div className={cx('time__day')}>
                        <ul className={cx('time__list')}>
                            {renderDays}
                        </ul>    
                    </div>
                </div>

                <div className={cx('buyticket__cinema')}>
                    <div className={cx('cinema__area')}>
                        <div className={cx('cinema__area-name')}>{nameCinema}</div>
                        <div className={cx('cinema__area-position')}>Km 10 Nguyễn Trãi - Hà Đông - Hà Nội</div>
                        <div className={cx('cinema__area-location')}>Vị trí</div>
                    </div>
                    
                    <div className={cx('time__show')}>
                        <ul className={cx('time__show-list')}>
                            {getDataRoom}
                        </ul>
                    </div>
                </div>

            </div>
            <div className={cx('cinema__info')}>
                <div className={cx('cinema__info-date')}>
                    <span>Ngày</span>
                    <span>{dateOfWeek}</span>
                </div>
                <div className={cx('cinema__info-name')}>
                    <span>Rạp</span>
                    <select onChange={(e) => handleSend(e)}>
                        <option value={"Cinema HÀ ĐÔNG"}>Hà Đông</option>
                        <option value={"Cinema Long Biên"}>Long Biên</option>
                        <option value={"Cinema Tân Phú"}>Tân Phú</option>
                        <option value={"Cinema Hùng Vương"}>Hùng Vương</option>
                    </select>
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