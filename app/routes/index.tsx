import { json, LoaderFunction, useLoaderData, Outlet, Link } from "remix";
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
      
      <section className="grid grid-cols-3 h-screen content-center ml-48">

      <div className="col-span-1 content-center justify-center">

            <h1 className="text-4xl lg:text-5xl text-slate-500 pb-5">
              Next generation Solutions
            </h1>
            <p className="text-neutral-grayish-blue text-xs lg:text-base leading-5 mb-7">
              Take your service charge management life online. This site will be a
              one-stop-shop for payments, tracking, reporting and much more.
            </p>
            <button className="bg-blue-600 px-7 py-3 font-bold rounded-full text-white text-sm hover:bg-blue-700 mb-7 focus:outline-none focus:ring ring-blue-700">
              <Link to="/signup">Start Using</Link> 
            </button>
          </div>

 
    </section>

      
      )}
      
      {user && (
          <section className="flex flex-col-1">
            <div className="grid grid-cols-12 gap-2">
              <aside className="flex flex-col bg-gray-200 h-screen" >
                
                  <p>One</p>
                  <p>Two</p>
                  <p>Three</p>
                
              </aside>
              <section className="col-span-2">
                <h1>This is the Body</h1>
              </section>
            </div>
          <Outlet />
          </section>
        
      )}

    </Layout>
  );
}
