<script>
  export let noPadding = false;
  export let horizontal = false;
  export let centered = false;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 60rem;
    padding: 0 0.8rem;
    margin: 0 auto;
  }

  .noPadding {
    padding: 0;
  }

  .horizontal {
    flex-direction: row;
    justify-content: space-between;
  }

  .centered {
    align-items: center;
  }

  @media (max-width: 60rem) {
    .container:not(.noPadding) {
      padding: 0 2rem;
    }
  }
</style>

<div class:noPadding class:horizontal class:centered class="container">
  <slot />
</div>
