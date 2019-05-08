<script>
  import Screen from './screen.svelte';
  import Container from './container.svelte';
</script>

<style>
  h1 {
    font-size: 6rem;
    font-weight: 300;
    letter-spacing: -0.5rem;
    text-indent: -0.4rem;
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 300;
  }

  .scroll-hint {
    position: absolute;
    left: 50%;
    bottom: 2rem;
    width: 1.5rem;
    height: 2.2rem;
    border: 2px solid var(--textColorMuted);
    border-radius: 0.8rem;
    transform: translateX(-50%);

    &:before {
      position: absolute;
      content: "";
      left: 50%;
      top: 10%;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 100%;
      margin-left: -0.25rem;
      background: var(--textColorMuted);
      animation: scroll-hintAnimation ease 1.5s infinite;
    }
  }

  @keyframes scroll-hintAnimation {
    from {
      opacity: 1;
      transform: translateY(125%);
    }
    to {
      opacity: 0;
      transform: translateY(0%);
    }
  }

  @media (max-width: 60rem) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 1rem;
    }

    .scroll-hint {
      height: 2.5rem;
      border-radius: 0.4rem;

      &:before {
        top: 20%;
      }

      &:after {
        position: absolute;
        top: 0;
        left: 50%;
        content: "";
        width: 50%;
        height: 0.1rem;
        background: var(--textColorMuted);
        transform: translateX(-50%);
        border-bottom-left-radius: 1px;
        border-bottom-right-radius: 1px;
      }
    }
  }
</style>

<Screen hero>
  <Container>
    <h1>Hey! I’m <strong>Patrik</strong></h1>
    <h2>Javascript developer from <strong>Prague</strong></h2>

    <div class="scroll-hint" />
  </Container>
</Screen>
