import { useState } from "react"

export function TextAreaView(props) {
    const [textData, textDataUpdate] = useState('');
    let background=`${props.mode === 'light' ? 'bg-light': 'bg-dark'}`;
    let btncss=`${textData.length>0 ? 'enabled':'disabled'} btn btn-primary my-2 mx-2`
    let whiteText=`${props.mode === 'dark' ? 'text-white':'text-dark'}`
    const handleTextData = (event) => {
        textDataUpdate(event.target.value);
    }
    const convertUpperCase = () => {
        textDataUpdate(textData.toUpperCase())
        // props.showAlert("hello","success")
    }
    const convertLowerCase = () => {
        textDataUpdate(textData.toLowerCase())
    }
    const clearTeaxArea = () => {
        textDataUpdate("")
    }
    const copyText = () => {
        navigator.clipboard.writeText(textData)
    }
    return (
        <div className="container my-3">
            <h2 className={whiteText}>{props.title}</h2>
            <textarea className={`form-control m-2 ${background} ${whiteText}`} value={textData} onChange={handleTextData} id="myBox" rows="8"></textarea>
            <button type="button" className={btncss} onClick={convertUpperCase} >UpperCase</button>
            <button type="button" className={btncss} onClick={convertLowerCase}>LowerCase</button>
            <button type="button" className={btncss} onClick={copyText}>Copy</button>
            <button type="button" className={btncss} onClick={clearTeaxArea}>Clear</button>

            <p className={whiteText}>{`Character count ${textData.length}`}</p>
        </div>
    )
}