import Craft from "./components/craft.svelte";
import Labs from "./components/labs.svelte";

export const PROJECTS = [
  {
    title: "Craft by InVision",
    desc:
      "I co-created one of the most downloaded extensions for Sketch. I was also responsible for the website, backend and the plugin architecture.",
    tags: ["React", "Node.js", "Photoshop Extension", "Sketch Extension"],
    children: Craft
  },
  {
    title: "InVision LABS",
    desc: "I was a founding member of the team behind LABS.",
    children: Labs,
  },

  {
    title: "Avocode",
    url: "avocode.com",
    desc:
      "I worked at Avocode for three years, which makes developer’s life easier by helping to translate designs into code.",
    tags: ["React", "Angular", "Photoshop Extension", "Sketch Extension", "Website"],
    images: [
      {
        lowres: "/avocode-layer-0.jpg",
        hires: "/avocode-layer-0@2x.jpg"
      },
      {
        lowres: "/avocode-layer-1.png",
        hires: "/avocode-layer-1@2x.png",
        className: 'particle',
        style: "animation-delay: -0.5s;",
      },
      {
        lowres: "/avocode-layer-2.png",
        hires: "/avocode-layer-2@2x.png",
        className: 'particle',
        style: "animation-delay: -1s;",
      },
      {
        lowres: "/avocode-layer-3.png",
        hires: "/avocode-layer-3@2x.png",
        className: 'particle',
        style: "animation-delay: -2s;",
      },
      {
        lowres: "/avocode-layer-4.png",
        hires: "/avocode-layer-4@2x.png",
        className: 'particle',
        style: "animation-delay: -1.5s;",
      },
      {
        lowres: "/avocode-layer-5.png",
        hires: "/avocode-layer-5@2x.png",
        style: "animation: light ease 8s -5s infinite alternate;",
      },
      {
        lowres: "/avocode-layer-6.png",
        hires: "/avocode-layer-6@2x.png",
        style: "animation: light ease 5s infinite alternate;",
      }
    ]
  },
  {
    title: "Jameson Save the Whisky",
    url: "zachranwhiskey.cz",
    desc:
      "I was a part of a team on a pretty cool campaign which ran in 2014 across multiple countries. I was responsible for all animations.",
    tags: ["Animation", "CSS", "Website"],
    images: [
      {
        lowres: "/jameson-layer-0.jpg",
        hires: "/jameson-layer-0@2x.jpg"
      },
      {
        lowres: "/jameson-layer-1@2x.svg",
        hires: "/jameson-layer-1@2x.svg",
      }
    ]
  },
  {
    title: "CSS Hat",
    url: "csshat.madebysource.com",
    desc: "I helped to create the most successfull Photoshop Extension.",
    tags: ["React", "Photoshop Extension", "Website"],
    images: [
      {
        lowres: "/csshat-layer-0.jpg",
        hires: "/csshat-layer-0@2x.jpg"
      },
      {
        lowres: "/csshat-layer-1.png",
        hires: "/csshat-layer-1@2x.png",
        style: "animation: glowFilter 20s infinite"
      },
      {
        lowres: "/csshat-layer-2.png",
        hires: "/csshat-layer-2@2x.png",
        className: 'particle',
        style: "animation-delay: -1s;",
      },
      {
        lowres: "/csshat-layer-3.png",
        hires: "/csshat-layer-3@2x.png",
        className: 'particle',
        style: "animation-delay: -2s;",
      },
      {
        lowres: "/csshat-layer-4.png",
        hires: "/csshat-layer-4@2x.png",
        className: 'particle',
        style: "animation-delay: -1.5s;",
      },
    ]
  }
];
