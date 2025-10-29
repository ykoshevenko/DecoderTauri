import '../style/index.css'

export default function InputWord() {
    return (
        <>
            <h1 className="title">TauriDecoder</h1>
            <h2>Works on the principle of the Huffman algorithm</h2>
            <textarea className='input'></textarea>
            <br/>
            <button className='resButton'>Get result</button>
        </>
    )
}