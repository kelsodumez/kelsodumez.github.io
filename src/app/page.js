import Image from "next/image";
import SetTitle from "../components/sidebar";

export default function Home() {
    return (
        <main>
            <h1 className="header">
                    About Me
                </h1>
                <p className="max-w-6/12 text-xl leading-8 text-(--foreground)">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor nec urna tristique sagittis non sed magna. Sed orci nibh, blandit facilisis arcu finibus, tincidunt sollicitudin sem. Nullam venenatis eget lectus at pharetra. Integer ante nisl, vehicula vitae pretium non, imperdiet ac felis. Aenean scelerisque nibh felis, viverra fermentum dolor elementum eget. Cras sed sapien orci. Vestibulum et lorem risus. Fusce in commodo velit, a volutpat purus. Nunc quis nisi id magna volutpat aliquet. Integer eget sem sed orci fringilla tristique id et ex. Maecenas semper ut arcu ut imperdiet. Nam pretium commodo ultricies. Donec ultricies augue vel odio cursus, quis fringilla mauris consequat. Cras ut bibendum neque, ac varius tortor.

                    <a
                        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        className="font-medium text-zinc-950"
                    >
                    </a>{" "}
                    <a
                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        className="font-medium text-zinc-950"
                    >
                    </a>{" "}
                </p>
            </main>
    );
}