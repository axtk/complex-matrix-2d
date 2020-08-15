const fs = require('fs');
const { EOL } = require('os');
const { babel } = require('@rollup/plugin-babel');
const { terser } = require('rollup-plugin-terser');
import { nodeResolve } from '@rollup/plugin-node-resolve';

const { NODE_ENV = 'production' } = process.env;
const plugins = NODE_ENV === 'production' ? [
    nodeResolve(),
    babel({
        exclude: 'node_modules/**'
    }),
    terser()
] : [nodeResolve()];

let bundleContent = fs.readdirSync('./src')
    .filter(name => /\.js$/.test(name))
    .map(name => {
        name = name.replace(/\.js$/, '');
        return `export { default as ${name} } from './src/${name}';`;
    })
    .join(EOL) + EOL;

fs.writeFileSync('./index.js', bundleContent);

module.exports = {
    input: './index.js',
    output: {
        name: NODE_ENV === 'production' ? null : '_ComplexMatrix2D',
        file: `./index.build${NODE_ENV === 'production' ? '' : '-' + NODE_ENV}.js`,
        format: 'iife',
        sourcemap: NODE_ENV !== 'production' && 'inline'
    },
    treeshake: NODE_ENV === 'production',
    plugins
};
