const path = require('path');
const modulePath = path.resolve(__dirname, '..', 'common.js');

describe('common utils', () => {
  test('getRoomId returns same id regardless of order', async () => {
    const { getRoomId } = await import(modulePath);
    expect(getRoomId('user1', 'user2')).toBe(getRoomId('user2', 'user1'));
  });

  test('formatDate formats date as "day Mon"', async () => {
    const { formatDate } = await import(modulePath);
    const date = new Date(2024, 0, 5); // 5 Jan 2024
    expect(formatDate(date)).toBe('5 Jan');
  });
});
