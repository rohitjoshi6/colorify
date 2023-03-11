import React from 'react';
import colorlincoln from '../../images/colorlincoln.png';
import bwlincoln from "../../images/bwlincoln.png";
import rightArrow from "../../images/rightArrow.png";
import questionMark from"../../images/questionMark.jpg";
import './Result.css';

const Result = (props) => {

    const {bwImg, cImg} = props.state;
    return (
        <>
        <div className='main-section'>
            <figure>
                <img className='user-image' src={bwImg == null ? bwlincoln : bwImg} alt="b/w image" />
                <figcaption className='caption'>Black/White Image</figcaption>
            </figure>

            <div className='arrow-container'>
                <img className='arrow-image' src={rightArrow} alt="right arrow" />
            </div>

            <figure>
                <img className='user-image' src={bwImg == null ? colorlincoln : (cImg == null ? questionMark : cImg)} alt="color image"/>
                <figcaption className='caption'>Color Image</figcaption>
            </figure>
        </div>
        </>
    )
}

export default Result