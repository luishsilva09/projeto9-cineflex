import '../../assets/reset.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route, Link,useNavigate} from "react-router-dom";
import GlobalStyle from '../globalStyles';
import MainPage from '../MainPage';
import MoviePage from '../MoviePage';
import SessaoPage from '../SessaoPage';
import SucessPage from '../SucessPage';
import Header from './Header';

export default function App() {
    
    return (
        <>
        <GlobalStyle/>
            <BrowserRouter>
                
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/filme/:idMovie" element={<MoviePage />} />
                    <Route path="/sessao/:idSessao" element={<SessaoPage />} />
                    <Route path="/sucesso" element={<SucessPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

