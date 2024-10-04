import Image from "next/image";
import React from "react";
import back from "../../public/aboutback.jpg";
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
import Link from "next/link";

export default function AboutUs() {
  const phoneNumber = '923242288404'
  return (
    <div>
      <main>
        <div className="hidden md:flex md:w-full md:overflow-hidden md:h-[500px]">
          <Image layout="responsive" src={back} alt="Loading..." />
        </div>
      </main>

      <div className="flex flex-col items-center mt-10">
        <h1 className="text-amber-400 opacity-70 text-center text-5xl">
          Welcome to Charcoal Grill
        </h1>
        <p className="text-white text-center mt-4 max-w-prose px-4">
          Welcome to Charcoal Grill, your new favorite spot for delicious grilled delights! At Charcoal Grill, we focus on bringing you the best flavors with our carefully crafted dishes. Our new branch has quickly gained popularity, thanks to our commitment to quality and customer satisfaction.
        </p>

        <h2 className="text-white text-center text-3xl mt-10">What Makes Us Special</h2>
        <hr className="border-white w-1/2 my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-amber-400">Fresh Ingredients</h3>
            <p className="text-white">We use locally sourced meats and produce.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-amber-400">Unique Flavors</h3>
            <p className="text-white">Our signature marinades make every meal unforgettable.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-amber-400">Inviting Atmosphere</h3>
            <p className="text-white">Enjoy a cozy dining experience perfect for any occasion.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <h3 className="text-amber-400">Exceptional Service</h3>
            <p className="text-white">Our friendly staff is here to ensure you have a great time.</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
      <h2 className="text-white text-center text-3xl mt-10">Our Famous Meals</h2>
      <hr className="border-white w-1/2 my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4">
      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item1}
        alt=""
        />
        <h2 className="text-white text-2xl  text-center mt-4">Chicken Grilled Stake</h2>
        <p className="text-white text-center text-2xl">12$</p>
      </div>

      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item2}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Beef Grilled Stake</h2>
        <p className="text-white text-center text-2xl">16$</p>
      </div>

      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item3}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Grilled Fish</h2>
        <p className="text-white text-center text-2xl">34$</p>
      </div>
      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item4}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Mix Grilled Feast</h2>
        <p className="text-white text-center text-2xl">55$</p>
      </div>
      </div>
      </div>

      <div className="flex flex-col items-center mt-10">
      <h2 className="text-white text-center text-3xl mt-10">Our Famous Veg Meals</h2>
      <hr className="border-white w-1/2 my-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4">
      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item5}
        alt=""
        />
        <h2 className="text-white text-2xl  text-center mt-4">Smocky Grilled Corn</h2>
        <p className="text-white text-center text-2xl">10$</p>
      </div>

      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item6}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Grilled Paneer Tikka</h2>
        <p className="text-white text-center text-2xl">16$</p>
      </div>

      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item7}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Smocky Grilled Vegetables</h2>
        <p className="text-white text-center text-2xl">30$</p>
      </div>
      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item8}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Zesty Grilled Bell Peppers</h2>
        <p className="text-white text-center text-2xl">35$</p>
      </div>
      </div>
    </div>
 


    
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-white text-center text-3xl mt-10">Our Famous Mojitos</h2>
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
      </div>

      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item10}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Strawberry Mojito</h2>
        <p className="text-white text-center text-2xl">12$</p>
      </div>

      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item11}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Sweet Melon Mojito</h2>
        <p className="text-white text-center text-2xl">10$</p>
     </div>
      <div className="w-80 ml-3 rounded-lg border-8 border-gray-800">
        <Image
        className="w-80 h-52"
        src={item12}
        alt=""
        />
        <h2 className="text-white text-2xl mt-9 text-center">Combo Deal</h2>
        <p className="text-white text-center text-2xl">29.30$</p>
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
    </div>
  );
}
