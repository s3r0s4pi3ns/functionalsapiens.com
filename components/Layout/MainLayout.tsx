import { BaseReactComponent } from '../Base/types';
import Meta from '../Shared/Meta';

export const MainLayout: BaseReactComponent = ({ children }) => {
  return (
    <>
      <Meta />
      <main>{children}</main>
    </>
  );
};
