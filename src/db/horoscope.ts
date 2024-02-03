import Horoscope from '../db/models/horoscope';

export async function saveHoroscope(horoscope: any) {
    try {
        await Horoscope.deleteMany({});
        const todayHoroscope = await new Horoscope(horoscope).save();
    } catch (error) {
        throw (error);
    }
}