import type { Metadata } from "next"
import JobDetailPage from "./JobDetailPage"

type Props = {
  params: { id: string }
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `Career Opportunity at Fyris | ${params.id
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")}`,
    description:
      "Explore exciting career opportunities at Fyris. Apply now and be part of our innovative team building cutting-edge software solutions.",
  }
}

export default function CareerPage({ params }: Props) {
  return <JobDetailPage id={params.id} />
}
