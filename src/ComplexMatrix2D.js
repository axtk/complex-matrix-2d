import { isComplexNumber } from 'complex';

export default class ComplexMatrix2D {
    constructor(z11, z12, z21, z22) {
        if (Array.isArray(z11) && z11.length === 4)
            this.values = z11;
        else this.values = [z11, z12, z21, z22];

        if (!this.values.every(isComplexNumber))
            throw new Error('Malformed ComplexMatrix2D');
    }
    equals(matrix, precision) {
        if (!(matrix instanceof ComplexMatrix2D))
            return false;
        for (let i = 0; i < this.values.length; i++) {
            if (!this.values[i].equals(matrix.values[i], precision))
                return false;
        }
        return true;
    }
    toString() {
        return JSON.stringify(this.values);
    }
}
