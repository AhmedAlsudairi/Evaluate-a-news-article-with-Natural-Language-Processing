import {handleSubmit} from '../client/js/handleSubmit';



describe('Testing the form submition',()=>{

  test('Testing handleSubmit() , is it defined?', () => {
    expect(handleSubmit).toBeDefined()
  })

  test('Testing the checkURL(), is it function?',()=>{
    expect(typeof handleSubmit).toBe('function');
});
  
});
