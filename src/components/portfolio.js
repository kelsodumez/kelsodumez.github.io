"use client";
import Link from "next/link";

const portfolioItems = [
    {
        name: 'Tiny Politik (Alpha)',
        href: '/portfolio/tiny-politik/alpha',
        tags: "UX Design, Unity-Implementation",
        description: "Design and implementation of UI for the alpha prototype of a asynchronous 4X multiplayer game."},
    {
        name: 'Cobalt',
        href: '/portfolio/cobalt',
        tags: "Graphic Design, Brand-Identity",
        description: "UI De"}
];

export default function PortfolioItems() {
    return <div className={"Portfolio"}>
        {portfolioItems.map((item) => {
            return <div className={"portfolio-item"} key={item.name}>
                <Link href={item.href}>{item.name}</Link>
                <div className={"tag-list"}>{item.tags}</div>
                <p>{item.description}</p>
            </div>})}
    </div>
}