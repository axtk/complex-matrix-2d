import ComplexMatrix2D from './ComplexMatrix2D';
import { isWellFormed as isWellFormedNumber } from 'complex';

// @test expect(isWellFormed(null)).toBe(false);

// @test
// import { RE_1, ComplexNumber } from 'complex';
// expect(isWellFormed(new ComplexMatrix2D(RE_1, RE_1, new ComplexNumber('x'), RE_1))).toBe(false);

export default function isWellFormed(matrix) {
    if (!matrix || !(matrix instanceof ComplexMatrix2D))
        return false;
    for (let i = 0; i < matrix.values.length; i++) {
        if (!isWellFormedNumber(matrix.values[i]))
            return false;
    }
    return true;
}
