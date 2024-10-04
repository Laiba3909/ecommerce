import Image from "next/image";
import React from "react";
import item1 from "../../public/item1.webp";
import item2 from "../../public/item2.jpg";
import item3 from "../../public/item3.jpg";
import item4 from "../../public/item4.jpg";
import item5 from "../../public/item5.jpg";
import item6 from "../../public/item6.jpg";
import item7 from "../../public/item7.jpg";
import item8 from "../../public/item8.webp";
import item9 from "../../public/item9.webp";
import item10 from "../../public/item10.jpg";
import item11 from "../../public/item11.webp";
import item12 from "../../public/item12.jpeg";
import item13 from "../../public/item13.avif";
import item14 from "../../public/item14.jpg";
import item15 from "../../public/item15.jpg";
import item16 from "../../public/item16.webp";
import item17 from '../../public/item17.webp'
import item18 from '../../public/item18.avif'
import Link from "next/link";

export default function menu(){
    const phoneNumber = '923242288404'
    return( 
    <main>
        <div>
        <hr className="text-center w-96 border-amber-400 border-2 mx-[570px] mt-3" />
               <h1 className="font-mono text-amber-400 opacity-80 text-center text-9xl">Menu</h1>
             
        </div >
        <div className="flex flex-col items-center mt-10">
      <h2 className="text-white text-center text-3xl mt-10">Chicken Steakes</h2>
      <hr className="border-white w-1/2 my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4">
      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item1}
        alt=""
        />
        <h2 className="text-white text-2xl  text-center mt-4">Chicken Grilled Steak</h2>
        <p className="text-white text-center text-2xl">12$</p>
        <p className="text-center text-xl">⭐⭐⭐⭐⭐</p>
      </div>

      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item13}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Butter Chicken Steake</h2>
        <p className="text-white text-center text-2xl">16$</p>
        <p className="text-center text-white text-xl">⭐⭐⭐⭐☆</p>
      </div>

      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item14}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Grilled Chicken B.BQ</h2>
        <p className="text-white text-center text-2xl">15$</p>
        <p className="text-center text-xl">⭐⭐⭐⭐⭐</p>
      </div>
      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item15}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Grilled Lemon Chicken</h2>
        <p className="text-white text-center text-2xl">16$</p>
        <p className="text-center text-white text-xl">⭐⭐⭐☆☆</p>
      </div>
      </div>
      </div>

      <div className="flex flex-col items-center mt-10">
      <h2 className="text-white text-center text-3xl mt-10">Beef Steakes</h2>
      <hr className="border-white w-1/2 my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4">
      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item2}
        alt=""
        />
        <h2 className="text-white text-2xl  text-center mt-4">Grilled Beef Steake</h2>
        <p className="text-white text-center text-2xl">10$</p>
        <p className="text-center text-white text-xl">⭐⭐⭐⭐⭐</p>
      </div>

      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item16}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Venison Haunch Steak
        </h2>
        <p className="text-white text-center text-2xl">16$</p>
        <p className="text-center text-white text-xl">⭐⭐⭐⭐⭐</p>
      </div>

      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item17}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Hot & Spicy Steak</h2>
        <p className="text-white text-center text-2xl">20$</p>
        <p className="text-center text-white text-xl">⭐⭐⭐⭐☆</p>
      </div>
      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item18}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Beef Steak With White Sauce</h2>
        <p className="text-white text-center text-2xl">35$</p>
        <p className="text-center text-white text-xl">⭐⭐☆☆☆</p>
      </div>
      </div>
    </div>
 


    <div className="flex flex-col items-center mt-10">
      <h2 className="text-white text-center text-3xl mt-10">Grilled Vegetables</h2>
      <hr className="border-white w-1/2 my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4">
      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item5}
        alt=""
        />
        <h2 className="text-white text-2xl  text-center mt-4">Grilled Smocky Corns</h2>
        <p className="text-white text-center text-2xl">8.66$</p>
        <p className="text-center text-white text-xl">⭐⭐⭐⭐☆</p>
      </div>

      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item6}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Grilled Paneer Tikka
        </h2>
        <p className="text-white text-center text-2xl">13.76$</p>
        <p className="text-center text-white text-xl">⭐⭐⭐⭐⭐</p>
      </div>

      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item7}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Mix Grilled Vegies</h2>
        <p className="text-white text-center text-2xl">33.45$</p>
        <p className="text-center text-white text-xl">⭐⭐⭐⭐⭐</p>
      </div>
      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item8}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Stuffed Grilled Bell Pepper</h2>
        <p className="text-white text-center text-2xl">35$</p>
        <p className="text-center text-white text-xl">⭐⭐⭐⭐☆</p>
      </div>
      </div>
    </div>
 

    
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-white text-center text-3xl mt-10"> Mojitos</h2>
      <hr className="border-white w-1/2 my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4">
      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item9}
        alt=""
        />
        <h2 className="text-white text-2xl  text-center mt-4">Tangy Lemon Mojito</h2>
        <p className="text-white text-center text-2xl">8$</p>
        <p className="text-center text-white text-xl">⭐⭐⭐⭐☆</p>
      </div>

      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item10}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Strawberry Mojito</h2>
        <p className="text-white text-center text-2xl">12$</p>
        <p className="text-center text-white text-xl">⭐⭐⭐☆☆</p>
      </div>

      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item11}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Sweet Melon Mojito</h2>
        <p className="text-white text-center text-2xl">10$</p>
        <p className="text-center text-white text-xl">⭐⭐⭐⭐⭐</p>
     </div>
      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item12}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Combo Deal</h2>
        <p className="text-white text-center text-2xl">29.30$</p>
        <p className="text-center text-white text-xl">⭐⭐⭐⭐⭐</p>
      </div>
      </div>
    </div>
    <br /> 
    <div className="border-6 border-gray-800 ">
      <h1 className="text-white text-center text-3xl">So! What are You Waiting For Book Your Table Now</h1>
      <br />
      <Link href={`https://wa.me/${phoneNumber}`} passHref>
            <button className="bg-amber-400 w-full h-10 rounded-md">
            
            Book a Table
          </button>
    </Link>
    </div>
     </main>
)}