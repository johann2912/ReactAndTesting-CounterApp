import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('All test for 05-funciones', () => {

    test('getUser returned object', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user = getUser();
        
        expect(testUser).toEqual(user);
    })

    test('getUserActive returned object with property username is equal "Kakaroto"', () => {
        const name = 'Kakaroto'
        const testUser = {
            uid: 'ABC567',
            username: name
        };
        const user = getUsuarioActivo(name);
        
        expect(testUser).toStrictEqual(user);
        expect(testUser.username).toStrictEqual(user.username);
    })

})