function ErrorMessage({ error }) {
  return (
    <div className="bg-red-500/20 border border-red-400 text-center p-4 rounded-2xl mt-10">
      <h1 className="text-xl font-semibold">{error}</h1>
    </div>
  );
}

export default ErrorMessage;
