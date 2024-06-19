import Link from "next/link";
import Authenticate from "./Authenticate";

const Navigation = () => (
  <nav className="flex items-center gap-4 bg-gray-800 p-4">
    <ul className="flex space-x-4">
      <li>
        <Link className="text-white hover:text-gray-300" href="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-white hover:text-gray-300" href="/altar">
          Create Altar
        </Link>
      </li>
      {/* Add more navigation links as needed */}
    </ul>
    <div className="flex items-center">
      <Authenticate />
    </div>
  </nav>
);

export default Navigation;
