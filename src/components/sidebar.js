import React from 'react'
import { useLocation } from "react-router-dom";

const pageTitle = "Home";

const navigation = [
    { name: 'Home', href: '/#', current: false },
    { name: 'Portfolio', href: 'portfolio/#', current: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const location = useLocation;

    switch (useLocation().pathname) {
        case "/":
        default:
            return "Home page";
        case "/Portfolio":
            return "Portfolio";
    }
}

export default function Sidebar() {
    return (
        // <div className="header">Test</div>
        <div className="header">{pageTitle}</div>
    )
}





