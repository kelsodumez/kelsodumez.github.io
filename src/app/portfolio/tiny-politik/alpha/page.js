import React from 'react';
export default function Page() {
    return (
        <div>
            <h1>Tiny Politik (Alpha)</h1>
            {/*<img src="/tiny-politik/cover.png"  width="5" height="5" alt="Tiny Politik Photo"/>*/}
            <div className={"item-showcase"}>
                <div className="video-container">
                    <iframe className="responsive-iframe" src="https://www.youtube.com/embed/rYzxd1EN6to"
                        title="TinyPolitik | Multiplayer Casual Strategy Trailer" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>
                <p>
                    Brief
                    Tiny Politik is a prototype game that was produced over a period of twelve weeks as part of the PROD322
                    ‘Gaming Project Studio 2’ course at the University of Canterbury in 2024.
                </p>
                <br></br>
                <h2>
                    My Roles
                </h2>
                <li>Creative/Visual Lead</li>
                <li>UI Implementation</li>
                <li>Playtest Organisation & Management</li>
                <li>General Project Management</li>
            </div>
            <div className="item-research">
                <h1>Paper Prototype</h1>
            </div>
            <div className="item-implementation">
                <h1>Digital Prototype</h1>
            </div>
            <div className="item-reflection">
                <p>some reflective stuff here</p>
            </div>
            <h1>Process</h1>

        </div>
    );
}
