"use client";

import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { formatDistanceToNow, parseISO } from "date-fns";

const blogs = [
  {
    title: "Beyond Boundaries: The Role of Drones in Modern Logistics",
    desc: "Redefining supply chain efficiency with rugged and first class drones.",
    image: "/products/logistics.webp",
    date: "2025-05-08",
    slug: "logistics",
  },
  {
    title: "The Future of Emergency Response: Drones to the Rescue",
    desc: "Enhancing disaster relief and real-time awareness with UAVs.",
    image: "/products/fire.webp",
    date: "2025-05-08",
    slug: "fire",
  },
  {
    title: "How UAVs Are Transforming Precision Agriculture",
    desc: "Revolutionizing farming with precision spraying and crop monitoring.",
    image: "/products/agri.jpg",
    date: "2025-05-08",
    slug: "agri",
  },
];

export default function LatestBlogs() {
  return (
    <section className="mt-24 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Latest Blogs</h2>
        <p className="text-gray-500 mt-2">
          Explore our latest thoughts, trends, and updates shaping the future of UAV technology and aero mobility.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, idx) => {
          const publishedDate = parseISO(blog.date);
          const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: false });

          return (
            <CardContainer key={idx} className="inter-var w-full">
              <CardBody
                className="bg-white/60 backdrop-blur-lg group/card rounded-xl border border-gray-200 p-5 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl group-hover/card:blur-[2px] group-hover/card:opacity-80 transition-all duration-300 pointer-events-none" />

                {/* Image */}
                <CardItem translateZ={80} className="relative z-10 rounded-xl overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover rounded-xl group-hover/card:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 bg-black/60 text-white text-xs px-3 py-1 rounded-tr-lg">
                    <span>{timeAgo} ago</span> –{" "}
                    {publishedDate.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </CardItem>

                {/* Title */}
                <CardItem
                  translateZ={40}
                  className="text-lg font-semibold mt-5 text-gray-900 leading-snug z-10"
                >
                  {blog.title}
                </CardItem>

                {/* Description */}
                <CardItem
                  translateZ={20}
                  as="p"
                  className="text-sm text-gray-600 mt-2 z-10"
                >
                  {blog.desc}
                </CardItem>

                {/* Read More Link (wrapped in <Link>) */}
                <Link href={`/blogs/${blog.slug}`} passHref>
                  <CardItem
                    translateZ={10}
                    className="mt-5 z-10 text-teal-600 font-medium text-sm flex items-center gap-1 hover:underline hover:text-teal-700 transition-colors cursor-pointer"
                  >
                    Read more →
                  </CardItem>
                </Link>
              </CardBody>
            </CardContainer>
          );
        })}
      </div>
    </section>
  );
}
