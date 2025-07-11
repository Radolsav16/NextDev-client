import FormInput from "../form-helpers/FormInput";
import FormTextArea from "../form-helpers/FormTextArea";
import PhotoFormInput from "../form-helpers/PhotoFormInput";
import UploadCVInput from "../form-helpers/UploadCVInput";
import GithubInput from "../form-helpers/GithubInput";
import LinkedInput from "../form-helpers/LinkedInInput";

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
          />
        ))}
      </div>

      <FormTextArea
        label={"About"}
        name={"about"}
        id={"about"}
        rows={3}
        placeholder={"Tell us a bit about yourself..."}
      />

      <PhotoFormInput />

      <UploadCVInput />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <GithubInput />
        <LinkedInput />
      </div>

      <FormTextArea
        label={"Projects (links)"}
        name={"projects"}
        id={"projects"}
        rows={5}
        placeholder={"https://next-dev.com"}
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
        >
          Save Profile
        </button>
      </div>
    </>
  );
}
