import PlayerCS2 from './models/cs_stats';
import Cadu_User from './models/users';

export async function saveNewUserCS2(userInfoCS2: any) {
  try {
    const userCS2 = await new PlayerCS2(userInfoCS2).save();
  } catch (error) {
    console.log(error);
    throw (error);
  }
}

export async function updatePlayerCS2(id: string, userInfoCS2: any) {
  try {
    await new PlayerCS2().updateOne(
      { _id: id },
      { $set: userInfoCS2 });
  } catch (error) {
    throw (error);
  }
}

export async function findPlayerCS2(steamID: string) {
  let player;
  try {
    player = await PlayerCS2.findOne({ steamID });
  } catch (error) {
    throw (error);
  }
  return player ? player : null;
}

export async function getSteamIdUsers() {
  let users;
  const filter = {
    'ids.steam.value': {
      '$exists': true,
      '$ne': null
    },
    'games.cs_stats': true
  };

  try {
    users = await Cadu_User.find(filter);
  } catch (error) {
    throw (error);
  }

  return users;
}