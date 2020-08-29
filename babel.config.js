const prodEnvOptions = {
  targets: 'ie 6',
  useBuiltIns: 'usage',
  corejs: 3,
}

const devEnvOptions = {
  targets: 'last 1 version',
}

function config(api) {
  api.cache(true)

  const production = process.env.NODE_ENV === 'production'

  const presets = [
    ['@babel/preset-env', production ? prodEnvOptions : devEnvOptions],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ]

  const plugins = [
    '@babel/plugin-transform-runtime'
  ]

  const ignore = ['node_modules']

  return { presets, plugins, ignore }
}

module.exports = config
