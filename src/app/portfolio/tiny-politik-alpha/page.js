import cover from "../../../../public/tiny-politik/cover.png";
import Image from 'next/image';

export default function Page() {
    return (
        <div>
            <h1>Tiny Politik (Alpha)</h1>
            <Image src="/tiny-politik/cover.png"  width="500" height="500" alt="Tiny Politik Photo"/>
            <p>
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

            <br></br>
            <h1>Design Pillars</h1>
            <h2>Casual</h2>
            <p>The game will be played casually, requiring only a small (5-20 minutes) amount of time per day.</p>
            <h2>Social Multiplayer</h2>
            <p>The game will be played online, though only amongst small-medium (8-30) groups of friends.</p>
            <h2>4X</h2>
            <p>
                Gameplay mechanics will follow a typical 4X structure similar to that of Civilisation.
                Players will be able to found countries, create armies, expand, trade and go to war with other players.
            </p>
            <h2>Asynchronously Turn Based</h2>
            <p>
                The game will be turn based. Each player will be able to asynchronously make their turns within a time window,
                with all player turns being resolved at a specific time by the server.
            </p>
            <h2>Slow Paced</h2>
            <p>
                Turns will occur only a few times a day (3-5).
            </p>
        </div>
    );
}
