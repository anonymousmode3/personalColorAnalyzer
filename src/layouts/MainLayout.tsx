import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen">
      <main>
        <Outlet />
      </main>
    </div>
  );
}