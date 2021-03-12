import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'source/index.ts',
  output: [
    {
      file: 'bundle/index.cjs.js',
      format: 'cjs',
      exports: 'auto',
    },
    {
      file: 'bundle/index.es.js',
      format: 'es',
    },
  ],
  external: ['path', 'events'],
  plugins: [typescript()],
};
