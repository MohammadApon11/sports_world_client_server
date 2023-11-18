import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Foot from "../Pages/Shared/Foot/Foot";
import { FaUsersCog } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/si';
import { AiOutlineHome } from "react-icons/ai"

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const admin = isAdmin?.admin?.admin;
    const instructor = isAdmin?.instructor?.instructor;


    return (
        <div>
            <div className="drawer mb-10">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 gap-3">
                            <Link className="flex items-center px-2 mx-2 gap-3" to="/">
                                <img className="h-10 w-10  rounded-full" src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                <h1 className="text-xl font-semibold uppercase">Sports World</h1>
                            </Link>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {admin ? (
                                    <ul className="flex items-center">
                                        <li><Link className="font-semibold hover:text-blue-700" to="/"><AiOutlineHome className="text-xl" /> HOME</Link></li>
                                        <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-600 normal-case font-bold tracking-wide transition-colors duration-200' : 'hover:text-blue-700 font-semibold')} to="/dashboard/manageClasses"><FaUsersCog size={20} /> MANAGE CLASSES</NavLink ></li>
                                        <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-600 normal-case font-bold tracking-wide transition-colors duration-200 ' : 'font-bold hover:text-blue-700 ')} to="/dashboard/manageUsers"><FaUsersCog size={20} /> MANAGE USERS</NavLink ></li>
                                    </ul>
                                ) : instructor ? (
                                    <ul className="flex items-center">
                                        <li><Link className="hover:text-blue-700 font-semibold" to="/"><AiOutlineHome className="text-xl" /> HOME</Link></li>
                                        <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-600 font-semibold tracking-wide transition-colors duration-200 uppercase' : 'hover:text-blue-700 font-semibold uppercase')} to="/dashboard/addClass"><SiGoogleclassroom /> Add Classes</NavLink></li>

                                        <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-600 uppercase font-semibold tracking-wide transition-colors duration-200 ' : 'hover:text-blue-700 font-semibold uppercase')} to="/dashboard/myClasses"><SiGoogleclassroom /> My Classes</NavLink ></li>
                                    </ul>
                                ) : (
                                    <ul className="flex items-center">
                                        <li><Link className="hover:text-blue-700 font-semibold uppercase" to="/"> <AiOutlineHome className="text-xl" /> Home</Link></li>

                                        <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-600 uppercase font-semibold tracking-wide transition-colors duration-200' : 'hover:text-blue-700 font-semibold uppercase')} to="/dashboard/studentHome"><span className="text-xl">✔ </span>My Selected Classes</NavLink >
                                        </li>
                                        <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-600 uppercase font-semibold tracking-wide transition-colors duration-200' : 'hover:text-blue-700 font-semibold uppercase')} to="/dashboard/enrolled"><span className="text-xl">☑ </span>My Erolled Classes</NavLink >
                                        </li>

                                        <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-600 uppercase font-semibold tracking-wide transition-colors duration-200' : 'hover:text-blue-700 font-semibold uppercase')} to="/dashboard/history"><span className="text-xl ">❏</span> My Enrolled History</NavLink ></li>
                                    </ul>
                                )}
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-52 h-full bg-base-200">
                        {/* Sidebar content here */}
                        {admin ? (
                            <ul>
                                <li><Link className="hover:text-blue-700 uppercase font-semibold" to="/"><AiOutlineHome className="text-xl" /> Home</Link></li>
                                <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-600 uppercase font-semibold tracking-wide transition-colors duration-200' : 'hover:text-blue-700 font-semibold uppercase')} to="/dashboard/manageClasses"><FaUsersCog size={20} /> Manage Classes</NavLink ></li>
                                <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-600 uppercase font-semibold tracking-wide transition-colors duration-200' : 'hover:text-blue-700 uppercase font-semibold')} to="/dashboard/manageUsers"><FaUsersCog size={20} /> Manage Users</NavLink ></li>
                            </ul>
                        ) : instructor ? (
                            <ul>
                                <li><Link className="hover:text-blue-700  uppercase font-semibold" to="/"><AiOutlineHome className="text-xl" /> Home</Link></li>
                                <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-600 uppercase font-semibold tracking-wide transition-colors duration-200' : 'hover:text-blue-700 font-semibold uppercase')} to="/dashboard/addClass"><SiGoogleclassroom /> Add Classes</NavLink></li>
                                <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-600 uppercase font-semibold tracking-wide transition-colors duration-200' : 'hover:text-blue-700 font-semibold uppercase')} to="/dashboard/myClasses"><SiGoogleclassroom /> My Classes</NavLink ></li>
                            </ul>
                        ) : (
                            <ul>
                                <li><Link className="hover:text-blue-700 uppercase font-semibold" to="/"><AiOutlineHome className="text-xl" />  Home</Link></li>

                                <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-600 uppercase font-semibold tracking-wide transition-colors duration-200' : 'hover:text-blue-700 font-semibold uppercase')} to="/dashboard/studentHome"><span className="text-xl">✔ </span>My Selected Classes</NavLink >
                                </li>

                                <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-600 uppercase font-semibold tracking-wide transition-colors duration-200' : 'hover:text-blue-700 uppercase font-semibold')} to="/dashboard/enrolled"><span className="text-xl">☑ </span>My Erolled Classes</NavLink ></li>

                                <li><NavLink className={({ isActive }) => (isActive ? 'text-blue-600 uppercase font-semibold tracking-wide transition-colors duration-200' : 'hover:text-blue-700 uppercase font-semibold')} to="/dashboard/history"><span className="text-xl ">❏</span> My Enrolled History</NavLink ></li>
                            </ul>
                        )}
                    </ul>

                </div>
            </div>
            <Foot />
        </div >
    );
};

export default Dashboard;