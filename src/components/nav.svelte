<script>
  import Container from './container.svelte';

  let expanded = false;
</script>

<style>
  .nav-wrap {
    position: -webkit-sticky;
    position: sticky;
    z-index: 3;
    top: 0;
    margin-bottom: -4.2rem;
    background: var(--siteBg);
  }

  a {
    padding: 1.5rem 0.8rem;

    &:hover {
      color: var(--textColorHover);
    }
  }

  .button {
    position: relative;
    display: none;
    width: 4rem;
    height: 4rem;
    border: none;
    background: none;

    &.expanded {
      :before {
        transform: rotate(45deg)
      }

      &:after {
        transform: rotate(-45deg)
      }
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 2rem;
      height: 0.15rem;
      background: var(--textColor);
      left: 50%;
      margin-left: -1rem;
      transition: transform 200ms;
    }

    &:before {
      transform: translateY(-0.25rem)
    }

    &:after {
      transform: translateY(0.25rem)
    }
  }

  nav {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 1rem;
  }

  @media (max-width: 60rem) {
    .wrap {
      font-size: 1rem;
    }

    .button {
      display: block;
    }

    nav {
      position: absolute;
      display: none;
      flex-direction: column;
      width: 100%;
      top: 100%;
      left: 0;
      height: 100vh;
      background: var(--siteBg);
      padding: 0 2rem;

      &.expanded {
        display: flex;
      }
    }
  }
</style>

<div class="nav-wrap">
  <Container noPadding horizontal centered>
    <a href="/">
      <strong>patrik.dev</strong>
    </a>

    <button
      class:expanded
      class="button"
      aria-haspopup="true"
      aria-controls="menu"
      aria-label="Navigation"
      aria-expanded={expanded}
      on:click={() => expanded = !expanded}
    >
    </button>

    <nav
      id="menu"
      class:expanded
      on:click={() => expanded = false}
    >
      <a href="#work">Work</a>
      <a href="//twitter.com/patrik774" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="//github.com/patrikholcak" target="_blank" rel="noopener noreferrer">Github</a>
    </nav>
  </Container>
</div>
