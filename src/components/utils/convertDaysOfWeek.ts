export const DaysOfWeek = {
    'Monday': 'Segunda',
    'Tuesday':'Terça',
    'Wednesday':'Quarta',
    'Thursday':'Quinta',
    'Friday': 'Sexta',
    'Saturday':'Sábado',
    'Sunday':'Domingo'
}
export type WeekDateProps = typeof DaysOfWeek

export type Key = keyof WeekDateProps