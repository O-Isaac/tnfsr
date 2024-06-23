interface Props {
    href: string
    title: string
}

export default function CTA(props: Props) {
    return (
        <div className="flex mx-auto my-12">
            <div className="relative inline-flex group">
                <div
                    className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r animate-gradient-x from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
                <a href={props.href} title="Get quote now"
                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    role="button">{props.title}
                </a>
            </div>
        </div>
    )
}