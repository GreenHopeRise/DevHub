export async function getComments():Promise<Comment[] | null> {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments')
    if(res.status===404){
        return null
    }
    if(!res.ok){
        throw new Error ('something went wrong')
    }
    return res.json()
}