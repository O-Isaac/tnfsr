import { Fragment } from "react"
import { Link, Image } from "@nextui-org/react";
import type { CollectionEntry } from "astro:content";

interface PropsCard {
    title: string
    image: string
    category: string
    href: string
}

export function Card (props: PropsCard) {
    return (
        <article className="max-w-screen-xl mx-auto">
            <header>
                <Image isZoomed radius="none" src={props.image} alt={props.title} className="w-full" />
            </header>
            <main className="flex *:uppercase *:font-medium text-xl justify-between py-5">
                <Link isBlock showAnchorIcon href={`/events?category=${props.category}`} size="lg" color="secondary">
                    {props.category}
                </Link>
                <h3 className="text-black">{props.title}</h3>
                <Link isBlock showAnchorIcon href={props.href} size="lg" color="danger">
                    Read More
                </Link>
            </main>
        </article>
    )
}


interface Props {
    posts: CollectionEntry<"posts">[]
}

export default function Cards (props: Props) {
    return (
        <Fragment>
            {props.posts.slice(0, 3).map(post => (
                <Card 
                    href={post.data.instagram}
                    image={post.data.image}
                    title={post.data.title}
                    key={post.id}
                    category={post.data.category} 
                />
            ))}
        </Fragment>
    )
}