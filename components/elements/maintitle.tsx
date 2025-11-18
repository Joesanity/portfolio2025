export default function MainTitle({gradientText, text} : {gradientText: string, text: string}) {

  return (
    <>
      <h1 className="text-7xl mb-9 font-light">
        <span className="font-extrabold bg-linear-to-r from-emerald-600 to-sky-500 bg-clip-text text-transparent">
          {gradientText}
        </span>{" "}
        {text}
      </h1>
    </>
  );
}
