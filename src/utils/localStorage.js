const saveColor = (date) => {
  localStorage.getItem("color")
    ? localStorage.setItem(
        "color",
        localStorage.getItem("color") + `, #${date}`
      )
    : localStorage.setItem("color", `#${date}`);
};

const removeColor = () => {
  localStorage.removeItem("color");
};

const colors = localStorage.getItem("color");

export { saveColor, removeColor, colors };
