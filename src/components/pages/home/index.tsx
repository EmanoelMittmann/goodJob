import { Box, Flex } from '@chakra-ui/react'
import { Tables } from '../../organisms'
import { ScheduleContext } from '../../../contexts'

export const Home = () => {
    return (
        <ScheduleContext.Provider>
            <Box height='100vh' alignItems='center' display='flex'>
                <Tables.Schedules />
            </Box>
        </ScheduleContext.Provider>

    )
}
