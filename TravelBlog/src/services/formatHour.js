export function getCurrentTimeInTimezone(timezone) {
    const now = new Date();
    return new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(now);
}
