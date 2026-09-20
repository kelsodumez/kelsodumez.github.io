import PortfolioItems from "../../components/portfolio";

export default function Portfolio() {
    return (
        <div>
            <h1>Get in Touch</h1>
            <div className="row">
                <div className="col">
                    <p className="font-semibold">Email</p>
                    <p className="font-semibold">Discord</p>
                    <p className="font-semibold">LinkedIn</p>
                </div>
                <div className="col">
                    <a href="mailto:kelso@dumez.nz">kelso@dumez.nz</a>
                    <a href="discord.com/users/274121886298931203">@keslo_</a>
                    <a href="https://www.linkedin.com/in/kelso-du-mez-85b793315">Kelso du Mez</a>
                </div>
            </div>
        </div>
    );
}