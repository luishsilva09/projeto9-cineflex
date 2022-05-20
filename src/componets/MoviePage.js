import { Link ,useParams } from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";
import React from "react";
function ContentMovie({ data}) {
   function SeceaoMovie({day}){
       
       return(
           <>
            <p>{day.weekday} - {day.date}</p>
            {day.showtimes.map((time, index) => <Link to={`/sessao/${time.id}`}><button key={index} id={time.id} >{time.name}</button></Link>)}
           </>
       )
   }
    return (
        <>
            <Secoes>
                {data.days.map((day,index) => <SeceaoMovie key={index} day={day}  />)}  
            </Secoes>
        </>
    )
}

export default function MoviePage() {

    const { idMovie } = useParams();
    const [movieData, setMovieData] = React.useState([])
    const [load, setLoad] = React.useState(false)

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`)
        promise.then(function (movie) {
            setMovieData(movie.data)
            setLoad(true)
        })
    }, [])
    return (
        <>
            <Content>
                <span>Selecione o horário</span>
                {load ? <ContentMovie key={movieData.id} data={movieData} /> : <p>load</p>}
            </Content>
            <Footer>
                <Poster>
                    <img src={movieData.posterURL} alt={movieData.title} />
                </Poster>
                <p>{movieData.title}</p>
            </Footer>
        </>
    )
}
const Content = styled.div`
    margin-bottom: 117px;
    span{
        width: 100%;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
    }
     
`
const Secoes = styled.div`
    margin-left: 24px;
    
    p{
        font-size: 20px;
        margin-top:23px;
        margin-bottom: 22px;
    }
    button{
        height: 43px;
        width: 82px;
        background-color: #E8833A;
        border:none;
        border-radius: 3px;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
        margin-left: 8px;

    &:hover{
        opacity: 50%;
    }
    }
`

const Footer = styled.div`
    width: 100%;
    height: 117px;
    background-color: #9EADBA;
    display: flex;
    align-items: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    border: 1px solid #9EADBA;
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
    
    p{
        font-size: 26px;
        margin-left: 14px;
    }
`
const Poster = styled.div`
    height:89px ;
    width: 64px;
    background-color:#fff ;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;

    img{
        width: 48px;
        height: 72px;
    }
`