import React from "react";
import TestimonialCard from "../Components/Testimonial";
import SectionTitle from "../Components/Experience;";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily Watson",
      location: "New York, USA",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      rating: 5,
      quote:
        "The ceramic vase I ordered exceeded all my expectations. The craftsmanship is incredible, and you can really feel the love that went into making it. It's become the centerpiece of my living room.",
    },
    {
      id: 2,
      name: "James Miller",
      location: "London, UK",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5,
      quote:
        "I've been collecting handmade furniture for years, and the wooden coffee table from Unique is by far my favorite piece. The attention to detail is remarkable, and the wood grain is absolutely beautiful.",
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      location: "Barcelona, Spain",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      rating: 5,
      quote:
        "The silk scarf I purchased is not just an accessory, it's a work of art. The colors are vibrant, the texture is luxurious, and I love knowing it was made by skilled artisans. Highly recommend!",
    },
    {
      id: 4,
      name: "David Chen",
      location: "Toronto, Canada",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5,
      quote:
        "Shopping with Unique has been an amazing experience. The customer service is exceptional, and every item I've received has been perfectly packaged and exactly as described. Quality is outstanding.",
    },
    {
      id: 5,
      name: "Maria Santos",
      location: "São Paulo, Brazil",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      rating: 5,
      quote:
        "I love that each piece comes with a story about the artisan who made it. It makes me feel connected to the craft and the culture. The jewelry I bought is absolutely stunning and unique.",
    },
    {
      id: 6,
      name: "Alex Thompson",
      location: "Sydney, Australia",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      rating: 5,
      quote:
        "The macrame wall hanging transformed my bedroom completely. It's clear that a lot of skill and time went into creating it. I appreciate supporting artisans through Unique's platform.",
    },
    {
      id: 7,
      name: "Lisa Anderson",
      location: "Stockholm, Sweden",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      rating: 5,
      quote:
        "The abstract canvas art I ordered is breathtaking. The colors blend perfectly with my home decor, and it's become a conversation starter with every guest. Worth every penny!",
    },
    {
      id: 8,
      name: "Robert Kim",
      location: "Seoul, South Korea",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop",
      rating: 5,
      quote:
        "Fast shipping, excellent packaging, and the bamboo dining set is even more beautiful in person. The sustainable materials and ethical production make me feel good about my purchase.",
    },
    {
      id: 9,
      name: "Anna Kowalski",
      location: "Warsaw, Poland",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      rating: 5,
      quote:
        "I've recommended Unique to all my friends. The quality is consistently excellent, and I love supporting traditional craftsmanship. My leather bag gets compliments everywhere I go.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto container-px">
          <SectionTitle
            title="What Our Customers Say"
            subtitle="Don't just take our word for it. Here's what our customers around the world have to say about their Unique experience."
          />
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto container-px">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto container-px">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">1,200+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>

            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto container-px text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Discover unique, handcrafted pieces and become part of our global
            family of craft enthusiasts.
          </p>
          <a
            href="/collection"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Start Shopping
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
