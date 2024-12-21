import { Link } from "wouter";

function WelcomeBox() {
    return (
        <div className="bg-white pl-2 pr-8 pb-8 pt-8 rounded-lg shadow-lg max-w-lg md:w-full ">
            <div>
                <h1 className="text-3xl font-bold text-quaternary text-center mb-4">
                    Welcome to My Travel Journey Blog
                </h1>
            </div>
            <div className="flex">
                <div className="flex-1 pr-4">
                    <img
                        src="/img/pedro2.jpg"
                        alt="Pedro Franzina"
                        className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-primary shadow-lg mb-6"
                    />
                </div>
                <div className="flex-1">
                    <p className="text-gray-700 text-justify">
                        Discover the beauty of the world through my lens. Check photos from my travels over the past few years, and get to know me better in the{" "}
                        <Link href="/aboutme" className="text-quaternary font-semibold hover:underline">
                            About Me
                        </Link>{" "}
                        section.
                    </p>
                </div>
            </div>
        </div >
    );
}

export default WelcomeBox;
