export interface Service {
  slug: string;
  title: string;
  short: string;
  price: string;
  image: string;
  features: string[];
  contentHtml: string;
}

export const services: Service[] = [
  {
    slug: "catalog-optimization",
    title: "Product Catalog Optimization",
    short: "Transform your product listings into conversion machines with data-driven catalog optimization.",
    price: "From $1,200/month",
    image: "catalog",
    features: [
      "Product title and description enhancement",
      "Image quality optimization and A/B testing",
      "Category structure analysis and reorganization",
      "SKU performance tracking and recommendations",
      "Competitive pricing analysis",
      "Mobile catalog optimization"
    ],
    contentHtml: `
      <p>Your product catalog is the foundation of your e-commerce success. Our comprehensive catalog optimization service ensures every product listing is engineered for maximum conversion and visibility.</p>
      
      <h2>Why Catalog Optimization Matters</h2>
      <p>Studies show that optimized product catalogs can increase conversion rates by up to 35%. We analyze every element of your listings—from titles and descriptions to images and pricing—to eliminate friction and drive purchases.</p>
      
      <h2>Our Approach</h2>
      <p>We start with a deep audit of your existing catalog, identifying high-impact opportunities for improvement. Using data from your store analytics and competitor research, we prioritize changes that deliver the fastest ROI.</p>
      
      <h3>Product Content Enhancement</h3>
      <p>We rewrite product titles and descriptions using proven copywriting frameworks that emphasize benefits, address objections, and include relevant keywords for SEO. Every word is chosen to move customers closer to purchase.</p>
      
      <h3>Visual Optimization</h3>
      <p>Product images directly impact purchase decisions. We optimize image quality, test different angles and backgrounds, and ensure mobile-friendly presentation. We also implement image lazy loading for faster page speeds.</p>
      
      <h3>Performance Tracking</h3>
      <p>Monthly reports show exactly which optimizations are working. We track metrics like view-to-cart rate, cart-to-purchase rate, and average order value by product category, continuously refining our approach.</p>
      
      <h2>Expected Results</h2>
      <ul>
        <li>15-35% increase in product page conversion rates</li>
        <li>20-40% improvement in organic search visibility</li>
        <li>Reduced return rates through clearer product information</li>
        <li>Higher average order value through better product presentation</li>
      </ul>
    `
  },
  {
    slug: "performance-creatives",
    title: "Performance Creative Development",
    short: "High-converting ad creatives designed through systematic testing and data analysis.",
    price: "From $2,500/month",
    image: "creative",
    features: [
      "Data-driven creative concept development",
      "Multi-variant creative testing framework",
      "Platform-specific creative optimization (Meta, Google, TikTok)",
      "Dynamic product ad templates",
      "Creative fatigue monitoring and refresh cycles",
      "Competitor creative analysis and insights"
    ],
    contentHtml: `
      <p>Performance creatives are the difference between burning ad budget and scaling profitably. We build and test ad creatives that consistently deliver higher CTR, lower CPA, and better ROAS across all major advertising platforms.</p>
      
      <h2>The Performance Creative Challenge</h2>
      <p>Most e-commerce brands struggle with creative production—either creating too few variants or producing creatives without strategic testing frameworks. This leads to creative fatigue, declining performance, and wasted ad spend.</p>
      
      <h2>Our Testing-First Methodology</h2>
      <p>We treat creative development as a systematic testing process, not a one-time design project. Every creative is hypothesis-driven, with clear success metrics defined before launch.</p>
      
      <h3>Creative Concept Development</h3>
      <p>We analyze your best-performing historical ads, competitor creatives, and platform benchmarks to develop creative concepts with the highest probability of success. Each concept is designed for specific audience segments and campaign objectives.</p>
      
      <h3>Multi-Variant Testing</h3>
      <p>For each concept, we produce 3-5 variants testing different elements: headlines, calls-to-action, visual styles, and messaging angles. Our testing framework helps identify winning patterns quickly while minimizing spend on underperformers.</p>
      
      <h3>Platform Optimization</h3>
      <p>What works on Meta doesn't always work on Google or TikTok. We optimize creative specifications, formats, and messaging for each platform's unique user behavior and algorithm preferences.</p>
      
      <h2>Deliverables</h2>
      <ul>
        <li>12-20 new creative variants per month</li>
        <li>Weekly performance reports with winning creative insights</li>
        <li>Creative refresh recommendations based on fatigue analysis</li>
        <li>Platform-specific creative guidelines and templates</li>
      </ul>
      
      <h2>Typical Results</h2>
      <p>Clients typically see 25-60% improvement in CTR and 20-45% reduction in CPA within 60 days of implementing our performance creative framework.</p>
    `
  },
  {
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization (CRO)",
    short: "Systematic testing and optimization to maximize revenue from your existing traffic.",
    price: "From $1,800/month",
    image: "cro",
    features: [
      "Conversion funnel analysis and mapping",
      "Landing page optimization and testing",
      "Checkout flow optimization",
      "Mobile experience enhancement",
      "Form optimization and friction reduction",
      "Personalization strategy development"
    ],
    contentHtml: `
      <p>Increasing your conversion rate is the fastest way to grow revenue without increasing ad spend. Our CRO service identifies and eliminates conversion barriers throughout your customer journey.</p>
      
      <h2>Why CRO is Critical for E-Commerce</h2>
      <p>A 1% improvement in conversion rate can increase revenue by 10% or more. Yet most stores have conversion leaks they're completely unaware of—abandoned carts, confusing navigation, slow pages, unclear value propositions.</p>
      
      <h2>Our CRO Process</h2>
      <p>We combine quantitative data analysis with qualitative user research to understand exactly where and why visitors drop off. Then we systematically test improvements, measuring impact on both micro and macro conversions.</p>
      
      <h3>Conversion Audit</h3>
      <p>We analyze your complete conversion funnel using tools like Google Analytics, heatmaps, session recordings, and user surveys. This reveals the highest-impact opportunities—the changes that will move the needle most.</p>
      
      <h3>Hypothesis Development</h3>
      <p>Based on audit findings, we develop prioritized testing hypotheses. Each hypothesis includes expected impact, implementation difficulty, and success metrics. We focus on high-impact, quick-win optimizations first.</p>
      
      <h3>Testing & Implementation</h3>
      <p>We run structured A/B tests or multivariate tests depending on your traffic volume. Tests are designed for statistical significance, and we monitor both primary metrics (conversion rate) and secondary metrics (AOV, bounce rate) to avoid optimization myopia.</p>
      
      <h2>Key Optimization Areas</h2>
      <ul>
        <li><strong>Product Pages:</strong> Clearer CTAs, enhanced social proof, better images</li>
        <li><strong>Cart Experience:</strong> Trust signals, shipping transparency, urgency elements</li>
        <li><strong>Checkout:</strong> Form simplification, payment options, error handling</li>
        <li><strong>Mobile:</strong> Touch-friendly interfaces, simplified navigation, faster load times</li>
      </ul>
      
      <h2>Expected Outcomes</h2>
      <p>Most clients see 15-30% improvement in overall conversion rate within 90 days, with some achieving 50%+ gains. We provide detailed monthly reports showing test results, cumulative revenue impact, and upcoming testing roadmap.</p>
    `
  },
  {
    slug: "product-feed-optimization",
    title: "Product Feed Management & Optimization",
    short: "Maximize performance on Google Shopping, Meta Catalog, and marketplace channels with optimized feeds.",
    price: "From $900/month",
    image: "feed",
    features: [
      "Multi-channel feed setup and management",
      "Feed quality optimization for Google Merchant Center",
      "Dynamic feed rules and product segmentation",
      "Error monitoring and resolution",
      "Feed-based bidding strategy optimization",
      "Marketplace feed integration (Amazon, eBay, etc.)"
    ],
    contentHtml: `
      <p>Your product feed is the data backbone of all shopping and marketplace campaigns. We optimize feeds for maximum visibility, approval rates, and performance across Google Shopping, Meta, and major marketplaces.</p>
      
      <h2>The Feed Quality Problem</h2>
      <p>Most e-commerce stores submit product feeds with missing attributes, incorrect categorization, and poor product data quality. This leads to disapproved products, lower ad rankings, and missed revenue opportunities.</p>
      
      <h2>Our Feed Optimization Framework</h2>
      <p>We treat product feeds as strategic assets, not just technical requirements. Every feed element—titles, descriptions, images, categories, custom labels—is optimized for both platform algorithms and user intent.</p>
      
      <h3>Feed Audit & Setup</h3>
      <p>We audit your existing feeds or build new ones from scratch using best practices for each platform. This includes proper product categorization, complete attribute mapping, and validation against platform requirements.</p>
      
      <h3>Title & Description Optimization</h3>
      <p>We rewrite product titles and descriptions specifically for feed-based channels. This differs from on-site optimization—feed titles need strategic keyword placement, clear product identification, and attribute information that matches user search intent.</p>
      
      <h3>Custom Labels & Segmentation</h3>
      <p>We implement advanced custom label strategies that enable sophisticated bidding and budget allocation. Segment products by margin, seasonality, performance tier, and other business rules to maximize ROAS.</p>
      
      <h2>Multi-Platform Management</h2>
      <p>We manage feeds across all major channels:</p>
      <ul>
        <li><strong>Google Merchant Center:</strong> Ensure 100% approval rates, optimize for Google Shopping performance</li>
        <li><strong>Meta Commerce Manager:</strong> Format feeds for optimal performance in Facebook/Instagram catalog ads</li>
        <li><strong>Marketplaces:</strong> Adapt feeds for Amazon, eBay, and other marketplace requirements</li>
        <li><strong>Specialized Channels:</strong> Fashion (CSS partners), price comparison sites, affiliate networks</li>
      </ul>
      
      <h2>Monitoring & Maintenance</h2>
      <p>Feed errors can cost thousands in lost revenue. We provide continuous monitoring, automatic error detection, and rapid issue resolution to keep your products live and performing.</p>
      
      <h2>Results</h2>
      <p>Clients typically achieve 95%+ product approval rates, 20-40% improvement in Shopping campaign CTR, and 15-30% reduction in CPA within 30 days.</p>
    `
  },
  {
    slug: "roas-analytics",
    title: "ROAS Optimization & Analytics",
    short: "Drive profitable growth with advanced analytics, attribution modeling, and data-driven decision making.",
    price: "From $1,500/month",
    image: "roas",
    features: [
      "Multi-channel attribution setup and analysis",
      "ROAS tracking and optimization frameworks",
      "Customer acquisition cost (CAC) analysis",
      "Profitability analysis by product, channel, and campaign",
      "Custom dashboard development",
      "Predictive analytics and forecasting"
    ],
    contentHtml: `
      <p>Scaling profitably requires accurate measurement and data-driven optimization. We build comprehensive analytics systems that reveal true campaign performance and guide strategic decisions.</p>
      
      <h2>The Attribution Challenge</h2>
      <p>Platform-reported ROAS often paints an incomplete or misleading picture. iOS14+ privacy changes, cross-device behavior, and multi-touch customer journeys make accurate attribution more complex than ever. Without proper measurement, you risk cutting profitable campaigns or scaling unprofitable ones.</p>
      
      <h2>Our Analytics Approach</h2>
      <p>We implement multi-layered measurement systems that combine platform data, server-side tracking, and business intelligence to provide accurate, actionable insights.</p>
      
      <h3>Attribution Modeling</h3>
      <p>We set up and analyze multiple attribution models—first-click, last-click, linear, time decay, and data-driven—to understand the true customer journey. This reveals which channels drive awareness vs. conversion, enabling smarter budget allocation.</p>
      
      <h3>ROAS Optimization Framework</h3>
      <p>We establish clear ROAS targets by channel, campaign type, and product category based on your business economics. Then we implement systematic testing and optimization to hit those targets while maximizing scale.</p>
      
      <h3>Profitability Analysis</h3>
      <p>ROAS is meaningless without profit context. We integrate product margins, shipping costs, and overhead to calculate true profitability by product, campaign, and customer segment. This ensures you're not just growing revenue, but growing profit.</p>
      
      <h2>Custom Dashboards</h2>
      <p>We build custom dashboards in Looker Studio, Tableau, or your preferred platform that consolidate data from all sources—Google Analytics, ad platforms, Shopify, and more. Real-time visibility into the metrics that matter most to your business.</p>
      
      <h2>Advanced Analytics</h2>
      <ul>
        <li><strong>Cohort Analysis:</strong> Track customer behavior and lifetime value by acquisition cohort</li>
        <li><strong>Forecasting:</strong> Predict future performance based on historical trends and planned investments</li>
        <li><strong>Incrementality Testing:</strong> Measure true advertising lift vs. baseline performance</li>
        <li><strong>Competitive Intelligence:</strong> Track competitor ad activity and market share shifts</li>
      </ul>
      
      <h2>Business Impact</h2>
      <p>Better analytics leads to better decisions. Clients typically see 10-25% improvement in marketing efficiency within 60 days as they reallocate budget from underperforming to high-performing initiatives.</p>
    `
  },
  {
    slug: "customer-ltv-strategy",
    title: "Customer Lifetime Value Strategy",
    short: "Build sustainable growth by maximizing customer retention, repeat purchase rate, and lifetime value.",
    price: "From $1,400/month",
    image: "ltv",
    features: [
      "LTV analysis and segmentation",
      "Retention strategy development",
      "Email & SMS remarketing campaigns",
      "Loyalty program design and optimization",
      "Win-back campaign development",
      "Subscription and repeat purchase optimization"
    ],
    contentHtml: `
      <p>Acquiring customers is expensive—the real profit comes from repeat purchases. We develop comprehensive LTV strategies that turn one-time buyers into loyal, high-value customers.</p>
      
      <h2>Why LTV Matters</h2>
      <p>Increasing customer retention by just 5% can increase profits by 25-95%. Yet most e-commerce brands focus almost exclusively on acquisition, leaving massive revenue on the table. The most successful brands understand that lifetime value, not first purchase value, is the metric that matters.</p>
      
      <h2>Our LTV Optimization Framework</h2>
      <p>We analyze your customer data to understand purchase patterns, identify high-value segments, and develop targeted strategies to increase repeat purchase rate, order frequency, and average order value over time.</p>
      
      <h3>Customer Segmentation</h3>
      <p>We segment your customer base using RFM analysis (Recency, Frequency, Monetary value) and behavioral data. This reveals your best customers, at-risk customers, and customers with high potential value—each requiring different engagement strategies.</p>
      
      <h3>Retention Campaign Development</h3>
      <p>We create multi-channel retention campaigns using email, SMS, and retargeting ads. Campaigns are triggered by specific behaviors (post-purchase, abandonment, re-engagement) and personalized based on customer segment and purchase history.</p>
      
      <h3>Loyalty & Subscription Programs</h3>
      <p>For brands with repeat purchase potential, we design loyalty programs or subscription models that incentivize ongoing engagement. These programs are structured to be profitable while creating genuine customer value.</p>
      
      <h2>Key LTV Strategies</h2>
      <ul>
        <li><strong>Post-Purchase Experience:</strong> Optimize packaging, follow-up, and onboarding to drive second purchase</li>
        <li><strong>Replenishment Campaigns:</strong> Time-based reminders for consumable products</li>
        <li><strong>Cross-Sell & Upsell:</strong> Recommend complementary products based on purchase history</li>
        <li><strong>Win-Back Campaigns:</strong> Re-engage lapsed customers with targeted offers</li>
        <li><strong>VIP Programs:</strong> Special treatment for high-value customers to maximize retention</li>
      </ul>
      
      <h2>Measurement & Optimization</h2>
      <p>We track cohort-based LTV, repeat purchase rate, purchase frequency, and customer churn rate. Monthly reporting shows how LTV optimization impacts overall business profitability and guides ongoing strategy refinement.</p>
      
      <h2>Expected Results</h2>
      <p>Clients typically see 20-40% increase in repeat purchase rate and 30-60% improvement in 12-month customer lifetime value within 90-120 days of program implementation.</p>
    `
  }
];
