export default function Links() {
  return (
    <div className="bg-lighter-gray rounded-lg p-5 grid gap-3">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <div className="grid gap-1">
            <div className="bg-gray h-px w-3"></div>
            <div className="bg-gray h-px w-3"></div>
          </div>
          <div className="text-gray font-bold">Link #1</div>
        </div>
        <div className="text-gray">Remove</div>
      </div>
      <div className="grid gap-3">
        <div className="grid gap-1">
          <label htmlFor="links" className="text-xs text-dark-gray">
            Platform
          </label>
          <select
            className="appearance-none rounded-lg p-3 border-light-gray border text-dark-gray"
            name="links"
            id="links"
          >
            <option value="github">GitHub</option>
            <option value="frontend-mentor">Frontend Mentor</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="YouTube">YouTube</option>
            <option value="Facebook">Facebook</option>
            <option value="Twitch">Twitch</option>
            <option value="Dev.to">Dev.to</option>
            <option value="Codewars">Codewars</option>
            <option value="freeCodeCamp">freeCodeCamp</option>
            <option value="GitLab">GitLab</option>
            <option value="Hashnode">Hashnode</option>
            <option value="stack-overflow">Stack Overflow</option>
          </select>
        </div>
        <div className="grid gap-1">
          <label className="text-xs text-dark-gray" htmlFor="link">
            Link
          </label>
          <input
            className="rounded-lg p-3 border-light-gray border text-dark-gray"
            id="link"
            type="text"
            placeholder="e.g. https://www.github.com"
          />
        </div>
      </div>
    </div>
  );
}
