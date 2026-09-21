import PortfolioItems from "../../components/portfolio";
import CurrentWorkItem from "../../components/current-projects";
export default function Portfolio() {
    return (
        <div>
            {/*<h1>Tiny Politik</h1>*/}
            <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin.</p>
            <h1>Current Projects</h1>
            <CurrentWorkItem/>
            <h2>Link to siofghd</h2>
            <h1>Previous Work</h1>
            <PortfolioItems />
        </div>
    );
}
