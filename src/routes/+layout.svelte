<script lang="ts">
  import { BROWSER } from 'esm-env';
  import { lazyload, AppHead, RouteTransition, ScreenBlock, YandexMetrikaInit } from 'daks-svelte';
  import { Drawer, Footer, Navbar } from '$lib/components';

  import '../app.css';
  import '$iconify';

  import type { LayoutData } from './$types';
  export let data: LayoutData;

  import { app, nav, draver } from '$configs';

  if (BROWSER) document.lazyload ??= lazyload();
</script>

<AppHead {app} />

<RouteTransition
  class="flex flex-col grow"
  refresh={data.refresh}
  mode="1">
  <slot />
</RouteTransition>

<Footer {...nav.footer} />

<Navbar {...nav.navbar} />

<Drawer {...draver} />

<ScreenBlock class="bg-neutral-100 dark:bg-gray-800" />

<YandexMetrikaInit />
