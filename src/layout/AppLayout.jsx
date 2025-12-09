import { Outlet } from 'react-router';

export const AppLayout = () => {
  return (
    <div className="m-5">
      <Outlet />
    </div>
  );
};
