import { BaseReactComponent } from '../Base/types';
import Meta from '../Shared/Meta';

export const MainLayout: BaseReactComponent = ({ children }) => {
  return (
    <>
      <Meta />
      <main className="h-screen bg-slate-900 text-gray-100 font-sans">
        {children}
      </main>
    </>
  );
};
