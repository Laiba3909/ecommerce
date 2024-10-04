import Image from "next/image";
import hero from "../public/hero.webp";
import Link from "next/link";
export default function Home() {
  const phoneNumber = '923242288404';
  return (
    <div>
      <div className="flex justify-between cursor-pointer">
        <div>
          <h1 className="text-zinc-100 md:mx-40 mx-4 my-12 lg:my-32 text-6xl font-mono font-extrabold">
            Enjoy Our <br /> Delicious Meal
          </h1>
          <p className="text-zinc-100 mx-1 md:mx-40 -my-12 lg:-my-32 text-xl ">
            Savor flavourful delicious dishes 😋
            <br />
            Join us for a great time!
            <br />
            Indulge in our signature dishes &
            <br />
            enjoy warm atmosphere.
            <br />
            Experience delightful flavors
            <br />
            that will leave you wanting more.
          </p>
          <Link href={`https://wa.me/${phoneNumber}`} passHref>
            <button className="bg-amber-400 min-w-40 mt-14 md:mt-36 h-10 rounded-md my-44 md:mx-48 mx-20 text-zinc-100 text-lg font-semibold">
              Book a Table
            </button>
          </Link>
        </div>
        <div className="mx-10 m-16  lg:mt-8 xl:mt-20">
          <Image
            className="lg:flex sm:hidden"
            src={hero}
            alt="Delicious Meal"
            width={450}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
