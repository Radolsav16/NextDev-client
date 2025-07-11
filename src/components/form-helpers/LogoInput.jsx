export default function  LogoInput(){
    return(
          <div>
                  <label htmlFor="logo" className="block text-sm font-medium text-gray-900">
                    Upload Company Logo
                  </label>
                  <div className="mt-2 flex items-center gap-4">
                    <UserCircleIcon className="h-12 w-12 text-gray-300" />
                    <label
                      htmlFor="logo"
                      className="cursor-pointer rounded-md bg-blue-50 px-4 py-2 font-medium text-blue-600 hover:bg-blue-100"
                    >
                      Choose file
                      <input
                        id="logo"
                        name="logo"
                        type="file"
                        accept=".png,.jpg,.jpeg"
                        className="sr-only"
                      />
                    </label>
                    <span className="text-sm text-gray-500">PNG, JPG</span>
                  </div>
                  </div>
    )
}