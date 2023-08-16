import { DaysOfWeek, Key } from "components/utils"
import { SchedulesProps } from "../../../../contexts"
import { ShelfProps } from "../types"
import { Td, Tr } from "@chakra-ui/react"
import { AtomBadge } from "components/atoms"

export const Shelf = ({ props }: ShelfProps<SchedulesProps>) => {
    const {
        available_slots,
        id,
        professional,
        status
    } = props

    const arrInforms = available_slots.split(' ')
    return (
        <Tr key={id}>
            <Td>{professional}</Td>
            <Td>{DaysOfWeek[arrInforms[0] as Key]}</Td>
            <Td>{arrInforms[1]}</Td>
            <Td>
                <AtomBadge text={status} />
            </Td>
        </Tr>
    )
}