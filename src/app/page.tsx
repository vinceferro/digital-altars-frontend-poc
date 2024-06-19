import Navigation from "@/components/Navigation";

const Home = () => (
  <div className="container mx-auto py-8">
    <section className="mb-8">
      <h1 className="text-3xl font-bold mb-4">Digital Altar Platform</h1>

      {/* Recent Activities Section */}
      <div className="p-4 border rounded-lg shadow-md bg-white mb-4">
        <h2 className="text-xl font-bold mb-2">Recent Activities</h2>
        <ul>
          <li className="text-sm">Display recent interactions here...</li>
          <li className="text-sm">Example: New photo uploaded...</li>
          <li className="text-sm">Example: NFT created...</li>
        </ul>
      </div>

      {/* Notifications Section */}
      <div className="p-4 border rounded-lg shadow-md bg-white">
        <h2 className="text-xl font-bold mb-2">Notifications</h2>
        <ul>
          <li className="text-sm">Display notifications here...</li>
          <li className="text-sm">Example: New altar shared...</li>
          <li className="text-sm">Example: Edit permission granted...</li>
        </ul>
      </div>
    </section>
  </div>
);

export default Home;
