import axios from "axios";

export default async function getString(id: string): Promise<string> {
    try {
        const response = await axios.get(`http://localhost:8000/api/get?text_id=${id}`)
        return response.data
    } catch(err) {
        console.log(err)
        throw err
    }
}
