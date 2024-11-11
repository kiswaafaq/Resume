import Link from "next/link"

export default function Qualification(){
 return(
    <div className="flex flex-col space-y-4 h-20 bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-center font-bold text-xl p-6 text-[#E1F7F5]">Qualifications</h1>
        <p className="text-left font-serif p-4 m-4">Completed foundational schooling from The Mama Parsi Girls Secondary School, renowned for its rigorous academic standards and commitment to excellence. 
            Currently pursuing higher studies at DCW College, where I am actively developing skills in web development, coding, and digital design. 
            My educational journey has instilled discipline, a solid academic grounding, and a continuous drive to excel and adapt in a rapidly evolving field. 
            Equipped with a blend of technical know-how and academic rigor, I am prepared to contribute effectively to professional challenges.</p>
            <ul className="flex space-x-10">
    <li className="text-[#4A628A] font-bold font-sans hover:font-serif m-3 bg-[#B9E5E8]"><Link href="/">Home</Link></li>
    <li className="text-[#4A628A] font-bold font-sans hover:font-serif m-3 bg-[#B9E5E8]"> <Link href="/about"> About </Link> </li>
    <li className="text-[#4A628A] font-bold font-sans hover:font-serif m-3 bg-[#B9E5E8]"> <Link href="/qualification">Qualifications</Link></li>
    <li className="text-[#4A628A] font-bold font-sans hover:font-serif m-3 bg-[#B9E5E8]"> <Link href="/contact"> Contact </Link> </li>
            </ul> 
  </div>
 )
}