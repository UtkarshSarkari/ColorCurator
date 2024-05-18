let btn = document.querySelector(".changeColorBtn");
btn.addEventListener("click", () => {
    const colorGrid = document.querySelector(".colorGrid");
    const colorValue = document.querySelector(".colorValue");
  
    if (!window.EyeDropper) {
      resultElement.textContent =
        "Your browser does not support the EyeDropper API";
      return;
    }
  
    const eyeDropper = new EyeDropper();
    const abortController = new AbortController();
  
    eyeDropper
      .open({ signal: abortController.signal })
      .then((result) => {
        colorGrid.style.backgroundColor = result.sRGBHex;
        colorValue.textContent = result.sRGBHex;
      })
      .catch((e) => {
        resultElement.textContent = e;
      });

  });