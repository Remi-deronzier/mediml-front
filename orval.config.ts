export default {
  'stroke-api': {
    input: './src/api/stroke-api-contract.json',
    output: {
      target: './src/api/stroke-api.ts',
      override: {
        mutator: {
          path: './src/api/stroke-axios-config.ts',
          name: 'strokeApiInstance',
        },
      },
    },
  },
};
