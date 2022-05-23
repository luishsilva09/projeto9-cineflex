import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from './App/Header';

export default function SucessPage() {
    const { state } = useLocation();
    return (
        <Container>
            <Header />
            <Content>
                <span>Pedido feito <br />com sucesso!</span>
            </Content>
            <Post>
                <h1>Filme e sessão</h1>
                <p>{state.movieName}</p>
                <p>{state.movieDay} {state.movieTime}</p>
            </Post>
            <Post>
                <h1>Ingressos</h1>
                {state.seats.map((e) => <p>Assento {e}</p>)}
            </Post>
            <Post>
                <h1>Comprador</h1>
                <p>Nome: {state.name}</p>
                <p>CPF: {state.cpf}</p>
            </Post>
            <Footer>
                <Link to="/">
                    <button>Voltar para Home</button>
                </Link>
            </Footer>
        </Container>
    );
};
const Container = styled.div`
    
    h1{
        font-size: 24px;
        color:#293845;
        font-weight: 700;
        line-height: 28px;
    }
    p{
        font-size:22px ;
        color:#293845;
        line-height: 26px;
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
const Content = styled.div`
    margin-bottom: 17px;
    span{
        width: 100%;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 24px;
        color:#247A6B;
        font-weight: 700;

    }
     
`
const Post = styled.div`
margin-bottom: 50px;
margin-left: 30px;

`
const Footer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    `