export default function FormInput({label,name,id,placeholder,type = 'text',value,onChange}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2 flex rounded-md border border-gray-300 bg-white">
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className="flex-1 block w-full px-3 py-2 focus:outline-none"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
