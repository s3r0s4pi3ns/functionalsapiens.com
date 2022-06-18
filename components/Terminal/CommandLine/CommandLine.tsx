import React, { useEffect, useRef, useState } from 'react';
import { BaseReactComponent } from '../../Base/types';
import { Cursor } from './Cursor';
import { ShellPointer } from './ShellPointer';

export const CommandLine: BaseReactComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [commandValue, setCommandValue] = useState('');

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const handleOnBlur = () => {
    let x = window.scrollX;
    let y = window.scrollY;

    if (inputRef.current) {
      inputRef.current.focus();
      window.scrollTo(x, y);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommandValue(event.target.value || '');
  };

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setCommandValue('');
    }
  };

  return (
    <div className="flex flex-wrap z-20 pb-3 mt-5">
      <ShellPointer />

      <Cursor />
      <input
        id="input"
        autoFocus
        maxLength={255}
        onBlur={handleOnBlur}
        ref={inputRef}
        value={commandValue}
        type="text"
        className="absolute w-[90%] opacity-0 bg-white text-black-900 z-30"
        onKeyPress={onKeyPress}
        onChange={onChange}
      />
    </div>
  );
};
