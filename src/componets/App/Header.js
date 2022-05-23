import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

export default function Header(props) {
    let navigate = useNavigate()


    return (
        <Head>
            <p>CINEFLEX</p>
            <h2 onClick={() => navigate(-1)}>Voltar</h2>
        </Head>

    )
}

const Head = styled.div`
    height: 67px;
    width: 100%;
    background-color:#C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;
   position: relative;
    h2{
        position: absolute;
        left:10px;
        bottom: 10px;
        font-size: 20px;
    }

    p{
        font-size: 34px;
        color:#e8833a;
    }
`