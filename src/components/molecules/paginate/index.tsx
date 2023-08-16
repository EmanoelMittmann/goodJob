import {Box,Button,Heading} from '@chakra-ui/react'

interface PaginateProps{
  event1():void
  event2():void
  page: number
}

export const Paginate = ({event1,event2,page}:PaginateProps) => {
  return (
    <Box width='80%' margin='auto' height='4em' display='flex' flexDirection='row' justifyContent='space-around' alignItems='center'> 
      <Button bgColor='silver' onClick={event2}>Prev</Button>
        <Heading as='h5' size='sm'>{page}</Heading>
      <Button bgColor='silver' onClick={event1}>Next</Button>
    </Box>
  )
}
