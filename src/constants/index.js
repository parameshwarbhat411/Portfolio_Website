import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    school,
    healthedge,
    vtu,
    gwu,
    github_open_source,
    weather_forecast,
    ci_cd
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "Qualification",
      title: "Education",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "tech",
      title: "Skills",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "blogs",
      title: "Blogs",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];

  export const education = [
    {
      name: "Visvesvaraya Technological University",
      icon: vtu,
      startDate: "2017",
      endDate: "2021",
      degree: "Bachelor of Engineering in Information Science and Engineering",
    },
    {
      name: "The George Washington University",
      icon: gwu,
      startDate: "2023",
      endDate: "2025",
      degree: "Master of Science in Data Science",
    },
  ];
  
  const services = [
    {
      title: "Data Engineer",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Analyst",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "HealthEdge",
      icon: healthedge,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - June 2021",
      points: [
        "Facilitated data migration from Oracle to Hadoop HDFS, resulting in 50% reduction in query processing time, improvingsystem performance for 200+ users. Conducted extensive data validation to ensure accuracy, reliability of migrated data.",
        "Engineered and optimized ETL pipelines using Apache Spark, Hive, and Apache Kafka, enhancing real-time dataavailability by 40% and ensuring data integrity. Developed automated monitoring scripts to maintain data pipeline efficiency.",
        "Implemented process improvements to streamline data delivery, increasing scalability and reducing data processing latencyby 30%. Designed and executed comprehensive testing protocols to verify enhancements and minimize downtime.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "HealthEdge",
      icon: healthedge,
      iconBg: "#E6DEDD",
      date: "June 2021 - July 2023",
      points: [
        "Developed a microservice-based notification system using Spring Boot and REST APIs, improving notification deliveryefficiency by 35%. Integrated system with third-party services to enhance functionality and user experience",
        "Enhanced CI/CD processes with Jenkins and SonarQube, reducing deployment times by 20%, increasing code reliability,resulting in a 25% decrease in system downtime. Implemented automated build and test scripts to streamline workflows.",
        "Authored 100+ integration and unit tests, achieving 80% code coverage and significantly enhancing code reliability androbustness, conducted regular code reviews to maintain high coding standards and improve team collaboration.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: gwu,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "GitHub Open Source Insights Pipeline",
      description:
        "A comprehensive ELT pipeline that provides insightful analysis of GitHub open-source repositories, enabling users to evaluate repositories based on key metrics such as popularity and contribution activities.",
      tags: [
        {
          name: "GH Archive",
          color: "blue-text-gradient",
        },
        {
          name: "DuckDB",
          color: "green-text-gradient",
        },
        {
          name: "DBT",
          color: "pink-text-gradient",
        },
        {
          name: "Flask",
          color: "yellow-text-gradient",
        },
        {
          name: "Streamlit",
          color: "purple-text-gradient",
        },
        {
          name: "Docker",
          color: "orange-text-gradient",
        },
      ],
      image: github_open_source, // Replace with the actual image variable for the project
      source_code_link: "https://github.com/parameshwarbhat411/github-open-source-insights-pipeline",
      medium_article_link: "https://medium.com/@parameshwarbhat411/github-stars-pipeline-c0b20c98c3fb"
    },
    {
      name: "Automated Weather Data Analysis and Forecasting Pipeline",
      description:
        "A data pipeline that extracts, processes, and analyzes weather data to predict the next day's weather using Apache Airflow, Google Cloud Storage, and Google BigQuery.",
      tags: [
        {
          name: "Apache Airflow",
          color: "blue-text-gradient",
        },
        {
          name: "Google Cloud Storage",
          color: "green-text-gradient",
        },
        {
          name: "BigQuery",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "yellow-text-gradient",
        },
        {
          name: "ETL",
          color: "purple-text-gradient",
        },
      ],
      image: weather_forecast, // Replace with the actual image variable for the project
      source_code_link: "https://github.com/parameshwarbhat411/Weather_Prediction_Project",
      medium_article_link:""
    },
    {
      name: "CI/CD for Modern Data Engineering",
      description:
        "A comprehensive guide on setting up a CI/CD pipeline tailored for modern data engineering. The project walks through deploying an ETL pipeline using Docker, Jenkins, and GitHub, focusing on automation, testing, and deployment.",
      tags: [
        {
          name: "CI/CD",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "green-text-gradient",
        },
        {
          name: "Jenkins",
          color: "pink-text-gradient",
        },
        {
          name: "GitHub",
          color: "yellow-text-gradient",
        },
        {
          name: "Python",
          color: "purple-text-gradient",
        },
      ],
      image: ci_cd, // Replace with the actual image variable for the project
      source_code_link: "https://github.com/parameshwarbhat411/DE_Pipeline",
      medium_article_link: "https://medium.com/towardsdev/ci-cd-for-modern-data-engineering-e2e7d2d0a694",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };