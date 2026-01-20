import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Graphs() {
  // MRU Graph
  const [mruParams, setMruParams] = useState({ s0: 0, v: 20, tMax: 10 });
  const [mruvParams, setMruvParams] = useState({ s0: 0, v0: 0, a: 5, tMax: 10 });
  const [quedaParams, setQuedaParams] = useState({ h0: 100, g: 10, tMax: 5 });

  // Generate MRU data
  const generateMRUData = () => {
    const data = [];
    for (let t = 0; t <= mruParams.tMax; t += 0.5) {
      data.push({
        t: parseFloat(t.toFixed(1)),
        s: parseFloat((mruParams.s0 + mruParams.v * t).toFixed(2)),
        v: mruParams.v
      });
    }
    return data;
  };

  // Generate MRUV data
  const generateMRUVData = () => {
    const data = [];
    for (let t = 0; t <= mruvParams.tMax; t += 0.5) {
      data.push({
        t: parseFloat(t.toFixed(1)),
        s: parseFloat((mruvParams.s0 + mruvParams.v0 * t + (mruvParams.a * t * t) / 2).toFixed(2)),
        v: parseFloat((mruvParams.v0 + mruvParams.a * t).toFixed(2)),
        a: mruvParams.a
      });
    }
    return data;
  };

  // Generate Queda Livre data
  const generateQuedaData = () => {
    const data = [];
    const g = quedaParams.g;
    for (let t = 0; t <= quedaParams.tMax; t += 0.2) {
      const h = quedaParams.h0 - (g * t * t) / 2;
      if (h >= 0) {
        data.push({
          t: parseFloat(t.toFixed(1)),
          h: parseFloat(h.toFixed(2)),
          v: parseFloat((g * t).toFixed(2))
        });
      }
    }
    return data;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="container py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-slate-900">Gráficos Dinâmicos</h1>
        </div>
      </header>

      {/* Main Content */}
      <section className="container py-6 md:py-12 space-y-6 md:space-y-12">
        {/* MRU Graph */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-lg md:text-2xl font-bold text-slate-900 mb-6">MRU - Posição e Velocidade vs Tempo</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Posição Inicial (m)</label>
              <Input 
                type="number" 
                value={mruParams.s0}
                onChange={(e) => setMruParams({...mruParams, s0: parseFloat(e.target.value) || 0})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Velocidade (m/s)</label>
              <Input 
                type="number" 
                value={mruParams.v}
                onChange={(e) => setMruParams({...mruParams, v: parseFloat(e.target.value) || 0})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Tempo Máximo (s)</label>
              <Input 
                type="number" 
                value={mruParams.tMax}
                onChange={(e) => setMruParams({...mruParams, tMax: parseFloat(e.target.value) || 10})}
              />
            </div>
          </div>

          <div className="bg-slate-50 p-3 md:p-4 rounded-lg overflow-x-auto">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={generateMRUData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="t" label={{ value: "Tempo (s)", position: "insideBottomRight", offset: -5 }} />
                <YAxis label={{ value: "Posição (m)", angle: -90, position: "insideLeft" }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="s" stroke="#3b82f6" name="Posição (m)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* MRUV Graph */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-lg md:text-2xl font-bold text-slate-900 mb-6">MRUV - Posição e Velocidade vs Tempo</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Posição Inicial (m)</label>
              <Input 
                type="number" 
                value={mruvParams.s0}
                onChange={(e) => setMruvParams({...mruvParams, s0: parseFloat(e.target.value) || 0})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Velocidade Inicial (m/s)</label>
              <Input 
                type="number" 
                value={mruvParams.v0}
                onChange={(e) => setMruvParams({...mruvParams, v0: parseFloat(e.target.value) || 0})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Aceleração (m/s²)</label>
              <Input 
                type="number" 
                value={mruvParams.a}
                onChange={(e) => setMruvParams({...mruvParams, a: parseFloat(e.target.value) || 0})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Tempo Máximo (s)</label>
              <Input 
                type="number" 
                value={mruvParams.tMax}
                onChange={(e) => setMruvParams({...mruvParams, tMax: parseFloat(e.target.value) || 10})}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-3 md:p-4 rounded-lg overflow-x-auto">
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3">Posição vs Tempo</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={generateMRUVData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="t" label={{ value: "Tempo (s)", position: "insideBottomRight", offset: -5 }} />
                  <YAxis label={{ value: "Posição (m)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="s" stroke="#10b981" name="Posição (m)" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-slate-50 p-3 md:p-4 rounded-lg overflow-x-auto">
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3">Velocidade vs Tempo</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={generateMRUVData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="t" label={{ value: "Tempo (s)", position: "insideBottomRight", offset: -5 }} />
                  <YAxis label={{ value: "Velocidade (m/s)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="v" stroke="#f59e0b" name="Velocidade (m/s)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

        {/* Queda Livre Graph */}
        <Card className="p-4 md:p-8 shadow-lg border-0">
          <h2 className="text-lg md:text-2xl font-bold text-slate-900 mb-6">Queda Livre - Altura e Velocidade vs Tempo</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Altura Inicial (m)</label>
              <Input 
                type="number" 
                value={quedaParams.h0}
                onChange={(e) => setQuedaParams({...quedaParams, h0: parseFloat(e.target.value) || 100})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Gravidade (m/s²)</label>
              <Input 
                type="number" 
                value={quedaParams.g}
                onChange={(e) => setQuedaParams({...quedaParams, g: parseFloat(e.target.value) || 10})}
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700">Tempo Máximo (s)</label>
              <Input 
                type="number" 
                value={quedaParams.tMax}
                onChange={(e) => setQuedaParams({...quedaParams, tMax: parseFloat(e.target.value) || 5})}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-3 md:p-4 rounded-lg overflow-x-auto">
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3">Altura vs Tempo</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={generateQuedaData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="t" label={{ value: "Tempo (s)", position: "insideBottomRight", offset: -5 }} />
                  <YAxis label={{ value: "Altura (m)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="h" stroke="#6366f1" name="Altura (m)" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-slate-50 p-3 md:p-4 rounded-lg overflow-x-auto">
              <h3 className="text-base md:text-lg font-semibold text-slate-900 mb-3">Velocidade vs Tempo</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={generateQuedaData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="t" label={{ value: "Tempo (s)", position: "insideBottomRight", offset: -5 }} />
                  <YAxis label={{ value: "Velocidade (m/s)", angle: -90, position: "insideLeft" }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="v" stroke="#ec4899" name="Velocidade (m/s)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="flex gap-2 md:gap-4 justify-center flex-wrap">
          <Link href="/learn">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Voltar ao Guia
            </Button>
          </Link>
          <Link href="/calculator">
            <Button size="lg" variant="outline">
              Calculadora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
