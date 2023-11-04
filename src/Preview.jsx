import { Link } from "react-router-dom";

export default function Preview() {
  return (
    <div className="font-instrument flex justify-center gap-4 p-5">
      <Link to="/">
        <button className="text-dark-purple font-semibold border border-dark-purple rounded-lg px-6 py-2.5">
          Back to Editor
        </button>
      </Link>

      <button className="text-white font-medium bg-dark-purple rounded-lg px-10 py-2.5">
        Share Link
      </button>
    </div>
  );
}
