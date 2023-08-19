import { promises as fs } from 'fs';
import { resolve } from 'path';

const pkg = JSON.parse(await fs.readFile(resolve(process.cwd(), 'package.json'), 'utf8'));
const { version } = pkg;

/*
import { DEV } from 'esm-env';
import { imagetools } from 'daks-svelte/server';
const { generate, variants } = imagetools;

DEV && generate('lib/assets/images/gallery', variants().gallery);
*/

import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => ({
  version
});
