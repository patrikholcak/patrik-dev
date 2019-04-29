<script>
  export let hiresMedia = "(min-width: 35rem) and (min-resolution: 192dpi)";
  export let hires;
  export let lowresMedia = "(max-width: 35rem), (max-resolution: 192dpi)";
  export let lowres;
</script>

<picture>
  <source media={hiresMedia} srcset={hires} />
  <source media={lowresMedia} srcset={lowres} />
  <slot />
</picture>
