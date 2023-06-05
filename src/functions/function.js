import { formatDistanceToNow } from 'date-fns';

export const formTime = ( date ) => {
    return formatDistanceToNow(new Date(date), { addSuffix: true })

}

// formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true })