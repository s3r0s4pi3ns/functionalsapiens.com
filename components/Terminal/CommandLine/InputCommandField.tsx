import { useEffect, useRef } from 'react';
import { BaseReactComponent } from '../../Base/types';

interface InputCommandFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  setCommandValue: (_value: string) => void;
}

export const InputCommandField: BaseReactComponent<InputCommandFieldProps> = ({
  setCommandValue,
  ...restProps
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const onBlur = () => {
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

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.ctrlKey && event.key === 'l') {
      setCommandValue('');
    }
  };
  return (
    <input
      onKeyPress={onKeyPress}
      onKeyDown={onKeyDown}
      onChange={onChange}
      onBlur={onBlur}
      ref={inputRef}
      {...restProps}
    />
  );
};
