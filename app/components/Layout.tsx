import { RemixEntry } from "@remix-run/react/components";
import type { ReactNode } from "react";
import { Link, Outlet } from "remix";

export default function Layout({
  children,
  user,
}: {
  children: ReactNode;
  user?: { emailAddress: string };
}) {
  return (
    <>
      <nav className="container-fluid">
        <ul>
          <li>
            <Link to="/" className="contrast">
              Service Fee App
            </Link>
          </li>
        </ul>
        <ul>
          {!!user && (
            <>
              <li>{user.emailAddress}</li>
    
              <li>
                <Link to="/auth/logout">Sign out</Link>
              </li>
            </>
          )}
          {!!user || (
            <>
              <li>
                <Link to="/signin">Sign in</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <hr />
      <main className="container-fluid">{children} </main>
    </>
  );
}
