import { Room } from './room';

describe('Room', () => {
  it('should be defined', () => {
    expect(new Room(1, 'Test')).toBeDefined();
  });
});
