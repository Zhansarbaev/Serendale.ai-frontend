"use client";

import { reviews } from "@/data/reviews";
import Script from "next/script";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Reviews() {
  const averageRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1) 
    : "5.0";

  return (
    <section id="reviews" className="py-12 md:py-24 2k:py-40 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[600px] 2k:w-[900px] h-[250px] md:h-[600px] 2k:h-[900px] bg-purple-600/10 blur-[80px] md:blur-[120px] 2k:blur-[180px] rounded-full -z-10" />

      <div className="max-w-[1920px] mx-auto px-4 md:px-10 2k:px-20 relative z-10">
        <div className="text-center mb-10 md:mb-16 2k:mb-32">
          <h2 className="text-2xl md:text-5xl 2k:text-7xl font-bold text-white mb-4 tracking-tight italic uppercase">
            Voice of the <span className="text-purple-500">Community</span>
          </h2>
          <p className="text-gray-500 uppercase tracking-[0.2em] text-[9px] md:text-sm 2k:text-lg font-medium">
            Rating: {averageRating} / 5.0 • {reviews.length} reviews
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 2k:gap-16">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="relative p-[1px] rounded-xl md:rounded-2xl 2k:rounded-[40px] bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/40 transition-all duration-500 group"
            >
              <div className="bg-[#0a0a0a] rounded-[calc(0.75rem-1px)] md:rounded-[calc(1rem-1px)] 2k:rounded-[calc(2.5rem-1px)] p-5 md:p-8 2k:p-16 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4 md:mb-8 2k:mb-12">
                    <FaQuoteLeft className="text-xl md:text-3xl 2k:text-5xl text-purple-600/30 group-hover:text-purple-500/60 transition-colors" />
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, starIdx) => (
                        <FaStar 
                          key={starIdx} 
                          className={`text-[9px] md:text-xs 2k:text-lg ${starIdx < review.rating ? "text-purple-500" : "text-gray-800"}`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm md:text-lg 2k:text-2xl leading-relaxed mb-6 md:mb-10 2k:mb-16 italic font-light">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 md:gap-4 2k:gap-8 border-t border-white/5 pt-5 md:pt-8 2k:pt-12">
                  <div className="relative">
                    <div className="w-8 h-8 md:w-12 md:h-12 2k:w-20 2k:h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-xs md:text-base 2k:text-2xl font-bold italic">
                      {review.name.charAt(0)}
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 md:w-4 md:h-4 2k:w-6 2k:h-6 bg-green-500 border-2 border-black rounded-full" />
                  </div>
                  <div>
                    <div className="text-white text-[13px] md:text-base 2k:text-2xl font-semibold tracking-wide uppercase italic">
                      {review.name}
                    </div>
                    <div className="text-[8px] md:text-xs 2k:text-sm text-purple-500 uppercase tracking-widest font-medium">
                      Verified User
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Script
        id="reviews-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Aeterna",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": averageRating,
              "reviewCount": reviews.length,
            },
            "review": reviews.map((r) => ({
              "@type": "Review",
              "author": { "@type": "Person", "name": r.name },
              "reviewRating": { "@type": "Rating", "ratingValue": r.rating },
              "reviewBody": r.text,
            })),
          }),
        }}
      />
    </section>
  );
}