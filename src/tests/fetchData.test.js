import { fetchData } from '../client/js/fetchData';
import * as user from '../client/js/fetchData';
jest.mock('../client/js/fetchData');


describe('Testing the fetchData function', () => {

  test('Testing fetchData() , is it defined?', async () => {
    expect(fetchData).toBeDefined()
  })

  test('Testing the fetchData(), is it function?', async () => {
    expect(typeof fetchData).toBe('function');
  });

  it('Testing the fetchData(), connecting to API', async () => {
    expect.assertions(1);
    const data = await user.fetchData('Ahmed project');
    expect(typeof data).toEqual('undefined');
  });

})




