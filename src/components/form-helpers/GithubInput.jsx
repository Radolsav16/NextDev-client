import { CodeBracketIcon } from "@heroicons/react/24/outline"

export default function GithubInput(){
    return (
        <div>
            <label htmlFor="github" className="block text-sm font-medium text-gray-900">
              GitHub URL
            </label>
            <div className="mt-2 relative rounded-md shadow-sm">
              <CodeBracketIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="url"
                name="github"
                id="github"
                placeholder="https://github.com/username"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>
    )
}

