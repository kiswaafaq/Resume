import Link from "next/link"

export default function about(){
 return(
    <div className="flex flex-col space-y-4 h-20 bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-center font-bold text-xl p-6 text-[#E1F7F5]">About me</h1>
        <p className="text-left font-serif p-3 margin-4">An active student known for balancing academic excellence with diverse interests, including web development and sports, throughout both school and college. 
            Served as the Treasurer Secretary at The Mama Parsi Girls Secondary School, showcasing leadership and organizational skills early on. 
            Currently expanding my technical expertise in HTML, CSS, TypeScript, JavaScript, and Tailwind CSS, alongside a solid foundation in Word, Excel, and PowerPoint. 
            Driven to apply my well-rounded skill set and passion for technology in a dynamic environment.</p>
            <h2 className="font-bold text-xl  font-sans hover:font-serif text-lg p-3 m-3">Extra curricular</h2>
            <p className="text-left font-serif p-3 m-4">Actively engaged in a variety of extracurricular activities, with numerous certificates in spelling bees, essay writing competitions, and Model United Nations (MUNs).
                 An accomplished equestrian with two horses, I enjoy riding and playing polo. 
                 I am also a strong swimmer, having taken lessons to refine my skills, and I have developed a passion for makeup artistry through formal training. 
                My wide-ranging interests have enriched my personal growth and fostered a well-rounded skill set.</p>
                <ul className="flex space-x-10">
    <li className="text-[#133E87] font-bold bg-[#B9E5E8] font-sans hover:font-serif m-3"><Link href="/">Home</Link></li>
    <li className="text-[#133E87] font-bold bg-[#B9E5E8] font-sans hover:font-serif m-3"> <Link href="/about"> About </Link> </li>
    <li className="text-[#133E87] font-bold bg-[#B9E5E8] font-sans hover:font-serif m-3"> <Link href="/qualification">Qualifications</Link></li>
    <li className="text-[#133E87] font-bold bg-[#B9E5E8] font-sans hover:font-serif m-3"> <Link href="/contact"> Contact </Link> </li>

  </ul> 
  </div>
 )
}