import React, { useState } from 'react';
import './SizingForm.css';

const SizingForm = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    serviceType: 'virtualMachine',
    cpuCores: '2',
    memory: '4',
    storage: '100',
    region: 'eastus',
    workloadType: 'generalPurpose'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(formData);
  };

  return (
    <div className="sizing-form">
      <h2>Service Configuration</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-group">
          <label htmlFor="serviceType">Service Type</label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
          >
            <option value="virtualMachine">Virtual Machine</option>
            <option value="containerInstance">Container Instance</option>
            <option value="storageAccount">Storage Account</option>
            <option value="database">Database</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="cpuCores">CPU Cores</label>
          <input
            type="number"
            id="cpuCores"
            name="cpuCores"
            value={formData.cpuCores}
            onChange={handleChange}
            min="1"
            max="64"
          />
        </div>

        <div className="form-group">
          <label htmlFor="memory">Memory (GB)</label>
          <input
            type="number"
            id="memory"
            name="memory"
            value={formData.memory}
            onChange={handleChange}
            min="1"
            max="256"
          />
        </div>

        <div className="form-group">
          <label htmlFor="storage">Storage (GB)</label>
          <input
            type="number"
            id="storage"
            name="storage"
            value={formData.storage}
            onChange={handleChange}
            min="1"
            max="100000"
          />
        </div>

        <div className="form-group">
          <label htmlFor="region">Region</label>
          <select
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
          >
            <option value="eastus">East US</option>
            <option value="westus">West US</option>
            <option value="eastus2">East US 2</option>
            <option value="westeurope">West Europe</option>
            <option value="southeastasia">Southeast Asia</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="workloadType">Workload Type</label>
          <select
            id="workloadType"
            name="workloadType"
            value={formData.workloadType}
            onChange={handleChange}
          >
            <option value="generalPurpose">General Purpose</option>
            <option value="highPerformance">High Performance</option>
            <option value="costOptimized">Cost Optimized</option>
            <option value="development">Development</option>
          </select>
        </div>

        <div className="form-group full-width">
          <button type="submit" className="calculate-btn">
            Calculate Sizing
          </button>
        </div>
      </form>
    </div>
  );
};

export default SizingForm;
