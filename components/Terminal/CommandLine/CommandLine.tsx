import { useState } from 'react';
import { BaseReactComponent } from '../../Base/types';
import { Cursor } from './Cursor';
import { InputCommandField } from './InputCommandField';
import { ShellPointer } from './ShellPointer';

export const CommandLine: BaseReactComponent = () => {
  const [commandValue, setCommandValue] = useState<string>('');

  return (
    <div className="flex flex-wrap z-20 pb-3 mt-5">
      <ShellPointer />
      {commandValue.split('').map((character, index) => (
        <pre className="text-gray-300" key={index}>
          {character}
        </pre>
      ))}
      <Cursor />
      <InputCommandField
        id="input-command-field"
        autoFocus
        maxLength={255}
        type="text"
        className="absolute w-[90%] opacity-0 bg-white text-black-900 z-30"
        setCommandValue={setCommandValue}
        value={commandValue}
      />
    </div>
  );
};
