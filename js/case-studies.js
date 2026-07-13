console.log("CASE STUDIES JS LOADED");

const caseStudies = [

    {
        id: "facebook-google",

        company: "Facebook & Google",
        year: "2013 - 2015",
        loss: "$121 Million",
        type: "Vendor Email Compromise",
        industry: "Technology",
        severity: "CRITICAL",

        summary:
            "Attackers created a fake company identity and impersonated a legitimate hardware vendor. Fraudulent invoices were sent to finance departments at Facebook and Google, resulting in millions of dollars in unauthorized payments.",


        timeline: [

            "Attackers created a fake vendor identity",

            "Fraudulent invoices were sent to targeted employees",

            "Finance departments processed unauthorized payments",

            "Attack was discovered after investigation"

        ],


        indicators: [

            "New vendor with limited history",

            "Unexpected invoice requests",

            "Changes to payment instructions",

            "Lack of secondary verification"

        ],


        lessons: [

            "Verify vendor identities before payments",

            "Confirm banking changes through trusted channels",

            "Require approval workflows for large transfers"

        ]

    },



    {
        id: "facc",

        company: "FACC AG",
        year: "2016",
        loss: "€42 Million",
        type: "CEO Impersonation",
        industry: "Aerospace",
        severity: "CRITICAL",

        summary:
            "Attackers impersonated the CEO of Austrian aerospace company FACC and convinced an employee to authorize fraudulent transfers through social engineering.",


        timeline: [

            "Attackers researched company leadership",

            "Executive identity was impersonated",

            "Employee received urgent financial instructions",

            "Unauthorized transfers were completed"

        ],


        indicators: [

            "Urgent executive requests",

            "Confidential transaction claims",

            "Communication from unusual accounts"

        ],


        lessons: [

            "Verify executive requests independently",

            "Avoid relying only on email instructions",

            "Train employees to recognize authority-based manipulation"

        ]

    },



    {
        id: "toyota-boshoku",

        company: "Toyota Boshoku",
        year: "2019",
        loss: "$37 Million",
        type: "Executive Impersonation",
        industry: "Automotive",
        severity: "CRITICAL",

        summary:
            "Attackers used social engineering techniques to impersonate business executives and convince employees to redirect company funds.",


        timeline: [

            "Attackers identified employees involved in payments",

            "Fraudulent executive communication was created",

            "Funds were redirected to attacker-controlled accounts",

            "Incident response investigation began"

        ],


        indicators: [

            "Unexpected transfer requests",

            "Executive impersonation",

            "Pressure to act quickly"

        ],


        lessons: [

            "Use multi-person approval processes",

            "Verify unusual financial requests",

            "Monitor suspicious payment activity"

        ]

    },

    {
        id: "ubiquiti",

        company: "Ubiquiti Networks",
        year: "2015",
        loss: "$46.7 Million",
        type: "Vendor Email Compromise",
        industry: "Technology",
        severity: "HIGH",

        summary:
            "Attackers used a vendor impersonation scheme to convince employees that fraudulent financial requests were legitimate. The campaign resulted in unauthorized international transfers.",

        timeline: [

            "Attackers researched company communication patterns",

            "Fraudulent vendor messages were created",

            "Employees approved unauthorized transfers",

            "The incident was identified during investigation"

        ],

        indicators: [

            "Spoofed vendor communication",

            "Unexpected payment requests",

            "International transfer changes"

        ],

        lessons: [

            "Verify vendor payment instructions",

            "Use independent communication channels",

            "Monitor unusual financial activity"

        ]

    },


    {
        id: "mattel",

        company: "Mattel",
        year: "2015",
        loss: "$3 Million Attempted",
        type: "CEO Fraud",
        industry: "Manufacturing",
        severity: "HIGH",

        summary:
            "Attackers impersonated Mattel's CEO and attempted to convince an employee to transfer company funds. The transfer was stopped after verification procedures were followed.",

        timeline: [

            "Attacker impersonated company leadership",

            "Employee received a fraudulent financial request",

            "Verification process identified the request as suspicious",

            "Transfer was prevented"

        ],

        indicators: [

            "Executive impersonation",

            "Urgent payment requests",

            "Requests outside normal procedures"

        ],

        lessons: [

            "Verify executive requests",

            "Maintain payment approval processes",

            "Encourage employees to report suspicious requests"

        ]

    },


    {
        id: "scoular",

        company: "Scoular Company",
        year: "2015",
        loss: "Millions",
        type: "Invoice Fraud",
        industry: "Agriculture",
        severity: "HIGH",

        summary:
            "Attackers used business email compromise techniques to impersonate company executives and manipulate employees into transferring funds.",

        timeline: [

            "Attackers identified employees involved in payments",

            "Fraudulent emails were sent",

            "Funds were transferred to attacker-controlled accounts",

            "The fraud was later discovered"

        ],

        indicators: [

            "Fake executive communication",

            "Unusual financial instructions",

            "Pressure to complete transfers quickly"

        ],

        lessons: [

            "Confirm financial requests verbally",

            "Train employees on BEC techniques",

            "Use multi-step approval processes"

        ]

    }


];

