import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-100">
      <div className="flex items-left flex-col gap-7">
        <p className="text-slate-100 text-2xl">hi, I&apos;m Anabe {"👋"}</p>
        <div className="text-indigo-300 leading-loose">
          <p className="text-6xl font-bold">fullstack</p>
          <p className="text-9xl font-bold italic">developer</p>
        </div>
        <p className="text-indigo-200 w-3/5 text-xl leading-8 font-semibold opacity-75">
          I&apos;m 18 years old and have been developing systems for 1 year working
          as a freelancer.
        </p>
        <div className="flex gap-5">
          <Link target="_blank" href="https://github.com/anabexd"><Image src="/mdi_github.svg" width={40} height={40} alt=""></Image></Link>
          <Link target="_blank" href="https://linkedin.com/in/anabe-sc">
          <Image src="/mdi_linkedin.svg" width={40} height={40} alt=""></Image>
          </Link>
          <Link target="_blank" href="https://drive.google.com/file/d/18tVLLld8qB_2HfDr6YQDsj2zGgExbaxE/view?usp=sharing">
          <Image src="/mdi_paper.svg" width={40} height={40} alt=""></Image>
          </Link>
        </div>
      </div>
    </main>
  );
}
