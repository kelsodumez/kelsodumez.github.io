"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";

const portfolioItems = [
    { name: 'Tiny Politik (Alpha)', href: '/portfolio/tiny-politik-alpha' },
    {name: 'Cobalt', href: '/portfolio/cobalt' },
    {name: 'This Website!', href: '/portfolio/website' },
];

    const classNames = (classes) => {
        return "";
    };


export default function PortfolioItems() {
    const pathName = usePathname();
    return (<div className={"Portfolio"}>
        {portfolioItems.map((item) => {
            return <Link
                key={item.name}
                href={item.href}
            >
                {item.name}
            </Link>
        })}
    </div>)
}