import { getResources } from '@/app/services/resources'
import Link from 'next/link'
import { notFound } from 'next/navigation'
// import React from 'react'

export default async function Resources() {
  const resources = await getResources()
  // if(!resources){
  //   notFound()
  // }

  return (
<main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>

      <div className="space-y-4">
        {resources.slice(0, 10).map((resource) => (
          <Link
  href={`/resources/${resource.id}`}
  key={resource.id}
  className="block border rounded-lg p-4"
>
  <h2 className="text-xl font-semibold">
    {resource.title}
  </h2>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime magnam nulla quas harum dicta ab possimus impedit inventore? Dolores ullam officia accusantium voluptatem dolorem, quod assumenda velit. Aut, quae rem?</p>

  <p>{resource.body}</p>
</Link>
        ))}
      </div>
    </main>
  )
}
