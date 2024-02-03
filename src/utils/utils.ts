import { Cheerio, CheerioAPI } from "cheerio";

export function textFormatter(cheerio: Cheerio<any>): string {
    return cheerio.text().replace(/^\s+|\s+$/gm, '');
}

export function customSelector(loadedPage: CheerioAPI, selector: string, defaultSelector: string) {
    return textFormatter(loadedPage(`${defaultSelector}${selector}`));
}