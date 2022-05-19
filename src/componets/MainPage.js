import styled from 'styled-components';
import axios from 'axios';
import React from 'react';
import MovieBanner from './MovieBanner';

export default function MainPage(){
    const [banner, setBanner] = React.useState([])
    React.useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promise.then((props) => setBanner(props.data))
    }, [])
    console.log(banner)
    return(
        <>
            
            <Main>
                <p>Selecione o filme</p>
                <Content>
                    {banner.map((movie)=> <MovieBanner key={movie.id} poster={movie.posterURL} title={movie.title} id={movie.id}/>)}
                </Content>
            </Main>
        </>
    )
}


const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p{
        width: 100%;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
    }
`
const Content = styled.div`
        width: 350px;
        display: flex;
        flex-wrap: wrap;
`