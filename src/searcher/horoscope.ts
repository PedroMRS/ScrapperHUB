import { load } from 'cheerio';
import puppeteer from 'puppeteer-extra';
import { customSelector } from '../utils/utils';
import { saveHoroscope } from '../db/horoscope';

export async function searchHoroscope() {
  const browser = await puppeteer.launch({ headless: false, executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", });
  const page = await browser.newPage();
  await page.goto('https://www.metropoles.com/vida-e-estilo/horoscopo', { waitUntil: 'domcontentloaded' });
  await page.screenshot({ path: 'teste.png' });
  await page.click('#__next > div.Box-sc-68smk-0.fEjKlo > main > div > div > div > div.Grid__Col-sc-owmjhw-2.ekibaz > div.Grid__Row-sc-owmjhw-1.ioxSyG > div.Grid__Col-sc-owmjhw-2.hXCOpE > div > article > div > div.Grid__Col-sc-owmjhw-2.hZTFgC');
  const html = await page.content();
  const loadedPage = load(html);
  await browser.close();

  const selector = "#__next > div.Box-sc-68smk-0.fEjKlo > main > div > div > div.Grid__Row-sc-owmjhw-1.ffIvsJ > div.Grid__Col-sc-owmjhw-2.ekibaz > article > div.Grid__Col-sc-owmjhw-2.gTllIp > div > div.ConteudoNoticiaWrapper__Horoscopo-sc-19fsm27-2.bzVekh > ";

  const aries = customSelector(loadedPage, 'div:nth-child(2) > div.Grid__Col-sc-owmjhw-2.UimRK > div > p', selector);
  const taurus = customSelector(loadedPage, 'div:nth-child(4) > div.Grid__Col-sc-owmjhw-2.UimRK > div > p', selector);
  const gemini = customSelector(loadedPage, 'div:nth-child(5) > div.Grid__Col-sc-owmjhw-2.UimRK > div > p', selector);
  const cancer = customSelector(loadedPage, 'div:nth-child(7) > div.Grid__Col-sc-owmjhw-2.UimRK > div > p', selector);
  const leo = customSelector(loadedPage, 'div:nth-child(9) > div.Grid__Col-sc-owmjhw-2.UimRK > div > p', selector);
  const virgo = customSelector(loadedPage, 'div:nth-child(10) > div.Grid__Col-sc-owmjhw-2.UimRK > div > p', selector);
  const libra = customSelector(loadedPage, 'div:nth-child(11) > div.Grid__Col-sc-owmjhw-2.UimRK > div > p', selector);
  const scorpius = customSelector(loadedPage, 'div:nth-child(12) > div.Grid__Col-sc-owmjhw-2.UimRK > div > p', selector);
  const sagittarius = customSelector(loadedPage, 'div:nth-child(14) > div.Grid__Col-sc-owmjhw-2.UimRK > div > p', selector);
  const capricornus = customSelector(loadedPage, 'div:nth-child(15) > div.Grid__Col-sc-owmjhw-2.UimRK > div > p', selector);
  const aquarius = customSelector(loadedPage, 'div:nth-child(16) > div.Grid__Col-sc-owmjhw-2.UimRK > div > p', selector);
  const pisces = customSelector(loadedPage, 'div:nth-child(17) > div.Grid__Col-sc-owmjhw-2.UimRK > div > p', selector);

  const todayHoroscope = {
    aries,
    taurus,
    gemini,
    cancer,
    leo,
    virgo,
    libra,
    scorpius,
    sagittarius,
    capricornus,
    aquarius,
    pisces
  }

  await saveHoroscope(todayHoroscope);
  return todayHoroscope;
}