import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
     <div className="w-full border-yellow-500">
           <header className="relative z-20 w-full rounded-md shadow-lg bg-black text-white shadow-slate-700/5">
            <div className="mx-auto max-w-full px-6">
                <nav
                    aria-label="main navigation"
                    className="flex h-[5.5rem] items-center justify-between"
                    role="navigation"
                >
                    {/* Logo */}
                    <a
                        id="WindUI"
                        aria-label="Library Management logo"
                        aria-current="page"
                        className="flex items-center gap-2 py-3 text-2xl font-semibold whitespace-nowrap focus:outline-none"
                        href="/"
                    >
                        Library Management
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="relative self-center block w-10 h-10 lg:hidden"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <span
                                aria-hidden="true"
                                className={`absolute block h-0.5 w-9/12 rounded-full bg-white transform transition-all duration-300 ${
                                    isMenuOpen ? "-translate-y-0 rotate-45" : "-translate-y-2"
                                }`}
                            ></span>
                            <span
                                aria-hidden="true"
                                className={`absolute block h-0.5 w-6 rounded-full bg-white transform transition-all duration-300 ${
                                    isMenuOpen ? "opacity-0" : "opacity-100"
                                }`}
                            ></span>
                            <span
                                aria-hidden="true"
                                className={`absolute block h-0.5 w-1/2 rounded-full bg-white transform transition-all duration-300 ${
                                    isMenuOpen ? "translate-y-0 rotate-[-45deg]" : "translate-y-2"
                                }`}
                            ></span>
                        </div>
                    </button>

                    {/* Desktop & Mobile Navigation Links */}
                    <ul
                        role="menubar"
                        aria-label="Select page"
                        className={`${
                            isMenuOpen
                                ? "max-h-screen opacity-100 visible translate-x-0"
                                : "max-h-0 opacity-0 invisible translate-x-full"
                        } fixed top-[5.5rem] left-0 z-10 flex flex-col w-full bg-black text-white font-medium transition-all duration-300 ease-in-out lg:relative lg:top-0 lg:left-auto lg:flex-row lg:max-h-screen lg:opacity-100 lg:visible lg:w-auto lg:bg-transparent lg:translate-x-0`}
                    >
                        <li role="none" className="flex items-stretch">
                            <Link
                                to="/books"
                                role="menuitem"
                                className="flex items-center py-4 px-6 hover:text-emerald-400 transition-colors duration-300 focus:text-emerald-500 focus:outline-none lg:px-8"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Books
                            </Link>
                        </li>
                        <li role="none" className="flex items-stretch">
                            <Link
                                to="/create-book"
                                role="menuitem"
                                className="flex items-center py-4 px-6 hover:text-emerald-400 transition-colors duration-300 focus:text-emerald-500 focus:outline-none lg:px-8"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Create Book
                            </Link>
                        </li>
                        <li role="none" className="flex items-stretch">
                            <Link
                                to="/borrow-summary"
                                role="menuitem"
                                className="flex items-center py-4 px-6 hover:text-emerald-400 transition-colors duration-300 focus:text-emerald-500 focus:outline-none lg:px-8"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Borrow Summary
                            </Link>
                        </li>
                    </ul>

               
                </nav>
            </div>
        </header>
     </div>
    );
};

export default Navbar;