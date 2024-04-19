import { Container } from '@/components/ui/container'
import ProjectItem from '@/components/ui/project-item'


const Projects = () => {
  return (
    <Container>
      <div className="space-y-24 py-32">
        <p className="text-slate-300 text-4xl font-semibold text-center pb-20">
          My projects
        </p>
        <ProjectItem
          title={'CantinaGo'}
          description={'Project designed to solve the problem of queues in school and institution canteens through a virtual menu.'}
          date={'jul - dez/2023'}
          srcImage={'/devices-01.png'}
          srcDeploy={'https://cantina-go.vercel.app'} srcCode={'https://github.com/anabexd/cantina_go'}
          srcStack={'figma,react,typescript,vite,postgresql,spring'}
        ></ProjectItem>
        <ProjectItem
          title={'Acoustics IC'}
          description={'Website with predictive analytical calculator of road noise levels based on existing mathematical models with a library to inform users about acoustics.'}
          date={'jul - dez/2023'}
          srcImage={'/devices-02.png'}
          srcDeploy={'https://ic-website-2023.vercel.app/'} srcCode={'https://github.com/SenaiFlorianopolisResearchTeam/Calculator'}
          srcStack={'figma,next,vite,typescript,materialui'}
        ></ProjectItem>
      </div>
    </Container>
  )
}

export default Projects
