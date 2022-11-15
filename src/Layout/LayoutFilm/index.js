import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from './index.module.scss';

import Footer from '../ExportFooter';
import Trailer from '../DefaultLayout/LayoutTrailer';
import Heading from '../ExportDefaut';
import Banner from './image/banner.jpg'

import {BsPlayCircle} from "react-icons/bs";
import {GrNext, GrPrevious} from "react-icons/gr";
import {AiOutlineStar} from "react-icons/ai";
import {IoIosClose} from "react-icons/io";



const cx = classNames.bind(styles);

function LayoutFilm({film}) {

    const [playAudio, setPlayAudio] = useState("");
    const [dataMovie, setData] = useState([]);
    const [idUrl, setId] = useState(0);
    const [isHide, setHide] = useState(true);
    const [srcAudio, setSrcAudio] = useState("");

    
    let {id} = useParams();
    const index = id;

    useEffect(() => {
        axios
            .get('http://localhost:8080/api/movies/list')
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    const listFilm = {};
    const listUrl = [];
    for (var i =0;i<dataMovie.length;i++){
        var Film = dataMovie[id];
        Object.keys(Film).forEach(function(key) {
            listFilm[key] = Film[key]
        });
    }
    const lst = Object.entries(listFilm);
    for (const items in lst) {
        const item = lst[items];
        if (item[0] == 'shortDescription') {
            const listLink = item[1];
            const link = listLink.split(" ")
            for (var i = 0;i<link.length;i++) {
                listUrl.push(link[i]);
            }
        }
    }

    const handleClose = () => {
        setPlayAudio("");
        setSrcAudio("");
    }

    const handleAudio = () => {
        setPlayAudio("play");
        setSrcAudio(listFilm.trailerURL);
    }

    const handleBtn = (index) => {
        setId(index);
        if (index == 0) {
            setHide(true);
        }
        else {
            setHide(false);
        }
    }
    const handleNextBtn = () =>{
        if (idUrl == 5) {
            setId(0);
            setHide(true);
        }
        else {
            setId(idUrl+1);
            setHide(false);
        }
    }

    const handlePreBtn = () => {
        if (idUrl == 0) {
            setId(5);
            setHide(false);
        }
        else if (idUrl == 1) {
            setId(0);
            setHide(true);
        }
        else {
            setId(idUrl-1);
        }
    }

    const renderImage =
    listUrl.map(function(item, index) {
        if (index ==0) {
            return (
                <li key = {index} className={cx('img-item')} onClick={()=> handleBtn(index)}>
                    <span className={cx('play-icon-small')} onClick={handleAudio}>
                        <BsPlayCircle className={cx('icon-play-small')}/>
                    </span>
                    <img className = {cx('img-film')} src={listUrl[0]} />
                </li>
            )
        }
        else {
            return (
                <li key = {index} className={cx('img-item')} onClick={()=> handleBtn(index)}> 
                    <img className = {cx('img-film')} src={listUrl[index]}/>
                </li>
            )
        }
    });

    return (
        <div className={cx('container_film')}>
            <Heading/>
            <div className={cx('heading__film')}>
                <span className = {cx('heading__film-text')}>PHIM HOT TẠI RẠP</span>
            </div>
            <div className={cx('body__film')}>
                <div className={cx('container__trailer')}>
                    <div className={cx((isHide==true) ? 'play-icon' : 'play-icon-hide')} onClick={handleAudio}>
                        <BsPlayCircle className={cx('icon-play')}/>
                    </div>
                    <img className={cx('img__trailer')} src={listUrl[idUrl]} />
                </div>
            </div>

            <div className={cx( (playAudio)? 'wrapper__trailer' : 'play__audio')}>
                <div className={cx('trailer')}>
                    <span className={cx('container__icon')} onClick={handleClose}>
                        <IoIosClose className={cx('icon-close')} />   
                    </span>
                    <video className={cx('trailer__film')} controls src = {srcAudio}>
                    </video>
                </div>
            </div>
            
            {/* <Trailer src = {listFilm.trailerURL} check = {srcAudio}/> */}

            <div className={cx('container__img-trailer')}>
                <button className={cx('bc-pre')} onClick={handlePreBtn}>
                    <GrPrevious className={cx('button-pre')}/>
                </button>
                <ul className={cx('list-img')}>
                    {renderImage}
                </ul>
                <button className={cx('bc-next')} onClick={handleNextBtn}>
                    <GrNext className={cx('button-next')}/>
                </button>
            </div>

            <div className={cx('container__review')}>
                <div className={cx('review')}>
                    <div className={cx('review_left')}>
                        <img src={listFilm.smallImageURl} />
                        <Link to={`/buy_ticket/id=${index}`}>
                            <button>Đặt vé</button>
                        </Link>
                    </div>

                    <div className={cx('review_right')}>
                        <h2 className={cx('review-heading')}>{listFilm.name}</h2>
                        <ul className={cx('list-review')}>
                            <li className={cx('item-review-rank')}>Xếp hạng
                                <p>
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                </p>
                            </li>
                            <li className={cx('item-review-date')}>Ngày phát hành
                                <span>{listFilm.releaseDate}</span>
                            </li>
                            <li className={cx('item-review-info')}>Thông tin cơ bản
                                <span>{listFilm.rating}</span>    
                            </li>
                            <li className={cx('item-review-info')}>Diễn Viên
                                <span>{listFilm.actors}</span>    
                            </li>
                            <li className={cx('item-review-type')}>Thể loại
                                <span>{listFilm.categories}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={cx('summarize')}>
                <div className={cx('summarize__heading')}>
                    <h2>Tóm Tắt</h2>
                    <p>{listFilm.longDescription}</p>
                </div>
            </div>

            <div className={cx('feedback')}>
                <div className={cx('feedback__heading')}>
                    <h2>Xếp hạng và đánh giá</h2>
                </div>
                <div className={cx('feedback__content')}>
                    <div className={cx('feedback__content-rank')}>
                        <h3 className={cx('feedback__content-rank-title')}>Xếp hạng</h3>
                        <p className={cx('feedback-star')}>
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                        </p>
                        <span>0 điểm</span>
                    </div>
                    <div className={cx('feedback__content-text')}>
                        <textarea id="txtComment" placeholder="Vui lòng nhập đánh giá phim!" cols="30" rows="10"></textarea>
                        {/* <input type="text" placeholder="Vui lòng viết đánh giá phim!" /> */}
                        <button type="submit">Bình Luận</button>
                    </div>
                </div>
            </div>

            <Footer src = {Banner}/>
        </div>
    )
}

export default LayoutFilm;