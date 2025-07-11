import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black rounded-md text-white py-12 px-6">
            <div className="max-w-5xl mx-auto">

                {/* Logo */}
                <div className="flex justify-center text-teal-600 dark:text-teal-300 mb-6">
                    <svg className="h-8" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG Path for Logo (from your file) */}
                        <path d="M37.83 19.2047C37.2352 19.237 ... rest of path ..." fill="currentColor" />
                    </svg>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-center max-w-lg mx-auto leading-relaxed">
                    Manage your library efficiently with easy access to books, borrowing records, and more.
                </p>

                {/* Navigation Links */}
                <ul className="mt-12 text-white flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 text-gray-700 dark:text-white">
                    <li><Link to="/books" className="hover:underline">Books</Link></li>
                    <li><Link to="/create-book" className="hover:underline">Add Book</Link></li>
                    <li><Link to="/borrow-summary" className="hover:underline">Borrow Summary</Link></li>

                </ul>

                {/* Social Icons */}
                <ul className="mt-12 flex justify-center gap-6">
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24 0 9.5 3.27 9.5 5.58v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.661 8.094 4.1 6.13 1.845 3.063c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.5 14-14 0-.21-.005-.419-.014-.627.961-.689 1.8-1.56 2.46-2.548z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm6.5-13.5h-13c-.83 0-1.5.67-1.5 1.5v10c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5zM12 18c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm6.5-8.5h-13c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h13c.28 0 .5.22.5.5s-.22.5-.5.5z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;