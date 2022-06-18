import { helpText, kernelBox } from '.';
import { BaseReactComponent } from '../../Base/types';

export const TerminalHelperBox: BaseReactComponent = () => {
  return (
    <>
      <pre
        className="whitespace text-white pre-line sm:text-[16px] sm:leading-[18px] text-[10px] leading-[12px]"
        dangerouslySetInnerHTML={{ __html: kernelBox }}
      />
      <pre
        className="whitespace text-white pre-line sm:text-[16px] sm:leading-[18px] text-[10px] leading-[12px]"
        dangerouslySetInnerHTML={{ __html: helpText }}
      />
    </>
  );
};
