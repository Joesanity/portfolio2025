export default function AboveTitle({text} : {text: string}) {
  return (
    <>
      <p className="text-md mb-3 font-mono text-sm tracking-wide text-gray-600">
        {text}
      </p>
    </>
  );
}
