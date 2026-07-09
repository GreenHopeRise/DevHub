

export async function getUser(id: number): Promise<User | null> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (res.status === 404) {
    return null;
  }

  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }

  return await res.json();
}

export async function getUsers(): Promise<User[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return await res.json();
}