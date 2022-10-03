import { useState } from "react"

export function TextAreaView(props) {
    const handleTextData = (event) => {
        textDataUpdate(event.target.value);
    }
    const convertUpperCase = () => {
        textDataUpdate(textData.toUpperCase())
    }
    const convertLowerCase = () => {
        textDataUpdate(textData.toLowerCase())
    }
    const clearTeaxArea = () => {
        textDataUpdate("")
    }
    const copyText = () => {
        var copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value)
    }
    const [textData, textDataUpdate] = useState('');
    return (
        <div className="container">
            <h2>{props.title}</h2>
            <textarea className="form-control m-2" value={textData} onChange={handleTextData} id="myBox" rows="8"></textarea>
            <button type="button" className="btn btn-primary my-2 mx-2" onClick={convertUpperCase}>UpperCase</button>
            <button type="button" className="btn btn-primary my-2 mx-2" onClick={convertLowerCase}>LowerCase</button>
            <button type="button" className="btn btn-primary my-2 mx-2" onClick={copyText}>Copy</button>
            <button type="button" className="btn btn-primary my-2 mx-2" onClick={clearTeaxArea}>Clear</button>

            <p>{`Character count ${textData.length}`}</p>
        </div>
    )
}