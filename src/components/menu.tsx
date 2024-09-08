import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { useState } from "react";
import { NavbarLinks } from "@config/navigation";

export function Brand () {
    return (
        <NavbarContent justify="start">
            <NavbarBrand>
                <Link  className="text-white" href="/">
                    <img src="/assets/logo.svg" height={64} width={64}  />
                    <p className="text-inherit ml-4 text-2xl font-bold">TNFSR <span className="text-red-500 mt-4">•</span></p>
                </Link>
            </NavbarBrand>
        </NavbarContent>
    )
}

interface PropsNavigation {
    menuItems: typeof NavbarLinks
}

export function Navigation (props: PropsNavigation) {
    return (
        <NavbarContent className="hidden md:flex gap-4" justify="end">
            {props.menuItems.map((item, index) => (
                <NavbarItem key={`${item.name}-${index}-nav`}>
                    <Link size="lg" color="foreground" href={item.href}>
                        {item.name}
                    </Link>
                </NavbarItem>
            ))}
        </NavbarContent>
    )
}

interface PropsNavigationButtonMobile {
    isMenuOpen: boolean
}

export function NavigationButtonMobile (props: PropsNavigationButtonMobile) {
    return (
        <NavbarContent className="md:hidden" justify="end">
            <NavbarMenuToggle aria-label={props.isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>
    )
}

interface NavigationMobile {
    menuItems: typeof NavbarLinks
}

export function NavigationMobile (props: NavigationMobile) {
    return (
        <NavbarMenu className="pt-14">
            {props.menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item.name}-${index}-mobile`}>
                    <Link className="text-xl text-white hover:text-red-500" href={item.href}>{item.name}</Link>
                </NavbarMenuItem>
            ))}
        </NavbarMenu>
    )
}

export default function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar className="p-4" maxWidth="2xl" onMenuOpenChange={setIsMenuOpen} isBordered>
            <Brand />
            <Navigation menuItems={NavbarLinks} />            
            <NavigationButtonMobile isMenuOpen={isMenuOpen} />
            <NavigationMobile menuItems={NavbarLinks} />
        </Navbar>
    )
}