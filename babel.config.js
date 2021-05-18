module.exports = (api) => {
  const isWeb = api.caller((caller) => caller && caller.target === 'isWeb')

  return {
    presets: [
      [
        '@babel/env',
        {
          useBuiltIns: isWeb ? 'usage' : undefined,
          corejs: isWeb ? 3 : false,
        },
      ],
      '@babel/typescript',
      [
        '@babel/react',
        {
          runtime: 'automatic',
        },
      ],
    ],
    plugins: ['@babel/plugin-transform-runtime'],
    env: {
      development: {
        plugins: isWeb ? ['react-refresh/babel'] : undefined,
      },
    },
  }
}
