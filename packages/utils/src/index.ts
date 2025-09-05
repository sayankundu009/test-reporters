export function logger(message: string) {
    const logMessage = `[REPORTER][${new Date().toLocaleTimeString()}] ${message.trim()}`;

    console.log(logMessage);
}

export function detectBrowser(userAgent: string) {
    if (userAgent.indexOf("Edg") > -1) {
        return "chromium";
    } else if (userAgent.indexOf("Chrome") > -1) {
        return "chrome";
    } else if (userAgent.indexOf("Firefox") > -1) {
        return "firefox";
    } else if (userAgent.indexOf("Safari") > -1) {
        return "webkit";
    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("Opr") > -1) {
        return "opera";
    } else if (userAgent.indexOf("Trident") > -1 || userAgent.indexOf("MSIE") > -1) {
        return "internet-explorer";
    } else {
        return "";
    }
}