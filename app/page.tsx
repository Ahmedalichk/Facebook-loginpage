import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      {/* left side */}
      <div className="text-3xl w-1/2 px-10">
        <Image src="/pics/fb.svg" alt="img" height={100} width={300} />
        <p className="ml-7 -mt-3">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      {/* right side */}

      <div className="bg-white flex flex-col p-5 rounded-xl w-1/3 shadow-xl relative">
        <input
          className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-500"
          type="text"
          placeholder="Email address or phone number"
        />

        <input
          className="my-2 border border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-500"
          type="password"
          placeholder="Password"
        />

        <button className="bg-blue-500 my-2 py-2 text-white font-bold text-lg rounded-md hover:bg-blue-700">
          Log in
        </button>

        <p className="cursor-pointer text-blue-500 text-sm text-center my-2 hover:underline">
          Forgotten password?
        </p>

        <hr className="my-2" />

        <button className="bg-green-500 w-fit my-2 py-2 px-3 mx-auto text-white font-bold text-lg rounded-md hover:bg-green-600">
          Create new account
        </button>
        <span className="absolute -bottom-12 text-sm ml-16">
          <span className="font-bold hover:underline cursor-pointer">Create a Page</span> for a celebrity,
          brand or business.
        </span>
      </div>
      <div className="absolute"></div>
    </div>
  );
}
