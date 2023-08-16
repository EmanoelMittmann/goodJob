import { Box, Text} from "@chakra-ui/react"

interface ModalProps {
    Open: boolean,
    event1():void,
    event2():void
}

export const Modal = ({Open,event1,event2}:ModalProps) => {

    if(!Open) return (<></>)
    return (
        <Box width='5em' height='5em' bgColor='white' position='absolute' gap='1em' flexDirection='column' rounded='md' boxShadow='2xl' display='flex' justifyContent='center' alignItems='center'>
                <Text fontWeight='bold' onClick={event1}>Agendar</Text>
                <Text fontWeight='bold' onClick={event2}>Cancelar</Text>
        </Box>
    )
}