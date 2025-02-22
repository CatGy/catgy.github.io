import fs from 'fs-extra';
import path from 'path';
import ejs from 'ejs';
import { fileURLToPath } from 'url';

// Convert __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Updated Base Paths
const __srcDir = path.join(__dirname, 'src');
const __viewsDir = path.join(__srcDir, 'views');
const __partialsDir = path.join(__viewsDir, 'partials');
const OUTPUT_DIR = path.join(__dirname, 'dist');
const publicDir = path.join(__srcDir, 'public');

// Importing all route data files
import homeData from './src/server/api/routes/home.js';
import {AboutData} from './src/server/api/routes/about.js';
import contactData from './src/server/api/routes/contact.js';
import { PortfolioData, other_projects } from './src/server/api/routes/portfolio.js';


import caribfood from './src/server/caribfood_articles.js';
import julimay from './src/server/julimay_articles.js';
import pawpatrol from './src/server/pawpatrol_articles.js';
import helpo from './src/server/helpo_articles.js';
import greenthermique from './src/server/greenthermique_articles.js';
import furniture from './src/server/furniture_articles.js';

// All Projects List
const projects = [
  { name: 'caribfood', data: caribfood.Content, intro: caribfood.Intro, tools: caribfood.Tools },
  { name: 'julimay', data: julimay.Content, intro: julimay.Intro, tools: julimay.Tools },
  { name: 'pawpatrol', data: pawpatrol.Content, intro: pawpatrol.Intro, tools: pawpatrol.Tools },
  { name: 'helpo', data: helpo.Content, intro: helpo.Intro, tools: helpo.Tools },
  { name: 'greenthermique', data: greenthermique.Content, intro: greenthermique.Intro, tools: greenthermique.Tools },
  { name: 'furniture', data: furniture.Content, intro: furniture.Intro, tools: furniture.Tools },
];

// Ensure output directory exists
await fs.ensureDir(OUTPUT_DIR);

// Function to create directories recursively
const createDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

// Routes Configuration
const routes = [
  {
    url: '/',
    template: 'home.ejs',
    data: {
      title: homeData.title || 'Catgy Designs',
      page: 'home',
      vidsrc: homeData.vidsrc,
      ismp4: homeData.ismp4,
    },
  },
  {
    url: '/about',
    template: 'about.ejs',
    data: {
        title: AboutData.title || 'About Me',
        page: 'about',
        data: AboutData,
    },
  },
  {
    url: '/contact',
    template: 'contact.ejs',
    data: {
        title: contactData.title || 'Contact Me',
        page: 'contact',
        data: contactData,  // Explicitly passing data
        subtitle: contactData.subtitle || '',
        isform: false,
    },
  },
  {
    url: '/portfolio',
    template: 'portfolio.ejs',
    data: {
      title: 'Portfolio',
      page: 'portfolio',
      projects: PortfolioData || [],
    },
  },
];

