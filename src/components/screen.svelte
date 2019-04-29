<script>
  export let hero = false;
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    padding-top: 5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.02);
  }

  .hero {
    justify-content: center;
    padding-top: 0;
    min-height: 100vh;
  }

  div:nth-of-type(odd) {
    background: var(--siteBgDark);
  }
</style>

<div class:hero>
  <slot />
</div>
