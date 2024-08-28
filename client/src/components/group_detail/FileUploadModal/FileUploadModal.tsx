import React, {useState} from 'react';
import MemberUpdateButton from '../MemberUpdateButton/MemberUpdateButton';
import {fileUpload} from "../../../api/fileUpload";


const FileUploadModal = () => {
    const [file, setFile] = useState<File | null>(null);

    const fileChange = (fileElement:React.ChangeEvent<HTMLInputElement>) => {
        const files = fileElement.target.files;
        if(files) setFile(files[0]);
    }


    const fileUploadClick = () => {
        const fileToUpload = file || new Blob();
        const fileFormData = new FormData();
        fileFormData.append('file', fileToUpload);
        fileUpload(fileFormData)
    }

    return (
        // 파일 업로드 모달에 들어갈 내용 작성
        <div>
            <h1>This is a FileUploadModal!</h1>
            <form>
                <input type='file' accept='.csv, .xlsx' onChange={fileChange} />
            </form>

            <MemberUpdateButton onClick={fileUploadClick} />
        </div>
    )
}

export default FileUploadModal;