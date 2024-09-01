export interface studentQr {
    studentId: string,
    eventId: number,
}

export interface studentCheckedIn {
    id: string,
    name: string,
    group: string,
    eventStudentStatus: string,
    checkInTime: string,
}