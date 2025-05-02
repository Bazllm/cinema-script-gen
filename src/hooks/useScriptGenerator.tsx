
import { useState } from 'react';
import { ScriptParams } from '@/components/ScriptForm';
import { useToast } from '@/hooks/use-toast';

export const useScriptGenerator = () => {
  const [script, setScript] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const { toast } = useToast();

  // In a real application, this would call an API to generate the script
  // For now, we'll simulate generation with some example text
  const generateScript = async (params: ScriptParams) => {
    setIsGenerating(true);
    setTitle(params.title);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate a simple screenplay format based on the parameters
      const generatedScript = createSampleScript(params);
      setScript(generatedScript);
    } catch (error) {
      console.error('Error generating script:', error);
      toast({
        title: "Generation Failed",
        description: "There was an error generating your script. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    script,
    title,
    isGenerating,
    generateScript,
  };
};

// Function to create a sample script based on the parameters
// This is a placeholder for the actual AI generation that would happen
const createSampleScript = (params: ScriptParams) => {
  const { title, genre, premise, characters, setting, tone } = params;
  
  // Parse characters into an array
  const characterList = characters ? characters.split(',').map(c => c.trim()) : ['PROTAGONIST', 'ANTAGONIST'];
  
  // Create a simple script structure
  let scriptText = `TITLE: ${title.toUpperCase()}\n\n`;
  
  scriptText += `FADE IN:\n\n`;
  
  // Add a scene based on the setting
  const settingText = setting || 'A nondescript location';
  scriptText += `EXT. ${settingText.toUpperCase()} - DAY\n\n`;
  
  // Add some action based on the premise
  scriptText += `${premise || 'The story begins with an unexpected event.'}\n\n`;
  
  // Add some dialogue
  const mainCharacter = characterList[0] || 'PROTAGONIST';
  const secondCharacter = characterList[1] || 'ANTAGONIST';
  
  scriptText += `${mainCharacter}\n(determined)\nWe need to figure this out before it's too late.\n\n`;
  
  scriptText += `${secondCharacter}\nIt's already too late. ${genre === 'comedy' ? "Isn't that hilarious?" : "You can't stop what's coming."}\n\n`;
  
  // Add more action
  scriptText += `${mainCharacter} moves toward the window, looking out at the ${settingText.toLowerCase()}.\n\n`;
  
  scriptText += `${mainCharacter}\n${tone === 'humorous' ? "Well, that's just perfect. Could this day get any worse?" : "I won't give up. There has to be a way."}\n\n`;
  
  // Add a scene transition
  scriptText += `CUT TO:\n\n`;
  
  // Add another scene
  scriptText += `INT. ${settingText.toUpperCase()} - LATER\n\n`;
  
  // Add closing action
  scriptText += `The tension builds as ${mainCharacter} and ${secondCharacter} face each other in silence. The fate of everything hangs in the balance.\n\n`;
  
  // Add final dialogue
  scriptText += `${mainCharacter}\nThis is where it all changes.\n\n`;
  
  // End the script
  scriptText += `FADE TO BLACK.\n\nTHE END`;
  
  return scriptText;
};
