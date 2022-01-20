import { json, LoaderFunction, useLoaderData, Outlet,} from "remix";
import {
  getUserFromCookies,
  UserWithoutPassword,
} from "~/utils/auth/user.server";
import type { MetaFunction } from "remix";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
  return {title: "Service Fee App"}
}

export const loader: LoaderFunction = async function ({ request }) {
  const { user, newResponseHeaders } = await getUserFromCookies(request);

  return json(
    { user },
    {
      headers: newResponseHeaders,
    }
  );
};

export default function Index() {
  const { user }: { user: UserWithoutPassword | undefined } = useLoaderData();

  return (
    <Layout user={user}>

      {!user && (
      <hgroup>
        <h1>Thank you for choosing the Service Fee App</h1>
        <h2>We promise to deliver our best</h2>
      </hgroup>)}
      
      {user && (
          <section>
            <div className="grid" style={{gridTemplateColumns: "1fr 4fr"}}>
              <article className="left-menu" >
                
                  <p>One</p>
                  <p>Two</p>
                  <p>Three</p>
                
              </article>
              <article>
                <header>
                  This is the Menu for This section
                </header>
                  Body
                <footer>
                  This is the footer
                </footer>
              </article>
            </div>
          <Outlet />
          </section>
        
      )}

    </Layout>
  );
}
