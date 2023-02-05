import { ResolveOptions } from "webpack";

export const buildResolvers = (): ResolveOptions => ({
  extensions: ['.js', '.ts', '.tsx'],
});
