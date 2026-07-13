// ===============================
// BEC ATTACK LAB DATABASE
// ===============================
const evidence =
    document.querySelector("#evidence");

const attackCases = {


    executive: {

        title: "Executive Impersonation Campaign",

        summary:
            "Attackers impersonate senior leadership to pressure employees into approving fraudulent financial requests.",


        timeline: [

            {
                step: "1",
                title: "Reconnaissance",

                description:
                    "Attackers research executives, employees, organizational structure, and communication patterns."
            },


            {
                step: "2",
                title: "Identity Spoofing",

                description:
                    "A fake executive identity is created using lookalike domains or compromised accounts."
            },


            {
                step: "3",
                title: "Social Engineering",

                description:
                    "Employees receive urgent messages designed to create authority and pressure."
            },


            {
                step: "4",
                title: "Financial Request",

                description:
                    "The attacker attempts to redirect payments or obtain sensitive information."
            }

        ],

        evidence: [

            {
                title: "Email Artifact",

                content:
                    `
        From:
        ceo-office@company-support.com

        <br><br>

        Reply-To:
        external.account@gmail.com

        <br><br>

        Subject:
        Urgent Wire Transfer Request
        `
            },


            {
                title: "Domain Analysis",

                content:
                    `
        The sender domain closely resembles the legitimate company domain but
        contains additional wording designed to appear official.

        <br><br>

        Indicators:
        <ul class="indicator-list">

        <li>Lookalike domain name</li>

        <li>Recently created external domain</li>

        <li>No trusted organization authentication</li>

        </ul>
        `
            },


            {
                title: "Communication Behavior",

                content:
                    `
        The request attempts to bypass normal approval procedures by creating
        urgency and requesting confidentiality.

        <br><br>

        Indicators:
        <ul class="indicator-list">

        <li>Urgent financial request</li>

        <li>Authority pressure</li>

        <li>Request to avoid normal verification</li>

        </ul>
        `
            }

        ],


        defenses: [

            "Verify unusual executive requests through a separate communication channel",

            "Enable multi-factor authentication on executive accounts",

            "Train employees to identify urgency and authority manipulation"

        ],

        mitre: [

            {
                id: "T1589",

                name: "Gather Victim Identity Information",

                description: "Attackers collect executive names, job roles, and organizational information before launching the campaign."
            },

            {
                id: "T1566",

                name: "Phishing",

                description: "Fraudulent emails are used to manipulate victims into trusting the attacker."
            },

            {
                id: "T1078",

                name: "Valid Accounts",

                description: "Compromised or impersonated identities increase the credibility of the attack."
            }

        ],

        profile: {

            category: "Business Email Compromise",

            target: "Executives / Finance Teams",

            method: "Authority-Based Social Engineering",

            risk: "Financial Loss"

        },


        investigationSteps: [

            "Verify executive identity through a trusted channel",

            "Review email authentication information",

            "Analyze sender domain reputation",

            "Confirm payment approval workflow"

        ],

        status: {

            caseID: "BEC-2026-0042",

            severity: "HIGH",

            state: "ACTIVE INVESTIGATION:",

            confidence: "92%",

            analyst: "VerifyFirst Threat Research"

        },


        ioc: [

            "Lookalike executive email domain",

            "External sender impersonating leadership",

            "Urgent wire transfer request",

            "Request to bypass normal approval procedures"

        ],


        findings:

            "The attacker used executive impersonation and authority-based social engineering to pressure employees into completing a fraudulent financial request. The communication showed multiple indicators of Business Email Compromise."

    },





    vendor: {


        title: "Vendor Email Compromise Campaign",


        summary:
            "Attackers impersonate trusted vendors to redirect legitimate payments into attacker-controlled accounts.",


        timeline: [


            {
                step: "1",

                title: "Vendor Research",

                description:
                    "Attackers gather information about suppliers, invoices, and payment processes."
            },


            {
                step: "2",

                title: "Email Compromise",

                description:
                    "A vendor account or domain is compromised to appear legitimate."
            },


            {
                step: "3",

                title: "Payment Manipulation",

                description:
                    "Employees receive fake banking change requests."
            },


            {
                step: "4",

                title: "Funds Redirected",

                description:
                    "Payment is sent to attacker-controlled accounts."
            }


        ],

        mitre: [

            {

                id: "T1583",

                name: "Acquire Infrastructure",

                description: "Attackers register or compromise domains that resemble trusted vendors."

            },

            {

                id: "T1566",

                name: "Phishing",

                description: "Email conversations are abused to redirect legitimate payments."

            },

            {

                id: "T1656",

                name: "Impersonation",

                description: "Trusted vendor identities are imitated to deceive finance personnel."

            }

        ],


        defenses: [

            "Confirm vendor banking changes verbally",

            "Require approval for payment modifications",

            "Monitor unusual vendor communication patterns"

        ],

        profile: {

            category: "Vendor Email Compromise",

            target: "Procurement / Finance Teams",

            method: "Payment Redirection",

            risk: "Unauthorized Funds Transfer"

        },


        investigationSteps: [

            "Verify vendor banking information",

            "Compare invoice history",

            "Review communication timeline",

            "Contact vendor using known information"

        ],

        evidence: [

            {
                title: "Invoice Artifact",

                content:
                    `
        A legitimate invoice was modified with new payment instructions.

        <br><br>

        Indicators:
        <ul class="indicator-list">

        <li>Unexpected banking information change</li>

        <li>New payment destination</li>

        <li>Mismatch with previous invoices</li>

        </ul>
        `
            },


            {
                title: "Vendor Communication",

                content:
                    `
        The attacker impersonated an existing supplier using a compromised
        communication channel.

        <br><br>

        Indicators:
        <ul class="indicator-list">

        <li>Trusted vendor identity abuse</li>

        <li>Unusual message timing</li>

        <li>Payment urgency</li>

        </ul>
        `
            },


            {
                title: "Payment Request Analysis",

                content:
                    `
        The request attempts to redirect normal business payments to an
        attacker-controlled account.

        <br><br>

        Indicators:
        <ul class="indicator-list">

        <li>Changed banking details</li>

        <li>No secondary verification</li>

        <li>Suspicious payment instructions</li>

        </ul>
        `
            }

        ],

        status: {

            caseID: "BEC-2026-0043",

            severity: "HIGH",

            state: "ACTIVE INVESTIGATION:",

            confidence: "89%",

            analyst: "VerifyFirst Threat Research"

        },


        ioc: [

            "Modified invoice information",

            "Unexpected vendor banking change",

            "Suspicious payment instructions",

            "Compromised vendor communication channel"

        ],


        findings:

            "The attacker targeted vendor payment processes by abusing trust between organizations. The campaign attempted to redirect legitimate payments through fraudulent account information."


    },





    payroll: {


        title: "Payroll Diversion Campaign",


        summary:
            "Attackers impersonate employees to change payroll information and redirect payments.",


        timeline: [


            {

                step: "1",

                title: "Employee Targeting",

                description:
                    "Attackers identify employees involved in payroll processes."

            },


            {

                step: "2",

                title: "Impersonation",

                description:
                    "A fake employee request is submitted using stolen information."

            },


            {

                step: "3",

                title: "Information Change",

                description:
                    "Payroll details are modified without proper verification."

            },


            {

                step: "4",

                title: "Financial Theft Attempt",

                description:
                    "Payments are redirected to attacker-controlled accounts."

            }


        ],

        mitre: [

            {

                id: "T1589",

                name: "Gather Victim Identity Information",

                description: "Employee information is collected before impersonation."

            },

            {

                id: "T1656",

                name: "Impersonation",

                description: "Attackers pretend to be employees requesting payroll updates."

            },

            {

                id: "T1078",

                name: "Valid Accounts",

                description: "Stolen identities or accounts increase trust during the attack."

            }

        ],


        defenses: [

            "Verify payroll changes using trusted identity verification",

            "Require additional approval for account changes",

            "Monitor unusual employee requests"

        ],

        profile: {

            category: "Payroll Fraud",

            target: "Human Resources",

            method: "Employee Impersonation",

            risk: "Payroll Diversion"

        },


        investigationSteps: [

            "Verify employee identity",

            "Review payroll modification request",

            "Check account change history",

            "Confirm approval procedures"

        ],

        evidence: [

            {
                title: "Employee Request",

                content:
                    `
        A message requests an employee payroll account update.

        <br><br>

        Indicators:
        <ul class="indicator-list">

        <li>Unexpected payroll change request</li>

        <li>Unverified employee identity</li>

        <li>External communication channel</li>

        </ul>
        `
            },


            {
                title: "Account Change Review",

                content:
                    `
        The requested update does not match normal payroll procedures.

        <br><br>

        Indicators:
        <ul class="indicator-list">

        <li>Missing approval workflow</li>

        <li>New payment destination</li>

        <li>Suspicious timing</li>

        </ul>
        `
            },


            {
                title: "Identity Verification",

                content:
                    `
        The attacker relies on impersonation and stolen information to appear
        as a legitimate employee.

        <br><br>

        Indicators:
        <ul class="indicator-list">

        <li>Identity mismatch</li>

        <li>Social engineering techniques</li>

        <li>Attempted process bypass</li>

        </ul>
        `
            }

        ],

        status: {

            caseID: "BEC-2026-0044",

            severity: "HIGH",

            state: "ACTIVE INVESTIGATION:",

            confidence: "94%",

            analyst: "VerifyFirst Threat Research"

        },


        ioc: [

            "Unexpected payroll update request",

            "Unverified employee identity",

            "External communication channel",

            "Attempted payroll account modification"

        ],


        findings:

            "The attacker attempted to impersonate an employee to modify payroll information. The request bypassed normal verification procedures and relied on stolen identity information and social engineering."

    }


};




