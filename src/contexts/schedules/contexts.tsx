import { createContext, ReactNode, useState, useEffect } from 'react'
import { ContextSchedulesProps, SchedulesProps } from './types'
import DEFAULT from './contants'
import axios from 'axios'
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
        setPage
    }
    async function FetchList() {
        setIsLoading(true)
        try {
            API
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
            page: page
        }))
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