import { team } from "@config/team";
import { Card, CardFooter } from "@nextui-org/react";
import { BorderBeam } from "@components/magic-ui/border-beam";
import GridPattern from "@components/magic-ui/grid-pattern";

import { cn } from "@lib/utils";
import { Fragment } from "react";

export default function TeamBlock () {
    return (
        <Fragment>
            <div className="relative grid grid-cols-2 md:grid-cols-4 max-w-screen-2xl mx-auto gap-4 my-8 z-20">
                {team.map((e, i) => (
                    <Card key={`team-${i}`} isFooterBlurred radius="lg" className="border-none" >
                        <BorderBeam borderWidth={2} />
                        <img className="object-cover h-full w-full" src={e.image} />
                        <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-tiny text-white/80 p-2">{e.name + " · " + e.job}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <GridPattern
                width={40}
                height={40}
                x={-1}
                y={-1}
                className={cn(
                "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
                )}
            />
        </Fragment>
    )
}