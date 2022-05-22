import '../../assets/reset.css'
import '../../assets/style.css'
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import MainPage from '../MainPage';
import MoviePage from '../MoviePage';
import SessaoPage from '../SessaoPage';
import SucessPage from '../SucessPage';

export default function App() {


    return (
        <>
            <BrowserRouter>
            
            
            <Header>
                <p>CINEFLEX</p>
            </Header>
            
            
            
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/filme/:idMovie" element={<MoviePage />}/>
                    <Route path="/sessao/:idSessao" element={<SessaoPage />} />
                    <Route path="/sucesso" element={<SucessPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
const Header = styled.div`
    height: 67px;
    width: 100%;
    background-color:#C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;
   

    p{
        font-size: 34px;
        color:#e8833a;
    }
`
