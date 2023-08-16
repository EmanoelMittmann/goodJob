import { Badge } from '@chakra-ui/react'

export const AtomBadge = ({text}: {text: string}) => {
    return (
        <div>
            {
                text === 'Aberto' ? <Badge variant='solid' colorScheme='green'>{text}</Badge> :
                text === 'Cancelado' ? <Badge variant='solid' colorScheme='red'>{text}</Badge> : 
                text === 'Agendado' ? <Badge variant='solid' colorScheme='yellow'>{text}</Badge> :
                text === 'Concluido' && <Badge variant='outline' colorScheme='green'>{text}</Badge>
            }
        </div>
    )
}
