import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function PhotoFormInput(){
    return( 
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
    );

}