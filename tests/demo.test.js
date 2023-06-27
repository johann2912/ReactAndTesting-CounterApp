describe('All test in <DemoComponenet />', () => {

    test('Test dont send error', () => {
        /**
         * initialization
         */
        const message1 = 'Hola mundo';
    
        /**
         * estimulo
         */
        const message2 = message1.trim();
    
        /**
         * assertions (comportamiento esperado)
         */
        expect(message1).toBe(message2);
    })
    
})
