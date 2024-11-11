import Link from "next/link"

export default function contact(){
 return(
    <div className="flex flex-col space-y-4 h-20 bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-center font-bold text-xl h-30 p-6 text-[#E1F7F5]">Contact</h1>
        <h1 className="p=4 m-4 text-[#003C43] m-3">If you are interested in hiring, then you can surely contact me on:</h1>
        <ol>
            <li className="text-[#609BC1] font-bold bg-[#D4F6FF] font-sans md:font-serif"><Link href="https://www.linkedin.com/in/kiswaafaq?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> 1 Linkedin</Link></li>
            <li className="text-[#608BC1] font-bold bg-[#D4F6FF] font-sans md:font-serif"><Link href="kiswafaque14@gmail.com">2 Email</Link></li>
            <li className="text-[#608BC1] font-bold bg-[#D4F6FF] font-sans md:font-serif"><Link href="https://www.instagram.com/k1swa_aa?igsh=MThkZXplbHQ5YXF6cA==">3 Instagram</Link></li>
        </ol>
        <p className="test-[#4F1787] p-4 m-4">Thank you for taking the time to read my resume. I look forward to the opportunity to bring my skills and dedication to your team.</p>
        <ul className="flex space-x-10">
    <li className="text-[#133E87] font-bold bg-[#B9E5E8] font-sans hover:font-serif m-3"><Link href="/">Home</Link></li>
    <li className="text-[#133E87] font-bold bg-[#B9E5E8] font-sans hover:font-serif m-3"> <Link href="/about"> About </Link> </li>
    <li className="text-[#133E87] font-bold bg-[#B9E5E8] font-sans hover:font-serif m-3"> <Link href="/qualification">Qualifications</Link></li>
    <li className="text-[#133E87] font-bold bg-[#B9E5E8] font-sans hover:font-serif m-3"> <Link href="/contact"> Contact </Link> </li>

  </ul> 

 </div>
 )
}