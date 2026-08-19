import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { CriticalCSS } from "@/components/optimization/critical-css";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function App() {
  return (
    <>
      <CriticalCSS />
      <Toaster />
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
