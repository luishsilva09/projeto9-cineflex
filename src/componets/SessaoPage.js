import axios from "axios"
import React from "react";
import { Link, useParams } from "react-router-dom"
import styled from 'styled-components';

function SeatRender({ data }) {
    console.log(data)


    return (
        <Seat isAvailable={data.isAvailable}>
            {data.name}
        </Seat>
    )
}

export default function SessaoPage() {
    const { idSessao } = useParams();
    const [sessaoData, setSessaoData] = React.useState([])
    const [load, setLoad] = React.useState(false)

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then(function (sessao) {
            setSessaoData(sessao.data)
            setLoad(true)

        })

    }, [])

    function Render() {
        return (
            <Container>
                <Content>
                    <span>Selecione o(s) assento(s) </span>
                </Content>
                <Seats>
                    {sessaoData.seats.map((seat) => <SeatRender data={seat} />)}
                    <span>
                    <Seat></Seat>
                    <Seat isAvailable={true}></Seat>
                    <Seat isAvailable={false}></Seat>
                    </span>
                </Seats>
                <Footer>
                    <Poster>
                        <img src={sessaoData.movie.posterURL} />
                    </Poster>
                    <p>{sessaoData.movie.title}<br />{sessaoData.day.weekday} - {sessaoData.name}</p>
                    <p></p>
                </Footer>
            </Container>
        )
    }
    return (
        <>
            {load ? <Render /> : <p>load</p>}
        </>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
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
const Seats = styled.div`
    display: flex;
    width: 350px;
    flex-wrap: wrap;
    justify-content: center;
    
    span{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    
`
const Seat = styled.div`
    width: 26px;
    height: 26px;
    margin-left:7px;
    margin-bottom: 18px;
    background-color: ${props => props.isAvailable ? "#C3CFD9" : "#FBE192"};
    border: 1px solid ${props => props.isAvailable ? "#808F9D" : "#F7C52B"};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    
`
const NotAvailable = styled.div`
    background-color: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 12px;
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