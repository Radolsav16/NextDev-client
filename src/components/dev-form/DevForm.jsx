import FormInput from "../form-helpers/FormInput";
import FormTextArea from "../form-helpers/FormTextArea";
import PhotoFormInput from "../form-helpers/PhotoFormInput";
import UploadCVInput from "../form-helpers/UploadCVInput";
import GithubInput from "../form-helpers/GithubInput";
import LinkedInput from "../form-helpers/LinkedInInput";
import { useForm } from "../../hooks/useForm";

const inputs = [
  {
    label: "Username",
    name: "username",
    id: "username",
    placeholder: "Jane Smith",
  },
  {
    label: "Email",
    name: "email",
    id: "email",
    placeholder: "nextdev@gmail.com",
  },
  {
    label: "Password",
    name: "password",
    id: "password",
    placeholder: "",
    type: "password",
  },
];


export default function DevForm() {
 
 const {state,handleChange,submit} = useForm()

 
  

 
  return (
    <>
      <div className="space-y-6">
        {inputs.map((i) => (
          <FormInput
            key={i.id}
            label={i.label}
            name={i.name}
            id={i.id}
            placeholder={i.placeholder}
            type={i?.type}
            value={state[i.name]}
            onChange={handleChange}
          />
        ))}
      </div>

      <FormTextArea
        label={"Bio"}
        name={"bio"}
        id={"bio"}
        rows={3}
        placeholder={"Tell us a bit about yourself..."}
        value={state.bio}
        onChange={handleChange}
      />

      <PhotoFormInput />

      <UploadCVInput />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <GithubInput value={state.github_url} onChange={handleChange}/>
        <LinkedInput value={state.linkedIn_url} onChange={handleChange}/>
      </div>

      <FormTextArea
        label={"Skills"}
        name={"skills"}
        id={"skills"}
        rows={5}
        placeholder={"HTML, CSS, JavaScript"}
        value={state.skills}
        onChange={handleChange}
      />


      <FormTextArea
        label={"Projects (links)"}
        name={"projects"}
        id={"projects"}
        rows={5}
        placeholder={"https://next-dev.com"}
        value={state.projects}
        onChange={handleChange}
      />

      <div className="mt-8 flex justify-end gap-4 mt-20">
        <button
          type="button"
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700"
          onClick={submit}
        >
          Save Profile
        </button>
      </div>
    </>
  );
}
