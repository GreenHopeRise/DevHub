
import { Resource } from "../types/resource";

export async function getResources():Promise<Resource[] | null> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (res.status ===404) {
        return null
    }
    if(!res.ok){
        throw new Error('somthing went wrong')
    }
    return res.json()
    
}

export async function getResource(id: string): Promise<Resource | null> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return await res.json();
}