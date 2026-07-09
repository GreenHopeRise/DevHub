export async function getUsers(id: number):Promise<User | null> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (res.status ===404) {
    return null  
  }


    if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return await res.json();

}