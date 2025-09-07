import os from 'os';
import fs from 'fs';
import path from 'path';
import { htmlTemplate } from './html';

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

export function findCaseIds(str: string): string[] {
    const TEST_ID_PATTERN = 'C\\d+';
    const regex = new RegExp(TEST_ID_PATTERN, 'g');
    const matches = str.match(regex);
    
    return matches ? matches.map(match => match) : [];
}

export function detectOS() {
    const platform = process.platform;
    
    return {
        name: platform,
        version: os.version()
    };
}

export function stripAnsiCodes(text: string) {
    return text.replace(/\u001b\[[0-9;]+m/g, '');
}

export function storeReport(data: { testRun: any, results: any[] }, filePath: string) {
    const fileName = `run-${data.testRun.id}-${data.testRun.startTime}.json`;
    const fullFilePath = path.join(filePath, fileName);
    const dirPath = path.dirname(fullFilePath);

    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(fullFilePath, JSON.stringify(data, null, 2));

    return {
        path: fullFilePath,
    };
}

export function convertToDataUrl(attachment: any) {
    const file = fs.readFileSync(attachment.path);

    return `data:${attachment.contentType};base64,${file.toString('base64')}`;
}

export function generateHtmlReport(data: { testRun: any, results: any[] }, filePath: string) {
    const finalResults = data.results.map(result => ({
        ...result,
        attachments: result.attachments.map((attachment: any) => ({
            ...attachment,
            path: convertToDataUrl(attachment)
        }))
    }));

    const html = htmlTemplate({ testRun: data.testRun, results: finalResults });
    const unescapedHtml = html.replace(/\\/g, '');

    const fileName = `run-${data.testRun.id}-${data.testRun.startTime}.html`;
    const fullFilePath = path.join(filePath, fileName);
    const dirPath = path.dirname(fullFilePath);

    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(fullFilePath, unescapedHtml);

    return {
        path: fullFilePath,
    };
}