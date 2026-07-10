export async function getComments():Promise<Comment[] > {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')

    if(!res.ok){
        throw new Error ('something went wrong')
    }
    return res.json()
}