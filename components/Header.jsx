import Image from "next/image"
import {
    GlobeIcon,
    MenuIcon,
    UserCircleIcon,
    SearchIcon,
    UsersIcon
} from "@heroicons/react/solid"


function Header() {
    return (
        <header className="sticky top-0 z-50 
        grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div className="relative flex flex-center h-10 cursor-pointer my-auto">
                <Image
                  src="https://i.goopics.net/5zyj2a.png"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
            </div>

            {/* Middle */}
            <div className="flex items-center md:border-2 rounded-full py-2 text-sm placeholder-gray-600">
                 <input className="md:shadow-sm flex-grow pl-5 bg-transparent outline-none" type="text" placeholder="Start your search" />
                 <SearchIcon className="md:mx-2 hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer"/>

            </div>

            {/* Right */}
            <div className="flex items-center justify-end space-x-4 text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a Host</p>
                <GlobeIcon className="h-6"/>
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
    )
}

export default Header