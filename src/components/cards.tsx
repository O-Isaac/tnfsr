import { Fragment } from "react"
import { Link, Image } from "@nextui-org/react";

export default function Cards () {
    return (
        <Fragment>
            <article className="max-w-screen-xl mx-auto">
                <header>
                    <Image isZoomed radius="none" src="/assets/post-example.jpeg" alt="Title of the post" className="w-full" />
                </header>
                <main className="flex *:uppercase *:font-medium text-xl justify-between py-5">
                    <Link isBlock showAnchorIcon href="#" size="lg" color="secondary">
                        Influencers
                    </Link>
                    <h3 className="text-black">Title</h3>
                    <Link isBlock showAnchorIcon href="#" size="lg" color="danger">
                        Read More
                    </Link>
                </main>
            </article>
            <article className="max-w-screen-xl mx-auto">
                <header>
                    <Image isZoomed radius="none" src="/assets/post-example.jpeg" alt="Title of the post" className="w-full" />
                </header>
                <main className="flex *:uppercase *:font-medium text-xl justify-between py-5">
                    <Link isBlock showAnchorIcon href="#" size="lg" color="secondary">
                        Influencers
                    </Link>
                    <h3 className="text-black">Title</h3>
                    <Link isBlock showAnchorIcon href="#" size="lg" color="danger">
                        Read More
                    </Link>
                </main>
            </article>
            <article className="max-w-screen-xl mx-auto">
                <header>
                    <Image isZoomed radius="none" src="/assets/post-example.jpeg" alt="Title of the post" className="w-full" />
                </header>
                <main className="flex *:uppercase *:font-medium text-xl justify-between py-5">
                    <Link isBlock showAnchorIcon href="#" size="lg" color="secondary">
                        Influencers
                    </Link>
                    <h3 className="text-black">Title</h3>
                    <Link isBlock showAnchorIcon href="#" size="lg" color="danger">
                        Read More
                    </Link>
                </main>
            </article>
        </Fragment>
    )
}