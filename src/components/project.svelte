<script>
  import Screen from './screen.svelte';
  import Container from './container.svelte';
  import SafariView from './safari-view.svelte';
  import ResponsivePicture from './responsive-picture.svelte';

  export let title;
  export let desc;
  export let tags = false;
  export let url = false;
  export let images = false;
  export let Children = false;
</script>

<style>
  h3 {
    font-size: 2.5rem;
    text-align: center;
  }

  hr {
    width: 5rem;
    height: 0.125rem;
    margin: 1.5rem 0;
    background: var(--textColorHover);
    border: none;
  }

  p {
    max-width: 32rem;
    text-align: center;
    font-family: "Roboto", sans-serif;
    color: var(--textColorMuted);
    line-height: 125%;
  }

  .tags {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 1rem;
    margin-top: 2rem;
  }

  .tag {
    font-family: "Roboto", sans-serif;
    border: 2px solid currentColor;
    border-radius: 0.4rem;
    line-height: 1.5rem;
    padding: 0 0.5rem;
    font-size: 0.8rem;
    color: var(--textColorMuted);
    font-weight: 500;
    white-space: nowrap;
  }

  .background {
    display: block;
    width: 100%;
  }

  .layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  @media (max-width: 60rem) {
    h3 {
      font-size: 1.5rem;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .tag {
      margin: 0.5rem;
    }
  }
</style>

<Screen autoheight>
  <Container centered>
    <h3>{title}</h3>
    <hr />
    <p>{desc}</p>

    {#if tags}
      <div class="tags">
        {#each tags as tag}
          <div class="tag">{tag}</div>
        {/each}
      </div>
    {/if}

    {#if images}
      <SafariView url={url}>
        {#each images as { lowres, hires, className, style }, index}
          <ResponsivePicture
            lowres={lowres}
            hires={hires}
          >
            <img
              class:background={index === 0}
              class:layer={index > 0}
              class={className}
              src={hires}
              alt={title}
              style={style}
            />
          </ResponsivePicture>
        {/each}
      </SafariView>
    {:else}
      <Children />
    {/if}
  </Container>
</Screen>
