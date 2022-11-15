import classNames from "classnames/bind";
import styles from "./LayoutTrailer.module.scss";

import {IoIosClose} from "react-icons/io";
import { useState } from "react";

const cx = classNames.bind(styles);

function Trailer(audio) {
    const src_audio = audio.src;
    const checked = audio.check;

    const [close, setClose] = useState(" ");

    const handleClose = () => {
        setClose("close");
    }


    return (
        <div className={cx((checked == "play" && close == " ")? 'wrapper__trailer' : 'play__audio')}>
            <div className={cx('trailer')}>
                <span className={cx('container__icon')} onClick={handleClose}>
                    <IoIosClose className={cx('icon-close')} />   
                </span>
                <video className={cx('trailer__film')} controls src = {src_audio}>
                </video>
            </div>
        </div>
    )
}

export default Trailer;