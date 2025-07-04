import { useFormContext } from "../../contexts/form"


export default function RoleSelect(){
    const {isDev,change} = useFormContext()
    return(
        <>
         <fieldset className="flex items-center justify-center gap-6 mb-8">
        <legend className="sr-only">Select role</legend>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="role"
            value="dev"
            checked = {isDev}
            className="h-5 w-5 text-blue-600 border-gray-300"
            onChange={change}
          />
          <span className="text-gray-900 font-medium">Developer</span>
        </label>
        <label className="flex items-center gap-2 ">
          <input
            type="radio"
            name="role"
            value="employer"
            checked = {!isDev}
            className="h-5 w-5 text-blue-600 border-gray-300"
            onChange={change}
          />
          <span className="text-gray-900 font-medium">Employer</span>
        </label>
      </fieldset>
        </>
    )
}