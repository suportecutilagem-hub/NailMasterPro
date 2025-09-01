import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { PerformanceOptimizer } from "@/components/optimization/performance-optimizer";
import { MobilePerformance } from "@/components/optimization/mobile-performance";
import { CriticalCSS } from "@/components/optimization/critical-css";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

function App() {
  return (
    <>
      <CriticalCSS />
      <PerformanceOptimizer />
      <MobilePerformance />
      <Toaster />
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
