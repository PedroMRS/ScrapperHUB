import express from 'express'
import { connect } from '../src/db/connection';
import puppeteer from 'puppeteer-extra';
import { searchCS2Players } from './searcher/cs_stats'
import { findPlayerCS2, updatePlayerCS2 } from './db/cs_stats';
import { Router, Request, Response } from 'express';

const app = express();
export const route = Router();
app.use(express.json());
connect();

route.get('/health-check', (req: Request, res: Response) => {
  res.json({ message: 'im alive' })
})

route.get('/cs/stats/player/:steamid', async (req: Request, res: Response) => {
  const steamID = req.params.steamid;
  const browser = await puppeteer.launch({ headless: false, executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", });
  const result = await searchCS2Players(steamID, browser);
  let player = await findPlayerCS2(steamID);
  if (player) {
      updatePlayerCS2(player.id, result);
  }
  browser.close();
  res.status(200).json({
    status: 'success',
    data: result
  });
})

app.use(route)
app.listen(3000, () => 'server running on port 3000')