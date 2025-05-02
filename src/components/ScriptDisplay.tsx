
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ScriptDisplayProps {
  script: string;
  title: string;
}

const ScriptDisplay: React.FC<ScriptDisplayProps> = ({ script, title }) => {
  const { toast } = useToast();
  
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(script);
    toast({
      title: "Copied!",
      description: "Script copied to clipboard",
      duration: 3000,
    });
  };
  
  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([script], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${title.replace(/\s+/g, '-').toLowerCase()}-script.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Downloaded!",
      description: "Script downloaded successfully",
      duration: 3000,
    });
  };

  // Function to format the script with proper screenplay formatting
  const formatScript = (scriptText: string) => {
    if (!scriptText) return null;
    
    return (
      <div className="screenplay whitespace-pre-wrap">
        {scriptText}
      </div>
    );
  };

  return (
    <Card className="border-cinema-light-gray bg-cinema-gray overflow-hidden">
      <div className="sticky top-0 z-10 bg-cinema-gray border-b border-cinema-light-gray p-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-cinema-accent">{title || "Generated Script"}</h3>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleCopyToClipboard}
            className="border-cinema-light-gray hover:bg-cinema-light-gray"
          >
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleDownload}
            className="border-cinema-light-gray hover:bg-cinema-light-gray"
          >
            <Download className="h-4 w-4 mr-1" />
            Download
          </Button>
        </div>
      </div>
      <CardContent className="p-6">
        {script ? formatScript(script) : (
          <div className="py-8 text-center text-muted-foreground italic">
            Your generated script will appear here
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ScriptDisplay;
