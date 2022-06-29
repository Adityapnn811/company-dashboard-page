import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/dist/client/image";
import house from "../public/house.png";
import office from "../public/office.png";
import ticket from "../public/ticket.png";
import logo from "../public/logo.png";
import profile from "../public/profile.jpg";
import search from "../public/search.png";
import bell from "../public/bell.png";
import project from "../public/project.png";
import archive from "../public/archive.png";
import people from "../public/people.png";
import stack from "../public/stack.png";
import cube from "../public/cube.png";
import drone from "../public/drone.png";
import magnifyingMoney from "../public/magnifying-money.png";
import textDocument from "../public/text-document.png";
import menu from "../public/menu.png";

const sideBarItems = [
    {
        href: '/unusedPages',
        imgLink: house
    },
    {
        href: '/unusedPages',
        imgLink: ticket   
    },
    {
        href: '/unusedPages',
        imgLink: project 
    },
    {
        href: '/unusedPages',
        imgLink: archive 
    },
    {
        href: '/',
        imgLink: office 
    },
    {
        href: '/unusedPages',
        imgLink: people 
    },
    {
        href: '/unusedPages',
        imgLink: stack 
    },
    {
        href: '/unusedPages',
        imgLink: cube 
    },
    {
        href: '/unusedPages',
        imgLink: drone 
    },
    {
        href: '/unusedPages',
        imgLink: magnifyingMoney 
    },
    {
        href: '/unusedPages',
        imgLink: textDocument 
    },
]

function LayoutMobile({children}){
    // bedanya sidebar pake drawer, trus nama kasi di sidebar, topbar cuma ada search dan bell
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const handleMenuClick = () => setIsOpen(!isOpen);
    return (
    <div className="min-h-screen flex flex-col bg-primary">
        <div className="flex flex-row flex-1 z-0">
            <div className="bg-primary w-full h-14 pt-5 fixed flex flex-row z-10">
                <div className="w-full flex flex-row mx-5 items-center content-center">
                    <div className="w-1/2 items-center">
                        <button onClick={handleMenuClick}>
                            <Image src={menu} width={27} height={27}></Image>
                        </button>
                    </div>
                    <div className="w-1/2 flex flex-row justify-end items-center">
                        <div className="mr-4">
                            <button>
                                <Image src={search} width={30} height={30}></Image>
                            </button>
                        </div>
                        <div className="mr-2">
                            <button>
                                <Image src={bell} width={30} height={30}></Image>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <main className="flex-1">
                <div className="mt-20 ml-10 z-0">
                    <p className="text-gray-400 mt-5 text-base"><a className="hover:cursor-pointer hover:underline">Perusahaan</a> &gt; <strong className="text-gray-700">Mitramas Infosys Global</strong></p>
                </div>
                <div className="z-0">
                    {children}
                </div>
            </main>
            {/* Open atau tidak tergantung state */}
            {isOpen ? (
                <aside className="bg-white border-r-2 w-40 fixed h-full">
                <button onClick={handleMenuClick}>
                <div className="font-black flex flex-row items-start content-start ml-3 my-5">
                    &lt; Close
                </div>
                </button>
                <nav className="flex flex-col items-center justify-center w-full mt-6">
                    <div className="self-center">
                        <Image className="rounded-full" src={profile} width={50} height={50} ></Image>  
                    </div>
                    <div className="font-black flex flex-row items-center content-center mb-8">
                        John Doe
                    </div>
                    <ul>
                    {sideBarItems.map(({ href, imgLink }) => (
                        <li key={imgLink}>
                        <Link href={href}>
                            <a
                            className={`flex p-2 rounded hover:bg-primary hover:border-l-4 hover:border-secondary cursor-pointer ${
                                router.asPath === href && 'bg-primary border-l-4 border-l-secondary'
                            }`}
                            >
                            <Image src={imgLink} width={35} height={35}></Image>
                            </a>
                        </Link>
                        </li>
                    ))}
                    </ul>
                </nav>
                </aside>
            ):(
                <></>
            )}
        </div>
    </div>
    );
}

function Layout({ children }) {
    const router = useRouter();
    let count = 0
    const iconSize = 30
    return (
    <div className="min-h-screen flex flex-col bg-primary">
        <div className="flex flex-row flex-1 z-0">
            <div className="bg-primary w-full h-12 fixed flex flex-row pt-4 pl-20 z-10">
                <div className="ml-10 w-3/4">
                    <p className="text-gray-400"><a className="hover:cursor-pointer hover:underline">Perusahaan</a> &gt; <strong className="text-gray-700">Mitramas Infosys Global</strong></p>
                </div>
                <div className="w-1/4 flex flex-row justify-end mr-8 items-center">
                    <div className="mr-2">
                        <button>
                            <Image src={search} width={30} height={30}></Image>
                        </button>
                    </div>
                    <div className="mr-5">
                        <button>
                            <Image src={bell} width={30} height={30}></Image>
                        </button>
                    </div>
                    <div className="px-3 font-black flex flex-row items-center content-center">
                        <div className="mr-5 self-center">
                            <Image className="rounded-full" src={profile} width={30} height={30} ></Image>  
                        </div>
                        John Doe
                    </div>
                </div>
            </div>
            <main className="flex-1">
                {children}
            </main>
            <aside className="bg-white border-r-2 w-20 fixed h-full z-20">
            <nav className="flex flex-col items-center justify-center w-full">
                <li className="mb-8">
                    <Image src={logo} width={50} height={50}></Image>
                </li>
                <ul>
                {sideBarItems.map(({ href, imgLink }) => (
                    count++,
                    <li key={imgLink}>
                    <Link href={href}>
                    {count % 5 === 0 ?
                        <a
                        className={`flex p-2 rounded hover:bg-primary hover:border-l-4 hover:border-secondary cursor-pointer mb-10 ${
                            router.asPath === href && 'bg-primary border-l-4 border-l-secondary'
                        }`}
                        >
                        <Image src={imgLink} width={iconSize} height={iconSize}></Image>
                        </a>
                    :
                        <a
                        className={`flex p-2 rounded hover:bg-primary hover:border-l-4 hover:border-secondary cursor-pointer ${
                            router.asPath === href && 'bg-primary border-l-4 border-l-secondary'
                        }`}
                        >
                        <Image src={imgLink} width={iconSize} height={iconSize}></Image>
                        </a>
                    }
                    </Link>
                    </li>
                ))}
                </ul>
            </nav>
            </aside>
        </div>
    </div>
    );
  }

export {Layout, LayoutMobile};