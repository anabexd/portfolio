import { LinkButton } from '@/components/link-button'
import { CodeXml, Globe } from 'lucide-react'
import Image from 'next/image'

interface Project {
    title: string,
    description: string,
    date: string,
    srcImage: string,
    srcDeploy: string,
    srcCode: string,
    srcStack: string,
    isInverted: boolean
}

function ProjectItem(project: Project): JSX.Element {
    return <>
        <div className="grid lg:grid-cols-2 row-auto gap-20">
            <div className={`flex flex-col items-center justify-center ${project.isInverted ? `order-2` : `order-1`}`}
            >
                <p className="text-indigo-400 text-3xl font-semibold">{project.title}</p>
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
            <div className={`pl-10 flex flex-col space-y-8 ${project.isInverted ? `order-1 text-right` : `order-2`}`}>
                <div className="space-y-6 mb-5">
                    <p className="text-indigo-400 text-xl font-semibold">
                        {project.date}
                    </p>
                    <p className="text-lg text-slate-500">
                        {project.description}
                    </p>
                </div>

                <div className={`flex items-center gap-4 ${project.isInverted ? 'justify-end' : ''}`}>
                    <LinkButton href={project.srcDeploy} target='_blank' size="lg" leftIcon={Globe}>
                        deploy
                    </LinkButton>
                    <LinkButton href={project.srcCode} target='_blank' size="lg" leftIcon={CodeXml}>
                        code
                    </LinkButton>
                </div>

                <div className={project.isInverted ? 'w-100 flex justify-end' : ''}>
                    <img src={`https://skillicons.dev/icons?i=${project.srcStack}`} />
                </div>
            </div>
        </div>
    </>
}

export default ProjectItem;