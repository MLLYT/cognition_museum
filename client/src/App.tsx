import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import FragmentLab from "@/pages/FragmentLab";
import Timeline from "@/pages/Timeline";
import Assessment from "@/pages/Assessment";
import About from "@/pages/About";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/fragments"} component={FragmentLab} />
      <Route path={"/timeline"} component={Timeline} />
      <Route path={"/assessment"} component={Assessment} />
      <Route path={"/about"} component={About} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * 认知博物馆 - 应用主入口
 * 设计理念：学术极简主义 + 冷理性美学
 * 色彩系统：深蓝灰 (#1a2332) + 纯白 + 金属灰 (#8b8b8b) + 点缀金色 (#a89968)
 */

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
