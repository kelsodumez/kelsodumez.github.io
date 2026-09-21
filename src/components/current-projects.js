"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";

const currentProjects = [
    { name: 'Tiny Politik (Beta)', href: '/portfolio/tiny-politik/beta' },
];

const classNames = (classes) => {
    return "";
};


export default function CurrentProjects() {
    const pathName = usePathname();
    return (<div className={"Portfolio"}>
        {currentProjects.map((item) => {
            return <Link
                key={item.name}
                href={item.href}
            >
                {item.name}
            </Link>
        })}
    </div>)
}