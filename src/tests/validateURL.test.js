import {validateURL} from '../client/js/validateURL';



describe('Testing the form submition',()=>{
    
    test('Testing the URLvalidition, is the URL valid?',()=>{

       let url = 'http://www.bbc.com/sport/0/football/25912393';

        let valid = validateURL(url);

        expect(valid).toBe(true);
    });
})
