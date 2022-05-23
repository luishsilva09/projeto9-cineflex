import ReactDOM from 'react-dom';
import App from './componets/App/App';
function Index() {
    return (
        <>
            <App />
        </>
    );
};

ReactDOM.render(<Index />, document.querySelector(".root"));