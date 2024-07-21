import React from 'react';
import { Link } from 'react-router-dom'; // Falls Sie React Router verwenden

const Navbar = () => {
    return (
        <nav className="bg-gray-900 h-16 text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between px-4 h-full">
                <div className="flex items-center space-x-6">
                    <Link to="/" className="text-lg font-semibold hover:text-gray-400">Home</Link>
                    <Link to="/articles" className="text-lg font-semibold hover:text-gray-400">Artikel</Link>
                    <Link to="/blog" className="text-lg font-semibold hover:text-gray-400">Blog</Link>
                </div>
             
                <div className="md:hidden flex items-center">
                    {/* Hier könnten Sie ein Mobile-Menü-Symbol hinzufügen */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
