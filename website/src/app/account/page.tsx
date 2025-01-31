export default function Account() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f0e4d7] p-6 font-mono">
      <div className="text-6xl font-semibold pb-12">My Account</div>
      <div className="flex flex-col text-2xl">
        <div>Username: </div>
        <div>
          <button type="button">My Images</button>
        </div>
        <div>
          <button type="button" className="rounded bg-red-600 p-2">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
