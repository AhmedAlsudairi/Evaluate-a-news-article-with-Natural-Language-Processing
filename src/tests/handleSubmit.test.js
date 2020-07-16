import { handleSubmit } from '../client/js/handleSubmit';



describe('Testing the handleSubmit function', () => {

  test('Testing handleSubmit() , is it defined?', async () => {
    expect(handleSubmit).toBeDefined()
  })

  test('Testing the checkURL(), is it function?', async () => {
    expect(typeof handleSubmit).toBe('function');
  });

});
