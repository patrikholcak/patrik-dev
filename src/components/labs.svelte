<script>
  import { animateFilter } from '../util'

  let svg
  let visible = false;


  const mountObserver = (element) => {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          visible = true

          setTimeout(() => {
            animateFilter(entry.target, 1500);
          }, 400);

          observer.unobserve(element);
        }
      })

      observer.observe(element)
    } else {
      visible = true
      animateFilter(element, 0)
    }
  }

  $: watcher = svg ? mountObserver(svg) : undefined
</script>

<style>
  svg {
    margin: 5rem 0;
    transform: scale(0);
    will-change: transform;
    transition: transform 500ms;
  }

  svg.visible {
    transform: scale(1);
  }

  .visible path,
  .visible circle {
    transition: transform 1500ms 200ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  .visible path {
    transform: translateX(0) scale(1);
  }

  .visible circle {
    transform: scale(0);
    transition-duration: 500ms;
    transition-timing-function: ease;
  }

  g {
    filter: url(#blob);
  }

  path,
  circle {
    transform-origin: 50%;
    fill: var(--textColor);
  }

  .l {
    transform: scale(0.8) translateX(243px);
  }

  .a {
    transform: scale(0.8) translateX(89px);
  }

  .b {
    transform: scale(0.8) translateX(-80px);
  }

  .s {
    transform: scale(0.8) translateX(-216px);
  }
</style>

<svg
  bind:this={svg}
  class:visible
  width="100%"
  height="180"
  viewBox="0 0 537 180"
>
  <defs>
    <filter id="blob">
      <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
      <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 70 -30"
        result="blobbing"
      />
      <feBlend in="SourceGraphic" in2="blobbing" />
      <feComposite in="SourceGraphic" in2="blobbing" operator="atop" />
    </filter>
  </defs>

  <g>
    <path
      class="l"
      d="M69.2 115.4h41.1V160H20V20h49.2V115.4z"
    />
    <path
      class="a"
      d="M260.1 159.9L215.7 20h-34.1l-44.2 139.9H260.1z"
    />
    <path
      class="b"
      d="M368.3 88.2c7-3.4 17.2-13.4 17.2-28.9 0-24-15.8-39.3-43-39.3h-55.9v140h58.2c24.8 0 42.6-14.2 42.6-40.3C387.4 101 376.7 92.2 368.3 88.2z"
    />
    <path
      class="s"
      d="M446.7 102.9l-34 29.9c11.3 19.1 34.3 26.5 49.1 27.1 32.6 1.3 54-18.7 54.9-40.1v-.1l0 0c0-.2 0-.5 0-.8l0 0v-.1l0 0c.6-15.2-5.4-30.6-26.7-38.6 0 0-5.2-1.9-9.4-3.2l34-29.9c-11.4-19-34.3-26.4-49.2-27 -32.6-1.3-54 18.7-54.9 40.1v.1l0 0c0 .2 0 .5 0 .8l0 0v.1l0 0c-.6 15.2 5.4 30.6 26.7 38.6C437.3 99.7 443.2 101.8 446.7 102.9z"
    />
    <circle cx="268.4" cy="90" r="70" />
  </g>
</svg>
