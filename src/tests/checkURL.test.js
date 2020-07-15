import {checkURL} from '../client/js/checkURL';



describe('Testing the form submition',()=>{

    test('Testing the checkURL(), is it defined?',()=>{
        expect(checkURL).toBeDefined();
    });

    test('Testing the checkURL(), is it function?',()=>{
        expect(typeof checkURL).toBe('function');
    });
})
