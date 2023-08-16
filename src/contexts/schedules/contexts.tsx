import { createContext, ReactNode, useState, useEffect } from 'react'
import { ContextSchedulesProps, SchedulesProps } from './types'
import DEFAULT from './contants'
import { ROUTER } from '../../routes/listRoutes'
import API from 'api'
export const Context = createContext({} as ContextSchedulesProps)

export const Provider = ({ children }: { children: ReactNode }) => {
    const [meta, setMeta] = useState(DEFAULT.META)
    const [schedule, setSchedule] = useState<SchedulesProps[] | any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const contextProps = {
        meta,
        schedule,
        isLoading,
        setPage,
        handleStatus,
        handleCancel
    }
    
    async function FetchList() {
        setIsLoading(true)
        try {
            await API
                .get(ROUTER.schedules.list, {
                    params: {
                        page: meta.page,
                        limit: meta.limit
                    }
                })
                .then((data) => setSchedule(data.data as SchedulesProps[]))
                setIsLoading(false)
                return
        } catch (error) {
            console.error(error)
        }
    }

    function setPage(page: number){
        setMeta((old) => ({
            ...old,
            page: page === 0 ? 1 : page 
        }))
    }

    async function handleStatus(id: string){
        try {
            await API.put(ROUTER.schedules.updateStatus(id))
            FetchList()
            return
        } catch (error) {
            console.error(error)
        }
    }

    async function handleCancel(id: string){
        try {
            await API.put(ROUTER.schedules.cancel(id))
            FetchList()
            return 
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            FetchList()
        }, 200)
    }, [meta.limit, meta.page])

    return (
        <Context.Provider value={contextProps}>
            {children}
        </Context.Provider>
    )
}