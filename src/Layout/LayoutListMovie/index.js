import { useState, useEffect } from "react";
import { Link, NavLink, } from "react-router-dom";

import classNames from "classnames/bind";
import style from './style.module.scss';
import axios from "axios";

import Heading from "../ExportDefaut";
import Footer from '../ExportFooter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {MdNavigateNext, GrFormNext} from 'react-icons/md';

const cx = classNames.bind(style);

function Movie(user) {

    const [dataMovie, setData] = useState([]);
    const [index, setId] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8080/api/movies/list')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const handle = () => {
        if (index == dataMovie.length-1) {
            setId(0);
        }
        else {
            setId(index + 1);
        }
    }

    const moiveItem = 
    dataMovie.map(movie => (
        <div key={movie.id}className={cx('card-movie')}>
            <div  className={cx('card-top')}>
                <img className={cx('img')} src={movie.smallImageURl}/>
                <div  className={cx('btn')}>
                    <Link className={cx('btn-component')} to={`/buy_ticket/id=${index}`} state={(user) ? {name: user.name} : ""}>
                        Đặt Vé
                    </Link>
                    <Link className={cx('btn-component')} to = {`details_film/id=${movie.id-1}`} state={(user) ? {name : user.name} : ""}>
                        Chi tiết
                    </Link>
                </div>
            </div>
            <div  className={cx('border__content')}>
                <a  className={cx('card-middle')} href="#"> 
                    <div  className={cx('name-movie')}>{movie.name}</div>
                </a>
                <div  className={cx('card-bottom')}>
                    <div  className={cx('time')}>{movie.duration}Phút</div>
                    <div  className={cx('line-middle')}></div>
                    <div  className={cx('date')}>{movie.releaseDate}</div>
                </div>
            </div>
        </div>
    ));
    const imgBanner = []
    for (var i = 0;i<dataMovie.length;i++) {
        var imgBan = dataMovie[i].largeImageURL;
        imgBanner.push(imgBan);
    }
    return (
        <div>
            <Heading/>
            <section className={cx('movie')}>
                <div className={cx('movie__banner')}>
                    <div className={cx('movie__slider')}> 
                        <a href="#">
                            <img src={imgBanner[index]} alt=""/>
                        </a>
                    </div>
                    <div className={cx('btn-next-id')}>
                    <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                    </div>
                </div>
                <div className={cx('container')}>    

                    <div className={cx('movie__options')}>
                        <div className={cx('movie__options-choose')}>
                            <a className={cx('button__playing')} href="#">Phim đang chiếu</a>
                            <a className={cx('button__upcoming')} href="#">Phim sắp chiếu</a>
                        </div>
                        <div className={cx('movie__options-list')}>
                            <div className={cx('box')}>
                                {moiveItem}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer/>
        </div>
    )
}

export default Movie;