import React from "react";
import Styles from '../Photos.module.scss';


export const Collection = ({ name, images }) => {
    return (
        <div className={Styles.collection}>
            <img className={Styles.collection__big} src={images[0]} alt="Item" />
            <div className={Styles.collection__bottom}>
                <img className={Styles.collection__mini} src={images[1]} alt="Item" />
                <img className={Styles.collection__mini} src={images[2]} alt="Item" />
                <img className={Styles.collection__mini} src={images[3]} alt="Item" />
            </div>
            <h4>{name}</h4>
        </div >
    );
}