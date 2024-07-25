"use client"
import Link from "next/link"
export default function Header() {
    return (
        <header >
            <div className="flex flex-row justify-end gap-x-9 text-base py-6">
                <Link href="#" className="hover:cursor-pointer hover:text-pink-700">_about</Link>
                <div className=" cursor-pointer hover:text-pink-700"><a href="#skills">_skills</a></div>
                <div className=" cursor-pointer hover:text-pink-700">_projects</div>
                <div className="text-xl -translate-y-1">|</div>
                <button className="before:ease relative overflow-hidden bg-pink-700 rounded-lg px-4 text-center py-1 -translate-y-1 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40" >Resume</button>
            </div>
        </header>
    )
}