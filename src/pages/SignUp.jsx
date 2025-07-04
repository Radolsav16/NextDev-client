import DevForm from "../components/dev-form/DevForm";
import EmpForm from "../components/emp-form/EmpForm";
import RoleSelect from "../components/role-select/RoleSelect";
import { useFormContext } from "../contexts/form";



export default function SignUp() {
    const {isDev} = useFormContext()
  return (
    <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow py-12 mt-20">
        <RoleSelect/>
        {isDev ? <DevForm /> : <EmpForm />}
    </form>
  )
}
