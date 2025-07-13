export default function FormTextArea({
  label,
  name,
  id,
  rows,
  placeholder,
  value,
  onChange
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        onChange={onChange}
        className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}
