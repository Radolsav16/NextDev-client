import { DocumentTextIcon } from "@heroicons/react/24/outline"

export default function UploadCVInput(){
    return(
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
    )
}