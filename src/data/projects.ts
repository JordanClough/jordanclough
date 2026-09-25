export interface Project {
  slug: string;
  title: string;
  description: string;
  accomplishments: string[];
  technologies: string[];
  image?: string;
  imageAlt?: string;
  tile?: "portfolio" | "sql";
}

import exoCover from "../assets/project_photos/tessTelescopeSQ.webp";
import activityPhoto from "../assets/project_photos/postactiv.webp";

export const projects: Project[] = [
  {
    slug: "exoplanet-classifier",
    title: "Exoplanet Machine Learning Classifier",
    description:
      "A machine learning model that classifies exoplanets from NASA's TESS telescope lightcurve data.",
    accomplishments: [
      "Built a classifier to distinguish confirmed planets from false positives using TESS lightcurve data.",
      "Evaluated neural networks and classical models to find the most effective architecture.",
      "Automated ingestion and preprocessing for large-scale lightcurve datasets.",
      "Denoised raw lightcurves and normalized flux values to improve data quality.",
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Matplotlib"],
    image: exoCover,
    imageAlt: "TESS telescope exoplanet visualization",
  },
  {
    slug: "fitness-tracker",
    title: "Fitness Tracker iOS App",
    description:
      "An iOS app that tracks fitness activities and surfaces detailed performance insights.",
    accomplishments: [
      "Tracked distance and speed with real-time metric display.",
      "Built activity history, progress, and map views with SwiftUI.",
      "Added post-activity review so users can analyze completed workouts.",
      "Integrated Firebase auth and secure cloud storage for activity data.",
    ],
    technologies: ["Swift", "SwiftUI", "Firebase"],
    image: activityPhoto,
    imageAlt: "Fitness tracker post-activity screen",
  },
  {
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "The site you are viewing — a responsive portfolio for projects and skills.",
    accomplishments: [
      "Designed an iterative, responsive layout for desktop and mobile.",
      "Built reusable React components for modularity and scale.",
      "Added direct contact links with copy-to-clipboard for zero-backend reliability.",
    ],
    technologies: ["React", "TypeScript", "Tailwind", "Vite"],
    tile: "portfolio",
  },
  {
    slug: "database-gui",
    title: "Database GUI",
    description:
      "A user-friendly GUI for sorting, filtering, and searching a SQL Server database.",
    accomplishments: [
      "Enabled sort, filter, and search over SQL Server data from a desktop GUI.",
      "Kept UI and DB in sync while preserving integrity and validation.",
      "Optimized queries for responsive interaction.",
    ],
    technologies: ["Python", "Tkinter", "SQL Server", "SQL"],
    tile: "sql",
  },
];
