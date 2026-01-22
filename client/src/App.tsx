import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import DinamicaHome from "./pages/DinamicaHome";
import Calculator from "./pages/Calculator";
import Formulas from "./pages/Formulas";
import Learn from "./pages/Learn";
import Quiz from "./pages/Quiz";
import Graphs from "./pages/Graphs";
import DynamicsLearn from "./pages/DynamicsLearn";
import DynamicsCalculator from "./pages/DynamicsCalculator";
import DynamicsFormulas from "./pages/DynamicsFormulas";
import DynamicsQuiz from "./pages/DynamicsQuiz";
import DynamicsGraphs from "./pages/DynamicsGraphs";
import CinematicaSimulator from "./pages/CinematicaSimulator";
import CinematicaGraphs from "./pages/CinematicaGraphs";
import CinematicaQuiz from "./pages/CinematicaQuiz";
import CinematicaTopicVelocidade from "./pages/CinematicaTopicVelocidade";
import CinematicaTopicMRU from "./pages/CinematicaTopicMRU";
import CinematicaTopicMRUV from "./pages/CinematicaTopicMRUV";
import CinematicaTopicCircular from "./pages/CinematicaTopicCircular";
import CinematicaTopicQuedaLivre from "./pages/CinematicaTopicQuedaLivre";
import DynamicsSimulator from "./pages/DynamicsSimulator";
import Progress from "./pages/Progress";
import DynamicsTopicNewton from "./pages/DynamicsTopicNewton";
import DynamicsTopicForce from "./pages/DynamicsTopicForce";
import DynamicsTopicEnergy from "./pages/DynamicsTopicEnergy";
import DynamicsTopicMomentum from "./pages/DynamicsTopicMomentum";
import DynamicsTopicPower from "./pages/DynamicsTopicPower";
import EstaticaHome from "./pages/EstaticaHome";
import EstaticaGraphs from "./pages/EstaticaGraphs";
import EstaticaQuiz from "./pages/EstaticaQuiz";
import EstaticaSimulator from "./pages/EstaticaSimulator";
import EstaticaTopicEquilibrio from "./pages/EstaticaTopicEquilibrio";
import EstaticaTopicTorque from "./pages/EstaticaTopicTorque";
import EstaticaTopicMaquinas from "./pages/EstaticaTopicMaquinas";
import EstaticaTopicHidrostatica from "./pages/EstaticaTopicHidrostatica";
import FisicaSelector from "./pages/FisicaSelector";
import FisicaIHome from "./pages/FisicaIHome";
import FisicaIIHome from "./pages/FisicaIIHome";
import TermologiaHome from "./pages/TermologiaHome";
import TermologiaGraphs from "./pages/TermologiaGraphs";
import TermologiaQuiz from "./pages/TermologiaQuiz";
import TermologiaSimulator from "./pages/TermologiaSimulator";
import TermologiaTopicTemperatura from "./pages/TermologiaTopicTemperatura";
import TermologiaTopicCalor from "./pages/TermologiaTopicCalor";
import TermologiaTopicCalorimetria from "./pages/TermologiaTopicCalorimetria";
import TermologiaTopicTermodinamica from "./pages/TermologiaTopicTermodinamica";
import TermologiaTopicDilatacao from "./pages/TermologiaTopicDilatacao";
import MecanicaHome from "./pages/MecanicaHome";
import MecanicaTopicCinematica from "./pages/MecanicaTopicCinematica";
import MecanicaTopicDinamica from "./pages/MecanicaTopicDinamica";
import OndulatóriaTopicConceitos from "./pages/OndulatóriaTopicConceitos";
import OndulatóriaTopicMHS from "./pages/OndulatóriaTopicMHS";




