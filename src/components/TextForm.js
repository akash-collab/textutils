import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const [search, setSearch] = useState("")

    const handleUpClick = () => {
        // console.log("UpperCase Was Clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted To Uppercase", "success")
    }
    const handleLowClick = () => {
        // console.log("LowerCase Was Clicked")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted To LowerCase", "success")
    }
    const handleSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", "success")
    }
    const handleSegregateText = () => {
        let linesArray = text.split(/\.\s*/)
        let newString = ""
        // console.log(linesArray)
        linesArray.forEach((line, index) => {
            if (index === 0) {
                newString += "".concat(index + 1).concat(". ").concat(line).concat(".")
            } else if (index > 0 && index < linesArray.length - 1) {
                newString += "\n".concat(index + 1).concat(". ").concat(line).concat(".")
            }
            setText(newString)
            props.showAlert("Converted into Points", "success")
        })
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied To Clipboard", "success")
    }
    const handleClearText = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Clear Text", "success")
    }
    const handleSearchText = () => {
        let searchLow = search.toLowerCase()
        let textLow = text.toLowerCase()
        let linesArray = textLow.split(/\.\s*/)
        let isFound = false
        linesArray.forEach((line, index) => {
            if (line.toLowerCase().includes(searchLow)) {
                let firstLetter = line.charAt(0).toUpperCase()
                let newLine = line.substring(1)
                let newSearch = firstLetter.concat(newLine).concat(".")
                // console.log(newLine)
                setSearch(`Found "${searchLow}":\n${newSearch}`)
                isFound = true
            }
        })
        if (!isFound) {
            setSearch("Not Found")
        }
        props.showAlert("Search Complete", "success")
    }
    const handleClearSearch = () => {
        let newSearch = ""
        setSearch(newSearch)
    }
    const handleSearchCopy = () => {
        let text = document.getElementById('mySearchBox')
        text.select()
        navigator.clipboard.writeText(text.value)
    }
    const count = (text) => {
        const trimmedText = text.trim();
        if (trimmedText === "") {
            return 0;
        }
        return trimmedText.split(/\s+/).length;
    }
    const handleOnChange = (event) => {
        // console.log("Text Changed")
        setText(event.target.value)
    }
    const handleOnSearch = (event) => {
        // console.log("Text Changed")
        setSearch(event.target.value)
    }
    return (
        <div className="container" style={{ color: props.mode === 'light' ? '#042743' : 'white' }}>
            <div className="container mb-3 mx-1">
                <label htmlFor="myBox" className="form-label" style={{ fontSize: '20px' }}>{props.heading}</label>

                <textarea className="form-control my-1" row="5" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#042743' : 'white' }} id="myBox" placeholder={props.heading}></textarea>
            </div>
            <div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>

                <button className="btn btn-warning mx-1" onClick={handleLowClick}> Convert to LowerCase</button>

                <button className="btn btn-light mx-1" onClick={handleSpaces}>Remove Spaces</button>

                <button className="btn btn-danger mx-1" text={text} onClick={handleSegregateText}>Segregate Text</button>

                <button className="btn btn-secondary mx-1" onClick={handleCopy}>Copy To Clipboard</button>

                <button className="btn btn-success mx-1" onClick={handleClearText}>Clear Text</button>
            </div>
            <div>
                <textarea className="form-control my-2 mx-2" style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? '#042743' : 'white' }} value={search} onChange={handleOnSearch} placeholder="Word or Phrase" id="mySearchBox" row="3"></textarea>

                <button className="btn btn-info mx-2" onClick={handleSearchText}>Search</button>

                <button className="btn btn-success mx-1" text={text} onClick={handleClearSearch}>Clear Search</button>

                <button className="btn btn-secondary mx-1" text={text} onClick={handleSearchCopy}>Copy to ClipBoard</button>
            </div>


            <div className="container my-1 mx-1">
                <h5>Your text Summary -:</h5>

                <p>{text.length} Characters and {count(text)} Words</p>

                <p>{0.008 * text.split(" ").length} Minutes Read</p>

                <div className="preview">
                    <button className="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse" aria-controls="flush-collapse">
                        <h5><i>Preview -:</i></h5>
                    </button>
                    <div id="flush-collapse" className="content-collapse collapse">{text}</div>
                </div>
            </div>
        </div>
    )
}