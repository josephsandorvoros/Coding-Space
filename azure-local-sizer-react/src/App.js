import React, { useState } from 'react';
import './App.css';
import SizingForm from './components/SizingForm';
import SizingResults from './components/SizingResults';

function App() {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCalculate = (formData) => {
    setIsLoading(true);
    
    // Simulate AI-powered calculation (this would integrate with local Ollama models)
    setTimeout(() => {
      const calculatedResults = {
        input: formData,
        recommendedSize: 'Standard_DS2_v2',
        estimatedCost: '$150/month',
        notes: 'Based on your configuration, this is the recommended Azure VM size.',
        confidence: '85%',
        recommendations: [
          'Consider using Premium SSD for better performance',
          'Enable auto-scaling for variable workloads',
          'Set up monitoring and alerting',
          'Implement backup strategy'
        ]
      };
      
      setResults(calculatedResults);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Azure Local Sizer</h1>
        <p>Configure your resources for optimal Azure sizing</p>
      </header>
      
      <main className="App-main">
        <SizingForm onCalculate={handleCalculate} />
        
        {isLoading && (
          <div className="loading">
            <p>Calculating optimal sizing...</p>
          </div>
        )}
        
        {results && <SizingResults results={results} />}
      </main>
    </div>
  );
}

export default App;
