import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'



const navigation = [
    { name: 'Home', href: '/#', current: false },
    { name: 'Portfolio', href: 'portfolio/#', current: true },
    // { name: 'Blog', href: '/#', current: false },
    // { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure
            as="nav"
            className="relative var(--background) after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
        ><nav className="flex justify-between items-center p-4">
            <div className="flex space-x-4">
                <div className="col-span-4 sm:col-span-12 text-8xl font-bold">
                    Kelso du Mez
                </div>
            </div>
            <div className="flex space-x-4">
                <div>
                    About Me
                </div>
            </div>
        </nav>
        </Disclosure>
    )
}
