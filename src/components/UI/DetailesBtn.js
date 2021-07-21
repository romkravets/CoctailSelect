import React from 'react';
import { Link } from "react-router-dom";

const DetailesBtn = ({item}) => {
    return (
        <Link to={`/cocktail/${item}`} className="btn">
            Detailes
        </Link>
    )
}

export default DetailesBtn;