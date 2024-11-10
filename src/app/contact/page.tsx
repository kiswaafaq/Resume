import Link from "next/link"

export default function contact(){
 return(
    <div className="flex flex-col space-y-4">
        <h1 className="text-center font-bold text-xl bg-[#CBDCEB] h-30">Contact</h1>
        <h1 className="p=4 m-4 text-[#4F1787]">If you are interested in hiring, then you can surely contact me on:</h1>
        <ol>
            <li className="text-[#608BC1] font-bold bg-[#D4F6FF]"><Link href="https://www.linkedin.com/in/kiswaafaq?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"> 1 Linkedin</Link></li>
            <li className="text-[#608BC1] font-bold bg-[#D4F6FF]"><Link href="kiswafaque14@gmail.com">2 Email</Link></li>
            <li className="text-[#608BC1] font-bold bg-[#D4F6FF]"><Link href="https://www.instagram.com/k1swa_aa?igsh=MThkZXplbHQ5YXF6cA==">3 Instagram</Link></li>
        </ol>
        <p className="test-[#4F1787] p-4 m-4">Thanks for taking out the time to view my resume.</p>
        <ul className="flex space-x-10">
    <li className="text-[#133E87] font-bold bg-[#B9E5E8]"><Link href="/">Home</Link></li>
    <li className="text-[#133E87] font-bold bg-[#B9E5E8]"> <Link href="/about"> About </Link> </li>
    <li className="text-[#133E87] font-bold bg-[#B9E5E8]"> <Link href="/qualification">Qualifications</Link></li>
    <li className="text-[#133E87] font-bold bg-[#B9E5E8]"> <Link href="/contact"> Contact </Link> </li>

  </ul> 

 </div>
 )
}