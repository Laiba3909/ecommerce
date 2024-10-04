import Link from "next/link"
export default function contact(){
     const phoneNumber = '923242288404'
  return(
   
    <div>
    <div>
    <hr className="text-center w-82 md:w-96 border-amber-400 border-2  md:mx-[570px] mt-3" />
           <h1 className="font-mono text-amber-400 opacity-80 text-center text-5xl md:text-9xl">Contact</h1>
    </div >


    <div>
        <div className="w-36 h-36 md:w-52 md:h-52 mx-28 bg-gray-800 rounded-full text-white border-2 md:mx-[700px]
        md:mt-20">
       <h1 className="text-center md:mt-20  mt-12 text-white text-3xl ">25% Off</h1>
    
    <br /> <br />
       </div>
       <div>
       <ul className="text-white mx-16 md:mx-20 mt-16 md:mt-5  text-[22px] md:text-4xl">
        <li>✉ Email To Us:</li>
        <li>  <Link  href={'mailto:laibanoman135@gmail.com'}>laibanoman135@gmail.com</Link></li>
        <li>Our Friendly Team Here To Help</li>
        <br />
        <br />
        <li>📌 Location</li>
        <li>Abdul Sattar Edhi Ave, D.H.A. Phase 8 Zone C Phase 8 Defence Housing Authority, Karachi, Sindh 75500</li>
        <br />
        <li>📞 Phone</li>
        <li>Mon to Fri 5pm to 12pm</li>
        <li>+98762536637</li>
        <br />
       </ul>
       </div>
       <Link href={`https://wa.me/${phoneNumber}`} passHref>
            <button className="bg-amber-400 w-full h-10 rounded-md">
         Get In Touch
          </button>
    </Link>
    </div>

    </div>
  )
}