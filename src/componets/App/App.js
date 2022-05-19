import '../../assets/reset.css'
import '../../assets/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '../MainPage';

export default function App() {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    
                </Routes>
            </BrowserRouter>
        </>
    )
}
