import { useState } from 'react';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
                    <nav className="flex flex-row items-center justify-center bg-white border-b mt-[10px] border-gray-300 shadow-sm">
                        <ul className="flex flex-row space-x-[30px]">
                            <li>
                                <button id="btn-home" className="rounded cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-[#213890]">Home</button>
                            </li>

                            <li className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="rounded cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-[#213890]">
                                    Categories
                                    <i className={`text-[12px] ml-1 transition-transform duration-300 fas fa-chevron-down ${dropdownOpen ? 'rotate-180' : ''}`}></i>
                                </button>

                                <ul
                                    className={`absolute top-full mt-4 w-80 grid grid-cols-2 bg-white shadow-md rounded-md border border-gray-200 p-3 transition-all duration-300 ease-out transform origin-top z-50 ${dropdownOpen
                                        ? 'opacity-90 scale-100 pointer-events-auto'
                                        : 'opacity-0 scale-95 pointer-events-none'
                                        }`}
                                >
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                                            Sport
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/something" className="block px-4 py-2 hover:bg-gray-100">
                                            Economy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/something" className="block px-4 py-2 hover:bg-gray-100">
                                            Industry
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/something" className="block px-4 py-2 hover:bg-gray-100">
                                            Politic
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/something" className="block px-4 py-2 hover:bg-gray-100">
                                            Nature
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/something" className="block px-4 py-2 hover:bg-gray-100">
                                            Culture
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <button id="btn-trends" className="rounded cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-[#213890]">Trends</button>
                            </li>
                            <li>
                                <button id="btn-articles" className="rounded cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-[#213890]">Articles</button>
                            </li>
                        </ul>

                        <div className="flex flex-row mx-10 mb-[5px] h-[30px] cursor-pointer px-[20px] py-[15px] transition-all duration-[800ms] bg-[#030b29] rounded-[10px] border-b border-gray-300 items-center shadow-[0_10px_25px_rgba(0,0,0,0.1)] hover:bg-gray-200 group">
                            <input 
                                type="text" 
                                placeholder="Search..." 
                                className="w-0 outline-none border-none font-sans transition-all duration-[800ms] bg-[#030b29] group-hover:w-40 group-hover:bg-gray-200"
                            />
                            <a href="#">
                                <i className="fas fa-search text-[#ffffff] text-[18px] transition-transform duration-[800ms] group-hover:text-[#000000]"></i>
                            </a>
                        </div>

                    </nav>
        </>
    );
}

export default Navbar;