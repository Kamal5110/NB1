export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content?: string;
}

export interface Client {
  id: number;
  name: string;
  logo: string;
}

// Features
export const features: Feature[] = [
  {
    icon: "fa-shield-alt",
    title: "Financial Security",
    description: "Expert financial oversight to protect and grow your business assets."
  },
  {
    icon: "fa-chart-line",
    title: "Growth-Focused",
    description: "Strategic financial insights to accelerate your business expansion."
  },
  {
    icon: "fa-sync",
    title: "Streamlined Process",
    description: "Efficient workflows that save time and eliminate financial headaches."
  }
];

// Services
export const services: Service[] = [
  {
    id: 1,
    icon: "fa-calculator",
    title: "Tax Preparation & Planning",
    description: "Comprehensive tax services to minimize liability and ensure compliance with current tax laws.",
    features: [
      "Individual & Business Tax Returns",
      "Strategic Tax Planning",
      "Tax Compliance"
    ]
  },
  {
    id: 2,
    icon: "fa-chart-pie",
    title: "Bookkeeping & Accounting",
    description: "Accurate financial record-keeping and reporting to support informed business decisions.",
    features: [
      "Monthly Financial Statements",
      "General Ledger Maintenance",
      "Accounts Payable/Receivable"
    ]
  },
  {
    id: 3,
    icon: "fa-landmark",
    title: "Audit & Assurance",
    description: "Independent verification of financial statements to enhance credibility and identify opportunities.",
    features: [
      "Financial Statement Audits",
      "Internal Control Reviews",
      "Compliance Audits"
    ]
  },
  {
    id: 4,
    icon: "fa-keyboard",
    title: "Data Entry Specialist",
    description: "Meticulous data entry services to ensure accurate financial records and database management.",
    features: [
      "Receipt and Invoice Processing",
      "Financial Data Entry",
      "Document Digitization"
    ]
  },
  {
    id: 5,
    icon: "fa-chart-line",
    title: "Virtual CFO & Fractional CFO Services",
    description: "Executive-level financial guidance without the full-time cost of an in-house CFO.",
    features: [
      "Financial Strategy Development",
      "Cash Flow Management",
      "Financial Performance Analysis"
    ]
  },
  {
    id: 6,
    icon: "fa-file-invoice-dollar",
    title: "Sr. Accountant Services",
    description: "Advanced accounting expertise for complex financial needs and high-level oversight.",
    features: [
      "Financial Statement Preparation",
      "Complex Transaction Processing",
      "Accounting System Management"
    ]
  },
  {
    id: 7,
    icon: "fa-money-check-alt",
    title: "Accounts Receivable",
    description: "Comprehensive management of accounts receivable to improve cash flow and reduce outstanding balances.",
    features: [
      "Invoice Generation",
      "Payment Collection",
      "Aging Reports & Analysis"
    ]
  },
  {
    id: 8,
    icon: "fa-user-tie",
    title: "Individual Tax Return",
    description: "Expert preparation of individual tax returns to ensure compliance and maximize deductions.",
    features: [
      "Personal Income Tax Preparation",
      "Tax Planning for Individuals",
      "Tax Credit Identification"
    ]
  },
  {
    id: 9,
    icon: "fa-file-invoice-dollar",
    title: "Payroll Services",
    description: "Comprehensive payroll management to ensure accuracy, compliance, and employee satisfaction.",
    features: [
      "Payroll Processing",
      "Tax Filing & Payments",
      "Employee Benefits Administration"
    ]
  }
];

// Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Nishav Business Solutions transformed our financial operations. Their expert team helped us optimize our tax strategy, resulting in significant savings. Highly recommended!",
    author: "Sarah Johnson",
    role: "CEO, Johnson Enterprises",
    rating: 5
  },
  {
    id: 2,
    content: "As a small business owner, I needed comprehensive accounting support without the overhead of an in-house team. Nishav Business Solutions delivered exactly what I needed.",
    author: "Michael Chen",
    role: "Owner, Chen Retail Group",
    rating: 5
  },
  {
    id: 3,
    content: "The business advisory services from Nishav Business Solutions helped us navigate a complex expansion. Their strategic guidance was invaluable to our success.",
    author: "Jessica Williams",
    role: "CFO, Williams Manufacturing",
    rating: 5
  }
];

// Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "7 Tax Planning Strategies for Small Businesses in 2023",
    excerpt: "Discover effective tax planning strategies that can help your small business minimize tax liability and maximize profitability.",
    date: "May 15, 2023",
    category: "Tax Planning",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Introduction to Tax Planning</h2>
      <p>Tax planning is a critical aspect of financial management for small businesses. Effective tax planning strategies can significantly reduce your tax liability and improve your bottom line.</p>
      
      <h2>1. Maximize Business Deductions</h2>
      <p>One of the most effective ways to reduce your tax burden is to take advantage of all available business deductions. These can include expenses related to office space, equipment, supplies, travel, and more.</p>
      
      <h2>2. Choose the Right Business Structure</h2>
      <p>The legal structure of your business has significant tax implications. Each structure — sole proprietorship, partnership, LLC, S corporation, or C corporation — has its own tax rules and advantages.</p>
      
      <h2>3. Implement Retirement Plans</h2>
      <p>Setting up a retirement plan for yourself and your employees can provide tax advantages while also helping you save for the future.</p>
      
      <h2>4. Time Your Income and Expenses</h2>
      <p>Timing when you receive income and when you incur expenses can affect your tax liability for a specific year.</p>
      
      <h2>5. Hire Family Members</h2>
      <p>Hiring family members can be a legitimate way to reduce your overall family tax burden while keeping the money in the family.</p>
      
      <h2>6. Use Tax Credits</h2>
      <p>Tax credits directly reduce your tax bill, making them more valuable than deductions. Look for credits that apply to your business, such as the Small Business Health Care Tax Credit or the Work Opportunity Tax Credit.</p>
      
      <h2>7. Plan for Estimated Taxes</h2>
      <p>If you're self-employed or a business owner, you may need to make quarterly estimated tax payments to avoid penalties.</p>
      
      <h2>Conclusion</h2>
      <p>By implementing these seven tax planning strategies, small business owners can minimize their tax liability while remaining compliant with tax laws. Remember, effective tax planning is a year-round activity, not just something to consider at tax time.</p>
    `
  },
  {
    id: 2,
    title: "Understanding Financial Statements: A Guide for Business Owners",
    excerpt: "Learn how to interpret your financial statements and use this information to make informed business decisions.",
    date: "April 28, 2023",
    category: "Financial Analysis",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Introduction to Financial Statements</h2>
      <p>Financial statements are essential tools for understanding the financial health of your business. These documents provide valuable insights into your company's performance, profitability, and overall financial position.</p>
      
      <h2>The Balance Sheet</h2>
      <p>The balance sheet provides a snapshot of your company's financial position at a specific point in time. It lists your assets (what you own), liabilities (what you owe), and equity (the difference between assets and liabilities).</p>
      
      <h2>The Income Statement</h2>
      <p>Also known as the profit and loss statement, the income statement shows your company's revenues, expenses, and profits over a specific period. It helps you understand whether your business is profitable and how those profits are generated.</p>
      
      <h2>The Cash Flow Statement</h2>
      <p>The cash flow statement tracks the movement of cash in and out of your business. It helps you understand where your cash is coming from and where it's going, which is crucial for maintaining liquidity.</p>
      
      <h2>Key Financial Ratios</h2>
      <p>Financial ratios derived from your statements can provide deeper insights into your business's performance. Common ratios include liquidity ratios, profitability ratios, efficiency ratios, and leverage ratios.</p>
      
      <h2>Using Financial Statements for Decision-Making</h2>
      <p>Understanding how to interpret your financial statements allows you to make informed decisions about pricing, cost control, investments, and growth strategies.</p>
      
      <h2>Conclusion</h2>
      <p>Financial statements are powerful tools for business owners. By understanding and regularly reviewing these documents, you can gain valuable insights into your business's financial health and make more informed decisions to drive success.</p>
    `
  },
  {
    id: 3,
    title: "5 Effective Cash Flow Management Techniques for Growing Businesses",
    excerpt: "Explore practical strategies to optimize your business cash flow and ensure financial stability during growth periods.",
    date: "March 12, 2023",
    category: "Cash Flow",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>The Importance of Cash Flow Management</h2>
      <p>Cash flow management is critical for business success, especially during periods of growth. Without adequate cash flow, even profitable businesses can fail.</p>
      
      <h2>1. Create Detailed Cash Flow Projections</h2>
      <p>Develop comprehensive cash flow forecasts to anticipate potential shortfalls and plan accordingly. Regularly update these projections based on actual performance.</p>
      
      <h2>2. Optimize Your Billing and Collection Processes</h2>
      <p>Streamline your invoicing process and establish clear payment terms. Consider offering incentives for early payment and implement follow-up procedures for late payments.</p>
      
      <h2>3. Manage Inventory Efficiently</h2>
      <p>Excess inventory ties up cash that could be used elsewhere in your business. Implement just-in-time inventory practices and regularly review your inventory levels to minimize holding costs.</p>
      
      <h2>4. Negotiate Favorable Payment Terms with Suppliers</h2>
      <p>Work with your suppliers to establish payment terms that align with your cash flow. This might include extended payment periods or installment plans for large purchases.</p>
      
      <h2>5. Establish a Cash Reserve</h2>
      <p>Build a cash buffer to help your business weather unexpected expenses or temporary downturns. Aim for a reserve that can cover at least three to six months of operating expenses.</p>
      
      <h2>Conclusion</h2>
      <p>Effective cash flow management is essential for sustainable business growth. By implementing these strategies, you can ensure your business has the cash it needs to seize opportunities and navigate challenges.</p>
    `
  },
  {
    id: 4,
    title: "Cost-Cutting Benefits of Offshore Accounting Services",
    excerpt: "Learn how offshore accounting can significantly reduce operational costs while maintaining high-quality financial management for your firm.",
    date: "February 25, 2023",
    category: "Offshore Accounting",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>The Financial Case for Offshore Accounting</h2>
      <p>In today's competitive business environment, CPA firms are constantly looking for ways to optimize operations and reduce costs without sacrificing quality. Offshore accounting services present a compelling solution that can deliver substantial cost savings while maintaining or even improving service quality.</p>
      
      <h2>Significant Salary Differentials</h2>
      <p>One of the most immediate and substantial benefits of offshore accounting is the significant difference in salary scales. Accounting professionals in offshore locations can cost 40-60% less than their U.S. counterparts with comparable qualifications and experience. This salary differential translates directly to your bottom line.</p>
      
      <h2>Elimination of Overhead Expenses</h2>
      <p>When you partner with an offshore accounting service provider, you eliminate the considerable overhead costs associated with maintaining in-house staff. These savings include office space, equipment, software licenses, utilities, insurance, and other employee-related expenses that can significantly impact your operational budget.</p>
      
      <h2>Reduced Training and Recruitment Costs</h2>
      <p>The accounting industry faces high turnover rates, and the costs of recruiting, hiring, and training new staff can be substantial. Offshore service providers handle these aspects, providing pre-trained professionals who are ready to contribute immediately, eliminating these recurring expenses for your firm.</p>
      
      <h2>Scalability Without Proportional Cost Increases</h2>
      <p>Offshore accounting services offer remarkable scalability. During tax season or periods of increased workload, you can scale up resources without the proportional increase in costs that would come with hiring temporary or permanent staff locally. Conversely, you can scale down during slower periods without the difficulties of reducing staff.</p>
      
      <h2>Technology and Infrastructure Savings</h2>
      <p>Modern accounting requires substantial investments in software, security systems, and IT infrastructure. Offshore service providers make these investments on your behalf, spreading the costs across multiple clients and providing you with access to cutting-edge technology without the full financial burden.</p>
      
      <h2>Conclusion: A Strategic Financial Decision</h2>
      <p>The decision to implement offshore accounting services represents not just a cost-cutting measure but a strategic financial move that can transform your firm's profitability and competitive position. By reducing operational costs by 40-60% while maintaining or improving service quality, offshore accounting enables CPA firms to invest more in client relationships, business development, and value-added services that drive growth.</p>
    `
  },
  {
    id: 5,
    title: "Industry-Specific Offshore Accounting Services: Tailored Solutions for Specialized Needs",
    excerpt: "Discover how offshore accounting services are evolving to provide specialized expertise for different industries with unique financial requirements.",
    date: "January 18, 2023",
    category: "Offshore Accounting",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>Beyond General Accounting: The Rise of Specialization</h2>
      <p>The offshore accounting industry has evolved significantly from its origins as a provider of general bookkeeping services. Today, leading offshore accounting partners offer deep industry-specific expertise that addresses the unique financial challenges and regulatory requirements of various sectors.</p>
      
      <h2>Healthcare Accounting Specialization</h2>
      <p>The healthcare industry faces unique accounting challenges, including complex insurance billing, stringent regulatory compliance requirements, and specialized revenue cycle management. Offshore accounting teams with healthcare specialization bring expertise in medical billing, HIPAA compliance, and healthcare-specific financial reporting that enables practices and facilities to optimize their financial operations while remaining compliant.</p>
      
      <h2>Construction Industry Expertise</h2>
      <p>Construction accounting requires specialized knowledge of project-based accounting, progress billing, retention management, and job costing. Offshore accounting professionals specializing in this sector understand the complexities of construction contracts, change orders, and the critical importance of accurate job cost tracking to ensure profitability on each project.</p>
      
      <h2>Nonprofit Organization Accounting</h2>
      <p>Nonprofit organizations have distinct accounting needs, including fund accounting, grant management, and specialized reporting for donors and regulatory bodies. Offshore accounting teams with nonprofit expertise ensure accurate tracking of restricted and unrestricted funds, compliance with grant requirements, and proper preparation of Forms 990 and other essential documentation.</p>
      
      <h2>Real Estate and Property Management</h2>
      <p>The real estate sector requires specialized accounting for property acquisitions, dispositions, depreciation, tenant management, and CAM reconciliations. Offshore accounting specialists in this field bring expertise in complex lease accounting, property tax management, and financial reporting that highlights key performance indicators specific to property portfolios.</p>
      
      <h2>Manufacturing and Inventory Management</h2>
      <p>Manufacturing companies face accounting challenges related to inventory valuation, cost accounting, and production efficiency measurement. Specialized offshore accounting teams understand the nuances of manufacturing cost flows, absorption costing, and inventory control systems that are essential for accurate financial reporting and strategic decision-making in this sector.</p>
      
      <h2>The Benefits of Industry Specialization</h2>
      <p>When offshore accounting teams bring industry-specific expertise to their work, clients benefit from more strategic insights, improved compliance, and accounting processes that align perfectly with their business operations. This specialized knowledge transforms offshore accounting from a cost-saving measure to a strategic advantage that drives better business decisions.</p>
    `
  },
  {
    id: 6,
    title: "The Future of Offshore Accounting: Trends and Innovations Reshaping the Industry",
    excerpt: "Explore emerging technologies and trends that are transforming offshore accounting services and creating new opportunities for CPA firms.",
    date: "December 5, 2022",
    category: "Offshore Accounting",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>A Transformation in Progress</h2>
      <p>The offshore accounting industry is experiencing a profound transformation driven by technological innovation, changing client expectations, and evolving regulatory frameworks. Understanding these trends is essential for CPA firms seeking to leverage offshore resources effectively in the coming years.</p>
      
      <h2>AI and Machine Learning Integration</h2>
      <p>Artificial intelligence and machine learning are revolutionizing routine accounting tasks through intelligent automation. Leading offshore providers are implementing AI-powered systems for data extraction, categorization, anomaly detection, and even preliminary analysis. This technology shift enables offshore teams to focus on higher-value activities like analysis and strategic advisory, rather than data processing.</p>
      
      <h2>Blockchain for Enhanced Security and Transparency</h2>
      <p>Blockchain technology is addressing one of the historical concerns about offshore accounting: security and transparency. By creating immutable records of transactions and implementing smart contracts for accounting processes, blockchain is enabling more secure, transparent collaboration between offshore teams and their clients, building greater trust in the offshore model.</p>
      
      <h2>Advanced Analytics and Business Intelligence</h2>
      <p>The future of offshore accounting extends well beyond compliance and record-keeping. Sophisticated analytics capabilities are enabling offshore teams to provide clients with valuable business intelligence, predictive insights, and data-driven recommendations that support strategic decision-making and proactive financial management.</p>
      
      <h2>Regulatory Technology (RegTech) Solutions</h2>
      <p>As regulatory requirements grow increasingly complex, offshore accounting providers are implementing RegTech solutions that automate compliance processes, monitor regulatory changes, and ensure adherence to evolving standards across multiple jurisdictions. This technology-driven approach to compliance reduces risk while improving efficiency.</p>
      
      <h2>Collaborative Platforms and Real-Time Communication</h2>
      <p>The perception of offshore accounting as distant and disconnected is disappearing as advanced collaborative platforms enable seamless, real-time interaction between offshore teams and client firms. These technologies are creating truly integrated global teams that work together regardless of physical location.</p>
      
      <h2>The Human Element: Evolution of Skills</h2>
      <p>As technology automates routine tasks, the skill profile of offshore accounting professionals is evolving. The offshore accountant of the future combines technical accounting knowledge with technological proficiency, analytical capabilities, and strong communication skills. This evolution is elevating the value that offshore teams can deliver to client firms.</p>
      
      <h2>Sustainable and Responsible Offshore Practices</h2>
      <p>Environmental, Social, and Governance (ESG) considerations are becoming increasingly important in the selection of offshore partners. Progressive offshore accounting providers are implementing sustainable practices, ethical employment policies, and responsible business models that align with clients' values and corporate social responsibility goals.</p>
      
      <h2>Conclusion: Strategic Positioning for the Future</h2>
      <p>For CPA firms, the evolving landscape of offshore accounting presents an opportunity to develop a more strategic approach to global resource utilization. By partnering with forward-thinking offshore providers who are embracing these trends, firms can access not just cost savings, but innovative capabilities that transform their service offerings and client relationships.</p>
    `
  },
  {
    id: 7,
    title: "Building a Successful Offshore Accounting Team: Best Practices for Seamless Integration",
    excerpt: "Learn proven strategies for selecting, onboarding, and managing offshore accounting professionals to create a cohesive global team.",
    date: "November 10, 2022",
    category: "Offshore Accounting",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    content: `
      <h2>The Foundation of Successful Offshore Accounting</h2>
      <p>Building an effective offshore accounting team requires more than simply hiring remote professionals. The most successful implementations treat offshore staff as integral team members and create systems that enable seamless collaboration across geographical boundaries.</p>
      
      <h2>Strategic Talent Selection</h2>
      <p>The foundation of a successful offshore accounting team begins with selecting the right talent. Beyond technical accounting skills, look for professionals with excellent English communication abilities, cultural adaptability, problem-solving capabilities, and a proactive mindset. These soft skills are often as important as accounting expertise in determining success.</p>
      
      <h2>Comprehensive Onboarding Programs</h2>
      <p>Effective onboarding is critical to offshore team success. Develop a structured program that familiarizes offshore team members with your firm's systems, processes, client base, and cultural norms. Include both technical training and cultural integration activities that help offshore staff understand your firm's values and expectations.</p>
      
      <h2>Clear Process Documentation</h2>
      <p>Detailed process documentation is essential for offshore success. Create comprehensive, step-by-step guides for all accounting processes, complete with screenshots, video tutorials, and examples of both standard and exception cases. These resources ensure consistency and quality while reducing the learning curve for new team members.</p>
      
      <h2>Technology Infrastructure for Collaboration</h2>
      <p>Invest in robust collaboration technology that minimizes the impact of distance. This includes secure document sharing platforms, project management tools, video conferencing systems, and instant messaging applications that enable real-time communication. The right technology stack creates a virtual work environment where location becomes largely irrelevant.</p>
      
      <h2>Establishing Communication Protocols</h2>
      <p>Develop clear communication protocols that address the challenges of different time zones and cultural backgrounds. Establish expectations for response times, communication channels for different types of information, regular meeting schedules, and escalation procedures for urgent issues. Well-defined protocols prevent misunderstandings and ensure important matters receive timely attention.</p>
      
      <h2>Building Cultural Awareness</h2>
      <p>Invest time in developing mutual cultural understanding between onshore and offshore team members. This includes awareness of cultural holidays, communication styles, and work practices. Cultural intelligence on both sides of the relationship strengthens teamwork and prevents misunderstandings that can impact productivity.</p>
      
      <h2>Performance Measurement and Feedback</h2>
      <p>Implement clear performance metrics and regular feedback mechanisms for offshore team members. Establish KPIs that align with your firm's quality standards and client expectations, and provide consistent, constructive feedback on performance. Regular performance discussions keep offshore staff aligned with your objectives and provide opportunities for professional development.</p>
      
      <h2>Recognition and Integration</h2>
      <p>Make a deliberate effort to recognize and celebrate the contributions of offshore team members. Include them in company meetings, share firm-wide announcements and achievements, and acknowledge their successes. This inclusivity fosters a sense of belonging and commitment that enhances retention and performance.</p>
      
      <h2>Continuous Improvement Mindset</h2>
      <p>Establish mechanisms for continuous improvement of your offshore operations. Regularly solicit feedback from both offshore team members and onshore staff about challenges and opportunities for enhancement. This collaborative approach to refinement ensures your offshore model evolves and improves over time.</p>
      
      <h2>Conclusion: A Strategic Asset</h2>
      <p>When implemented with careful planning and ongoing attention, offshore accounting teams become more than a cost-saving measure—they become a strategic asset that enhances your firm's capabilities and competitive position. By following these best practices, CPA firms can build offshore teams that deliver exceptional value and enable sustainable growth.</p>
    `
  }
];

