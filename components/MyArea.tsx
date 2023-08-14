import {
  Layout,
  UserCheck,
  Brush,
  SearchCheck,
} from "../node_modules/lucide-react";

export default function MyArea() {
  return (
    <div className="my-10">
      <h2 className="text-3xl font-extrabold font-sans">My Area</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="bg-gradient-to-tl dark:from-black dark:to-gray-500/10 from-black/20 to-white rounded-lg shadow-2xl p-5">
          <div className="flex items-center gap-x-4 mb-2">
            <Layout />
            <h3 className="font-bold font-sans text-3xl text-orange-500">
              Web Development
            </h3>
          </div>
          <p>
            We use the design we have to create a customized website or web
            application. If you have already benefited from our design service,
            we offer you a customized digital experience based on this design.
          </p>
        </div>
        <div className="bg-gradient-to-tr dark:from-black dark:to-gray-500/10 from-black/20 to-white  rounded-lg shadow-2xl p-5">
          <div className="flex items-center gap-x-4 mb-2">
            <UserCheck />
            <h3 className="font-bold font-sans text-3xl text-blue-500">
              UI/UX
            </h3>
          </div>
          <p>
            Have you noticed some user experience issues with the design you
            have? Don&apos;t worry, we are happy to help you with this. Working
            together, we can resolve these issues. Our goal is to work together
            to provide the best experience for your users.
          </p>
        </div>
        <div className="bg-gradient-to-bl dark:from-black dark:to-gray-500/10 from-black/20 to-white  rounded-lg shadow-2xl p-5">
          <div className="flex items-center gap-x-4 mb-2">
            <Brush />
            <h3 className="font-bold font-sans text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              Web Design
            </h3>
          </div>
          <p>
            Don&apos;t have a design in hand? Don&apos;t worry, we are here for
            you to review our design service. We create a design specific to
            your needs and work with you at every stage of the project. We take
            steps together for a customized digital experience.
          </p>
        </div>
        <div className="bg-gradient-to-br dark:from-black dark:to-gray-500/10 from-black/20 to-white  rounded-lg shadow-2xl p-5">
          <div className="flex items-center gap-x-4 mb-2">
            <SearchCheck />
            <h3 className="font-bold font-sans text-3xl text-green-500">
              Search Engine Optimization
            </h3>
          </div>
          <p>
            Is your site not showing up in search engines as much as you would
            like? Don&apos;t worry, we&apos;re here to help you rank higher.
            Let&apos;s move your site up a few places together.
          </p>
        </div>
      </div>
    </div>
  );
}
