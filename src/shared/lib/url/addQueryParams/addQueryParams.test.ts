import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('test with one param', () => {
    const params = { foo: 'bar' };
    const result = getQueryParams(params);
    expect(result).toBe('?foo=bar');
  });
  test('test with two params', () => {
    const params = { foo: 'bar', baz: 'qux' };
    const result = getQueryParams(params);
    expect(result).toBe('?foo=bar&baz=qux');
  });
});
