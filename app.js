const app = Vue.createApp({
    data() {
        return {
            navbarBrand: "CYBER-FILLING",
            sec2Title: "Drive Business Growth with AI",
            sec3Title: "Our Services",
            sec4Title: "Team & Clients",
            buttons: [
                { text: "View Services", link: "#sec3", color: "btn-dark" },
                { text: "Contact Us", link: "#footer", color: "btn-light" }
            ],
            mainIntro: {
                secTitle: "",
                title: "",
                fullTitle: "Help Enterprises Add AI Acceleration",
                description: `
                With <span class="bg-success text-light" style="padding: 2pt 5pt;">CYBER-FILLING</span>, explore the power of AI and large models to release the value of employees and enterprises.
                `,
                image: "img/home.png",
                cursorVisible: true,

            },
            secondaryItems: [
                {
                    id: 1,
                    title: "AI Age",
                    description: `
                    <p>
                        AI is not only belongs to leading companies like OpenAI, but also belongs to every company that hopes to accelerate its business, improve employee efficiency, maximize profit, and develop sustainably.
                    </p>
                    <p>
                        Thanks to mobile internet and AI advancements, we can now interact with AI like ChatGPT and Deepseek, and soon, AI Agents will proliferate. Integrating their capabilities with our knowledge and workflows will boost business competitiveness and sustainability.
                    <p>
                        In three years, AI adoption will likely become a key measure of enterprise modernization and competitiveness.
                    </p>
                    <p>
                        By thoughtfully combining AI with human collaboration, we can achieve unmatched efficiency and decision-making quality, ensuring we stay ahead.
                    </p>`,

                    image: "img/app-launch.svg"
                },
                {
                    id: 2,
                    title: "Employ AI Copilot",
                    description: `
                    <p>
                        In today's business operations, AI Copilot is an intelligent system that integrates data analysis, automated workflows, and enhanced decision-making capabilities. This system seamlessly integrates into daily work processes, providing real-time data support, intelligent workflow management, and strategy recommendations, unleash employee creativity.
                    </p>
                    <p>
                        In the past, such a thing was unimaginable for companies without a background in computer algorithms, but thanks to the decline in usage costs due to AI model progress and the proliferation of cloud computing, interface development has become a standard, now any company can have an AI Coworker.                    </p>
                    <p>
                        By integrating AI Coworker into work, this will return employees to their original source: <strong class="text-light bg-orange">thinking and creating</strong>.
                    </p>`,
                    image: "img/work-party.svg"
                },
                {
                    id: 3,
                    title: "AI Copilot's Abilities",
                    description: `
                    <p>
                    AI Copilot can help us in multiple ways:
                    </p>
                    <ul>
                        <li>
                        <i class="bi bi-check-circle-fill text-success"></i> Offering the potential for automated processes and optimized decision-making.
                        </li>
                        <li>
                        <i class="bi bi-check-circle-fill text-success"></i> Automation can replace or reduce the need for labor-intensive tasks, reducing operational costs.
                        </li>
                        <li>
                        <i class="bi bi-check-circle-fill text-success"></i> Offering the potential for automated processes and optimized decision-making.
                        </li>
                        <li>
                        <i class="bi bi-check-circle-fill text-success"></i> Data mining and analysis, AI is the key to processing and analyzing these large datasets.
                        </li>
                        <li>
                        <i class="bi bi-check-circle-fill text-success"></i> Predicting and evaluating potential risks, making more intelligent choice.
                        </li>
                        <li>
                        <i class="bi bi-check-circle-fill text-success"></i> AI can provide personalized employee training and career development paths, enhancing employee capabilities.
                        </li>
                        <li>
                        <i class="bi bi-check-circle-fill text-success"></i> Ensuring global compliance for business operations, reducing compliance risks.
                        </li>
                    </ul>
                    <p>
                        In addition to these capabilities, AI Copilot can also work like a human colleague, understanding our own business and even knowing how to work with each human colleague personalized.
                    </p>`,
                    image: "img/superhero.svg"
                },
            ],
            thirdItems: [
                {
                    id: 1,
                    title: "AI Acceleration Consultation",
                    description: `
                    <p>We provide AI Acceleration Consultation services to help enterprises leverage AI technology in the AI era, enhancing their competitiveness and sustainability.</p>
                    <p>Our services include:</p>
                    <ul>
                        <li>
                            <i class="bi bi-lightbulb-fill text-success"></i> <strong class="text-light bg-success">Strategic Consultation</strong> helping enterprises consider the application direction of AI technology in their internal and external operations.
                        </li>
                        <li>
                            <i class="bi bi-lightbulb-fill text-success"></i> <strong class="text-light bg-success">Efficiency Assessment</strong> finding the efficiency bottlenecks in the enterprise, proposing where AI Coworker can help the enterprise accelerate.
                        </li>
                        <li>
                            <i class="bi bi-lightbulb-fill text-success"></i> <strong class="text-light bg-success">Business Application</strong> analyzing with the enterprise, finding which workflow can be saved costs and improved revenue by using AI Coworker.
                        </li>
                        <li>
                            <i class="bi bi-lightbulb-fill text-success"></i> <strong class="text-light bg-success">Workflow Optimization</strong> helping the enterprise automate internal workflows, enhancing efficiency.
                        </li>
                    </ul>
                    `,
                    image: "img/man-riding-a-rocket.svg"
                },
                {
                    id: 2,
                    title: "AI Copilot Scheme Design",
                    description: `
                    <p>We provide AI Copilot Scheme Design services to help enterprises leverage AI technology in the AI era, enhancing their competitiveness and sustainability.</p>
                    <p>Our scheme design services include:</p>
                    <ul>
                        <li>
                            <i class="bi bi-lightbulb-fill text-orange"></i> <strong class="text-light bg-orange">Product Scheme Design</strong>：combine with the enterprise's business, design AI Coworker's product features. Output product prototypes for the enterprise.
                        </li>
                        <li>
                            <i class="bi bi-lightbulb-fill text-orange"></i> <strong class="text-light bg-orange">Technical Scheme Design</strong>：Combine product design, design AI Coworker's technical architecture, helping the enterprise choose appropriate technical solutions.
                        </li>
                        <li>
                            <i class="bi bi-lightbulb-fill text-orange"></i> <strong class="text-light bg-orange">Workflow Scheme Design</strong>：Combine with the enterprise's existing office habits, design internal workflow applications for AI Coworker, and help the enterprise design integration solutions.
                        </li>
                    `,
                    image: "img/genius.svg"
                },
                {
                    id: 3,
                    title: "IT Development",
                    description: `
                    <p>
                    We have a team of very professional technical developers, who are familiar with international and domestic large models, and our team has also participated in high-concurrency development in different listed companies, able to handle all types of technical development.
                    </p>
                    <p>
                    The specific technical development cycle will be provided based on the enterprise's needs.
                    </p>

                    `,
                    image: "img/calculator.svg"
                },
            ],
            forthItems: [
                {
                    id: 1,
                    title: "Our Team",
                    description: `
                    <p>
                    We are a team with rich experience in product design,development and business operations, with rich enterprise consulting experience.
                    </p>
                    <p>
                    Founding Members include:
                    </p>
                    <ul>
                        <li>
                            <i class="bi bi-person-bounding-box text-success"></i> <strong class="text-light bg-success">Founder & CEO Fabio</strong> 15 years in digital product management. A founding member of ZHIPIN (Nasdaq: BZ), experienced in enterprise digitalization, APP design, and AI product design.
                        </li>
                        <li>
                            <i class="bi bi-person-bounding-box text-success"></i> <strong class="text-light bg-success">Co-founder & CTO Tony</strong> 10 years in APP and digital development, ex-Technical Director at TAL (Nasdaq: TAL), a top Chinese online education giant. An AI coding Evangelist
                        </li>
                        <li>
                            <i class="bi bi-person-bounding-box text-success"></i> <strong class="text-light bg-success">Co-founder & CMO Sabrina</strong> 12 years experience in business strategy, operations, and sales management. Former head of strategy investment at Baidu (Nasdaq: TAL) and Youzan (8083.HK).Ex-Consulting Manager at Roland Berger China.
                        </li>
                    </ul>
                    `,
                    image: "img/creative-work.svg"
                },
                {
                    id: 2,
                    title: "Our Clients",
                    description: `
                    <p>
                    We currently serve clients from multiple industries, including retail, e-commerce, education, and investment. To protect client privacy, we will not disclose specific client information here.
                    </p>
                    <p>
                    Usually, our clients can feel the efficiency boost and business acceleration provided by AI Copilot in the first month of service.
                    </p>
                    `,
                    image: "img/shaking-hands.svg"
                },
            ],
            footer:
            {
                footerText: "Copyright © 2023 CYBER-FILLING Consulting",
                contact : {
                    place_title: "Office Location",
                    place: "Wanchai, Hong Kong",
                    email_title: "Contact Us",
                    email: "call@cyberfilling.com"
                }

            },


        };
    },
    mounted() {
        let currentIndex = 0;
        const titleInterval = setInterval(() => {
            if (currentIndex < this.mainIntro.fullTitle.length) {
                this.mainIntro.title += this.mainIntro.fullTitle.charAt(currentIndex);
                currentIndex++;
            } else {
                this.mainIntro.cursorVisible = false;
                clearInterval(titleInterval);
            }
        }, 2000 / this.mainIntro.fullTitle.length); // 分配时间以使总时间为 2 秒
    }
});

app.mount('#app');
