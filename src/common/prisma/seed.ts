import { PrismaPg } from "@prisma/adapter-pg";
import { config } from "dotenv";
import { PrismaClient } from "./generated/client.js";

config({ path: ".env.local" });
config();

const adapter = new PrismaPg({
  connectionString: process.env.DB_URL!,
});

const prisma = new PrismaClient({ adapter });

const PROFILE_SLUG = "alex-kovalko";

const DESCRIPTION = [
  "Senior Backend Engineer and Tech Lead with 14+ years building production web platforms, APIs, and cloud-native systems.",
  "Designs microservice and serverless architectures on AWS, AliCloud, and Cloudflare; leads delivery teams; ships payment, notification, and event-driven backends at scale.",
  "Recently (JayDevs on Zolak / Geksa): end-to-end product delivery, React.js features, Terraform for AliCloud/AWS, monitoring, release engineering, and CI/CD (Jenkins / GitHub Actions).",
  "Integrates AI capabilities (OpenAI APIs, RAG, embeddings, agents) and delivers with NestJS monorepos, IaC, and observability (CloudWatch, Prometheus, Grafana, Loki).",
].join(" ");

const LINKS = [
  { label: "Email", url: "mailto:alexkavalko@gmail.com", sortOrder: 0 },
  { label: "Telegram", url: "https://t.me/A1exeyk0", sortOrder: 1 },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/alex-kovalko", sortOrder: 2 },
  { label: "GitHub", url: "https://github.com/AlexKovalko", sortOrder: 3 },
] as const;

type SkillSeed = {
  name: string;
  companyName: string;
};

/** Primary company where the skill was most recently / heavily used (from CV stacks). */
const SKILLS: SkillSeed[] = [
  { name: "React", companyName: "JayDevs" },
  { name: "Terraform", companyName: "JayDevs" },
  { name: "CI/CD", companyName: "JayDevs" },
  { name: "AliCloud", companyName: "JayDevs" },
  { name: "Cloudflare", companyName: "JayDevs" },
  { name: "OpenAI / RAG", companyName: "JayDevs" },
  { name: "TypeScript", companyName: "Instinctools" },
  { name: "Node.js", companyName: "Instinctools" },
  { name: "NestJS", companyName: "Instinctools" },
  { name: "PostgreSQL", companyName: "Instinctools" },
  { name: "AWS", companyName: "Instinctools" },
  { name: "Docker", companyName: "Instinctools" },
  { name: "RabbitMQ", companyName: "Instinctools" },
  { name: "Kafka", companyName: "Instinctools" },
  { name: "Nx monorepo", companyName: "Instinctools" },
  { name: "Stripe", companyName: "Instinctools" },
  { name: "Microservices", companyName: "Cogniteq" },
  { name: "Serverless", companyName: "Cogniteq" },
  { name: "Redis", companyName: "Cogniteq" },
  { name: "OAuth 2.0 / JWT / Keycloak", companyName: "Cogniteq" },
  { name: "Tech Lead / mentoring", companyName: "Cogniteq" },
  { name: "PHP / CMS", companyName: "Yanka Kupala State University of Grodno" },
  { name: "MySQL", companyName: "Yanka Kupala State University of Grodno" },
];

type CompanySeed = {
  name: string;
  description?: string;
  url?: string;
};

type ExperienceSeed = {
  companyName: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
  achievements: string[];
  sortOrder: number;
};

type ProjectSeed = {
  name: string;
  description: string;
  url: string;
  sortOrder: number;
};

const COMPANIES: CompanySeed[] = [
  {
    name: "JayDevs",
    description: "Self-employed / contractor — product delivery, full stack and DevOps",
  },
  {
    name: "Instinctools",
    description: "Software development company — scalable platforms and integrations",
    url: "https://www.instinctools.com",
  },
  {
    name: "Cogniteq",
    description: "Software engineering company — products, mobile backends, SaaS",
    url: "https://www.cogniteq.com",
  },
  {
    name: "Yanka Kupala State University of Grodno",
    description: "University IT and web resources",
    url: "https://www.grsu.by",
  },
];

