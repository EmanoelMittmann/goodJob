import { DaysOfWeek, Key } from "components/utils"
import { ScheduleContext, SchedulesProps } from "../../../../contexts"
import { ShelfProps } from "../types"
import { DragHandleIcon } from '@chakra-ui/icons'
import { Td, Tr } from "@chakra-ui/react"
import { useContext } from 'react'
import { Modal } from 'components/molecules'
import { AtomBadge } from "components/atoms"
import { useState } from "react"

export const Shelf = ({ props }: ShelfProps<SchedulesProps>) => {
    const {
        available_slots,
        id,
        professional,
        status
    } = props
    const { handleStatus, handleCancel } = useContext(ScheduleContext.Context)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const arrInforms = available_slots.split(' ')
    return (
        <Tr key={id}>
            <Td>{professional}</Td>
            <Td>{DaysOfWeek[arrInforms[0] as Key]}</Td>
            <Td>{arrInforms[1]}</Td>
            <Td display='flex' alignItems='center' gap='2em' cursor='pointer'>
                <AtomBadge text={status} />
                {status !== 'Cancelado' ?
                    <>
                        <DragHandleIcon onClick={() => setIsOpen(!isOpen)} />
                        <Modal
                            Open={isOpen}
                            event1={() => {
                                handleStatus(id)
                                setIsOpen(false)
                            }}
                            event2={() => {
                                handleCancel(id)
                                setIsOpen(false)
                            }} />
                    </>
                    : null}
            </Td>
        </Tr>
    )
}