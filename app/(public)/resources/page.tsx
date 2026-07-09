import { getResources } from '@/app/services/resources'
import React from 'react'

export default async function Resources() {
  const resources = await getResources()

  return (
<main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>

      <div className="space-y-4">
        {resources.slice(0, 10).map((resource) => (
          <div
            key={resource.id}
            className="border rounded-lg p-4"
          >
            <h2 className="text-xl font-semibold">
              {resource.title}
            </h2>

            <p>{resource.body}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
