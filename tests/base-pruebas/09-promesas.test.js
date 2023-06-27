import { describe } from '@jest/globals';
import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Test in 09-promesas', () => {

    test('getHeroeByIdAsync returned one heroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {

                expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

                done();
            }
        );
        //expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    })

    test('getHeroeByIdAsync doest not found hero', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            .catch( error => {

                expect(error).toBe('No se pudo encontrar el héroe');
                console.log("🚀 ~ file: 09-promesas.test.js:34 ~ test ~ error:", error)

                done();
            }
        );
        //expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    })

})

