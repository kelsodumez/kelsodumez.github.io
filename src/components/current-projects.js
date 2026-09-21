"use client";
import Link from "next/link";

const currentProjects = [
    { name: 'Tiny Politik (Beta)', href: '/portfolio/tiny-politik/beta' },
];

export default function CurrentProjects() {
    return (
        <div className={"Portfolio"}>
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