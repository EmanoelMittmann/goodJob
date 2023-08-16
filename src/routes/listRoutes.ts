export const ROUTER = {
    schedules: {
        list: `/Schedules`,
        cancel: (uuid: string) => `/cancelStatus/${uuid}`,
        updateStatus: (uuid: string) => `/updateSchedule/${uuid}` 
    }
}