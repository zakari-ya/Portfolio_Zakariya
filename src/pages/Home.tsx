import React from "react";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Skills from "../components/Home/Skills";
import Projects from "../components/Home/Projects";
import Services from "../components/Home/Services";
import Contact from "../components/Home/Contact";
import { projectItem } from "../utils/constants";
// import { href } from "react-router-dom";
// import DeveloperTools from "../components/Home/DeveloperTools";

const projects: projectItem[] = [
  {
    title: "E-commerce Platform",
    description:
      "A comprehensive e-commerce solution with real-time inventory management, secure payment gateway integration, and an intuitive user dashboard. Built to handle high traffic and provide a seamless shopping experience.",
    tech: ["MERN", "TypeScript", "Redux", "Stripe"],
    link: "https://example-shop.com",
    image: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
    ],
    status: "completed",
    projectType: "personal",
  },
  {
    title: "ArtisanBakery - Management System",
    description:
      "A full-stack web application for managing bakeries with automated scraping capabilities. Integrates a Node.js/Express backend, Supabase (PostgreSQL) database, and n8n workflow automation to deliver a comprehensive and scalable management solution.",
    tech: [
      "JavaScript",
      "Node.js",
      "Express",
      "Supabase(PostgreSQL)",
      "N8N",
      "JWT",
      "Bcrypt",
      "HTML",
      "CSS",
      "Tailwind",
      "vercel ",
    ],
    link: "https://bakery-managment-one.vercel.app/",
    image: [
      "/assets/baykery1.png",
      "/assets/baykery2.png",
      "/assets/baykery3.png",
    ],
    status: "completed",
    projectType: "personal",
  },
  {
    title: "SaaS Dashboard",
    description:
      "A sophisticated analytics dashboard for SaaS businesses, providing deep insights into user behavior, revenue metrics, and system performance with interactive visualizations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "D3.js"],
    link: "https://example-saas.com",
    image: [
      "https://images.unsplash.com/photo-1551288049-bbda48652ad8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8eecccc90ed?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543674892-7d64d4ad8115?auto=format&fit=crop&w=800&q=80",
    ],
    status: "completed",
    projectType: "client",
  },
  {
    title: "Fitness & Wellness App",
    description:
      "A mobile-responsive web app for personalized fitness plans, habit tracking, and community engagement. Integrates with various health APIs to provide holistic wellness data.",
    tech: ["React", "Express", "MongoDB", "GraphQL"],
    link: "https://example-fitness.com",
    image: [
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    ],
    status: "completed",
    projectType: "client",
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Projects projects={projects} />
      {/* <DeveloperTools /> */}
      <Skills />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
