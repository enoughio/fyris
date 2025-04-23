import type { Metadata } from "next"
import { portfolioData } from "@/app/portfolio/portfolio-data"
import ProjectDetailPageComponent from "./ProjectDetailPageComponent"

type Props = {
  params: { id: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const project = portfolioData.find((p) => p.id === params.id)

  if (!project) {
    return {
      title: "Project Not Found | Fyris",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | Fyris Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Fyris Portfolio`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export default function ProjectPage({ params }: Props) {
  return <ProjectDetailPageComponent id={params.id} />
}
