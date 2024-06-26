interface Props {
  title: string;
  style?: string;
  disabled?: boolean;
}

export default function Button(props: Props) {
  const title = props.title;
  let style = props.style;
  const disabled = props.disabled || false;

  if (style !== "primary") {
    style = "bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400";
  } else {
    style = "bg-gray-900 hover:bg-gray-400 text-gray-200";
  }

  if (disabled) {
    style = "bg-gray-400 text-gray-800 cursor-not-allowed";
  }

  return (
    <button
      className={`rounded-md mt-6 w-full font-bold py-3 px-4 inline-flex items-center ${style}`}
      disabled={disabled}
    >
      <span>{title}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 ml-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </button>
  );
}
