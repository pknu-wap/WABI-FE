import React from "react";
import {students, student} from "../../../types/studentTypes";
import GroupMember from "./GroupMember";


const GroupMembers = ({ members }: { members: students }) => {
    return (
        <>
        {members.map((member: student) => (
                <GroupMember member={member} />
            ))}
        </>
    )
}

export default GroupMembers;