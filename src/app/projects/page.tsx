import { LinkButton } from '@/components/link-button'
import { Container } from '@/components/ui/container'
import { CodeXml, Globe } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  return (
    <Container>
      <div className="space-y-24 py-32">
        <p className="text-slate-300 text-4xl font-semibold text-center pb-20">
          My projects
        </p>
        <div className="divide-x divide-indigo-300 divide-opacity-50 grid lg:grid-cols-2 row-auto gap-20">
          <div className="flex flex-col items-center justify-center">
            <p className="text-indigo-300 text-3xl font-semibold">CantinaGO</p>
            <div className="bg-[url(/square-gradient.svg)] bg-contain bg-no-repeat bg-center -z-10 rounded-lg h-full w-full p-5 flex flex-col items-center">
              <Image
                className="mt-10 hover:scale-110 duration-300"
                src="/devices-01.png"
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
          <div className="pl-10 flex flex-col space-y-8">
            <div className="space-y-6 mb-5">
              <p className="text-indigo-300 text-xl font-semibold">
                jul - dez/2023
              </p>
              <p className="text-lg text-slate-300">
                Project designed to solve the problem of queues in school and
                institution canteens through a virtual menu.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <LinkButton href="https://cantina-go.vercel.app/" target='_blank' size="lg" leftIcon={Globe}>
                deploy
              </LinkButton>
              <LinkButton href="https://github.com/anabexd/cantina_go" target='_blank' size="lg" leftIcon={CodeXml}>
                code
              </LinkButton>
            </div>

            <div>
              <img src="https://skillicons.dev/icons?i=figma,react,typescript,vite,postgresql,spring" />
            </div>
          </div>
        </div>
        <div className="divide-x divide-indigo-300 divide-opacity-50 grid lg:grid-cols-2 row-auto gap-20">
         
          <div className="pl-10 flex flex-col space-y-8">
            <div className="space-y-6 mb-5 text-right">
              <p className="text-indigo-300 text-xl font-semibold">
                jul - dez/2023
              </p>
              <p className="text-lg text-slate-300">
              Website with predictive analytical calculator of road noise levels based on existing mathematical models with a library to inform users about acoustics.
              </p>
            </div>

            <div className="flex items-center justify-end gap-4">
              <LinkButton href="https://ic-website-2023.vercel.app/" target='_blank' size="lg" leftIcon={Globe}>
                deploy
              </LinkButton>
              <LinkButton href="https://github.com/SenaiFlorianopolisResearchTeam/Calculator" target='_blank' size="lg" leftIcon={CodeXml}>
                code
              </LinkButton>
            </div>

            <div className="flex items-center justify-end">
              <img src="https://skillicons.dev/icons?i=figma,next,vercel,typescript,materialui" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-indigo-300 text-3xl font-semibold">Acoustics IC</p>
            <div className="bg-[url(/square-gradient.svg)] bg-contain bg-no-repeat bg-center -z-10 rounded-lg h-full w-full p-5 flex flex-col items-center">
              <Image
                className="mt-10 hover:scale-110 duration-300"
                src="/devices-02.png"
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Projects
