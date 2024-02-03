import { getSteamIdUsers, findPlayerCS2, saveNewUserCS2, updatePlayerCS2 } from './db/cs_stats';
import { searchCS2Players } from './searcher/cs_stats';
import { searchHoroscope } from './searcher/horoscope';
import cron from 'node-cron';
import puppeteer from 'puppeteer-extra';

cron.schedule("0 5 * * * * ", () => {
    const date = new Date();
    console.log(`This task is running every day at 5am - JobName = Horoscope - ${date.getHours()}:${date.getMinutes()}`);
    searchHoroscope();
});

cron.schedule("0 0 * * 1 *", async () => {

    const date = new Date();
    console.log(`This task is running every week - JobName = PlayerCS2 - ${date.getHours()}:${date.getMinutes()}`);
    const browser = await puppeteer.launch({ headless: false, executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", });
    const users = await getSteamIdUsers();
    let count = 0;
    users.forEach(async user => {
        count++;
        console.log(count);
        const steamID = user.ids.steam.value;
        const updatedPlayerInfo = await searchCS2Players(steamID, browser);
        let player = await findPlayerCS2(steamID);
        if (player) {
            console.log('Existe - ' + updatedPlayerInfo);
            updatePlayerCS2(player.id, updatedPlayerInfo);
        } else {
            console.log('Não existe - ' + updatedPlayerInfo);
            saveNewUserCS2(updatedPlayerInfo);
        }
    });
});