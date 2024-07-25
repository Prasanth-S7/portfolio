import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiRecoil } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaCloudflare } from "react-icons/fa";
import { SiTurborepo } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import ButtonGrid from "./buttonGrid";
export default function Skills() {
  return (
    <div id="skills" className="font-mono mt-3">
      <div className="mb-3">_Skills 💪</div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 pb-6 buttons-container gap-x-9 gap-y-5">
        <ButtonGrid name="React"><FaReact color="#61dafb " size={27}></FaReact></ButtonGrid>
        <ButtonGrid name="Tailwind"><RiTailwindCssFill color="#61dafb " size={27}></RiTailwindCssFill></ButtonGrid>
        <ButtonGrid name="Next.js"><RiNextjsFill color="#ffffff " size={27}></RiNextjsFill></ButtonGrid>
        <ButtonGrid name="Javascript"><IoLogoJavascript color="#ffff00 " size={27}></IoLogoJavascript></ButtonGrid>
        <ButtonGrid name="Node.js"><FaNodeJs color="#86b323 " size={27}></FaNodeJs></ButtonGrid>
        <ButtonGrid name="Typescript"><SiTypescript color="#3178c6 " size={27}></SiTypescript></ButtonGrid>
        <ButtonGrid name="Express.js"><SiExpress color="#ffffff " size={27}></SiExpress></ButtonGrid>
        <ButtonGrid name="Mongodb"><SiMongodb color="#0ea44c " size={27}></SiMongodb></ButtonGrid>
        <ButtonGrid name="PostgreSQL"><BiLogoPostgresql color="#31658f " size={27}></BiLogoPostgresql></ButtonGrid>
        <ButtonGrid name="Prisma"><SiPrisma  size={27}></SiPrisma></ButtonGrid>
        <ButtonGrid name="Shadcn"><SiShadcnui color="#ffffff" size={27}></SiShadcnui></ButtonGrid>
        <ButtonGrid name="Docker"><FaDocker color="#61dafb " size={27}></FaDocker></ButtonGrid>
        <ButtonGrid name="Git"><FaGithub size={27}></FaGithub></ButtonGrid>
        <ButtonGrid name="Recoil"><SiRecoil color="#3578e5" size={27}></SiRecoil></ButtonGrid>
        <ButtonGrid name="Java"><FaJava  size={27}></FaJava></ButtonGrid>
        <ButtonGrid name="Cloudflare"><FaCloudflare color="#f5801f " size={27}></FaCloudflare></ButtonGrid>
        <ButtonGrid name="Ubuntu"><FaUbuntu color="#dc4814 " size={27}></FaUbuntu></ButtonGrid>
        <ButtonGrid name="VS Code"><VscVscode color="#61dafb " size={27}></VscVscode></ButtonGrid>
        <ButtonGrid name="Turbo"><SiTurborepo  size={27}></SiTurborepo></ButtonGrid>
        <ButtonGrid name="Postman"><SiPostman color="#ee5822 " size={27}></SiPostman></ButtonGrid>
      </div>
    </div>
  );
}
