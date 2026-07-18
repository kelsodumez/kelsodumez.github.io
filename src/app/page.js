import Image from "next/image";

export default function Home() {
    return (
            <main className="flex flex-1 w-full max-w-8/12 flex-col items-center justify-between py-32 px-8 bg-(--background) sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-12/12 text-8xl font-bold leading-22 tracking-tight text-black">
                        About Me
                    </h1>
                    <p className="max-w-6/12 text-xl leading-8 text-(--foreground)">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id tortor nec urna tristique sagittis non sed magna. Sed orci nibh, blandit facilisis arcu finibus, tincidunt sollicitudin sem. Nullam venenatis eget lectus at pharetra. Integer ante nisl, vehicula vitae pretium non, imperdiet ac felis. Aenean scelerisque nibh felis, viverra fermentum dolor elementum eget. Cras sed sapien orci. Vestibulum et lorem risus. Fusce in commodo velit, a volutpat purus. Nunc quis nisi id magna volutpat aliquet. Integer eget sem sed orci fringilla tristique id et ex. Maecenas semper ut arcu ut imperdiet. Nam pretium commodo ultricies. Donec ultricies augue vel odio cursus, quis fringilla mauris consequat. Cras ut bibendum neque, ac varius tortor.

                        <a
                            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            className="font-medium text-zinc-950"
                        >
                            {/*Templates*/}
                        </a>{" "}
                        {/*or the{" "}*/}
                        <a
                            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                            className="font-medium text-zinc-950"
                        >
                            {/*Learning*/}
                        </a>{" "}
                    </p>
                </div>
                <div className="flex flex-col gap-8 text-base font-medium sm:flex-row">
                    <a
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] md:w-39.5"
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="/vercel.svg"
                            alt="Vercel logomark"
                            width={16}
                            height={16}
                        />
                        Get in Touch
                    </a>
                    <a
                        className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4  md:w-39.5"
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        See my work
                    </a>
                </div>
            </main>
    );
}
