<script>
  import ResponsivePicture from './responsive-picture.svelte'
</script>

<style>
  .craft {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5rem 0;
  }

  .logo {
    width: 40px;
    height: 40px;
  }

  .wrap {
    position: relative;
    margin-top: 5px;
  }

  .manager {
    position: relative;
    z-index: 2;
    max-width: 308px;
    filter: drop-shadow(0 30px 50px rgba(0, 0, 0, 0.4));
  }

  .photos,
  .duplicate {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0 30px 50px rgba(0, 0, 0, 0.2));
  }

  .photos {
    max-width: 260px;
    margin-left: -230px;
  }

  .duplicate {
    max-width: 272px;
    margin-left: 230px;
  }

  @media (max-width: 49rem) {
    .craft {
      transform: scale(0.7);
      margin: -50px 0;
    }
  }

  @media (max-width: 35rem) {
    .craft {
      transform: scale(0.5);
      margin: -100px 0;
    }
  }

  @media (max-width: 24.5rem) {
    .craft {
      transform: scale(0.4);
      margin: -150px 0;
    }
  }
</style>

<div class="craft">
  <ResponsivePicture lowres="/craft.png" hires="/craft@2x.png">
    <img class="logo" src="/craft@2x.png" alt="Craft" />
  </ResponsivePicture>

  <div class="wrap">
    <ResponsivePicture lowres="/photos.png" hires="/photos@2x.png">
      <img class="photos" src="/photos@2x.png" alt="Photos Sketch Plugin" />
    </ResponsivePicture>
    <ResponsivePicture lowres="/manager.png" hires="/manager@2x.png">
      <img class="manager" src="/manager@2x.png" alt="Craft Manager" />
    </ResponsivePicture>
    <ResponsivePicture lowres="/duplicate.png" hires="/duplicate@2x.png">
      <img class="duplicate" src="/duplicate@2x.png" alt="Duplicate Sketch Plugin" />
    </ResponsivePicture>
  </div>
</div>
