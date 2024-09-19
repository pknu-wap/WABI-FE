export interface eventInfo {
    eventId: number;
    eventName: string;
    eventStudentMaxCount: number;
    startAt: string;
    endAt: string;
    bands: Band[];
}

export interface Band {
    bandId: number;
    bandName: string;
}