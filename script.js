function startLinearLoading(){
  let percent = 0;

  const bar = document.getElementById("progressBar");
  const text = document.getElementById("percentText");
  const warning = document.getElementById("warning");
  const btn = document.getElementById("nextBtn");

  const interval = setInterval(() => {
    percent += 2;

    bar.style.width = percent + "%";
    text.innerText = percent + "%";

    if(percent >= 100){
      warning.style.display = "block";
    }

    if(percent >= 120){
      clearInterval(interval);
      btn.style.display = "inline-block";
    }
  }, 100);
}
