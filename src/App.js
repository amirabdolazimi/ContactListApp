import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Layout from "./components/Layout/Layout";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <ContactHeader />
      <BrowserRouter>
        <Layout>
          <Switch>
            {routes.map((route) => {
              return <Route {...route} key={route.path} />;
            })}
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
