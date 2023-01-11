import { useEffect, useState } from "react";
import { getTime } from "./utils/getTime";
import "./index.css";
import { Button } from "./components/Button/Button";
import { Toast } from "./components/Toast/Toast";
function App() {
  const [date, setDate] = useState(getTime());
  const [message, setMessage] = useState("Renk kopyalandı");
  const [leftPosition, setLeftPosition] = useState("-100%");

  useEffect(() => {
    var timer = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timer);
    };

    function tick() {
      setDate(getTime());
    }
  });

  const setToast = (msg) => {
    setMessage(msg);
    setLeftPosition("30px");
    setTimeout(() => {
      setLeftPosition("-100%");
    }, 3000);
  };

  const saveColor = () => {
    localStorage.getItem("color")
      ? localStorage.setItem(
          "color",
          localStorage.getItem("color") + `, #${date}`
        )
      : localStorage.setItem("color", `#${date}`);

    setToast("Renk kaydedildi");
  };

  const removeColor = () => {
    localStorage.removeItem("color");
    setToast("Kayıtlı renkler temizlendi");
  };

  const copyColor = () => {
    navigator.clipboard.writeText(`#${date}`);
    setToast("Renk kopyalandı");
  };

  const colors = localStorage.getItem("color");

  useEffect(() => {
    window.statusbarColor = `#${date}`;
  }, [date]);

  return (
    <div
      className="wrapper"
      style={{
        backgroundColor: `#${date}`,
      }}
    >
      <h6> Color Chooser</h6>
      <h3>#{date}</h3>
      <p className="description">
        Güncel Zaman :{" "}
        {new Date().toLocaleTimeString("tr-TR", {
          timeZone: "Europe/Istanbul",
        })}
      </p>
      <div className="color-container">
        {colors &&
          colors.split(",").map((color, index) => (
            <div key={index} className="color" onClick={copyColor}>
              <span
                style={{
                  backgroundColor: `${color}`,
                }}
                className="picked-color"
              ></span>

              <p className="description">{`${color}`}</p>
            </div>
          ))}
      </div>
      <div className="buttons-wrapper">
        <Button design="primary" message="Renk Kaydet" onClick={saveColor} />

        <Button
          design="danger"
          message="Kayıtlı Renkleri Sil"
          onClick={removeColor}
        />
      </div>
      <Toast leftPosition={leftPosition} message={message} />
    </div>
  );
}

export default App;
