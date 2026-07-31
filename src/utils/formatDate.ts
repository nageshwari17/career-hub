export const formatDate = (dateString: string): string => {
    return new Intl.DateTimeFormat(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).format(new Date(dateString));
}