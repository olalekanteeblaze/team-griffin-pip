import { Fragment } from "react";
import Fade from "react-reveal/Fade";
import "./styles.css";

const animateList = [1, 2, 3, 4, 5];
export default function App() {
  return (
    <Fragment>
      {animateList.map((list, key) => (
        <div key={key} style={styles.block}>
          <Fade top>
            <h1 style={styles.title}>{`block ${list}`}</h1>
          </Fade>
        </div>
      ))}
    </Fragment>
  );
}

const styles = {
  block: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    background: "#000",
    borderBottom: "1px solid rgba(255, 255, 255, .2)"
  },
  title: {
    textAlign: "center",
    fontSize: "100",
    color: "#fff",
    fontFamily: "Lato, sans-serif",
    fontWeight: 100
  }
};
