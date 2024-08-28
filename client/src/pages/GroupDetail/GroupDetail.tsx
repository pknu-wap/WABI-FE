import React from 'react';
import FileUploadModal from '../../components/group_detail/FileUploadModal/FileUploadModal';
import MemberUpdateButton from 'components/group_detail/MemberUpdateButton/MemberUpdateButton';
import Header from 'components/common/Header/Header';
// 파일 업로드 기능 컴포넌트
const GroupDetailPage = () => {
    return (
        <div>
            <Header />
            {/*<Title />*/}

            <div>
                {/*<SerchBox/>*/}
                <div>
                    <MemberUpdateButton />
                    {/*<ManualUpdateButton />*/}
                </div>
                {/*<GroupMemberList />*/}
            </div>
            {/*<FileUploadModal/>*/}
        </div>
    );
}

export default GroupDetailPage;