// Generate Static Files for Main Routes
async function generateStaticFiles() {
  try {
    // Generate Static Pages for Routes
    for (let route of routes) {
      let outputPath = path.join(
        OUTPUT_DIR,
        route.url === '/' ? 'index.html' : `${route.url}.html`
      );
      const templatePath = path.join(__viewsDir, route.template);

      const templateString = await fs.readFile(templatePath, 'utf-8');
      const renderedHtml = ejs.render(
        templateString,
        {
          ...route.data,
        },
        {
          filename: templatePath,
          root: __viewsDir,
        }
      );

      await fs.outputFile(outputPath, renderedHtml);
      console.log(`✅ Generated: ${outputPath}`);
    }

    // Generate Portfolio Project Pages and Sub-Routes for Articles
    projects.forEach((project) => {
      const projectName = project.name;
      const projectDir = path.join(OUTPUT_DIR, 'portfolio', projectName);
      createDir(projectDir);

      // Correctly link the video sources and formats
        let vidsrc = '';
        let ismp4 = false;

        switch (projectName) {
        case 'greenthermique':
            vidsrc = "https://www.youtube.com/embed/iS1BQzv_Syk?si=1kfnv_Lq7Yuuqe09";
            ismp4 = false;
            break;
        case 'caribfood':
            vidsrc = "https://www.youtube.com/embed/1YwwnlAmkLU?si=xWWL8nwuwSzSuFtX";
            ismp4 = false;
            break;
        case 'pawpatrol':
            vidsrc = "https://www.youtube.com/embed/lI-HcSv-3CY?si=WRGYk0_teEkf_4Eb";
            ismp4 = false;
            break;
        case 'helpo':
            vidsrc = "https://www.youtube.com/embed/rqQfoLefWLQ?si=DbzzPMYjJHsZXPxA";
            ismp4 = false;
            break;
        case 'julimay':
            vidsrc = "https://www.youtube.com/embed/E4rnCT-Kb7U?si=YvRReXoGUAjfwW-w";
            ismp4 = false;
            break;
        case 'furniture':
            vidsrc = "https://www.youtube.com/embed/3ScW_ZBirfU?si=nLLXzDlPpnejIX0x";
            ismp4 = false;
            break;
        default:
            vidsrc = '';
            ismp4 = false;
        }

        ejs.renderFile(
        path.join(__viewsDir, 'page.ejs'),
        {
            title: projectName.charAt(0).toUpperCase() + projectName.slice(1),
            subtitle: 'Overview',
            description: project.intro,
            articles: Array.isArray(project.data) ? project.data : [],
            pfarticles: project.data || [],
            tools: project.tools,
            page: projectName,
            hasLink: false,
            vidsrc: vidsrc,   // Pass the correct video source
            ismp4: ismp4,     // Pass the correct video format
            other_projects: other_projects || []
        },
        (err, html) => {
            if (err) throw err;
            fs.writeFileSync(path.join(projectDir, 'index.html'), html);
            console.log(`✅ Generated: portfolio/${projectName}/index.html`);
        }
        );

    //   // Generate Overview Page for Project
    //     ejs.renderFile(
    //     path.join(__viewsDir, 'page.ejs'),
    //     {
    //         title: projectName.charAt(0).toUpperCase() + projectName.slice(1),
    //         subtitle: 'Overview',
    //         description: project.intro,
    //         articles: Array.isArray(project.data) ? project.data : [],
    //         tools: project.tools,
    //         page: projectName,
    //         hasLink: false,
    //         vidsrc: PortfolioData.find(p => p.link === `/portfolio/${projectName}`)?.vidsrc || '',
    //         ismp4: PortfolioData.find(p => p.link === `/portfolio/${projectName}`)?.ismp4 || false,
    //         other_projects: other_projects || []
    //     },
    //     (err, html) => {
    //         if (err) throw err;
    //         fs.writeFileSync(path.join(projectDir, 'index.html'), html);
    //         console.log(`✅ Generated: portfolio/${projectName}/index.html`);
    //     }
    //     );


      // Generate Article Detail Pages
      project.data.forEach((article, index) => {
        const articleDir = path.join(projectDir, `article-${index + 1}`);
        createDir(articleDir);

        ejs.renderFile(
          path.join(__partialsDir, 'portfolio_article.ejs'),
          {
            title: article.article_header || `Article ${index + 1}`,
            pfarticles: article,
          },
          (err, html) => {
            if (err) throw err;
            fs.writeFileSync(
              path.join(articleDir, 'index.html'),
              html
            );
            console.log(
              `✅ Generated: portfolio/${projectName}/article-${index + 1}/index.html`
            );
          }
        );
      });
    });

    // Copy static assets (CSS, JS, Images, etc.)
    if (await fs.pathExists(publicDir)) {
      await fs.copy(publicDir, OUTPUT_DIR);
      console.log('📂 Copied static assets.');
    }
  } catch (error) {
    console.error('❌ Error generating static files:', error);
  }
}

// Run the generator
generateStaticFiles()
  .then(() => console.log('🚀 Static site generated successfully!'))
  .catch(console.error);
