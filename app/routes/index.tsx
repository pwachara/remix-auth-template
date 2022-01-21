import { json, LoaderFunction, useLoaderData, Outlet, Link } from "remix";
import {
  getUserFromCookies,
  UserWithoutPassword,
} from "~/utils/auth/user.server";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "Service Fee App" };
};

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
    <div>
      {!user && (
        <section className="grid grid-cols-3 h-screen content-center ml-48">
          <div className="col-span-1 content-center justify-center">
            <h1 className="text-4xl lg:text-5xl text-slate-500 pb-5">
              Next generation Solutions
            </h1>
            <p className="text-neutral-grayish-blue text-xs lg:text-base leading-5 mb-7">
              Take your service charge management life online. This site will be
              a one-stop-shop for payments, tracking, reporting and much more.
            </p>
            <button className="bg-blue-600 px-7 py-3 font-bold rounded-full text-white text-sm hover:bg-blue-700 hover:text-yellow-500 mb-7 focus:outline-none focus:ring ring-blue-700">
              <Link to="/signup">Start Using</Link>
            </button>
          </div>
        </section>
      )}

      {user && (
        <section className="bg-red-100">
          <div className="grid grid-cols-12 gap-2">
            <aside className="col-span-2 bg-gray-200 h-screen">
          <div className="border border-gray-400 rounded-2 bg-gray-300 pt-0 pb-8">
            {/*heading */}
            <div className="bg-gray-600 text-xl text-gray-300">Heading</div>
          <div className="w-36 h-36 bg-gray-100 rounded-full p-8 mx-auto mt-10">
              <svg xmlns="http://www.w3.org/2000/svg" 
                className="text-blue-600" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          

          <div className="border border-gray-400 rounded-2 bg-gray-300 pt-0 pb-8">

          <div className="bg-gray-600 text-xl text-gray-300">Heading</div>
          <div className="w-36 h-36 bg-gray-100 rounded-full p-8 mx-auto mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" 
              className="text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
            </svg>
          </div>
          </div>

              <p>One</p>
              <p>Two</p>
              <p>Three</p>
            </aside>
            <section className="col-start-3 col-span-10 bg-blue-200 h-screen">
              <h1>This is the Body</h1>
            </section>
          </div>
          <Outlet />
        </section>
      )}
    </div>
  );
}
