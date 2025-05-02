
import React from 'react';
import ScriptForm, { ScriptParams } from './ScriptForm';
import ScriptDisplay from './ScriptDisplay';
import { useScriptGenerator } from '@/hooks/useScriptGenerator';

const ScriptGenerator: React.FC = () => {
  const { script, title, isGenerating, generateScript } = useScriptGenerator();

  const handleGenerate = (params: ScriptParams) => {
    generateScript(params);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <ScriptForm onGenerate={handleGenerate} isGenerating={isGenerating} />
      </div>
      <div>
        <ScriptDisplay script={script} title={title} />
      </div>
    </div>
  );
};

export default ScriptGenerator;
