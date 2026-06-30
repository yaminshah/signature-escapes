export default function ThankYou() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl text-yellow-500 mb-4">
          Thank You!
        </h1>

        <p className="text-xl">
          Your inquiry has been submitted successfully.
        </p>

        <p className="mt-4 text-gray-400">
          Our team will contact you shortly.
        </p>
      </div>
    </div>
  );
}