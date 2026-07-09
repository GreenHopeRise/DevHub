import { getResource } from "@/app/services/resources";
import { notFound } from "next/navigation";



type Props = {
  params: Promise<{
    resourceId: string;
  }>;
};

export default async function ResourceDetailsPage({ params }: Props) {
  const { resourceId } = await params;

  const resource = await getResource(resourceId);
  if (!resource) {
    notFound()
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        {resource.title}
      </h1>

      <p className="mt-4">{resource.body}</p>
    </main>
  );
}