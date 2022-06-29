import { useState } from "react";
import cover from '../public/cover.jpg'
import profilePic from '../public/profilePic.jpg'
import edit from '../public/edit.png'
import internet from '../public/internet.png'
import mail from '../public/mail.png'
import phone from '../public/phone.png'
import trash from '../public/trash.png'
import Image from "next/image";

function ProfileCard({className}){
    const namaPerusahaan = "Mitramas Infosys Global"
    const [status, setStatus] = useState(true)
    const handleSetStatus = () => {
        setStatus(!status)
    }
    const data = [
        {
            title:"Status Perusahaan",
            data: status
        },
        {
            title:"Singkatan",
            data: "MIG"
        },
        {
            title:"Alamat Perusahaan",
            data: "Jl. Tebet Raya No.42, Jakarta Selatan"
        },
        {
            title:"Penanggung Jawab (PIC)",
            data: "John Doe"
        },
        {
            title:"Tanggal PKP",
            data: "03 Maret 2011"
        },
        {
            title:"E-mail",
            data: "MIG@mitrasolusi.group"
        },
        {
            title:"No. Telp",
            data: "021-5678-1234"
        },
        {
            title:"Situs Web",
            data: "mitramas.com"
        },
    ]

    return (
        <div className={className ? className : "bg-black flex w-full h-full"}>
            <div className="w-full bg-[url('../public/cover.jpg')] justify-center flex flex-1">
                <Image src={profilePic} width={100} height={100} className="rounded-full"/>
            </div>
            <div className="justify-center items-center flex flex-col my-8">
                <h1 className="font-bold text-lg mb-2">{namaPerusahaan}</h1>
                <p className="text-slate-400 mb-4">Layanan IT</p>
                <p className="text-green-500"><a className="hover:cursor-pointer"><Image src={edit} width={10} height={10}/> Sunting profil</a></p>
            </div>
            <ul>
                {data.map(({title, data}) => {
                    if (title === "Status Perusahaan"){
                        return (
                            <li className="flex flex-col justify-left items-start ml-3 mb-3">
                                <p className="text-slate-500 mb-1">{title}</p>
                                <div className="flex flex-row w-full">
                                    <p className={`text-tertiary font-bold w-3/4 ${data ? "text-tertiary" : "text-red-900"}`}>{data ? "Aktif" : "Tidak Aktif"}</p>
                                    <div className="w-1/4 self-end">
                                        <label for="checked-toggle" class="inline-flex relative items-center cursor-pointer">
                                            {data ? <input type="checkbox" value={data} onClick={handleSetStatus} id="checked-toggle" class="sr-only peer" checked/> : 
                                            <input type="checkbox" value={data} onClick={handleSetStatus} id="checked-toggle" class="sr-only peer"/>}
                                            <input type="checkbox" value={data} onClick={handleSetStatus} id="checked-toggle" class="sr-only peer"/>
                                            <div class="w-11 h-6 bg-tertiary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-tertiary"></div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                        )
                    } else if (title === "E-mail"){
                        return (
                            <li className="flex flex-col justify-left items-start mb-3 ml-3">
                                <p className="text-slate-500 mb-1">{title}</p>
                                <p className="text-tertiary underline"><a><Image src={mail} width={15} height={15} /> {data}</a></p>
                            </li>
                        )
                    } else if (title === "No. Telp"){
                        return (
                            <li className="flex flex-col justify-left items-start mb-3 ml-3">
                                <p className="text-slate-500 mb-1">{title}</p>
                                <p className="text-tertiary underline"><a><Image src={phone} width={15} height={15} /> {data}</a></p>
                            </li>
                        )
                    } else if (title === "Situs Web"){
                        return (
                            <li className="flex flex-col justify-left items-start mb-3 ml-3">
                                <p className="text-slate-500 mb-1">{title}</p>
                                <p className="text-tertiary underline"><a href={data}><Image src={internet} width={15} height={15} /> {data}</a></p>
                            </li>
                        )
                    }
                    return (
                        <li className="flex flex-col justify-left items-start mb-3 ml-3">
                            <p className="text-slate-500 mb-1">{title}</p>
                            <p className="text-black">{data}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

function Card({className, children, title, button, buttonClassName}){
    return (
        <div className={className ? `p-4 drop-shadow rounded-md ${className}` : "bg-black flex w-full"}>
            <div className="flex flex-row ml-3 my-4">
                <div className="flex flex-1 justify-start mb-3">
                    {title ? <h1 className="font-bold text-xl w-full">{title}</h1> : <h1 className="font-bold text-lg mb-2">Judul</h1>}
                </div>
                <div className="flex flex-1 justify-end pr-3">
                {
                    button ? 
                        <button className={buttonClassName}>
                            {button}
                        </button>
                    :
                    <></>
                }
                </div>
            </div>
            {children}
        </div>
    )
}

function SmallNumberCard({className, icon, title, Number, justifyRight = false, textColor}){
    let justify = justifyRight ? "justify-end" : "justify-start"
    let textAlign = justifyRight ? "text-right" : "text-left"
    return(
        <div className={className ? `p-4 flex flex-row ${className}` : "bg-black flex w-full"}>
            <div className="w-1/4 align-center">
                {icon ? <Image src={icon} width={50} height={60} className="mr-2"/> : <>Icon</>}
            </div>
            <div className={`${justify} flex flex-1 grid grid-col-2 w-auto`}>
                <h1 className={`text-4xl ${textColor} font-bold ${textAlign}`}>{Number}</h1>
                <p className={`text-sm ${textColor} ${textAlign}`}>{title}</p>
            </div>
        </div>
    )
}

function BankCard({className, icon, bankName, cardNumber, cardName, currency, width, height, bankTextSize, textSize}){
    return (
        <div className={className ? `p-4 flex flex-row ${className}` : "bg-white flex w-full m-3 pr-5"}>
            <div className="align-center">
                {icon ? <Image src={icon} width={width} height={height} className="mr-2 rounded-lg"/> : <>Icon</>}
            </div>
            <div className={`ml-4 flex flex-1 flex-col content-between w-auto`}>
                <div className="flex flex-row flex-1 w-full justify-between">
                    <h1 className={` ${bankTextSize} font-bold`}>{bankName}</h1>
                    <div>
                        <button className="mr-2"><Image src={edit} width={20} height={20}/></button>
                        <button><Image src={trash} width={20} height={20}/></button>
                    </div>
                </div>
                <div className="flex flex-col content-between">
                    <p className={` ${textSize} text-gray-500`}>{cardNumber} - {cardName}</p>
                    <p className={` ${textSize} text-gray-500`}>{currency}</p>
                </div>
            </div>
        </div>
    )
}

function LogCard({text, hari, jam, className}){
    return (
        <div className={className ? `p-4 ${className}` : "bg-white flex w-full m-3 pr-5"}>
            <div>
                <h1 className="text-xl text-black mb-2">{text}</h1>
            </div>
            <div>
                <p className="text-gray-500">{hari}, {jam}</p>
            </div>
        </div>
    )
}

export {ProfileCard, Card, SmallNumberCard, BankCard, LogCard}