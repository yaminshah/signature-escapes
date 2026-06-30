import Image from "next/image";

const destinations = [
  { title: "Gulmarg", image: "/gul.jpg" },
  { title: "Sonmarg", image: "/son.jpg" },
  { title: "Srinagar", image: "/sxr.jpg" },
  { title: "Pahalgam", image: "/pahal.jpg" },
  { title: "Gurez Valley", image: "/gurez.jpg" },
  { title: "Ladakh", image: "/ladakh.jpg" },
];

const packages = [
  {
    title: "Kashmir Paradise Tour",
    image: "/sxr.jpg",
    duration: "6 Days / 5 Nights",
    price: "₹18,999 / Person",
  },
  {
    title: "Kashmir Honeymoon Special",
    image: "/honey.jpg",
    duration: "5 Days / 4 Nights",
    price: "₹15,999 / Person",
  },
  {
    title: "Adventure Expedition",
    image: "/adventure.jpg",
    duration: "7 Days / 6 Nights",
    price: "₹22,999 / Person",
  },
  {
    title: "Ladakh Expedition",
    image: "/ladakh.jpg",
    duration: "7 Days / 6 Nights",
    price: "₹28,999 / Person",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <div className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="Signature Escapes"
              width={70}
              height={70}
              priority
            />

            <div>
              <h1 className="text-2xl font-bold text-yellow-500">
                Signature Escapes
              </h1>

              <p className="text-xs text-gray-300">
                Beyond Destinations, Into Experiences
              </p>
            </div>
          </div>

          <div className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="hover:text-yellow-500">Home</a>
            <a href="#about" className="hover:text-yellow-500">About</a>
            <a href="#destinations" className="hover:text-yellow-500">Destinations</a>
            <a href="#services" className="hover:text-yellow-500">Services</a>
            <a href="#packages" className="hover:text-yellow-500">Packages</a>
            <a href="#reviews" className="hover:text-yellow-500">Reviews</a>
            <a href="#faq" className="hover:text-yellow-500">FAQ</a>
            <a href="#contact" className="hover:text-yellow-500">Contact</a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center"
      >

        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-6 max-w-5xl">

          <Image
            src="/logo.png"
            alt="Logo"
            width={140}
            height={140}
            className="mx-auto mb-8"
          />

          <p className="uppercase tracking-[8px] text-yellow-400 mb-4">
            Discover The Paradise Of Kashmir
          </p>

          <h1 className="text-4xl md:text-7xl font-bold">
            Signature Escapes
          </h1>

          <p className="text-yellow-500 text-2xl mt-6">
            Luxury Kashmir Experiences
          </p>

          <p className="mt-6 text-lg text-gray-300">
            Premium Hotels • Houseboats • Self Drive Cars •
            Flight Tickets • Luxury Tours
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">

            <a
              href="#packages"
              className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold"
            >
              Explore Packages
            </a>

            <a
              href="https://wa.me/919149817572"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-yellow-500 px-8 py-4 rounded-full"
            >
              WhatsApp Us
            </a>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 bg-zinc-950">

        <h2 className="text-center text-5xl text-yellow-500 mb-10">
          About Signature Escapes
        </h2>

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-lg text-gray-300 leading-9">
            Signature Escapes specializes in luxury Kashmir and Ladakh experiences,
            honeymoon tours, family vacations, self-drive cars, luxury stays and
            customized itineraries.
          </p>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 bg-black">

        <h2 className="text-center text-5xl text-yellow-500 mb-14">
          Why Choose Signature Escapes
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">

          {[
            ["500+ Happy Travelers", "Trusted by travelers across India"],
            ["24/7 Support", "Dedicated support throughout your journey"],
            ["Local Experts", "Experience Kashmir with specialists"],
            ["Best Price", "Luxury experiences at competitive prices"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-zinc-900 border border-yellow-500 rounded-3xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                {title}
              </h3>

              <p className="text-gray-300">
                {desc}
              </p>
            </div>
          ))}

        </div>

      </section>
      {/* DESTINATIONS */}
      <section id="destinations" className="py-24 px-6">

        <h2 className="text-center text-5xl text-yellow-500 mb-14">
          Popular Destinations
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {destinations.map((place) => (
            <div
              key={place.title}
              className="relative h-[350px] rounded-3xl overflow-hidden group hover:shadow-2xl transition duration-300"
            >

              <Image
                src={place.image}
                alt={place.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40" />

              <h3 className="absolute bottom-6 left-6 text-3xl font-bold">
                {place.title}
              </h3>

            </div>
          ))}

        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="bg-zinc-950 py-24 px-6">

        <h2 className="text-center text-5xl text-yellow-500 mb-14">
          Premium Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            "Luxury Hotels",
            "Houseboat Stays",
            "Self Drive Cars",
            "Bike Rentals",
            "Flight Tickets",
            "Private Transfers",
            "24/7 Support",
            "Honeymoon Packages",
            "Corporate Tours",
          ].map((service) => (
            <div
              key={service}
              className="border border-yellow-500 rounded-2xl p-8 text-center hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              <h3 className="text-2xl font-semibold">
                {service}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* STATS */}
      <section className="py-24 px-6 bg-black">

        <h2 className="text-center text-5xl text-yellow-500 mb-14">
          Our Achievements
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          {[
            ["500+", "Happy Travelers"],
            ["100+", "Luxury Hotels"],
            ["24/7", "Support"],
            ["5+", "Years Experience"],
          ].map(([count, text]) => (
            <div
              key={text}
              className="border border-yellow-500 rounded-3xl p-8 text-center"
            >
              <h3 className="text-5xl font-bold text-yellow-500">
                {count}
              </h3>

              <p className="mt-4 text-lg">
                {text}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-24 px-6">

        <h2 className="text-center text-5xl text-yellow-500 mb-14">
          Luxury Packages
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">

          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-yellow-500 hover:-translate-y-2 transition duration-300"
            >

              <div className="relative h-[320px]">

                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold">
                  {pkg.title}
                </h3>

                <p className="text-gray-300 mt-3">
                  {pkg.duration}
                </p>

                <p className="text-yellow-500 text-2xl mt-4">
                  {pkg.price}
                </p>

                <a
                  href="https://wa.me/919149817572"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 bg-yellow-500 text-black px-6 py-3 rounded-full font-bold"
                >
                  Book Now
                </a>

              </div>

            </div>
          ))}

        </div>

      </section>
      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-6 bg-black">

        <h2 className="text-center text-5xl text-yellow-500 mb-14">
          What Our Guests Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

          {[
            [
              "Rahul Sharma",
              "Amazing experience in Kashmir. Hotels, sightseeing and support were outstanding.",
              "Delhi, India",
            ],
            [
              "Priya & Aman",
              "The honeymoon package was perfectly organized. Highly recommended.",
              "Mumbai, India",
            ],
            [
              "Arjun Mehta",
              "Best self-drive car service in Kashmir. Great support and clean vehicles.",
              "Bangalore, India",
            ],
          ].map(([name, review, city]) => (
            <div
              key={name}
              className="bg-zinc-900 border border-yellow-500 rounded-3xl p-8"
            >

              <div className="text-yellow-500 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-300">
                "{review}"
              </p>

              <h3 className="mt-6 text-xl font-bold text-yellow-500">
                {name}
              </h3>

              <p className="text-gray-400">
                {city}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-6 bg-zinc-950">

        <h2 className="text-center text-5xl text-yellow-500 mb-14">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">

          <div className="border border-yellow-500 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-yellow-500">
              Do you provide airport pickup?
            </h3>

            <p className="mt-3 text-gray-300">
              Yes, airport pickup and drop services are available for all packages.
            </p>
          </div>

          <div className="border border-yellow-500 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-yellow-500">
              Are flights included in packages?
            </h3>

            <p className="mt-3 text-gray-300">
              Flights can be included according to your travel requirements.
            </p>
          </div>

          <div className="border border-yellow-500 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-yellow-500">
              Do you provide self-drive cars?
            </h3>

            <p className="mt-3 text-gray-300">
              Yes, we offer premium self-drive cars and bike rentals.
            </p>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black py-24 px-6">

        <h2 className="text-center text-5xl text-yellow-500 mb-14">
          Get Free Quote
        </h2>

<form
  action="https://formsubmit.co/3ffa6191eeffb78c2d3f0a98d9effc2c"
  method="POST"
  className="max-w-2xl mx-auto space-y-5"
>
  <input
    type="hidden"
    name="_next"
    value="http://localhost:3000/thank-you"
  />

  <input
    type="hidden"
    name="_captcha"
    value="false"
  />

  <input
    type="text"
    name="name"
    placeholder="Full Name"
    className="w-full p-4 rounded-xl bg-zinc-900 border border-yellow-500"
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    className="w-full p-4 rounded-xl bg-zinc-900 border border-yellow-500"
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    className="w-full p-4 rounded-xl bg-zinc-900 border border-yellow-500"
  />

  <textarea
    rows={5}
    name="message"
    placeholder="Your Travel Requirement"
    className="w-full p-4 rounded-xl bg-zinc-900 border border-yellow-500"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-yellow-500 text-black p-4 rounded-xl font-bold"
  >
    Submit Inquiry
  </button>
</form>


      </section>

      {/* FOOTER */}
      <footer className="border-t border-yellow-500 py-12 text-center">

        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="mx-auto"
        />

        <h2 className="text-3xl text-yellow-500 mt-5">
          Signature Escapes
        </h2>

        <p className="mt-3">
          Beyond Destinations, Into Experiences
        </p>

        <p className="mt-6">
          📞 +91 91498 17572
        </p>

        <p>
          ✉️ signatureescapes.in@gmail.com
        </p>

        <p>
          Instagram: @signature_escapes_travel
        </p>

        <p className="mt-6 text-gray-400">
          © 2026 Signature Escapes. All Rights Reserved.
        </p>

        <p className="mt-2 text-gray-500">
          Crafted with ❤️ in Kashmir
        </p>

      </footer>

      {/* FLOATING BUTTONS */}

<a
  href="tel:+919149817572"
  className="fixed bottom-24 right-6 bg-yellow-500 text-black px-6 py-4 rounded-full"
>
  Call Us
</a>

<a
  href="https://wa.me/919149817572"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full"
>
  WhatsApp Us
</a>

{/* MANAGING DIRECTOR SECTION */}

<section className="py-20 px-6 bg-zinc-950 text-white">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    <div className="flex justify-center">
      <img
        src="/yamin-shah.jpg"
        alt="Yamin Shah"
        className="w-72 h-72 rounded-full object-cover border-4 border-yellow-500 shadow-2xl"
      />
    </div>

    <div>
      <h2 className="text-4xl font-bold text-yellow-500 mb-4">
        Meet Our Founder
      </h2>

      <h3 className="text-3xl font-bold">
        Yamin Shah
      </h3>

      <p className="text-xl text-yellow-400 mt-2 mb-6">
        Managing Director | Signature Escapes
      </p>

      <p className="text-gray-300 leading-8 text-lg">
        Driven by a passion for showcasing the breathtaking beauty of Kashmir,
        Yamin Shah founded Signature Escapes with a vision to create unforgettable travel experiences.
      </p>
    </div>

  </div>
</section>

</main>
);
}