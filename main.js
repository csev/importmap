import dayjs from 'dayjs';

export function formatDate(date) {
    return dayjs(date).format('YYYY-MM-DDTHH:mm:ssZ[Z]');
}

// Expose to window for HTML use
window.formatDate = formatDate; 