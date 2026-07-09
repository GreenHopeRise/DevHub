import { error } from "console";
import { Resource } from "../types/resource";

export async function getResources():Promise<Resource[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    if(!res.ok){
        throw new Error('somthing went wrong')
    }
    return res.json()
    
}