const EXPERIENCES: ExperienceSeed[] = [
  {
    companyName: "JayDevs",
    position: "Full Stack / DevOps (Self-employed / Contractor)",
    startDate: new Date("2025-09-01"),
    endDate: new Date("2026-07-31"),
    achievements: [
      "Worked in a product team on Zolak and Geksa delivering new services and features end-to-end",
      "Extended a React.js application: new features and bug fixes",
      "Wrote and maintained Terraform for provisioning AliCloud and AWS environments",
      "Set up and improved monitoring; owned release delivery and CI/CD on Jenkins / GitHub Actions",
      "Optimized deployment pipelines; identified issues in existing projects and proposed practical fixes",
      "Proposed and rolled out a new approach for delivering the application to end customers",
    ],
    sortOrder: 0,
  },
  {
    companyName: "Instinctools",
    position: "Senior Backend Developer",
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-08-31"),
    achievements: [
      "Designed and delivered microservice architecture for scalable client platforms",
      "Built REST APIs and async service communication with RabbitMQ / Kafka",
      "Implemented Stripe payment service and multi-channel notifications (email, SMS, push)",
      "Integrated third-party systems (ticka.it, Stripe); owned code reviews and delivery quality",
    ],
    sortOrder: 1,
  },
  {
    companyName: "Cogniteq",
    position: "Senior Backend Developer | Tech Lead",
    startDate: new Date("2017-10-01"),
    endDate: new Date("2024-12-31"),
    achievements: [
      "Led technical development across multiple products; coordinated teams and timely delivery",
      "Designed and implemented scalable microservices and AWS serverless applications",
      "Built web apps and APIs for mobile clients with a focus on performance and reliability",
      "Code reviews, mentoring, process improvements; Stripe payments and Chart.js analytics",
    ],
    sortOrder: 2,
  },
  {
    companyName: "Yanka Kupala State University of Grodno",
    position: "Software Engineer",
    startDate: new Date("2012-01-01"),
    endDate: new Date("2017-10-31"),
    achievements: [
      "Developed and enhanced university web resources on CMS platforms (Drupal, WordPress, Joomla, Moodle)",
      "Administered MySQL databases; delivered PHP applications",
    ],
    sortOrder: 3,
  },
];

const PROJECTS: ProjectSeed[] = [
  {
    name: "Zolak",
    description:
      "AI-powered 3D product visualization platform for visual commerce (JayDevs, Sep 2025 – Jul 2026). Real-time 3D configuration, virtual showrooms, photorealistic imagery / AR try-on, and CMS-based asset management for furniture, interiors, e-commerce, and textiles. Role: Full Stack / DevOps — React.js features, Terraform (AliCloud/AWS), monitoring, CI/CD (Jenkins / GitHub Actions).",
    url: "",
    sortOrder: 0,
  },
  {
    name: "Geksa",
    description:
      "Interior market ecosystem unifying designers, architects, decorators, manufacturers, and suppliers (JayDevs, Sep 2025 – Jul 2026). Branded deployment of the Zolak product stack for interior projects, deals, and collaboration. Role: Full Stack / DevOps — React.js UI, Node.js services, AliCloud/AWS Terraform, observability and release pipelines.",
    url: "",
    sortOrder: 1,
  },
  {
    name: "Nowr",
    description:
      "SIAE-compliant ticketing platform for events in Italy (Instinctools, Jan 2025 – Aug 2025). Ticket purchasing, organizer tools for organizations/events, admin dashboards with real-time statistics, reselling, renaming, and access control. Role: Senior Backend Developer — NestJS microservices, Stripe payments, multi-channel notifications, RabbitMQ/Kafka, AWS (S3, SQS, SES, SNS, Aurora, DynamoDB).",
    url: "",
    sortOrder: 2,
  },
  {
    name: "Xponetiq",
    description:
      "Brain-health iOS product with interactive challenges and personalized cognitive experiences (Cogniteq, Mar 2024 – Dec 2024). Role: Senior Backend Developer / Tech Lead — platform architecture, tech stack and component interactions, mentoring, database design and scalability on AWS (Amplify, S3, Lambda, CloudFront, DynamoDB, PostgreSQL), Strapi CMS, Terraform.",
    url: "",
    sortOrder: 3,
  },
  {
    name: "GigRealm",
    description:
      "Live music marketplace for venues, artists, and fans (Cogniteq, Jan 2022 – Feb 2024). Booking, artist profiles/samples, local event discovery. Role: Senior Backend Developer / Tech Lead — NestJS/TypeORM/PostgreSQL, Stripe subscriptions and peer payments, messaging integrations, event sync with third-party services.",
    url: "",
    sortOrder: 4,
  },
  {
    name: "Aisoniq",
    description:
      "Emotion analytics SaaS MVP (Cogniteq, Feb 2021 – Dec 2021). Transcribes audio/video into graphs of emotional dynamics and predominant emotions. Role: Senior Backend Developer / Tech Lead — NestJS, TypeORM, PostgreSQL, AWS S3/CloudFront, queue-based file processing, Chart.js reporting.",
    url: "",
    sortOrder: 5,
  },
  {
    name: "Racing",
    description:
      "Racing club site and merchandise store (Cogniteq, Apr 2020 – Jan 2021). Club overview, members, biographies, community hub, and online store. Role: Senior Backend Developer — Laravel/PHP/MySQL, Stripe subscriptions, REST APIs, security and performance.",
    url: "",
    sortOrder: 6,
  },
  {
    name: "Nudge Kids",
    description:
      "Child development apps on Android, iOS, and web (Cogniteq, Oct 2018 – Mar 2020). Skill sets and healthy habits for children; browser access for parents and educators. Role: Senior Backend Developer / Tech Lead — NestJS, PostgreSQL, Stripe / Apple Pay / Google Pay, messaging and event sync.",
    url: "",
    sortOrder: 7,
  },
  {
    name: "GPS Tracker",
    description:
      "Cross-platform GPS tracking with devices, plans, routes, geofences, history, and push notifications (Cogniteq, Sep 2016 – Sep 2018). Role: Senior Backend Developer / Tech Lead — NestJS, PostgreSQL, TypeORM, Flespi API, Stripe subscriptions.",
    url: "",
    sortOrder: 8,
  },
  {
    name: "CViews",
    description:
      "Market benchmarking SaaS for business owners (Cogniteq, Sep 2015 – Aug 2016). Questionnaires, online/offline benchmarking, statistics and visualization. Role: Senior Backend Developer — Laravel, Drupal, PostgreSQL/MySQL, Redis, messaging integrations, custom statistics calculator.",
    url: "",
    sortOrder: 9,
  },
  {
    name: "Sharelook",
    description:
      "Training content platform for creating and publishing materials with templates, collaboration, serverless delivery, video hosting/streaming, and subscription billing (Sep 2012 – Aug 2015). Role: Senior Backend Developer / Tech Lead — Node.js/Express, PostgreSQL, AWS (Lambda, Cognito, S3, API Gateway), Vimeo, Stripe.",
    url: "",
    sortOrder: 10,
  },
];

