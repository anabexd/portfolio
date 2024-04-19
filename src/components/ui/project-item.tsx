import { LinkButton } from '@/components/link-button'
import { CodeXml, Globe, Projector } from 'lucide-react'
import Image from 'next/image'

interface Project {
    title: string,
    description: string,
    date: string,
    srcImage: string,
    srcDeploy: string,
    srcCode: string,
    srcStack: string,
}

function ProjectItem(project: Project): JSX.Element {
    return <>
        <div className="divide-x divide-indigo-300 divide-opacity-50 grid lg:grid-cols-2 row-auto gap-20">
            <div className="flex flex-col items-center justify-center">
                <p className="text-indigo-300 text-3xl font-semibold">{project.title}</p>
                <div className="bg-[url(/square-gradient.svg)] bg-contain bg-no-repeat bg-center -z-10 rounded-lg h-full w-full p-5 flex flex-col items-center">
                    <Image
                        className="mt-10 hover:scale-110 duration-300"
                        src={project.srcImage}
                        width={500}
                        height={500}
                        alt=""
                    />
                </div>
            </div>
            <div className="pl-10 flex flex-col space-y-8">
                <div className="space-y-6 mb-5">
                    <p className="text-indigo-300 text-xl font-semibold">
                        {project.date}
                    </p>
                    <p className="text-lg text-slate-300">
                        {project.description}
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <LinkButton href={project.srcDeploy} target='_blank' size="lg" leftIcon={Globe}>
                        deploy
                    </LinkButton>
                    <LinkButton href={project.srcCode} target='_blank' size="lg" leftIcon={CodeXml}>
                        code
                    </LinkButton>
                </div>

                <div> 
                    <img src={`https://skillicons.dev/icons?i=${project.srcStack}`} />
                </div>
            </div>
        </div>
    </>
}

export default ProjectItem;