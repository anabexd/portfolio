import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Github, GithubIcon, Linkedin, LucideIcon, Paperclip, PaperclipIcon } from 'lucide-react'

const Home = () => {
  return (
    <Container className="flex-wrap gap-x-8">
      <div className="space-y-6 sm:flex-1">
        <div className="flex items-center gap-2">
          <p className="text-2xl text-gray-700 font-semibold">
            hi, I&apos;m Anabe
          </p>
          <span className="animate-bounce text-2xl">{'👋'}</span>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <div className="font-extrabold italic flex-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-700">
            <p className="text-3xl sm:text-5xl md:text-5xl lg:text-7xl">
              fullstack
            </p>
            <p className="text-4xl sm:text-6xl md:text-6xl lg:text-8xl">
              developer
            </p>
          </div>

          <div className="flex items-end">
            <div className="size-28 sm:size-48 md:size-52 lg:size-64 relative">
            <Image
                src="/profile.png"
                width={650}
                height={650}
                className="select-none pointer-events-none"
                alt="My profile picture"
              />
            </div>
          </div>
        </div>
        <p className="text-slate-500 max-w-sm sm:max-w-[20.6rem] md:max-w-sm lg:max-w-[26.8rem] md:text-lg lg:text-xl lg:leading-8 font-semibold">
          I&apos;m 18 years old and have been freelancing as a full-stack
          developer for a year.
        </p>

        <div className="flex text-indigo-400 gap-6 transition ease-in-out delay-150">
          <Link target="_blank" href="https://github.com/anabexd"  className="hover:-translate-y-1 hover:scale-110 duration-300">
            <GithubIcon 
            width={30} height={30}
            />
          </Link>
          <Link target="_blank" href="https://linkedin.com/in/anabe-sc"  className="hover:-translate-y-1 hover:scale-110 duration-300">
            <Linkedin 
            width={30} height={30}
            />
          </Link>
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/18tVLLld8qB_2HfDr6YQDsj2zGgExbaxE/view?usp=sharing"
            className="hover:-translate-y-1 hover:scale-110 duration-300"
         >
            <PaperclipIcon
            width={25} height={25}
            />
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Home