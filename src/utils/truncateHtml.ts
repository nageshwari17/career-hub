import DOMpurify from "dompurify"

export const truncateHtml = (html: string, maxLength: number): string => {
    const sanitizedHTML = DOMpurify.sanitize(html);

    const text = new DOMParser().parseFromString(sanitizedHTML, "text/html").body.textContent ?? ""

    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
}