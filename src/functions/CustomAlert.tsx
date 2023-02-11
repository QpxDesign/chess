export function CustomAlert(t: string, b: string, bt: string) {
  if (document.getElementsByClassName("alert-wrapper").length === 0) {
    const alert_container = document.createElement("div");
    alert_container.classList.add("alert-wrapper");
    const title = document.createElement("h1");
    const body = document.createElement("p");
    const options_wrapper = document.createElement("div");
    options_wrapper.classList.add("options-wrapper");
    const buttonText = document.createElement("button");
    buttonText.classList.add("cool-purple-button");
    buttonText.textContent = bt;
    buttonText.addEventListener("click", () => {
      document
        .querySelectorAll<HTMLElement>(".alert-wrapper")
        .forEach((item) => {
          item.remove();
        });
    });
    options_wrapper.appendChild(buttonText);
    title.textContent = t ?? "";
    body.textContent = b ?? "";
    alert_container.appendChild(title);
    alert_container.appendChild(body);
    alert_container.appendChild(options_wrapper);

    document.getElementById("root")?.appendChild(alert_container);
  }
}
