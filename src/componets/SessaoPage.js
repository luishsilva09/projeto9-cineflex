import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components';
import Load from "../assets/load.gif";
import Header from './App/Header';
let assentos = [];
let assentosName = [];
function SeatRender({ data, Confirm }) {
    const [select, setSelect] = React.useState("#C3CFD9");
    const [selecionado, setSelecionado] = React.useState(false);
    

    function seleciona(element, id, name) {
        if (selecionado == false) {
            setSelect("#8DD7CF;");
            setSelecionado(true);
            assentos.push(id);
            assentosName.push(name);
        } else {
            setSelect("#C3CFD9");
            setSelecionado(false);
            assentos = assentos.filter((e) => e != id ? id : "");
            assentosName = assentosName.filter((e) => e != name ? name : "");
        };
    }
    if (data.isAvailable == false) {
        return (
            <Seat color="#FBE192" onClick={() => alert("Esse assento não está disponível")}>
                {data.name}
            </Seat>
        );
    };
    return (
        <Seat color={select} onClick={(element) => seleciona(element, data.id, data.name)}>
            {data.name}
        </Seat>
    );
};
export default function SessaoPage() {
    const { idSessao } = useParams();;
    const [sessaoData, setSessaoData] = React.useState([]);
    const [load, setLoad] = React.useState(false);
    const [nomeComprador, setNomeComprador] = React.useState("");
    const [cpf, setCpf] = React.useState("");
   

    let navigate = useNavigate();

    React.useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        promise.then(function (sessao) {
            setSessaoData(sessao.data);
            setLoad(true);
        });
    }, []);

    function Confirm(event) {
        event.preventDefault();
        let config = {

            ids: assentos,
            name: nomeComprador,
            cpf: cpf

        };
        let SucessData = {
            ids: assentos,
            name: nomeComprador,
            cpf: cpf,
            movieName: sessaoData.movie.title,
            movieDay: sessaoData.day.weekday,
            movieTime: sessaoData.name,
            seats: assentosName
        };
        const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', config);
        promise.then(navigate("/sucesso", { state: SucessData }));
        setCpf("");
        setNomeComprador("");
        assentosName = [];
        assentos = [];
    }
    function validCPF(e){
        console.log(e)
    }
    
   
    return (
        <>
            {load ?
                <Container>
                    <Header />
                    <Content>
                        <span>Selecione o(s) assento(s) </span>
                    </Content>

                    <Seats>
                        {sessaoData.seats.map((seat) => <SeatRender data={seat} />)}
                        <Legend>
                            <div><Seat color="#8DD7CF"></Seat><h5>Selecionado</h5></div>
                            <div><Seat color="#C3CFD9"></Seat><h5>Disponível</h5></div>
                            <div><Seat color="#FBE192"></Seat><h5>Indisponível</h5></div>
                        </Legend>
                    </Seats>
                    <Form onSubmit={Confirm}>
                        <p>Nome do comprador:</p>
                        <input type="text" placeholder="Digite seu nome..." value={nomeComprador} onChange={(e) => setNomeComprador(e.target.value)} required/>
                        <p>CPF do comprador:</p>
                        <input type="text" placeholder="Digite seu CPF..." value={cpf} onChange={(e) => setCpf(e.target.value)} onKeyPress={(e)=> validCPF(e)} pattern="[0-9]{11}" title="Digite um valor correto, somente numeros" required />
                        <button type="submit" >Reservar assento(s)</button>
                    </Form>

                    <Footer>
                        <Poster>
                            <img src={sessaoData.movie.posterURL} />
                        </Poster>
                        <p>{sessaoData.movie.title}<br />{sessaoData.day.weekday} - {sessaoData.name}</p>
                        <p></p>
                    </Footer>
                </Container>
                : <img src={Load} />}

        </>
    );
};
const Legend = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    h5{
        font-size: 13px;
        color:#4E5A65;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 42px;
    margin-bottom: 130px;

    p{
        width: 100%;
        font-size: 18px;
    }

    input{
        height: 51px;
        width: 327px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        font-size: 18px;
        font-style: italic;
        margin-bottom: 10px;
    }
    button{
        height: 42px;
        width: 225px;
        background-color: #e8833a;
        font-size: 18px;
        color: #fff;
        border:none;
        border-radius: 3px;
        cursor: pointer;
        margin-top: 50px;

        &:hover{
            filter: brightness(120%);
            
        }

    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Content = styled.div`
    margin-bottom: 17px;
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
    cursor: pointer;

    
    
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
    background-color: ${props => props.color};
    border: 1px solid ${props => props.color};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;

    &:hover{
            filter: brightness(110%);
    }
    
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