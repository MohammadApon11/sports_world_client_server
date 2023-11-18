import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import { MdSpaceDashboard } from 'react-icons/md';

const NavigationBar = () => {
    const { user, logOut } = useAuth();
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }
    const [isAdmin] = useAdmin();
    const admin = isAdmin?.admin?.admin;
    const instructor = isAdmin?.instructor?.instructor;

    const navItem = <>
        <li>
            <NavLink className={({ isActive }) => (isActive ? 'text-black uppercase font-bold transition-colors duration-200' : 'hover:text-blue-700 font-bold uppercase')} to="/">Home</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 font-bold uppercase transition-colors duration-200' : 'hover:text-blue-700 text-info font-bold uppercase')} to="/instructors">Instructors</NavLink>
        </li>
        <li>
            <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 uppercase font-bold tracking-wide transition-colors  duration-200' : 'hover:text-blue-700 font-bold uppercase text-success')} to="/classes">Classes</NavLink>
        </li>
        {user && <li>
            <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 font-bold transition-colors duration-200 uppercase' : 'hover:text-blue-700 uppercase font-bold text-yellow-500')} to={admin ? (
                "/Dashboard/manageClasses"
            ) : instructor ? (
                "/dashboard/addClass"
            ) : (
                "/dashboard/studentHome"
            )}><MdSpaceDashboard size={20} /> Dashboard</NavLink>
        </li>}
        <li>
            {user && <Link className="uppercase font-semibold text-red-400 hover:text-blue-600" onClick={handleLogout}>logout</Link>}
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-base-200 lg:px-24 px-6">
                <div className="navbar-start">
                    <div className="dropdown z-10">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                            <input type="in" />

                        </ul>
                    </div>
                    <Link to="/" className="flex items-center gap-3">
                        <img className="h-10 lg:w-10 w-14 rounded-full" src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                        <p className="normal-case text-xl font-semibold ">OPEN SPORTS</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {user ?
                        <img className="rounded-full h-10" src={user.photoURL} alt="" />
                        :
                        <>
                            <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 uppercase font-semibold tracking-wide transition-colors duration-200' : 'hover:text-blue-700 uppercase font-semibold')} to="/login">Login</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'text-blue-600 uppercase font-semibold tracking-wide transition-colors duration-200' : 'hover:text-blue-700 uppercase font-semibold')} to="/register">Sign Up</NavLink>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;