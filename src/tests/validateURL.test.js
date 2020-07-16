import { validateURL } from '../client/js/validateURL';



describe('Testing the validateURL function', () => {

    test('Testing the validateURL(), is it defined?', () => {
        expect(validateURL).toBeDefined();
    });

    test('Testing the validateURL(), is it function?', () => {
        expect(typeof validateURL).toBe('function');
    });

    test('Testing the URL validition, is the URL valid?', () => {

        const url = 'http://www.bbc.com/sport/0/football/25912393';

        const valid = validateURL(url);

        expect(valid).toBe(true);
    });

    test('Testing the URL validition, is the URL not valid?', () => {

        const url = 'Ahmed project';

        const valid = validateURL(url);

        expect(valid).toBe(false);
    });

})
