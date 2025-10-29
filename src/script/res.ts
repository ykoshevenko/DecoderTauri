import postText from "./post";
import getString from "./get";

export interface Post {
    text: string
}

export default async function RESULT(text:Post): Promise<any> {
    try {
        const textID = await postText(text)

        if(!textID) {
            throw new Error('No ID received from server')
        }
        const huffmanCode = await getString(textID)
        return huffmanCode
    } catch(err) {
        console.log(err)
        throw err
    }
}