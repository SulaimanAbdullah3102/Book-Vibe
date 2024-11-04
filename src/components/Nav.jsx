import { NavLink } from "react-router-dom";


const Nav = () => {
    const links = <>
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/">Listed Books</NavLink></li>
        <li> <NavLink to="/"> Pages to Read</NavLink></li>
        <li> <NavLink to="/dashboard"> Dashboard</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-2">
                    {links}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <div >
                        <a style={{
                            backgroundColor: "#23BE0A"
                        }} className="btn ">Sign In</a>
                    </div>
                    <div >
                        <a style={{
                            backgroundColor: "#59C6D2"
                        }} className="btn">Sign Up</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Nav;