// Clients
export const clients: Client[] = [
  {
    id: 1,
    name: "Parceldeck",
    logo: "client-logo-placeholder.png"
  },
  {
    id: 2,
    name: "Shreehari Education",
    logo: "client-logo-placeholder.png"
  },
  {
    id: 3,
    name: "Radiance Technologies",
    logo: "client-logo-placeholder.png"
  },
  {
    id: 4,
    name: "Maintedge Techlabs",
    logo: "client-logo-placeholder.png"
  },
  {
    id: 5,
    name: "AavGO",
    logo: "client-logo-placeholder.png"
  },
  {
    id: 6,
    name: "TeroTAM Technolabs",
    logo: "/attached_assets/TeroTAM Technolabs.jpg"
  },
  {
    id: 7,
    name: "Astics Techlabs",
    logo: "/attached_assets/Astics Techlabs.jpg"
  },
  {
    id: 8,
    name: "Abilities India Pistons & Rings",
    logo: "/attached_assets/Abilities India Pistons & Rings.png"
  },
  {
    id: 9,
    name: "Oizom",
    logo: "/attached_assets/Oizom.jpg"
  },
  {
    id: 10,
    name: "Fitcast",
    logo: "/attached_assets/Fitcast.jpg"
  },
  {
    id: 11,
    name: "Webosphere",
    logo: "/attached_assets/Webosphere.jpg"
  },
  {
    id: 12,
    name: "QLTech",
    logo: "/attached_assets/QLTech.jpg"
  },
  {
    id: 13,
    name: "Kalintis",
    logo: "/attached_assets/Kalintis logo.jpg"
  },
  {
    id: 14,
    name: "Comptech Equipments",
    logo: "/attached_assets/Comptech Equipments.jpg"
  },
  {
    id: 15,
    name: "Fuji Silvertech",
    logo: "/attached_assets/Fuji Silvertech.jpg"
  },
  {
    id: 16,
    name: "TDC Contracting",
    logo: "/attached_assets/TDC Contracting.jpg"
  },
  {
    id: 17,
    name: "The Leela Corporation",
    logo: "/attached_assets/The Leela Corpo.jpg"
  },
  {
    id: 18,
    name: "Joyam Engineers & Consultants",
    logo: "/attached_assets/Joyam.png"
  }
];

// Accounting Software Expertise
export interface Software {
  name: string;
  icon: string;
  description: string;
}

export const accountingSoftware: Software[] = [
  {
    name: "Zoho Books",
    icon: "fa-laptop-code",
    description: "Comprehensive financial management with invoicing, expense tracking, and reporting."
  },
  {
    name: "QuickBooks",
    icon: "fa-file-invoice-dollar",
    description: "Leading accounting software for small and medium businesses with robust payroll features."
  },
  {
    name: "Xero",
    icon: "fa-chart-bar",
    description: "Cloud-based accounting platform with real-time collaboration and bank connections."
  },
  {
    name: "Wave Accounting",
    icon: "fa-wave-square",
    description: "Free accounting software ideal for small businesses and freelancers."
  },
  {
    name: "Datarails",
    icon: "fa-database",
    description: "Excel-based financial planning and analysis platform for budgeting and forecasting."
  }
];
