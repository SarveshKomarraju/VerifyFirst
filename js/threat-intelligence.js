
// ===============================
// Scroll Animations
// ===============================

const animatedItems = document.querySelectorAll(
    ".overview-card, .campaign-card, .trend-card, .recommendation-card, .stage"
);


const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("intelligence-show");

        }

    });

}, {

    threshold: 0.15

});


animatedItems.forEach(item => {

    observer.observe(item);

});



// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");


counters.forEach(counter => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = Math.max(1, Math.ceil(target / 70));


    function update() {

        current += increment;


        if (current >= target) {

            counter.textContent = target;

            return;

        }


        counter.textContent = current;

        requestAnimationFrame(update);

    }


    update();

});



// ===============================
// Threat Intelligence Database
// ===============================

const reports = {


    "Executive Impersonation": {

        category: "Business Email Compromise",

        targets: "Executives, Finance Teams",

        technique: "Authority Manipulation",

        description:
            "Attackers impersonate executives and create urgency to manipulate employees into approving fraudulent financial requests.",

        indicators: [
            "Urgent payment requests",
            "Unexpected executive communication",
            "Requests for confidentiality"
        ]

    },



    "Vendor Email Compromise": {

        category: "Vendor Fraud",

        targets: "Procurement, Finance",

        technique: "Payment Redirection",

        description:
            "Attackers impersonate trusted vendors and attempt to redirect legitimate payments into attacker-controlled accounts.",

        indicators: [
            "Unexpected banking changes",
            "Modified invoice information",
            "New payment instructions"
        ]

    },



    "Payroll Fraud": {

        category: "Employee Impersonation",

        targets: "Human Resources",

        technique: "Payment Information Theft",

        description:
            "Attackers impersonate employees to request unauthorized payroll updates and banking changes.",

        indicators: [
            "Payroll update requests",
            "Fake employee communication",
            "Suspicious banking changes"
        ]

    },



    "Compromised Internal Accounts": {

        category: "Account Takeover",

        targets: "Employees and Organizations",

        technique: "Trusted Account Abuse",

        description:
            "Compromised accounts are used to send realistic internal requests that appear legitimate.",

        indicators: [
            "Unusual account activity",
            "Unexpected internal messages",
            "Abnormal login behavior"
        ]

    },



    "Gift Card Fraud": {

        category: "Social Engineering",

        targets: "Employees",

        technique: "Authority Pressure",

        description:
            "Attackers manipulate employees into purchasing gift cards through fake executive requests.",

        indicators: [
            "Urgent deadlines",
            "Requests for secrecy",
            "Unusual purchase requests"
        ]

    },



    "Legal Department Spoofing": {

        category: "Authority Impersonation",

        targets: "Employees, Legal Teams",

        technique: "Confidentiality Exploitation",

        description:
            "Attackers impersonate legal personnel to pressure employees into revealing sensitive information.",

        indicators: [
            "Confidential requests",
            "Fake legal communication",
            "Authority-based pressure"
        ]

    }


};



// ===============================
// Report Modal System
// ===============================

const modal = document.querySelector(".report-modal");

const closeButton = document.querySelector(".close-report");


const title = document.querySelector("#report-title");

const category = document.querySelector("#report-category");

const targets = document.querySelector("#report-targets");

const technique = document.querySelector("#report-technique");

const description = document.querySelector("#report-description");

const indicators = document.querySelector("#report-indicators");



document.querySelectorAll(".report-button").forEach(button => {


    button.addEventListener("click", () => {


        const card = button.closest(".campaign-card");


        const reportName = card.dataset.report;


        console.log("Opening report:", reportName);


        const report = reports[reportName];


        if (!report) {

            console.error("Missing report:", reportName);

            return;

        }



        title.textContent = reportName;

        category.textContent = report.category;

        targets.textContent = report.targets;

        technique.textContent = report.technique;

        description.textContent = report.description;



        indicators.innerHTML = "";


        report.indicators.forEach(item => {


            const li = document.createElement("li");


            li.textContent = item;


            indicators.appendChild(li);


        });



        modal.classList.add("active");

        document.body.style.overflow = "hidden";
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


    });


});




// ===============================
// Close Modal
// ===============================


closeButton.addEventListener("click", () => {

    modal.classList.remove("active");

    document.body.style.overflow = "";

});



modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// ===============================
// Close Modal
// ===============================


if (closeButton) {

    closeButton.addEventListener("click", () => {

        modal.classList.remove("active");

    });

}



if (modal) {

    modal.addEventListener("click", event => {


        if (event.target === modal) {

            modal.classList.remove("active");

        }


    });

}