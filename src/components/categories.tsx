import { Tabs, Tab, Chip, CardBody, Card } from "@nextui-org/react";
import type { CollectionEntry } from "astro:content";
import Cards from "./cards";

interface TabTitleProps {
    title: string
    count: number
}

const TabTitle = (props: TabTitleProps) => (
    <div className="flex items-center space-x-2">
        <span className="capitalize">{props.title}</span>
        <Chip size="sm" variant="faded">{props.count}</Chip>
    </div>
)

interface Props {
    categories: CollectionEntry<"categories">[]
    categoriesCounts: Record<string, number>
    posts: CollectionEntry<"posts">[]
    defaultCategory: string
}

export default function Categories (props: Props) {
    return (
        <div className="max-w-[1536px] mx-auto ">
            <Tabs defaultSelectedKey={props.defaultCategory} className="flex flex-wrap gradient-mask-r-10" color="danger" radius="full" variant="light" aria-label="Dynamic tabs" items={props.categories}>
                {(item) => {
                    return (
                        <Tab id={item.id} key={item.id} title={<TabTitle count={props.categoriesCounts[item.id]} title={item.data.name} />}>
                            <Card>
                                <CardBody className="bg-white">
                                    <div className="pt-12">
                                        <Cards posts={props.posts.filter((post) => post.data.category === item.id)} />
                                    </div>
                                </CardBody>
                            </Card>
                        </Tab>
                    )
                }}
            </Tabs>
        </div>
    )
}