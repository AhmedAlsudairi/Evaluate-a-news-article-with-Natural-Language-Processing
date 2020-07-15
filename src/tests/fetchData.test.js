import {fetchData} from '../client/js/fetchData';





describe('Testing the form submition',()=>{
  
  test('the data is peanut butter', async () => {
    const data = await fetchData('http://www.bbc.com/sport/0/football/25912393');
    expect(typeof data).toBe('object');
  });

})




