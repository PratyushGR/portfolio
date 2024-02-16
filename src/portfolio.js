const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pratyush Reddy's Portfolio",
  description:
  "I have a diverse background in DevOps, SRE, and MLOps, with extensive experience in AWS cloud, automation's, Django, REST API, and full-stack development. My focus has been on streamlining operations, optimizing workflows, and driving innovation across various projects.",
  og: {
    title: "Pratyush Reddy Gaggenapalli",
    type: "website",
    url: "http://pratyushreddyg.com/",
  },
};

//Home Page
const greeting = {
  title: "Pratyush Reddy Gaggenapalli",
  logo_name: "PratyushReddyGaggenapalli",
  nickname: "pratyush",
  subTitle:
  "I have a diverse background in DevOps, SRE, and MLOps, with extensive experience in AWS cloud, automation's, Django, REST API, and full-stack development. My focus has been on streamlining operations, optimizing workflows, and driving innovation across various projects.",
  resumeLink:
    "https://www.overleaf.com/read/gqtmcdmqytth#4c7d28",
  portfolio_repository: "https://github.com/PratyushGR/portfolio",
  githubProfile: "https://github.com/PratyushGR",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/PratyushGR",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pratyush-reddy-g-666860159/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:pratyushreddyg@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  }
];

const skills = {
  data: [

    {
      title: "Cloud - Devops/SRE",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS cloud platform",
        "⚡ Hosting and maintaining websites on virtual machine instances",
        "⚡ Automate deployment pipelines for seamless software delivery",
        "⚡ Continuously monitor, and analyze system performance and reliability",
        "⚡ Implement infrastructure as code for consistent and scalable environments",
        "⚡ Server management through automation for efficient resource utilization",
        "⚡ Perform regular OS maintenance, patching, and hardening",
        "⚡ Establish backup management strategies to safeguard against data loss",
        "⚡ Proficient in Continuous Integration/Continuous Deployment practices",
        "⚡ Familiarity with Apache and Nginx servers for web hosting and deployment",
        "⚡ Experienced in integrating various technologies to for robust and scalable cloud solutions"
      ],
      softwareSkills: [

        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: {
            color: "#EE0000",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#844FBA",
          },
        },

        {
          skillName: "Git-hub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },

        {
          skillName: "GitLab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: {
            color: "#FC6D26",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },

        {
          skillName: "Chef",
          fontAwesomeClassname: "simple-icons:chef",
          style: {
            color: "#F09820",
          },
        },

        {
          skillName: "Grafana",
          fontAwesomeClassname: "simple-icons:grafana",
          style: {
            color: "#F46800",
          },
        },

        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
        {
          skillName: "Red-Hat",
          fontAwesomeClassname: "simple-icons:redhat",
          style: {
            color: "#EE000",
          },
        },
        
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Shell",
          fontAwesomeClassname: "simple-icons:shell",
          style: {
            color: "#FFD500",
          },
        },
        {
          skillName: "Powershell",
          fontAwesomeClassname: "simple-icons:powershell",
          style: {
            color: "#5391FE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "SQlite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: {
            color: "#003B57",
          },
        },


      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in Django and Flask frameworks for backend development.",
        "⚡ Skilled in Node.js for backend server-side scripting",
        "⚡ Strong expertise in HTML and CSS for frontend development",
        "⚡ Advanced knowledge of Python programming language",
        "⚡ Experienced in Angular and React for building dynamic web applications",
        "⚡ Strong problem-solving skills and ability to work in Agile environments",
        "⚡ Skilled in implementing LDAP authentication for secure user access",
        "⚡ Experienced in integrating authentication and security measures"
      ],
      softwareSkills: [
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Visual Studio Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#007ACC",
          },
        },
        {
          skillName: "Nginix",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#009639",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#D22128",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#0F0F11",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        }
      ],
    },
    {
      title: "Data Science - MlOps",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient in data manipulation and analysis using Pandas",
        "⚡ Experienced in developing neural networks with PyTorch and TensorFlow",
        "⚡ Skilled in implementing machine learning models using Scikit-learn",
        "⚡ Implemented MLOps pipelines for Pandas data preprocessing and feature engineering",
        "⚡ Utilized NumPy for efficient numerical computation and array manipulation in MLOps pipelines",
        "⚡ Orchestrated distributed systems for scaling ML workloads across clusters",
        "⚡ Managed end-to-end machine learning lifecycle, including data ingestion, model training, deployment, and monitoring, using MLOps best practices"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "#F7931E",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "white",
            color: "#150458",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            backgroundColor: "white",
            color: "#013243",
          },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            backgroundColor: "white",
            color: "#3F4F74",
          },
        },
        {
          skillName: "PyPi",
          fontAwesomeClassname: "simple-icons:pypi",
          style: {
            backgroundColor: "white",
            color: "#3775A9",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },

        {
          skillName: "NVIDIA",
          fontAwesomeClassname: "simple-icons:nvidia",
          style: {
            backgroundColor: "white",
            color: "#768900",
          },
        },

        {
          skillName: "AMD",
          fontAwesomeClassname: "simple-icons:amd",
          style: {
            backgroundColor: "white",
            color: "#ED1C24",
          },
        },
        
      ],
    }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/pratyushreddyg/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://hackerrank.com/profile/gpr2891996",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/gpr2891996",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@gpr2891996",
    }
  ],
};

