import { NavLink, useLocation, } from 'react-router-dom'
import logo from '../assets/footer-logo.png'

const Header = ({ children }) => {
    const { pathname } = useLocation()
    const menuItems = <>
        <li><NavLink to='/' className='rounded-lg'>Home</NavLink></li>
        <li><NavLink to='/about' className='rounded-lg'>About</NavLink></li>
        <li><NavLink to='/blog' className='rounded-lg'>Blog</NavLink></li>
        <li><NavLink to='/portfolio' className='rounded-lg'>My Portfolio</NavLink></li>
        <li><NavLink className='rounded-lg' to='/login'>Login</NavLink></li>
    </>
    return (
        <>
            <div className="drawer drawer-end">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Navbar --> */}
                    <div className="w-full navbar bg-base-100 lg:px-20">
                        {pathname.includes("dashboard") && (
                            <label
                                tabIndex='0'
                                htmlFor='my-drawer-2'
                                className='btn btn-ghost lg:hidden '
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    className='h-5 w-5'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h7'
                                    />
                                </svg>
                            </label>
                        )}
                        <div className="flex-1 px-2 mx-2 text-2xl"><img className='w-12' src={logo} alt="brand" /><span className='text-primary ml-2'>Cisco Chemicals</span></div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal gap-x-2">
                                {menuItems}
                            </ul>
                        </div>
                    </div>
                    {children}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                        {menuItems}
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Header