// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Production ML systems, AI platforms, and research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "My professional journey -- from Naval Architecture to Machine Learning leadership.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-streamlining-event-updates-integrating-google-calendar-with-google-spaces",
        
          title: 'Streamlining Event Updates: Integrating Google Calendar with Google Spaces <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@shadhumydee/streamlining-event-updates-integrating-google-calendar-with-google-spaces-68bb4e3657ab?source=rss-c5c9fae9e739------2", "_blank");
          
        },
      },{id: "post-unleashing-the-power-of-bash-a-comparision-with-python-for-data-processing",
        
          title: 'Unleashing the Power of Bash: A Comparision with Python for Data Processing <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@shadhumydee/unleashing-the-power-of-bash-a-comparision-with-python-for-data-processing-29cd5e6dd7bd?source=rss-c5c9fae9e739------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-shipped-the-cmab-recommendation-engine-at-optimizely-securing-a-major-us-financial-services-client-with-tens-of-millions-of-customers-handling-5k-requests-second-with-15-regret-reduction",
          title: 'Shipped the CMAB Recommendation Engine at Optimizely, securing a major US financial services...',
          description: "",
          section: "News",},{id: "news-served-as-judge-at-the-bangla-llm-mathematical-reasoning-challenge-organized-by-buet-cse-evaluated-15-teams-building-bangla-language-models-for-mathematical-reasoning",
          title: 'Served as Judge at the Bangla LLM Mathematical Reasoning Challenge, organized by BUET...',
          description: "",
          section: "News",},{id: "news-launched-opal-evals-and-synapse-at-optimizely-production-grade-ai-evaluation-framework-and-agent-memory-system-powering-the-opal-agent-orchestration-platform",
          title: 'Launched OPAL Evals and Synapse at Optimizely – production-grade AI evaluation framework and...',
          description: "",
          section: "News",},{id: "news-launched-my-first-vs-code-extension-vscode-claude-annotator-enables-pr-style-annotations-on-claude-code-responses-and-feeds-them-back-as-structured-follow-up-prompts",
          title: 'Launched my first VS Code extension: VSCode Claude Annotator - enables PR-style annotations...',
          description: "",
          section: "News",},{id: "news-completed-fundamentals-of-building-ai-agents-ibm-explored-tool-calling-chaining-and-lcel-to-design-controllable-agent-workflows-including-manual-orchestration-and-built-in-langchain-agents-for-data-and-sql-tasks",
          title: 'Completed Fundamentals of Building AI Agents (IBM) — explored tool calling, chaining, and...',
          description: "",
          section: "News",},{id: "projects-opal-evals",
          title: 'OPAL Evals',
          description: "Production-grade AI evaluation framework using LLM-as-a-Judge for scoring conversational agent outputs across 5 quality dimensions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-synapse",
          title: 'Synapse',
          description: "Hybrid AI agent memory system enabling personalized AI experiences through long-term memory and contextual intelligence.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-cmab-recommendation-engine",
          title: 'CMAB Recommendation Engine',
          description: "Contextual multi-armed bandit recommendation engine with XGBoost, handling 5K requests/second for real-time ML predictions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-ai-segments",
          title: 'AI-Segments',
          description: "LLM-driven segmentation platform leveraging RAG architecture and transformers for automated customer segmentation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-ai-backend-eleanor",
          title: 'AI-Backend (Eleanor)',
          description: "Production-grade multi-tenant API gateway serving Optimizely&#39;s AI platform across Azure OpenAI, Vertex AI, and Replicate.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-unirec",
          title: 'UniRec',
          description: "Unified neural recommender system combining content and product recommendations using StarSpace for B2C and B2B clients.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-avicenna-healthcare-nlp",
          title: 'Avicenna Healthcare NLP',
          description: "Comprehensive NLP platform for EMR data analysis, processing 500K+ patient records for healthcare and insurance providers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-covid-cxray-classification",
          title: 'COVID CXRay Classification',
          description: "Transfer learning for COVID, Viral, and Normal chest X-ray classification achieving 95%+ accuracy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-bangla-keyboard-layout-optimization",
          title: 'Bangla Keyboard Layout Optimization',
          description: "Optimizing Bangla keyboard layout using Ant Colony Optimization for ergonomic comfort and efficiency.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_Shad_Humydee.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%6F%77%6D%6D%6F%73@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/whomydee", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/shad-humydee", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@shadhumydee", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/shad_showmmo", "_blank");
        },
      },{
        id: 'social-kaggle',
        title: 'Kaggle',
        section: 'Socials',
        handler: () => {
          window.open("https://www.kaggle.com/whomydee", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