const degrees = {
  degrees: [

    {
      title: "Georgia State University",
      subtitle: "M.S. in Computer Science",
      logo_path: "gsu_logo.png",
      alt_name: "GSU",
      duration: "2022 - 2023",
      descriptions: [
        "⚡ Engaged in captivating studies of Big Data with Java and Python, while also mastering Probability & Statistics, Operating Systems, and Computer Networking intricacies.",
        "⚡ Explored the fascinating realm of Network Science with tools like NetworkX, R, and C++, and dived into Cybersecurity essentials covering Cloud and Java.",
        "⚡ Delved into intriguing coursework such as Deep Learning using PyTorch, Privacy Aware Computing with Python and Linux, and Secure & Private AI utilizing TensorFlow.",
        "⚡ Actively contributed as a Graduate Research Assistant at TReNDs, focusing on the dynamic fields of Machine Learning Ops, Deep Learning, and Distributed Systems.",
      ],
      website_link: "https://www.gsu.edu/",
    },
    {
      title: "Indian Institute of Information Technology Kurnool",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "bvrit_logo.jpeg",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ Learned practical skills and theoretical knowledge necessary for working with computers.",
        "⚡ Equipped with a solid understanding of computer science basics, ready for further studies or work in the field.",
        "⚡ Engaged in stimulating coursework including Network Science, Advanced Data Structures and Algorithms, and Discrete Mathematics, laying a strong foundation in theoretical and practical aspects of computer science.",
      ],
      website_link: "https://bvrit.ac.in/",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "Problem Solvin (Basic)",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.svg",
      certificate_link:
        "https://www.hackerrank.com/certificates/e5d437465ae1",
      alt_name: "HRK",
    },
    {
      title: "Python (Basic)",
      subtitle: "- HackerRank",
      logo_path: "hackerrank.svg",
      certificate_link:
        "https://www.hackerrank.com/certificates/3b196f92ae59",
      alt_name: "HRK",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have a diverse background in DevOps, SRE, and MLOps, with extensive experience in AWS cloud, automation's, Django, REST API, and full-stack development. My focus has been on streamlining operations, optimizing workflows, and driving innovation across various projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Cloud Consultant - AWS Devops Engineer/SRE",
          company: "Apps Associates PVT LTD.",
          company_url: "https://appsassociates.com/",
          logo_path: "apps_logo.webp",
          duration: "August 2018 - December 2021",
          location: "Hyderabad, Telangana, USA",
          description:
            "During my time at Apps Associates PVT, Ltd from August 2018 to December 2021, I worked as a Cloud Consultant specializing in Site Reliability Engineering (SRE) in Hyderabad, India. I focused on ensuring reliable and scalable infrastructure using technologies like AWS, DevOps, Terraform, CI/CD, GitHub, Linux, Django, Ansible, and Jenkins. My work involved implementing compliance auditing, designing cloud-based infrastructure, and automating tasks with Ansible. Currently, I'm dedicated to developing automation solutions for process improvement and profitability, aiming to create efficient AI systems that minimize manual intervention.",
          color: "#0879bf",
        },
        {
          title: "Graduate Research Assistant - MlOps Engineer",
          company: "Transational Research in NeuroImaging and Datascience (TReNDS)",
          company_url: "https://trendscenter.org/",
          logo_path: "trends_logo.webp",
          duration: "January 2022 - March 2024",
          location: "Atlanta, Georgia, India",
          description:
            "During my tenure at Transational Research in NeuroImaging and Datascience (TReNDS) in Atlanta, Georgia, as an MLOps Engineer, I focused on optimizing AWS infrastructure and enhancing security measures. I led automation efforts to improve storage management efficiency, implemented data pipelines for seamless information extraction, and optimized AWS accounts. Additionally, I designed infrastructure maintenance routines and implemented monitoring solutions for cloud-based applications.",
          color: "#0879bf",
        }
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "In each of my projects, I've utilized a broad skill set spanning full-stack development, DevOps, MLOps, and SRE. By integrating tools like AWS and PyTorch, I've optimized processes for efficiency and reliability. This holistic approach ensures seamless integration and impactful outcomes across all endeavors.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "	arXiv:2310.16162",
      name: "Brainchop: Next Generation Web-Based Neuroimaging Application",
      createdAt: "24 Oct 2023 20:17:06 UTC",
      description: "Performing volumetric image processing directly within the browser, particularly with medical data. ",
      url:
        "https://arxiv.org/pdf/2310.16162.pdf",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "SalientGrads: Sparse Models for Communication Efficient and Data Aware Distributed Federated Training",
      createdAt: "24 Oct 2023 20:17:06 UTC",
      description: "Salient Grads offers a streamlined approach to sparse training in Federated Learning (FL), addressing challenges of limited computation and communication bandwidth on edge client nodes.",
      url:
        "https://arxiv.org/pdf/2304.07488.pdf",
    }
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pratyush_reddy.jpeg",
    description:
      "You can reach out to me through various social media platforms, and I'll respond within 24 hours. I specialize in ML, AI, React, Android, Cloud, and Opensource Development, offering assistance and expertise in these areas. Let's connect and collaborate on your next projects!",
  },
  blogSection: {
    title: "Github",
    subtitle:
      "Visit my profile for in detail understanding of my experimental projects",
    link: "https://github.com/PratyushGR/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "6850 Peachtree Dunwoody Rd",
    locality: "Atlanta",
    country: "USA",
    region: "Georgia",
    postalCode: "30328",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/6850+Peachtree+Dunwoody+Rd,+Atlanta,+GA+30328",
  },
  phoneSection: {
    title: "mobile",
    subtitle: "+1 (404)-395-7106",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
