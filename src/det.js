import { subtract, multiply } from 'complex';

// @test
// import { RE_1 } from 'complex';
// import UNIT from './UNIT';
// expect(det(UNIT)).toStrictEqual(RE_1);

// @test
// import { RE_1, IM_1, ComplexNumber } from 'complex';
// import ComplexMatrix2D from './ComplexMatrix2D';
// expect(det(new ComplexMatrix2D(RE_1, IM_1, IM_1, RE_1)).equals(new ComplexNumber(2))).toBe(true);

export default function det(matrix) {
    let m = matrix.values;
    return subtract(multiply(m[0], m[3]), multiply(m[1], m[2]));
}
