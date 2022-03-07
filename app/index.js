import React from "react";
import ReactDOM from "react-dom";
import Battle from "./components/Battle";
import Nav from "./components/Nav";
import Popular from "./components/Popular";
import { ThemeProvider } from "./contexts/theme";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Results from "./components/Results";
import { Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    theme: "light",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light",
      }));
    },
  };

  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <Switch>
                <Route exact path="/" component={Popular} />
                <Route exact path="/battle" component={Battle} />
                <Route path="/battle/results" component={Results} />
                <Route render={() => <h1>404 | Not Found</h1>} />
              </Switch>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