// ===============================
// PAGE ELEMENTS
// ===============================


const cards = document.querySelectorAll(".case-card");


const attackView = document.querySelector(".attack-view");


const title = document.querySelector("#attack-title");

const summary = document.querySelector("#attack-summary");


const timeline = document.querySelector("#timeline");


const defenses = document.querySelector("#defenses");

const investigationStatus =
    document.querySelector("#investigation-status");


const ioc =
    document.querySelector("#ioc");


const findings =
    document.querySelector("#findings");

const attackProfile =
    document.querySelector("#attack-profile");


const investigationSteps =
    document.querySelector("#investigation-steps");


const selectedCase =
    document.querySelector("#selected-case");

const mitre =
    document.querySelector("#mitre-techniques");

const reportButton =
    document.querySelector("#generate-report");

const reportSection =
    document.querySelector("#report-section");

const report =
    document.querySelector("#generated-report");




// ===============================
// LOAD ATTACK CASE
// ===============================


cards.forEach(card => {


    card.addEventListener("click", () => {

        cards.forEach(c =>
            c.classList.remove("active"));

        card.classList.add("active");


        const selected =
            card.dataset.case;


        const attack =
            attackCases[selected];


        if (!attack) return;



        attackView.classList.remove("hidden");



        reportButton.textContent = "Generate Investigation Report";

        reportSection.classList.add("hidden");

        report.innerHTML = "";

        title.textContent =
            attack.title;

        document.querySelector("#selected-case").textContent =
            attack.title;



        summary.textContent =
            attack.summary;

        selectedCase.textContent =
            attack.title;





        attackProfile.innerHTML = `

<div class="profile-item">

<strong>Category</strong>

<p>${attack.profile.category}</p>

</div>


<div class="profile-item">

<strong>Primary Target</strong>

<p>${attack.profile.target}</p>

</div>


<div class="profile-item">

<strong>Attack Method</strong>

<p>${attack.profile.method}</p>

</div>


<div class="profile-item">

<strong>Risk</strong>

<p>${attack.profile.risk}</p>

</div>

`;



        investigationSteps.innerHTML = "";


        attack.investigationSteps.forEach(step => {


            const item =
                document.createElement("div");


            item.className =
                "investigation-step";


            item.textContent =
                "✓ " + step;


            investigationSteps.appendChild(item);


        });

        investigationStatus.innerHTML = `

<div class="status-item">
<strong>Case ID:</strong>
${attack.status.caseID}
</div>


<div class="status-item">
<strong>Severity:</strong>
${attack.status.severity}
</div>


<div class="status-item">
<strong>Status:</strong>
${attack.status.state}
</div>


<div class="status-item">
<strong>Confidence:</strong>
${attack.status.confidence}
</div>


<div class="status-item">
<strong>Analyst:</strong>
${attack.status.analyst}
</div>

`;

        ioc.innerHTML = "";


        attack.ioc.forEach(item => {

            const indicator = document.createElement("div");

            indicator.className = "ioc-item";

            indicator.textContent = item;

            ioc.appendChild(indicator);

        });



        findings.textContent =
            attack.findings;


        timeline.innerHTML = "";
        evidence.innerHTML = "";
        mitre.innerHTML = "";

        attack.mitre.forEach(tech => {

            const card = document.createElement("div");

            card.className = "mitre-card";

            card.innerHTML = `

        <div class="mitre-id">

            ${tech.id}

        </div>

        <div class="mitre-name">

            ${tech.name}

        </div>

        <p>

            ${tech.description}

        </p>

    `;

            mitre.appendChild(card);

        });

        attack.evidence.forEach(item => {


            const box =
                document.createElement("div");


            box.className =
                "evidence-item";


            box.innerHTML = `

        <h3>
            ${item.title}
        </h3>


        <p>
            ${item.content}
        </p>

    `;


            evidence.appendChild(box);


        });



        attack.timeline.forEach(item => {


            const step =
                document.createElement("div");


            step.className =
                "timeline-step";



            step.innerHTML = `

                <div class="step-number">
                    ${item.step}
                </div>


                <div class="step-content">

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        ${item.description}
                    </p>

                </div>

            `;


            timeline.appendChild(step);


        });




        defenses.innerHTML = "";



        attack.defenses.forEach(defense => {


            const item =
                document.createElement("div");


            item.className =
                "defense-item";


            item.textContent =
                defense;



            defenses.appendChild(item);


        });



        attackView.scrollIntoView({

            behavior: "smooth"

        });


    });


});

