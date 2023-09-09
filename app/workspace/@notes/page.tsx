export default function Page() {
  return (
    <div>
      <p>Notes</p>
      <textarea
        className="w-full h-64 p-2 border-2 border-gray-300 rounded-md resize-none"
        placeholder="What needs to be done?"
      ></textarea>
    </div>
  );
}
