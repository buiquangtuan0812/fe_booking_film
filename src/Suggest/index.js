
import axios from 'axios';
import {Link} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

import classNames from "classnames/bind";
import styles from './style.module.scss';
import {GrNext, GrPrevious} from "react-icons/gr";

const cx = classNames.bind(styles);


function Suggest() {

    const [listFilms, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/movies/list')
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const listFilm = []
    for (var i =0;i<listFilms.length;i++){
        var imageFilm = listFilms[i].largeImageURL;
        listFilm.push(imageFilm);
    } 

    const length = listFilm.length;

    const [index, setIndex] = useState(0);

    const nextIndex = () => {
        let n = index;
        if (index == length-1) {
            n = 0;
        }
        else {
           n += 1;
        }
        setIndex(n);
    }
    const preIndex = () => {
        let n = index;
        if (index == 0) {
            n = length-1;
        }
        else {
           n -= 1;
        }
        setIndex(n);
    }

    return (
        <div className={cx('container')}>
            <div className={cx('button-pre')} onClick = {preIndex}>
                <GrPrevious className={cx('icon-pre')} />
            </div>
            <div className={cx('movie__slider')}>
                <Link to={`details_film/id=${index}`}>
                    <img className={cx('movie__slider-img')} src={listFilm[index]} alt="" srcSet="" />
                </Link>
            </div>
            <div className={cx('button-next')} onClick = {nextIndex}>
                <GrNext className={cx('icon-next')} />
            </div>
        </div>
    )
}

export default Suggest;