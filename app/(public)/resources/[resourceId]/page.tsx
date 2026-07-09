import { getResource } from "@/app/services/resources";
import { getUsers } from "@/app/services/users";
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
  const user = await getUsers(resource.userId)

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        {resource.title}
      </h1>
      <div className="my-6 border-l-4 border-blue-500 pl-4">
  <h2 className="font-semibold">{user?.name}</h2>
  <p>{user?.email}</p>
</div>

      <p className="mt-4">{resource.body}</p>
    </main>
  );
}