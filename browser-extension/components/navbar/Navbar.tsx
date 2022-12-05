import React from "react";

export const Navbar = () => {
    return (
        <nav className="top-0 bg-primary-900 z-50 w-full px-2 py-3 navbar-expand-lg shadow">
            <div className="container px-4 mx-auto flex items-center justify-between">
                <a
                    className="text-neutral-50 text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase">
                    Go Links Engine
                </a>
                <div className="flex">
                    <a className="text-neutral-50 text-xs uppercase font-bold mr-4"
                       href="https://github.com/darge98/Go-Links"
                       target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github text-lg leading-lg"></i>
                    </a>
                </div>
            </div>
        </nav>

    )
}
