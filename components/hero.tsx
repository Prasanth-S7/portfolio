"use client"
import UchihaItachi from "@/public/UchihaItachi.webp"
import Image from "next/image"
export default function Hero(){
    return(
        <div className="flex flex-row justify-center items-center text-center py-8">
        <div className="flex flex-col  px-7">
          <div className="flex justify-center mb-5">
            <Image className="h-[10rem] w-[10rem] rounded-full" src={UchihaItachi} alt="profile-photo"></Image>
          </div>
          <div className="font-mono font-bold tracking-tighter display:inline-block">
            _hello world, <span className="text-pink-700">I'm Prasanth</span> 👋
          </div>
          <div className="lg:text-9xl sm:text-7xl xs:text-5xl text-5xl mb-3 font-mono tracking-tighter font-extrabold ">Full Stack</div>
          <div className="lg:text-9xl sm:text-7xl xs:text-5xl text-5xl font-mono tracking-tighter font-extrabold -translate-y-6">Web Developer</div>
          <div className="text-center text-md tracking-tighter font-mono px-[50px]">As a passionate and dedicated <span className="font-extrabold text-pink-700">Full-Stack Developer</span>, I specialize in creating robust and scalable web applications. With a deep understanding of both front-end and back-end technologies, I bridge the gap between design and functionality, ensuring seamless user experiences and efficient, high-performing systems.</div>
          <div><button className="mt-4  before:ease relative overflow-hidden bg-pink-700 rounded-lg px-3  text-center py-2 -translate-y-1 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">Reach Out</button></div>
        </div>
      </div>
    )
}