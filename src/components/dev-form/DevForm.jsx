
import { UserCircleIcon, DocumentTextIcon, CodeBracketIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';



export default function DevForm(){
    return(
        <>
      
              <div className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-900">
                    Username
                  </label>
                  <div className="mt-2 flex rounded-md border border-gray-300 bg-white">
                   
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Smith19"
                      className="flex-1 block w-full px-3 py-2 focus:outline-none"
                    />
                  </div>

                  

                  
                  
                </div>

                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <div className="mt-2 flex rounded-md border border-gray-300 bg-white">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="nextdev@gmail.com"
                      className="flex-1 block w-full px-3 py-2 focus:outline-none"
                    />
                  </div>

                  

                  
                  
                </div>

                 <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <div className="mt-2 flex rounded-md border border-gray-300 bg-white">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="flex-1 block w-full px-3 py-2 focus:outline-none"
                    />
                  </div>

                  

                  
                  
                </div>

               

                
        
                <div>
                  <label htmlFor="about" className="block text-sm font-medium text-gray-900">
                    About
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                    placeholder="Tell us a bit about yourself..."
                  />
                </div>
        
                <div>
                  <label className="block text-sm font-medium text-gray-900">Photo</label>
                  <div className="mt-2 flex items-center gap-4">
                    <UserCircleIcon className="h-12 w-12 text-gray-300" />
                    <button
                      type="button"
                      className="px-3 py-1.5 bg-gray-100 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-200"
                    >
                      Change
                    </button>
                  </div>
                </div>


                 <div>
          <label htmlFor="cv" className="block text-sm font-medium text-gray-900">
            Upload CV
          </label>
          <div className="mt-2 flex items-center gap-4">
            <DocumentTextIcon className="h-8 w-8 text-gray-400" />
            <label
              htmlFor="cv"
              className="cursor-pointer rounded-md bg-blue-50 px-4 py-2 font-medium text-blue-600 hover:bg-blue-100"
            >
              Choose file
              <input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" className="sr-only" />
            </label>
            <span className="text-sm text-gray-500">PDF, DOC up to 5MB</span>
          </div>
        </div>
        
               
                {/* Skills Input */}
                <div>
                  <label htmlFor="skills" className="block text-sm font-medium text-gray-900">
                    Skills (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="skills"
                    id="skills"
                    placeholder="JavaScript, React, Tailwind"
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                  />
                </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-900">
              LinkedIn URL
            </label>
            <div className="mt-2 relative rounded-md shadow-sm">
              <BuildingLibraryIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="url"
                name="linkedin"
                id="linkedin"
                placeholder="https://linkedin.com/in/username"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>
        </div>

        
                {/* Projects */}
                <div>
                  <label htmlFor="projects" className="block text-sm font-medium text-gray-900">
                    Projects (links)
                  </label>
                  <textarea
                    id="projects"
                    name="projects"
                    rows={2}
                    className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
                    placeholder="https://github.com/jane/my-project…"
                  />
                </div>
              </div>
        
              {/* Actions */}
              <div className="mt-8 flex justify-end gap-4">
                <button
                  type="button"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700"
                >
                  Save Profile
                </button>
              </div>
           
    
        </>
    )
}