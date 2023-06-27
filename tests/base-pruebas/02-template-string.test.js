import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Test in 02-template-template-string', () => {

    test('getSaludo returned "Hola Tony montana"', () => {
        const name = 'Tony montana';
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    })
})