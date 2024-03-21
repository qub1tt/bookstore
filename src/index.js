import ReactDOM from "react-dom";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


