import './FileInput.css';
import React, { useState, useEffect } from 'react';
interface IFuleInputProps {
    onSetStateFileInput: (value: string) => void,
    fileInputValue: string
}
const FileInput = ({ onSetStateFileInput, fileInputValue }: IFuleInputProps) => {
    const [selectedFile, setSelectedFile] = useState()

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            onSetStateFileInput('')
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        // @ts-ignore:next-line
        onSetStateFileInput(objectUrl)
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    // @ts-ignore:next-line
    const onSelectFile = (e) => {
        // @ts-ignore:next-line
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        // @ts-ignore:next-line
        setSelectedFile(e.target.files[0])
    }
    // @ts-ignore:next-line

    return (
        <div>
            <input type='file' onChange={onSelectFile}   />
        </div>
    )
}

export default FileInput