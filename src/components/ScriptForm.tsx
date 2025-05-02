
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { PlayIcon, SaveIcon } from 'lucide-react';

export interface ScriptParams {
  title: string;
  genre: string;
  premise: string;
  characters: string;
  setting: string;
  tone: string;
  length: number;
}

interface ScriptFormProps {
  onGenerate: (params: ScriptParams) => void;
  isGenerating: boolean;
}

const ScriptForm: React.FC<ScriptFormProps> = ({ onGenerate, isGenerating }) => {
  const [scriptParams, setScriptParams] = useState<ScriptParams>({
    title: '',
    genre: 'drama',
    premise: '',
    characters: '',
    setting: '',
    tone: 'serious',
    length: 3,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setScriptParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setScriptParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSliderChange = (value: number[]) => {
    setScriptParams((prev) => ({
      ...prev,
      length: value[0],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(scriptParams);
  };

  return (
    <Card className="bg-cinema-gray border-cinema-light-gray">
      <CardHeader>
        <CardTitle className="text-xl text-cinema-accent">Script Parameters</CardTitle>
        <CardDescription>Define your screenplay parameters for AI generation</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Title
            </label>
            <Input
              id="title"
              name="title"
              placeholder="Enter a title"
              value={scriptParams.title}
              onChange={handleChange}
              className="bg-cinema-light-gray border-cinema-light-gray"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="genre">
              Genre
            </label>
            <Select 
              value={scriptParams.genre} 
              onValueChange={(value) => handleSelectChange('genre', value)}
            >
              <SelectTrigger className="bg-cinema-light-gray border-cinema-light-gray">
                <SelectValue placeholder="Select a genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="drama">Drama</SelectItem>
                <SelectItem value="comedy">Comedy</SelectItem>
                <SelectItem value="action">Action</SelectItem>
                <SelectItem value="sci-fi">Science Fiction</SelectItem>
                <SelectItem value="horror">Horror</SelectItem>
                <SelectItem value="romance">Romance</SelectItem>
                <SelectItem value="thriller">Thriller</SelectItem>
                <SelectItem value="fantasy">Fantasy</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="premise">
              Premise
            </label>
            <Textarea
              id="premise"
              name="premise"
              placeholder="Brief summary of your story idea"
              value={scriptParams.premise}
              onChange={handleChange}
              className="resize-none h-24 bg-cinema-light-gray border-cinema-light-gray"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="characters">
                Characters
              </label>
              <Textarea
                id="characters"
                name="characters"
                placeholder="Main characters (separated by commas)"
                value={scriptParams.characters}
                onChange={handleChange}
                className="resize-none h-20 bg-cinema-light-gray border-cinema-light-gray"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="setting">
                Setting
              </label>
              <Textarea
                id="setting"
                name="setting"
                placeholder="Where and when your story takes place"
                value={scriptParams.setting}
                onChange={handleChange}
                className="resize-none h-20 bg-cinema-light-gray border-cinema-light-gray"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="tone">
              Tone
            </label>
            <Select 
              value={scriptParams.tone} 
              onValueChange={(value) => handleSelectChange('tone', value)}
            >
              <SelectTrigger className="bg-cinema-light-gray border-cinema-light-gray">
                <SelectValue placeholder="Select a tone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="serious">Serious</SelectItem>
                <SelectItem value="humorous">Humorous</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="uplifting">Uplifting</SelectItem>
                <SelectItem value="suspenseful">Suspenseful</SelectItem>
                <SelectItem value="satirical">Satirical</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium" htmlFor="length">
                Script Length
              </label>
              <span className="text-xs text-muted-foreground">
                {scriptParams.length === 1 ? 'Short' : scriptParams.length === 2 ? 'Medium' : 'Long'}
              </span>
            </div>
            <Slider
              defaultValue={[3]}
              max={5}
              min={1}
              step={1}
              value={[scriptParams.length]}
              onValueChange={handleSliderChange}
              className="py-4"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <Button type="submit" disabled={isGenerating} className="bg-cinema-accent hover:bg-cinema-accent/90 text-black">
              <PlayIcon className="mr-2 h-4 w-4" />
              {isGenerating ? 'Generating...' : 'Generate Script'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ScriptForm;
