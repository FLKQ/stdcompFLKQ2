import React from 'react'
import { Link } from 'react-router-dom';


function CardItem(props) {
    return (
        <>
            <li>
                <Link to = {props.path}>
                    <figure data-category={props.label}>
                        <img
                        alt='Card Image'
                        src={props.src}                       
                        />
                    </figure>
                    <div>
                        <h5>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem
