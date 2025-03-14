import dayjs from 'dayjs';

export function formatDate(date) {
    return dayjs(date).format('YYYY-MM-DDTHH:mm:ssZ[Z]');
} 