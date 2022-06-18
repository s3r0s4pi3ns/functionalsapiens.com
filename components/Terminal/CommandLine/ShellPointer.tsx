import { BaseReactComponent } from '../../Base/types';

export interface ShellPointerProps {
  user?: string;
  directory?: string;
}

export const ShellPointer: BaseReactComponent<ShellPointerProps> = ({
  user = 'guest0882@localhost',
  directory = '~',
}) => {
  return (
    <div>
      <pre>
        <span className="font-bold text-yellow-400 sm:text-[16px] sm:leading-[18px] text-[10px] leading-[12px]">
          {user}
        </span>
        :
        {directory.split('/').map((data, index) => (
          <span
            className="text-blue-400 font-bold sm:text-[16px] sm:leading-[18px] text-[10px] leading-[12px]"
            key={index}
          >
            {index === 0 ? data : '/' + data}
          </span>
        ))}
      </pre>
    </div>
  );
};
