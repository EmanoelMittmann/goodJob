import { Box, TableContainer, Table, Thead, Tr, Th, Tbody, Text, Td, Flex } from "@chakra-ui/react"
import { ScheduleContext } from "../../../../contexts"
import { useContext, useMemo, useState } from 'react'
import { Shelf } from "./shelf"
import { Paginate, Modal } from "components/molecules"

export const Schedules = () => {
    const { schedule, isLoading, setPage, meta } = useContext(ScheduleContext.Context)

    const SHELF = useMemo(() => {
        if (isLoading) {
            <Tr>
                <Td>
                    <Text color='black'>Loading ...</Text >
                </Td>
            </Tr>
        }
        return schedule.map((props) => <Shelf {...{ props }} />)
    }, [isLoading, schedule])

    return (
        <>
            <Flex width='100%' flexDirection='column'>
                <Box margin='auto' width='80%' borderRadius='md' display='flex' flexDirection='column' bgColor='gray.100' height='xl' shadow='dark-lg'>
                    <TableContainer>
                        <Table variant='striped'>
                            <Thead bgColor='whiteAlpha.900'>
                                <Tr>
                                    <Th>Professional</Th>
                                    <Th>Dia Da semana</Th>
                                    <Th>Horario</Th>
                                    <Th>Status</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {SHELF}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
                <Paginate
                    event1={() => setPage(meta.page + 1)}
                    event2={() => setPage(meta.page - 1)}
                    page={meta.page}
                />
            </Flex>
        </>
    )
}
