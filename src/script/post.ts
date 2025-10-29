import axios from "axios"

export interface Post {
    text: string
}

export default async function postText(text:Post): Promise<string> {
    try {
        const response = await axios.post('http://localhost:8000/api/post', text, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await response.data.id
    } catch(err) {
        console.log(err)
        throw err
    }
}