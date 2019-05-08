<script>
  import { getPreferredTheme } from './util';
  import { PROJECTS } from './data';
  import { COLOR_SCHEMES } from "./constants";

  import Nav from './components/nav.svelte';
  import Hero from './components/hero.svelte';
  import Project from './components/project.svelte';

  let theme;
  getPreferredTheme((userTheme) => theme = userTheme);

  $: colorScheme = COLOR_SCHEMES[theme];
</script>

<style>
  @import "./src/global.css";
</style>

<Nav />
<Hero />

<div id="work">
  {#each PROJECTS as project}
    <Project {...project} />
  {/each}
</div>

<svg width="0" height="0" style="position: absolute">
  <defs>
    <linearGradient id="safariBar" x1="0" y1="0" y2="1">
      <stop offset="0" stop-color={colorScheme.bar.top} />
      <stop offset="1" stop-color={colorScheme.bar.bottom} />
    </linearGradient>
    <linearGradient id="safariButton" x1="0" y1="0" y2="1">
      <stop offset="0" stop-color={colorScheme.button.top} />
      <stop offset="1" stop-color={colorScheme.button.bottom} />
    </linearGradient>
  </defs>
</svg>
