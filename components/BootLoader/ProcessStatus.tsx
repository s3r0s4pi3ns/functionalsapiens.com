import { BaseReactComponent } from '../Base/types';

export interface ProcessStatusProps {
  error: boolean;
}

const StatusSquare: BaseReactComponent<ProcessStatusProps> = ({ error }) => (
  <>
    <div>[</div>
    <div
      className={`font-normal text-center w-[55px] ${
        error ? 'text-red-500' : 'text-green-500'
      }`}
    >
      {error ? 'X' : 'Ok'}
    </div>
    <div>]</div>
  </>
);

export const ProcessStatus: BaseReactComponent<ProcessStatusProps> = ({
  children,
  error = false,
}) => {
  return (
    <>
      <div className="flex justify-between mr-3">
        <StatusSquare error={error} />
      </div>
      <pre className="whitespace-pre-line font-sans">{children}</pre>
    </>
  );
};
