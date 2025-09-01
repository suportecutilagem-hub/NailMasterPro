import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Botão flutuante fixo para mobile
function FloatingCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gradient-to-r from-[hsl(var(--rose-primary))] to-[hsl(var(--rose-secondary))] p-4 shadow-2xl">
      <a href="https://pay.cutilagemrussa.com/checkout-6880/?add-to-cart=6880" className="block">
        <div className="bg-white rounded-lg p-3 text-center shadow-lg">
          <div className="text-xs text-gray-600 mb-1">Oferta por tempo limitado</div>
          <div className="text-lg font-bold text-[hsl(var(--rose-primary))]">GARANTIR VAGA - R$10,00</div>
          <div className="text-xs text-green-600 font-medium">✓ Acesso imediato • ✓ Certificado incluso</div>
        </div>
      </a>
    </div>
  );
}

function App() {
  return (
    <>
      <Toaster />
      <FloatingCTA />
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
