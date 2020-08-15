import { sum, multiply as multiplyNumbers } from 'complex';
import ComplexMatrix2D from './ComplexMatrix2D';

// @test
// import UNIT from './UNIT';
// expect(multiply(UNIT, UNIT)).toStrictEqual(UNIT);

export default function multiply(matrix1, matrix2, ...matrixN) {
    let m1 = matrix1.values, m2 = matrix2.values;
    let product = new ComplexMatrix2D(
        sum(multiplyNumbers(m1[0], m2[0]), multiplyNumbers(m1[1], m2[2])),
        sum(multiplyNumbers(m1[0], m2[1]), multiplyNumbers(m1[1], m2[3])),
        sum(multiplyNumbers(m1[2], m2[0]), multiplyNumbers(m1[3], m2[2])),
        sum(multiplyNumbers(m1[2], m2[1]), multiplyNumbers(m1[3], m2[3]))
    );
    for (let matrix of matrixN)
        product = multiply(product, matrix);
    return product;
}
