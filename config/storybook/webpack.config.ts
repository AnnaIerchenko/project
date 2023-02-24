import webpack, { RuleSetRule } from 'webpack'
import { BuildPaths } from '../build/types/config'
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config}: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  }
  config.resolve?.modules?.push(paths.src)
  config.resolve?.extensions?.push('.ts', '.tsx', '.js')

  // config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
  //   if (/svg/.test(rule.test as string)) {
  //     return { ...rule, exclude: /\.svg$/i };
  //   }
  //   return rule;
  // })
  if (config.module?.rules) {
    config.module.rules = config.module?.rules?.map((rule: webpack.RuleSetRule | '...') => {
    if (rule !== '...' && /svg/.test(rule.test as string)) {
    return { ...rule, exclude: /\.svg$/i };
    }
    
    return rule;
    });
  }
config.module?.rules?.push({
  test: /\.svg$/,
  use: ['@svgr/webpack'],
  
})
  config.module?.rules?.push()
  config.module?.rules?.push(buildCssLoader(true))

  config?.plugins?.push(
    new webpack.DefinePlugin({
    __IS_DEV__: false,
    }),
    );

  return config
}