function Router() {
  return (
    <Switch>
      <Route path="/" component={FisicaSelector} />
      <Route path="/landing" component={Landing} />
      <Route path="/fisica-i" component={FisicaIHome} />
      <Route path="/fisica-ii" component={FisicaIIHome} />
      <Route path="/cinematica" component={Home} />
      <Route path="/cinematica/learn" component={Learn} />
      <Route path="/cinematica/quiz" component={Quiz} />
      <Route path="/cinematica/graphs" component={Graphs} />
      <Route path="/cinematica/graphs-new" component={CinematicaGraphs} />
      <Route path="/cinematica/calculator" component={Calculator} />
      <Route path="/cinematica/formulas" component={Formulas} />
      <Route path="/cinematica/quiz-new" component={CinematicaQuiz} />
      <Route path="/cinematica/simulator" component={CinematicaSimulator} />
      <Route path="/cinematica/topic/velocidade" component={CinematicaTopicVelocidade} />
      <Route path="/cinematica/topic/mru" component={CinematicaTopicMRU} />
      <Route path="/cinematica/topic/mruv" component={CinematicaTopicMRUV} />
      <Route path="/cinematica/topic/circular" component={CinematicaTopicCircular} />
      <Route path="/cinematica/topic/queda-livre" component={CinematicaTopicQuedaLivre} />
      <Route path="/dinamica" component={DinamicaHome} />
      <Route path="/dinamica/learn" component={DynamicsLearn} />
      <Route path="/dinamica/quiz" component={DynamicsQuiz} />
      <Route path="/dinamica/calculator" component={DynamicsCalculator} />
      <Route path="/dinamica/formulas" component={DynamicsFormulas} />
      <Route path="/dinamica/graphs" component={DynamicsGraphs} />
      <Route path="/dinamica/simulator" component={DynamicsSimulator} />
      <Route path="/dinamica/topic/newton" component={DynamicsTopicNewton} />
      <Route path="/dinamica/topic/force" component={DynamicsTopicForce} />
      <Route path="/dinamica/topic/energy" component={DynamicsTopicEnergy} />
      <Route path="/dinamica/topic/momentum" component={DynamicsTopicMomentum} />
      <Route path="/dinamica/topic/power" component={DynamicsTopicPower} />
      <Route path="/estatica" component={EstaticaHome} />
      <Route path="/estatica/graphs" component={EstaticaGraphs} />
      <Route path="/estatica/quiz" component={EstaticaQuiz} />
      <Route path="/estatica/simulator" component={EstaticaSimulator} />
      <Route path="/estatica/topic/equilibrio" component={EstaticaTopicEquilibrio} />
      <Route path="/estatica/topic/torque" component={EstaticaTopicTorque} />
      <Route path="/estatica/topic/maquinas" component={EstaticaTopicMaquinas} />
      <Route path="/estatica/topic/hidrostatica" component={EstaticaTopicHidrostatica} />
      
      <Route path="/termologia" component={TermologiaHome} />
      <Route path="/termologia/graphs" component={TermologiaGraphs} />
      <Route path="/termologia/quiz" component={TermologiaQuiz} />
      <Route path="/termologia/simulator" component={TermologiaSimulator} />
      <Route path="/termologia/topic/temperatura" component={TermologiaTopicTemperatura} />
      <Route path="/termologia/topic/calor" component={TermologiaTopicCalor} />
      <Route path="/termologia/topic/calorimetria" component={TermologiaTopicCalorimetria} />
      <Route path="/termologia/topic/termodinamica" component={TermologiaTopicTermodinamica} />
      <Route path="/termologia/topic/dilatacao" component={TermologiaTopicDilatacao} />

      <Route path="/mecanica" component={MecanicaHome} />
      <Route path="/mecanica/topic/cinematica" component={MecanicaTopicCinematica} />
      <Route path="/mecanica/topic/dinamica" component={MecanicaTopicDinamica} />

      <Route path="/ondulatoria/topic/conceitos" component={OndulatóriaTopicConceitos} />
      <Route path="/ondulatoria/topic/mhs" component={OndulatóriaTopicMHS} />

      <Route path="/progress" component={Progress} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
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
