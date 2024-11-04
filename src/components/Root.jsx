import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";


const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;