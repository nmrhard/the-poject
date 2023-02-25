import type { Configuration as DevServerConf } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (
  options: BuildOptions,
): DevServerConf => ({
  port: options.port,
  open: true,
  historyApiFallback: true,
  hot: true,
});
