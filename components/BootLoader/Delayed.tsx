import { useEffect, useState } from 'react';
import { BaseReactComponent } from '../Base/types';

export interface DelayedProps {
  waitBeforeShow: number;
}

export const Delayed: BaseReactComponent<DelayedProps> = ({
  children,
  waitBeforeShow = 500,
}) => {
  const [isShown, setIsShown] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  return isShown ? <>{children}</> : null;
};

export default Delayed;
