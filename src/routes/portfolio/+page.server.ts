import getter from '$lib/assets/images/content/portfolio';

import type { PageServerLoad } from './$types'
export const load: PageServerLoad = async () => ({
  ...await getter()
});
