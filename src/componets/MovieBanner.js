import styled from 'styled-components';
import { Link } from "react-router-dom";

import React from 'react';



export default function MovieBanner({poster, title, id}){
    
    
    
    return(
        <>  <Link to={`/filme/${id}`}>
            <Banner >
                <img  src={poster} alt={title}></img>
            </Banner>
            </Link>
        </>
    )
}

const Banner = styled.div`
    cursor: pointer;
    height: 209px;
    width: 145px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:11px;
    
    &:hover{
        filter: brightness(120%);
    }

    img{
        width: 129px;
        height: 193px;
    }

`