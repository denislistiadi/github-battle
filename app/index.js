import React from "react";
import ReactDOM from "react-dom";
import Battle from "./components/Battle";
import Popular from "./components/Popular";
import { ThemeProvider } from "./contexts/theme";
import "./index.css";

class App extends React.Component {
    constructor() {
        super(props);

        this.state = {
            theme: "light",
            toggleTheme: () => {
                this.setState(({ theme }) => ({
                    theme: theme === "light" ? "dark" : "light"
                }))
            }
        }
    }
  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className="container">
          <Battle />
        </div>
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