const grid = document.getElementById("case-grid");


caseStudies.forEach(caseStudy => {


    grid.innerHTML += `


    <div class="case-card">


        <div class="case-header">


            <h3>
                ${caseStudy.company}
            </h3>


<span class="severity ${caseStudy.severity.toLowerCase()}">
    ${caseStudy.severity}
</span>


        </div>



        <p>
            ${caseStudy.type}
        </p>



        <div class="case-loss">

            ${caseStudy.loss}

        </div>



        <div class="case-info">


            <span>
                Year: ${caseStudy.year}
            </span>


            <span>
                Industry: ${caseStudy.industry}
            </span>


        </div>



<button class="btn btn-primary view-case"
        data-case="${caseStudy.id}">

    View Case Study

</button>


    </div>


    `;


});

const modal = document.getElementById("case-modal");
const details = document.getElementById("case-details");
const closeModal = document.getElementById("close-modal");


document.addEventListener("click", (event) => {


    if (!event.target.classList.contains("view-case")) return;


    const selectedCase = caseStudies.find(

        item => item.id === event.target.dataset.case

    );


    if (!selectedCase) return;


    details.innerHTML = `

        <div class="case-header">

            <h1>
                ${selectedCase.company}
            </h1>

            <span class="severity ${selectedCase.severity.toLowerCase()}">
                ${selectedCase.severity}
            </span>

        </div>


        <div class="report-stats">

            <div>
                <span>Financial Loss</span>
                <strong>${selectedCase.loss}</strong>
            </div>


            <div>
                <span>Attack Type</span>
                <strong>${selectedCase.type}</strong>
            </div>


            <div>
                <span>Industry</span>
                <strong>${selectedCase.industry}</strong>
            </div>

        </div>


        <section class="case-report-section">

            <h3>Incident Overview</h3>

            <p>
                ${selectedCase.summary}
            </p>

        </section>


        <section class="case-report-section">

            <h3>Attack Timeline</h3>

            <div class="case-timeline">

                ${selectedCase.timeline.map(step => `

                    <div class="timeline-step">
                        ${step}
                    </div>

                `).join("")}

            </div>

        </section>


        <section class="case-report-section">

            <h3>Indicators Observed</h3>

            <ul>

                ${selectedCase.indicators.map(item => `

                    <li>${item}</li>

                `).join("")}

            </ul>

        </section>


        <section class="case-report-section">

            <h3>Lessons Learned</h3>

            <ul>

                ${selectedCase.lessons.map(item => `

                    <li>${item}</li>

                `).join("")}

            </ul>

        </section>

    `;


    modal.classList.remove("hidden");

});



closeModal.addEventListener("click", () => {

    modal.classList.add("hidden");

});
