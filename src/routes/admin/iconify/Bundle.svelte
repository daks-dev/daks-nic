<script lang="ts">
  import { Icon } from 'daks-svelte';

  export let prefix: string;
  export let icons: string[];

  const handle = (ev: Event) => {
    const text = (ev.target as HTMLElement).dataset.icon;
    if (text) navigator.clipboard.writeText(text).then(() => console.log(text));
  };
</script>

<div
  class="
    grid gap-8 py-4
    grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
    text-neutral-600 dark:text-neutral-400">
  {#each icons as icon}
    {@const name = `${prefix}:${icon}`}
    <button
      on:click={handle}
      class="
        flex flex-col justify-start items-center
        hover:text-slate-500 cursor-grab"
      title="copy to clipboard"
      data-icon={name}>
      <Icon
        icon={name}
        class="
          pointer-events-none
          w-24 h-24 md:w-32 md:h-32 xl:w-36 xl:h-36" />
      <span
        class="
          pointer-events-none
          text-center text-sm">
        <b class="block text-slate-500">{prefix}</b>
        {icon}
      </span>
    </button>
  {/each}
</div>
