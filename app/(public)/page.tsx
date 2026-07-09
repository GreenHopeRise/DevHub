import { getComments } from "../services/comments"
import { getResources } from "../services/resources"
import { getUsers } from "../services/users"


export default async function Home() {
  const [users,  comments,resources,] = await Promise.all([
    getUsers(), getComments(), getResources()

  ])
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">DevHub</h1>

      <div className="border p-4 rounded">
        <h2>Total Resources</h2>
        <p>{resources.length}</p>
      </div>

      <div className="border p-4 rounded">
        <h2>Total Authors</h2>
        <p>{users.length}</p>
      </div>

      <div className="border p-4 rounded">
        <h2>Total Comments</h2>
        <p>{comments.length}</p>
      </div>
    </main>
  );
}