import {Calendar, IDatabase} from '../calendar';

describe('calendar', () => {

  describe('put', () => {
    let calendar!: Calendar;
    let database!: IDatabase;

    beforeEach(async() => {
      database = {
        get: jest.fn(),
        put: jest.fn(),
        select: jest.fn(),
      }

      calendar = new Calendar(database);
    });

    it('should keep schedules', async () => {
      const now = new Date("2023/08/20 10:00:00Z");
      await calendar?.add({
        date: now,
        subject: 'test1',
      });

      const oneDayLater = new Date(now.getTime() + 24 * 3600000);
      await calendar?.add({
        date: oneDayLater,
        subject: 'test2',
      });

      expect(database.put).toHaveBeenNthCalledWith(1, '20230820', 'test1');
      expect(database.put).toHaveBeenNthCalledWith(2, '20230821', 'test2');
      
    });
  });

});
