import {assert} from 'chai';
import service from './service';

describe('Example service', () => {
  describe('#hello()', () => {
    it('should return correct message', () => {
      assert.deepEqual(service.hello(), {example: 'hello world'});
    });
  });
});
