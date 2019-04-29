const mql = window.matchMedia("(prefers-color-scheme: dark)");

let subscribtions = [];

const getThemeName = matchesDark => (matchesDark ? "dark" : "light");
const onChange = ev => {
  const scheme = getThemeName(ev.matches);

  subscribtions.forEach(subscribtion => subscribtion(scheme));
};

mql.addListener(onChange);

export const getPreferredTheme = listener => {
  const index = subscribtions.push(listener);

  listener(getThemeName(mql.matches));

  return () => subscribtions.splice(index - 1, 1);
};

export const easeOutExpo = (t, b, c, d) => c * (-Math.pow(2, (-10 * t) / d) + 1) + b;

export const animateFilter = (element, duration) => {
  const blurElement = element.querySelector("feGaussianBlur");
  const matrixElement = element.querySelector("feColorMatrix");

  const blurStart = parseInt(blurElement.getAttribute("stdDeviation"), 10);
  const matrixValues = matrixElement.getAttribute("values").split(" ");
  const animationStart = +new Date();

  const matrixValueAlpha = parseInt(matrixValues[18], 10);
  const matrixValueLightness = parseInt(matrixValues[19], 10);

  const blurChange = -blurStart;
  const matrixAlphaChange = 1 - matrixValueAlpha;
  const matrixLightnessChange = -matrixValueLightness;

  const doAnimation = () => {
    const now = +new Date();

    if (now >= animationStart + duration) {
      blurElement.setAttribute("stdDeviation", 0);
      matrixValues[18] = "1";
      matrixValues[19] = "0";
      matrixElement.setAttribute("values", matrixValues.join(" "));

      return;
    }

    const step = now - animationStart;
    const newBlur = Math.floor(easeOutExpo(step, blurStart, blurChange, duration) * 10000) / 10000;
    const newMatrixAlpha = Math.floor(easeOutExpo(step, matrixValueAlpha, matrixAlphaChange, duration) * 10000 ) / 10000;
    const newMatrixLightness =
      Math.floor(
        easeOutExpo(
          step,
          matrixValueLightness,
          matrixLightnessChange,
          duration
        ) * 10000
      ) / 10000;

    blurElement.setAttribute("stdDeviation", newBlur);

    matrixValues[18] = newMatrixAlpha;
    matrixValues[19] = newMatrixLightness;

    matrixElement.setAttribute("values", matrixValues.join(" "));

    requestAnimationFrame(doAnimation);
  };

  requestAnimationFrame(doAnimation);

};
