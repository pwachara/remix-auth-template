import { RemixEntry } from "@remix-run/react/components";
import type { ReactNode } from "react";
import { Link } from "remix";

export default function Layout({
  children,
  user,
}: {
  children: ReactNode;
  user?: { emailAddress: string };
}) {
  return (
    <div className="flex flex-col h-screen">
      <nav className="flex flex-row bg-blue-600 text-blue-100 justify-between h-16 p-4">
        <ul>
          <li className="text-xl font-bold tracking-wider hover:text-yellow-500">
            <Link to="/">
              Service Charge App
            </Link>
          </li>
        </ul>
        <ul className="flex flex-row text-xl items-center">
          {!!user && (
            <div className="flex space-x-4 items-center">
              <li>{user.emailAddress}</li>
    
              <li className="px-3 py-3 bg-blue-900 rounded text-slate-100 hover:text-yellow-500">
                <Link to="/auth/logout">Sign out</Link>
              </li>
            </div>
          )}
          {!!user || (
            <div className="flex flex-row items-center space-x-4 px-2">
              <li className="px-3 py-3 hover:text-yellow-500">
                <Link to="/signin">Sign in</Link>
              </li>
              <li className="px-3 py-3 bg-blue-900 rounded text-slate-100 hover:text-yellow-500">
                <Link to="/signup">Sign up</Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
      
      <main>{children} </main>
    </div>
  );
}
