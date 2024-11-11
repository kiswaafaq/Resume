import Image from "next/image";
import Link from "next/link";
import profile from "../../image/profile.jpeg"

export default function Home(){
  return(
    <div className="flex flex-col space-y-4">
       <h1 className="font-bold bg-[#DFF2EB] text-[#4A628A]  text-2xl italic text-center leading-loose ">Kiswa Afaq</h1>
       <Image src={profile} width={200} height={200} alt="Profile Picture" />
      <p className=" text-[#4A628A] text-xl italic underline p-3 m-6 "> Student </p>
  <p className="text-left italic p-3 m-3">Motivated college student with a strong foundation in web development, currently working on a static resume builder project using CSS, JavaScript, TypeScript, and Tailwind CSS. 
    I am passionate about learning new technologies and continuously enhancing my skills, with an eye on creating functional, aesthetically pleasing web experiences.
     Known for my attention to detail and dedication, I am eager to bring fresh ideas and a strong work ethic to a dynamic development team. 
    Proficient in VS Code and driven to succeed in the IT field. </p>
    <ul className="flex space-x-10">
    <li className="text-[#133E87] font-bold bg-[#B9E5E8] font-sans hover:font-serif m-3 "><Link href="/">Home</Link></li>
    <li className="text-[#133E87] font-bold bg-[#B9E5E8] font-sans hover:font-serif m-3 "> <Link href="/about"> About </Link> </li>
    <li className="text-[#133E87] font-bold bg-[#B9E5E8] font-sans hover:font-serif m-3 "> <Link href="/qualification">Qualifications</Link></li>
    <li className="text-[#133E87] font-bold bg-[#B9E5E8] font-sans hover:font-serif m-3 "> <Link href="/contact"> Contact </Link> </li>
 </ul> 
     </div>
  );  
}
