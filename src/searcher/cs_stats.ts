import { load } from 'cheerio';
import puppeteer from 'puppeteer-extra';
import { textFormatter, customSelector } from '../utils/utils';

const StealthPlugin = require('puppeteer-extra-plugin-stealth');
let calls = 0;
puppeteer.use(StealthPlugin());

export async function searchCS2Players(steamID: string, browser: any) {

  const page = await browser.newPage();
  await page.goto('https://csstats.gg/player/' + steamID + '?modes=Premier#/', { waitUntil: 'domcontentloaded' });
  const html = await page.content();
  const loadedPage = load(html);
  const lastUpdate = textFormatter(loadedPage('#cs2-rank > div.icon'));
  const nickname = textFormatter(loadedPage('#player-name'));
  const allCompWins = textFormatter(loadedPage('#cs2-rank > div.wins'));
  const atualRank = textFormatter(loadedPage('#cs2-rank > div.rank')).replace(',', '.');
  const bestRank = textFormatter(loadedPage('#cs2-rank > div.best')).replace(',', '.');
  const kd = textFormatter(loadedPage('#kpd > span'));

  const selectorBaseStats = "#player-overview > div.col-sm-8 > div.col-sm-7 > ";

  const premierWinrate = customSelector(loadedPage, 'div:nth-child(4) > div > div:nth-child(2) > div:nth-child(2)', selectorBaseStats);
  const premierPlayed = Number(customSelector(loadedPage, 'div:nth-child(4) > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > span.total-value', selectorBaseStats));
  const premierWins = Number(customSelector(loadedPage, 'div:nth-child(4) > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > span.total-value', selectorBaseStats));
  const premierLoses = Number(customSelector(loadedPage, 'div:nth-child(4) > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > span.total-value', selectorBaseStats));
  const premierDraws = Number(customSelector(loadedPage, 'div:nth-child(4) > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(4) > span.total-value', selectorBaseStats));
  const premierPorcHS = customSelector(loadedPage, 'div:nth-child(5) > div > div:nth-child(2) > div:nth-child(2)', selectorBaseStats);
  const premierKills = Number(customSelector(loadedPage, 'div:nth-child(5) > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > span.total-value', selectorBaseStats));
  const premierDeaths = Number(customSelector(loadedPage, 'div:nth-child(5) > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > span.total-value', selectorBaseStats));
  const premierAssists = Number(customSelector(loadedPage, 'div:nth-child(5) > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(3) > span.total-value', selectorBaseStats));
  const premierFlatHS = Number(customSelector(loadedPage, 'div:nth-child(5) > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(4) > span.total-value', selectorBaseStats));
  const premierADR = customSelector(loadedPage, 'div:nth-child(6) > div > div:nth-child(2) > div:nth-child(2)', selectorBaseStats);
  const premierDamage = customSelector(loadedPage, 'div:nth-child(6) > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > span.total-value', selectorBaseStats);
  const premierRounds = Number(customSelector(loadedPage, 'div:nth-child(6) > div > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > span.total-value', selectorBaseStats));

  const selectorTab1 = '#player-overview > div.stats-col-3 > div > div:nth-child(2) > div:nth-child(1) > div > div > div:nth-child(2) > ';

  const premierPlayedMap1 = customSelector(loadedPage, 'div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span', selectorTab1);
  const premierPlayedMap2 = customSelector(loadedPage, 'div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span', selectorTab1);
  const premierPlayedMap3 = customSelector(loadedPage, 'div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > span', selectorTab1);
  const premierPlayedMap4 = customSelector(loadedPage, 'div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > span', selectorTab1);
  const premierMapCount1 = Number(customSelector(loadedPage, 'div:nth-child(1) > div:nth-child(1) > div:nth-child(2)', selectorTab1));
  const premierMapCount2 = Number(customSelector(loadedPage, 'div:nth-child(2) > div:nth-child(1) > div:nth-child(2)', selectorTab1));
  const premierMapCount3 = Number(customSelector(loadedPage, 'div:nth-child(3) > div:nth-child(1) > div:nth-child(2)', selectorTab1));
  const premierMapCount4 = Number(customSelector(loadedPage, 'div:nth-child(4) > div:nth-child(1) > div:nth-child(2)', selectorTab1));

  const premierMostPlayedMaps = [
    { id: 1, map: premierPlayedMap1, count: premierMapCount1 },
    { id: 2, map: premierPlayedMap2, count: premierMapCount2 },
    { id: 3, map: premierPlayedMap3, count: premierMapCount3 },
    { id: 4, map: premierPlayedMap4, count: premierMapCount4 }
  ];

  const selectorTab2 = '#player-overview > div.stats-col-3 > div > div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(2) > ';

  const premierMap1 = customSelector(loadedPage, 'div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span', selectorTab2);
  const premierMap2 = customSelector(loadedPage, 'div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span', selectorTab2);
  const premierMap3 = customSelector(loadedPage, 'div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > span', selectorTab2);
  const premierMap4 = customSelector(loadedPage, 'div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > span', selectorTab2);
  const premierMapWinRatio1 = customSelector(loadedPage, 'div:nth-child(1) > div:nth-child(1) > div:nth-child(2)', selectorTab2);
  const premierMapWinRatio2 = customSelector(loadedPage, 'div:nth-child(2) > div:nth-child(1) > div:nth-child(2)', selectorTab2);
  const premierMapWinRatio3 = customSelector(loadedPage, 'div:nth-child(3) > div:nth-child(1) > div:nth-child(2)', selectorTab2);
  const premierMapWinRatio4 = customSelector(loadedPage, 'div:nth-child(4) > div:nth-child(1) > div:nth-child(2)', selectorTab2);

  const premierBestWinRatioMaps = [
    { id: 1, map: premierMap1, count: premierMapWinRatio1 },
    { id: 2, map: premierMap2, count: premierMapWinRatio2 },
    { id: 3, map: premierMap3, count: premierMapWinRatio3 },
    { id: 4, map: premierMap4, count: premierMapWinRatio4 }
  ];

  const selectorTab3 = '#player-overview > div.stats-col-3 > div > div:nth-child(3) > div:nth-child(1) >';

  const premierGun1 = loadedPage(`${selectorTab3} div > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > img`).attr('alt');
  const premierGun2 = loadedPage(`${selectorTab3} div > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div > img`).attr('alt');
  const premierGun3 = loadedPage(`${selectorTab3} div > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div > img`).attr('alt');
  const premierGun4 = loadedPage(`${selectorTab3} div > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div > img`).attr('alt');
  const premierGunKills1 = Number(customSelector(loadedPage, 'div > div:nth-child(2) > div:nth-child(1) > span', selectorTab3));
  const premierGunKills2 = Number(customSelector(loadedPage, 'div > div:nth-child(3) > div:nth-child(1) > span', selectorTab3));
  const premierGunKills3 = Number(customSelector(loadedPage, 'div > div:nth-child(4) > div:nth-child(1) > span', selectorTab3));
  const premierGunKills4 = Number(customSelector(loadedPage, 'div > div:nth-child(5) > div:nth-child(1) > span', selectorTab3));

  const premierMostUsedGuns = [
    { id: 1, gun: premierGun1, killCount: premierGunKills1 },
    { id: 2, gun: premierGun2, killCount: premierGunKills2 },
    { id: 3, gun: premierGun3, killCount: premierGunKills3 },
    { id: 4, gun: premierGun4, killCount: premierGunKills4 }
  ];

  const selectorTab4 = '#player-overview > div.stats-col-3 > div > div:nth-child(3) > div:nth-child(2) >';

  const premierHsGun1 = loadedPage(`${selectorTab4} div > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > img`).attr('alt');
  const premierHsGun2 = loadedPage(`${selectorTab4} div > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div > img`).attr('alt');
  const premierHsGun3 = loadedPage(`${selectorTab4} div > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div > img`).attr('alt');
  const premierHsGun4 = loadedPage(`${selectorTab4} div > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div > img`).attr('alt');
  const premierHsGunRatio1 = customSelector(loadedPage, 'div > div:nth-child(2) > div:nth-child(1) > span', selectorTab4);
  const premierHsGunRatio2 = customSelector(loadedPage, 'div > div:nth-child(3) > div:nth-child(1) > span', selectorTab4);
  const premierHsGunRatio3 = customSelector(loadedPage, 'div > div:nth-child(4) > div:nth-child(1) > span', selectorTab4);
  const premierHsGunRatio4 = customSelector(loadedPage, 'div > div:nth-child(5) > div:nth-child(1) > span', selectorTab4);

  const premierMostHeadshotGuns = [
    { id: 1, gun: premierHsGun1, killCount: premierHsGunRatio1 },
    { id: 2, gun: premierHsGun2, killCount: premierHsGunRatio2 },
    { id: 3, gun: premierHsGun3, killCount: premierHsGunRatio3 },
    { id: 4, gun: premierHsGun4, killCount: premierHsGunRatio4 }
  ];

  const playerInfo = {
    steamID,
    nickname,
    atualRank,
    bestRank,
    allCompWins,
    lastUpdate,
    kd,
    premierWinrate,
    premierPlayed,
    premierWins,
    premierLoses,
    premierDraws,
    premierPorcHS,
    premierKills,
    premierDeaths,
    premierAssists,
    premierADR,
    premierDamage,
    premierFlatHS,
    premierRounds,
    premierMostPlayedMaps,
    premierBestWinRatioMaps,
    premierMostUsedGuns,
    premierMostHeadshotGuns
  }

  page.close();
  return playerInfo;
}





