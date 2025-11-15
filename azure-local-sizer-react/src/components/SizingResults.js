import React from 'react';
import './SizingResults.css';

const SizingResults = ({ results }) => {
  return (
    <div className="sizing-results">
      <h2>Recommended Sizing</h2>
      
      <div className="result-card">
        <div className="result-header">
          <h3>AI-Powered Recommendation</h3>
          <span className="confidence">Confidence: {results.confidence}</span>
        </div>
        
        <div className="result-details">
          <div className="result-item">
            <strong>Recommended Size:</strong>
            <span>{results.recommendedSize}</span>
          </div>
          
          <div className="result-item">
            <strong>Estimated Cost:</strong>
            <span>{results.estimatedCost}</span>
          </div>
          
          <div className="result-item">
            <strong>Notes:</strong>
            <span>{results.notes}</span>
          </div>
        </div>
        
        <div className="recommendations">
          <h4>Recommendations</h4>
          <ul>
            {results.recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
        
        <div className="input-summary">
          <h4>Input Configuration</h4>
          <div className="input-details">
            <p><strong>Service Type:</strong> {results.input.serviceType}</p>
            <p><strong>CPU Cores:</strong> {results.input.cpuCores}</p>
            <p><strong>Memory:</strong> {results.input.memory} GB</p>
            <p><strong>Storage:</strong> {results.input.storage} GB</p>
            <p><strong>Region:</strong> {results.input.region}</p>
            <p><strong>Workload Type:</strong> {results.input.workloadType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizingResults;
