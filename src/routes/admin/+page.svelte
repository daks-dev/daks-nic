<script lang="ts">
  import { DEV } from 'esm-env';
  import { AppHead, Icon, SvelteKit } from 'daks-svelte';

  import type { PageData } from './$types';
  export let data: PageData;
  const { version } = data;

  let waiting = false;
  let done: any;

  const robots = 'noindex, follow';
  const title = 'НИЦ СЭ • Admin';
</script>

<AppHead
  {robots}
  {title} />

<main>
  <header class="content flex items-center gap-8 mb-4">
    {#if DEV}
      <h1 class="title grow">Admin</h1>
    {:else}
      <div class=" grow">
        <h1 class="title mb-4">SvelteKit</h1>
        <h4 class="font-semibold text-gray-400">tailwindcss</h4>
      </div>
    {/if}
    <a
      rel="noreferrer nofollow"
      class="
        w-24 sm:w-32 drop-shadow-md hover:drop-shadow-deep hover:scale-105
        transition-easy"
      href="https://github.com/daks-dev/daks-nic"
      target="_blank">
      <img
        class="w-full h-auto"
        src="/assets/icons/github.svg"
        alt="GitHUB"
        decoding="async"
        loading="lazy" />
      <b
        class="
          absolute top-4 left-1/2 -translate-x-1/2 pr-0.5
          text-xs text-slate-400">
        {version}
      </b>
    </a>
  </header>

  {#if DEV}
    <div class="content flex">
      <div class="flex flex-col gap-8 text-2xl pr-8 border-r-2">
        <a
          class="button max-w-full rounded border"
          class:disabled={waiting}
          href="/admin/iconify">
          Iconify
        </a>
      </div>
      <div class="flex justify-around gap-8 grow">
        {#if waiting}
          <Icon
            icon="svg-spinners:180-ring-with-bg"
            class="w-20 h-20 mx-auto self-center" />
        {:else if done}
          {#each Object.keys(done) as key}
            <div class="flex flex-col">
              <b class="font-mono text-xl text-slate-500">{key}</b>
              {#each done[key] as el}
                <span>{el}</span>
              {/each}
            </div>
          {/each}
        {:else}
          <Icon
            icon="ic:round-close"
            class="w-20 h-20 mx-auto self-center text-gray-300" />
        {/if}
      </div>
    </div>
  {:else}
    <SvelteKit class="content items-center" />
  {/if}
</main>
