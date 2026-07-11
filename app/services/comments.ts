export async function getComments():Promise<Comment[] > {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments',{cache:'force-cache'})

    if(!res.ok){
        throw new Error ('something went wrong')
    }
    return res.json()
}