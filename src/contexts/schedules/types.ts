export interface SchedulesProps {
    id: string
    professional: string,
    available_slots: string,
    status: string
}

export interface DefaultMetaProps{
    page: number,
    limit: number
}

export interface ContextSchedulesProps{
    meta: DefaultMetaProps
    schedule: SchedulesProps[],
    isLoading: boolean
    setPage(page: number):void
}