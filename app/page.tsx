import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[url(/images/pattern-2.jpg)] h-screen bg-center bg-cover flex justify-center align-center ">
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-2 px-6">
          <Image src={"/images/logo-amaurio-alt.png"} alt="Logo" width={942} height={943} className="max-w-96"/>
          <h1 className="text-5xl font-bold text-black border-4 border-black bg-[#fff0d7] px-4 py-2 shadow-brutal text-center">L&apos;Amaurio non si accontenta. E tu?</h1>
        </div>
      </div>
    </main>
  );
}
