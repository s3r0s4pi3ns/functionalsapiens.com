import { useEffect } from 'react';
import { BaseReactComponent } from '../Base/types';
import { bootLog } from './BootLog';
import Delayed from './Delayed';
import { ProcessStatus } from './ProcessStatus';

export interface BootProcessProps {
  onBooted: () => void;
  executionTime?: number;
  waitBeforeShow?: number;
}

export const BootProcess: BaseReactComponent<BootProcessProps> = ({
  onBooted,
  executionTime = 2500,
  waitBeforeShow = 500,
}) => {
  const step = Number(executionTime / bootLog.length - 1);

  let nextStepTime = waitBeforeShow + step;

  useEffect(() => {
    const timer = setTimeout(() => {
      onBooted();
    }, executionTime - Number(executionTime * 0.12));

    return () => clearTimeout(timer);
  }, [executionTime, onBooted]);

  return (
    <>
      {bootLog.map(({ content, error }) => {
        nextStepTime += step;

        return (
          <Delayed key={content} waitBeforeShow={nextStepTime}>
            <div className="flex">
              <ProcessStatus error={error}>{content}</ProcessStatus>
            </div>
          </Delayed>
        );
      })}
    </>
  );
};
