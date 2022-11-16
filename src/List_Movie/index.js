import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

import {GrNext} from "react-icons/gr";

const cx = classNames.bind(styles);

function Movie() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);

    const listImages = []
    useEffect(() => {
        axios.get('http://localhost:8080/api/movies/list')
            .then(res => {
                setData(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }, [])
        
    for (var i =0;i<data.length;i++){
        var Film = data[i].smallImageURl;
        listImages.push(Film);
    } 

    const handle = () => {
        if (index == 2) {
            setIndex(0);
        }
        else {
            setIndex(index+2)
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('Container__film')}>
                <ul className={cx('display__film')}>
                    <li className={cx('film')}>
                        <div className={cx('option__film')}>
                            <Link to={`/buy_ticket/id=${index}`}>
                                <button>Đặt Vé</button>
                            </Link>
                            <Link to = {`details_film/id=${index}`}>
                                <button>Chi Tiết</button>
                            </Link>
                        </div>
                        <div className={cx('layout')}></div>
                        <img className={cx('img__film')} src={listImages[index]}/>
                    </li>
                    <li className={cx('film')}>
                        <div className={cx('option__film')}>
                            <Link to={`/buy_ticket/id=${index}`}>
                                <button>Đặt Vé</button>
                            </Link>
                            <Link to = {`details_film/id=${index+1}`}>
                                <button>Chi Tiết</button>
                            </Link>
                        </div>
                        <div className={cx('layout')}></div>
                        <img className={cx('img__film')} src={listImages[index+1]}/>
                    </li>
                    <li className={cx('film')}>
                        <div className={cx('option__film')}>
                            <Link to={`/buy_ticket/id=${index}`}>
                                <button>Đặt Vé</button>
                            </Link>
                            <Link to = {`details_film/id=${index+2}`}>
                                <button>Chi Tiết</button>
                            </Link>
                        </div>
                        <div className={cx('layout')}></div>
                        <img className={cx('img__film')} src={listImages[index+2]}/>
                    </li>
                    <li className={cx('film')}>
                        <div className={cx('option__film')}>
                            <Link to={`/buy_ticket/id=${index}`}>
                                <button>Đặt Vé</button>
                            </Link>
                            <Link to = {`details_film/id=${index+3}`}>
                                <button>Chi Tiết</button>
                            </Link>
                        </div>
                        <div className={cx('layout')}></div>
                        <img className={cx('img__film')} src={listImages[index+3]}/>
                    </li>
                    <li className={cx('film')}>
                        <div className={cx('option__film')}>
                            <Link to={`/buy_ticket/id=${index}`}>
                                <button>Đặt Vé</button>
                            </Link>
                            <Link to = {`details_film/id=${index+4}`}>
                                <button>Chi Tiết</button>
                            </Link>
                        </div>
                        <div className={cx('layout')}></div>
                        <img className={cx('img__film')} src={listImages[index+4]}/>
                    </li>
                </ul>

            </div>
            <div className={cx('btn__next')}>
                <GrNext className={cx('icon__next')} onClick={handle}/>
            </div>
        </div>
    )
}

export default Movie;