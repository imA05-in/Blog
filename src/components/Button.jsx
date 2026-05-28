export default function Button({
  label = "submit",
  type = "submit",
  clssName,
  ...props
}) {
  return (
    <button
      type={type}
      className={`${clssName} bg-blue-500 font-medium rounded w-full`}
      {...props}
    >
      {label}
    </button>
  );
}
