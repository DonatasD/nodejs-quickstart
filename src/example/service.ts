import {Example} from './types';

const hello = (): Example => {
  return {
    example: 'hello world',
  };
};

const service = {
  hello,
};
export default service;