const resetButton = document.querySelector(".reset-lab");


resetButton.addEventListener("click", () => {


    attackView.classList.add("hidden");


    window.scrollTo({

        top: document.querySelector(".cases").offsetTop,

        behavior: "smooth"

    });


});

reportButton.addEventListener("click", () => {

    const attack =
        attackCases[document.querySelector(".case-card.active")?.dataset.case];

    if (!attack) return;

    report.innerHTML = `

        <div class="report-grid">

            <div class="report-card">

                <h3>Incident Overview</h3>

                <p>

                    <strong>Threat:</strong>
                    ${attack.title}

                    <br><br>

                    <strong>Classification:</strong>
                    Business Email Compromise

                    <br><br>

                    <strong>Severity:</strong>
                    High

                </p>

            </div>

            <div class="report-card">

                <h3>Executive Summary</h3>

                <p>

                    ${attack.summary}

                </p>

            </div>

            <div class="report-card">

                <h3>Recommended Actions</h3>

                <ul>

                    ${attack.defenses.map(item =>
        `<li>${item}</li>`).join("")}

                </ul>

            </div>

        </div>

        <button class="btn btn-primary print-report">

            Print Report

        </button>

    `;

    reportSection.classList.remove("hidden");

    document
        .querySelector(".print-report")
        .addEventListener("click", () => {

            const printWindow = window.open("", "_blank");

            printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Investigation Report</title>

                <style>

                    body{
                        font-family: Arial, sans-serif;
                        margin:40px;
                        color:#111;
                        line-height:1.6;
                    }

                    h1,h2,h3{
                        margin-top:24px;
                    }

                    .report-grid{
                        display:block;
                    }

                    .report-card{
                        border:1px solid #ccc;
                        border-radius:8px;
                        padding:20px;
                        margin-bottom:20px;
                    }

                    ul{
                        padding-left:20px;
                    }

                </style>

            </head>

<body>

    <h1>VerifyFirst Investigation Report</h1>

    <p><strong>Generated:</strong> ${new Date().toLocaleString()}</p>

    <hr>

    ${report.innerHTML.replace(
                /<button[\s\S]*?<\/button>/,
                ""
            )}

</body>

            </html>
        `);

            printWindow.document.close();
            printWindow.focus();

            setTimeout(() => {
                printWindow.print();
            }, 300);

            printWindow.onafterprint = () => {
                printWindow.close();
            };

            reportSection.scrollIntoView({

                behavior: "smooth"

            });

        });

});