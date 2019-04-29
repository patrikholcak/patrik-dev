<script>
  import { getPreferredTheme } from '../util';
  import { COLOR_SCHEMES } from "../constants";

  export let url;

  let theme;
  getPreferredTheme((userTheme) => theme = userTheme);

  $: colorScheme = COLOR_SCHEMES[theme];
</script>

<style>
  .window {
    width: 100%;
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 30px 48px 0 rgba(0, 0, 0, 0.6);
    margin: 5rem 0;
  }

  .content {
    position: relative;
  }

  svg {
    width: 100%;
    display: block;
  }

  tspan {
    font-family: "Roboto", sans-serif;
  }

  @media (max-width: 60rem) {
    .window {
      border-radius: 2px;
    }
  }
</style>

<div class="window">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1280 38"
    preserveAspectRatio="none"
  >
    <rect fill="url(#safariBar)" x="0" y="0" width="1280" height="38" />
    <path
      fill="url(#safariButton)"
      strokeWidth={colorScheme.button.strokeWidth}
      stroke={colorScheme.button.strokeColor}
      d="M78 12v15a4 4 0 0 0 4 4h17a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4H82a4 4 0 0 0-4 4zm26 0v15a4 4 0 0 0 4 4h17a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4h-17a4 4 0 0 0-4 4zm41 0v15a4 4 0 0 0 4 4h30a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4h-30a4 4 0 0 0-4 4zm1087 0v15a4 4 0 0 0 4 4h30a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4h-30a4 4 0 0 0-4 4zm-46 0v15a4 4 0 0 0 4 4h30a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4h-30a4 4 0 0 0-4 4zm-808 0v15a4 4 0 0 0 4 4h516a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4H382a4 4 0 0 0-4 4z"
    />
    <path
      fill="#fff"
      d="M82 8h17a4 4 0 0 1 4 4v1a4 4 0 0 0-4-4H82a4 4 0 0 0-4 4v-1a4 4 0 0 1 4-4zm26 0h17a4 4 0 0 1 4 4v1a4 4 0 0 0-4-4h-17a4 4 0 0 0-4 4v-1a4 4 0 0 1 4-4zm41 0h30a4 4 0 0 1 4 4v1a4 4 0 0 0-4-4h-30a4 4 0 0 0-4 4v-1a4 4 0 0 1 4-4zm1087 0h30a4 4 0 0 1 4 4v1a4 4 0 0 0-4-4h-30a4 4 0 0 0-4 4v-1a4 4 0 0 1 4-4zm-46 0h30a4 4 0 0 1 4 4v1a4 4 0 0 0-4-4h-30a4 4 0 0 0-4 4v-1a4 4 0 0 1 4-4zM382 8h516a4 4 0 0 1 4 4v1a4 4 0 0 0-4-4H382a4 4 0 0 0-4 4v-1a4 4 0 0 1 4-4z"
      opacity=".1"
    />
    <path
      fill="#ff353f"
      d="M25 19a6 6 0 0 0-6-6 6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6z"
    />
    <path
      fill="#ffb000"
      d="M45 19a6 6 0 0 0-6-6 6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6z"
    />
    <path
      fill="#28c93f"
      d="M65 19a6 6 0 0 0-6-6 6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6z"
    />
    <path
      fill="none"
      stroke={colorScheme.button.text}
      stroke-linecap="round"
      stroke-width="1.5"
      d="M92.8 15.3l-5 5m5 5l-5-5"
    />
    <path
      fill="none"
      stroke={colorScheme.button.disabledText}
      stroke-linecap="round"
      stroke-width="1.5"
      d="M114 15l5 5m0 0l-5 5"
    />
    <path
      fill={colorScheme.button.disabledText}
      d="M159 17h2v-1h-2zm0 2h2v-1h-2zm0 2h2v-1h-2z"
    />
    <path fill={colorScheme.button.text} d="M888.3 12.3v5.5l4.5-2.7z" />
    <path
      fill="none"
      stroke={colorScheme.button.text}
      d="M888.8 14.8a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5v-.5m-736.3-3.8v8c0 .6.5 1 1 1h11c.6 0 1-.4 1-1v-8c0-.5-.4-1-1-1h-11a1 1 0 0 0-1 1zm5 8.5v-9zM1255 22h.8c.2 0 .3-.1.3-.2v-6.5l-.2-.2h-6.5c-.1 0-.2.1-.2.3v.8M1204 18h-2.7c-.1 0-.2.1-.2.3v7.5c0 .1.1.3.3.3h8.5l.3-.2v-7.5l-.2-.2h-2.7m-1.8 3.3V13m0-.5l2.5 3m-2.5-3l-2.5 3m43 3v6c0 .3.2.5.5.5h6c.3 0 .5-.2.5-.5v-6c0-.3-.2-.5-.5-.5h-6c-.3 0-.5.2-.5.5z"
    />
    <text transform="translate(640 23)">
      <tspan
        fill={colorScheme.text}
        font-family="Roboto"
        font-size="11"
        font-weight="400"
        text-anchor="middle"
      >
        {url}
      </tspan>
    </text>
  </svg>
  <div class="content">
    <slot />
  </div>
</div>