async function main() {
  const companyIds = new Map<string, string>();

  for (const company of COMPANIES) {
    const row = await prisma.company.upsert({
      where: { name: company.name },
      update: {
        description: company.description,
        url: company.url,
      },
      create: {
        name: company.name,
        description: company.description,
        url: company.url,
      },
    });
    companyIds.set(company.name, row.id);
  }

  const profile = await prisma.profile.upsert({
    where: { slug: PROFILE_SLUG },
    update: {
      name: "Alex Kovalko",
      description: DESCRIPTION,
    },
    create: {
      slug: PROFILE_SLUG,
      name: "Alex Kovalko",
      description: DESCRIPTION,
    },
  });

  // Replace related rows so re-seed stays idempotent without duplicates
  await prisma.links.deleteMany({ where: { profileId: profile.id } });
  await prisma.skill.deleteMany({ where: { profileId: profile.id } });
  await prisma.experience.deleteMany({ where: { profileId: profile.id } });
  await prisma.project.deleteMany({ where: { profileId: profile.id } });

  await prisma.links.createMany({
    data: LINKS.map((link) => ({
      ...link,
      profileId: profile.id,
    })),
  });

  await prisma.skill.createMany({
    data: SKILLS.map((skill, sortOrder) => {
      const companyId = companyIds.get(skill.companyName);
      if (!companyId) {
        throw new Error(`Missing company id for skill "${skill.name}" → ${skill.companyName}`);
      }
      return {
        name: skill.name,
        sortOrder,
        profileId: profile.id,
        companyId,
      };
    }),
  });

  await prisma.experience.createMany({
    data: EXPERIENCES.map((exp) => {
      const companyId = companyIds.get(exp.companyName);
      if (!companyId) {
        throw new Error(`Missing company id for ${exp.companyName}`);
      }
      return {
        position: exp.position,
        startDate: exp.startDate,
        endDate: exp.endDate,
        achievements: exp.achievements,
        sortOrder: exp.sortOrder,
        companyId,
        profileId: profile.id,
      };
    }),
  });

  await prisma.project.createMany({
    data: PROJECTS.map((project) => ({
      ...project,
      profileId: profile.id,
    })),
  });

  console.log(
    `Seeded profile "${profile.slug}": ${LINKS.length} links, ${SKILLS.length} skills, ${EXPERIENCES.length} experiences, ${PROJECTS.length} projects`,
  );
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
