const analysisButtons = document.querySelectorAll(".analysis-button");

const findingTitle = document.querySelector(".finding-panel h4");
const findingText = document.querySelector(".finding-panel p");
let currentCase = null;
const threatCategory =
    document.querySelector("#threat-category");

const attackTechnique =
    document.querySelector("#attack-technique");

const riskIndicators =
    document.querySelector("#risk-indicators");

const businessImpact =
    document.querySelector("#business-impact");

const recommendedResponse =
    document.querySelector("#recommended-response");

const findings = {

    sender: {

        title: "Review Sender Information",

        text:
            "The sender address contains indicators that require verification. Small domain differences or account compromise can be used to impersonate trusted individuals."

    },

    request: {

        title: "Analyze Request Details",

        text:
            "The request attempts to create urgency and encourages the recipient to bypass normal approval procedures."

    },


    context: {

        title: "Review Business Context",

        text:
            "The requested action does not match normal business workflows and requires additional verification before completion."

    }

};


const cases = {


    case001: {

        number: "CASE 001",

        difficulty: "Moderate",

        title: "Executive Impersonation",

        description:
            "An employee receives a message appearing to come from company leadership requesting an urgent business action. The analyst must determine whether the request can be trusted.",


        email: {

            sender:
                "ceo@company-co.com",

            subject:
                "Confidential Payment Request",

            body:
                `Hello Jordan,

I need your assistance with a confidential matter involving an upcoming vendor payment.

The payment needs to be completed before the end of the business day to avoid delays.

Please handle this directly and confirm once completed.

Thank you,
Michael`

        },


        evidence: {

            senderReview: {

                title:
                    "Review Sender Information",

                finding:
                    "The sender domain is slightly different from the organization's official domain. This type of domain impersonation is commonly used during executive spoofing attacks."

            },


            emailDetails: {

                title:
                    "Analyze Email Details",

                finding:
                    "The message contains urgency tactics and requests action without following the organization's normal financial approval process."

            },


            verification: {

                title:
                    "Check Verification Process",

                finding:
                    "Financial requests from executives should be confirmed through an independent communication channel before any payment is completed."

            }

        },


        decision:
            "Escalate to Security",

        intelligence: {

            category:
                "Business Email Compromise",

            technique:
                "Executive Impersonation",

            indicators: [
                "Lookalike executive email domain",
                "Urgent payment request",
                "Attempt to bypass normal approval workflow"
            ],

            impact:
                "Potential unauthorized financial transaction",

            response:
                "Escalate to Security Team"

        },

        assessment: {

            correct: "escalate",

            results: {

                escalate: {

                    title:
                        "Correct: Escalate to Security",

                    text:
                        "This request contains multiple indicators of executive impersonation, including a suspicious sender domain, urgency tactics, and an attempt to bypass normal payment procedures."
                },


                verify: {

                    title:
                        "Partially Correct: Verification Required",

                    text:
                        "Verification is a good first step, but the combination of impersonation indicators should be escalated to security before any action is taken."
                },


                approve: {

                    title:
                        "Incorrect: Request Should Not Be Approved",

                    text:
                        "The request should not be approved because financial actions from executives require independent verification."
                },


                reject: {

                    title:
                        "Incorrect: Rejection Without Investigation",

                    text:
                        "The request should not be immediately rejected without documenting the incident and notifying the appropriate security team."
                }

            }

        }

    },



    case002: {

        number: "CASE 002",

        difficulty: "Advanced",

        title: "Vendor Payment Fraud",

        description:
            "A supplier contacts the company requesting updated payment information before an upcoming invoice deadline. The analyst must determine whether the change is legitimate.",


        email: {

            sender:
                "accounts@supplier-company.com",

            subject:
                "Invoice Payment Update",

            body:
                `Hello Jordan,

We are updating our payment records for upcoming invoices.

Please review the attached banking information and confirm once the update has been completed.

Thank you,
Vendor Accounts`

        },


        evidence: {

            vendorRecords: {

                title:
                    "Review Vendor Records",

                finding:
                    "The requested payment information does not match previously approved vendor account records."

            },


            invoiceReview: {

                title:
                    "Compare Invoice Information",

                finding:
                    "The invoice appears legitimate, but the payment destination has changed unexpectedly."

            },


            paymentWorkflow: {

                title:
                    "Review Payment Workflow",

                finding:
                    "Payment information changes require confirmation through a trusted channel instead of email alone."

            }

        },


        decision:
            "Request Verification",

        intelligence: {

            category:
                "Business Email Compromise",

            technique:
                "Vendor Impersonation / Payment Redirection",

            indicators: [
                "Unexpected vendor banking change",
                "Payment information differs from previous records",
                "Request sent through email without verification"
            ],

            impact:
                "Risk of fraudulent payment to unauthorized account",

            response:
                "Request independent vendor verification"

        },

        assessment: {

            correct: "verify",

            results: {

                escalate: {

                    title:
                        "Correct: Escalate for Review",

                    text:
                        "The payment change requires security review because vendor banking information changed unexpectedly."
                },


                verify: {

                    title:
                        "Correct: Request Verification",

                    text:
                        "Correct. Payment information changes should be independently verified with the vendor before updating records."
                },


                approve: {

                    title:
                        "Incorrect: Payment Change Not Verified",

                    text:
                        "The payment update should not be approved because the new banking information has not been verified."
                },


                reject: {

                    title:
                        "Incorrect: Do Not Immediately Reject",

                    text:
                        "The request may be legitimate, but it requires verification before rejecting or approving the change."
                }

            }

        }

    },

    case003: {

        number: "CASE 003",

        difficulty: "Advanced",

        title: "Compromised Account",

        description:
            "A familiar employee sends an unusual request from what appears to be their legitimate company account. The analyst must determine whether the account has been compromised.",


        email: {

            sender:
                "jordan.mitchell@company.com",

            subject:
                "Quick Assistance Needed",

            body:
                `Hi Sarah,

I am currently having trouble accessing a few company resources and need your assistance with an urgent matter.

Could you help me purchase several digital items for an upcoming team event? I will reimburse the expense once access is restored.

Please let me know once this has been completed.

Thanks,
Jordan`

        },


        evidence: {

            accountActivity: {

                title:
                    "Review Account Activity",

                finding:
                    "The account appears legitimate, but recent activity shows unusual login behavior that does not match the employee's normal access patterns."

            },


            communicationHistory: {

                title:
                    "Review Communication History",

                finding:
                    "The request does not match the employee's typical communication style or previous workplace interactions."

            },


            requestReview: {

                title:
                    "Analyze Request Details",

                finding:
                    "The employee is requesting an unusual purchase and attempting to move the process outside normal business procedures."

            }

        },


        decision:
            "Escalate to Security",

        intelligence: {

            category:
                "Account Compromise",

            technique:
                "Compromised Internal Account Abuse",

            indicators: [
                "Unusual login activity",
                "Request does not match employee behavior",
                "Attempt to bypass normal purchasing procedures"
            ],

            impact:
                "Potential unauthorized access and internal fraud",

            response:
                "Escalate to Security Team"

        },

        assessment: {

            correct: "escalate",

            results: {

                escalate: {

                    title:
                        "Correct: Escalate to Security",

                    text:
                        "The account appears compromised. Unusual activity and abnormal requests require security investigation."
                },


                verify: {

                    title:
                        "Partial Response: Verification Needed",

                    text:
                        "Verification helps confirm the user's identity, but the suspicious activity should also be reported."
                },


                approve: {

                    title:
                        "Incorrect: Do Not Approve",

                    text:
                        "The request should not proceed because the account behavior does not match normal activity."
                },


                reject: {

                    title:
                        "Incorrect: Rejection Alone Is Not Enough",

                    text:
                        "The incident should be investigated rather than simply rejected."
                }

            }

        }

    },



    case004: {

        number: "CASE 004",

        difficulty: "Moderate",

        title: "Payroll Redirect Scam",

        description:
            "An employee receives a message claiming to be from HR requesting updated payroll information. The analyst must determine whether the request follows approved procedures.",


        email: {

            sender:
                "hr-services@company-payroll.com",

            subject:
                "Payroll Information Confirmation",

            body:
                `Hello,

As part of our annual payroll system update, employees are required to confirm their direct deposit information.

Please reply with your updated banking details so we can ensure your next payment is processed correctly.

If you have already completed this process, no further action is required.

Thank you,
Human Resources`

        },


        evidence: {

            senderReview: {

                title:
                    "Review Sender Information",

                finding:
                    "The sender address resembles an HR-related account but is not an officially approved company domain."

            },


            payrollProcess: {

                title:
                    "Review Payroll Procedures",

                finding:
                    "The organization normally handles payroll changes through a secure employee portal instead of email communication."

            },


            informationRequest: {

                title:
                    "Analyze Requested Information",

                finding:
                    "The request asks for sensitive payroll details through an insecure method and requires additional verification."

            }

        },


        decision:
            "Escalate to Security",

        intelligence: {

            category:
                "Business Email Compromise",

            technique:
                "Payroll Redirection Fraud",

            indicators: [
                "Fake HR-related sender domain",
                "Request for sensitive payroll information",
                "Payroll change outside approved system"
            ],

            impact:
                "Potential employee financial data exposure",

            response:
                "Escalate to Security Team"

        },

        assessment: {

            correct: "escalate",

            results: {

                escalate: {

                    title:
                        "Correct: Escalate to Security",

                    text:
                        "Payroll information requests through email should be investigated because they involve sensitive employee data."
                },


                verify: {

                    title:
                        "Partially Correct: Verification Required",

                    text:
                        "Verification is important, but requests involving payroll information should also be escalated."
                },


                approve: {

                    title:
                        "Incorrect: Sensitive Data Request",

                    text:
                        "Payroll information should never be approved through an unverified email request."
                },


                reject: {

                    title:
                        "Incomplete Response",

                    text:
                        "The request should be documented and reviewed instead of only being rejected."
                }

            }

        }

    },

    case005: {

        number: "CASE 005",

        difficulty: "Expert",

        title: "Fake Legal Request",

        description:
            "A message appears to come from the legal department requesting access to confidential company information. The analyst must verify whether the request follows proper legal procedures.",


        email: {

            sender:
                "legal.operations@company.com",

            subject:
                "Confidential Documentation Review",

            body:
                `Hello Daniel,

Following our recent discussion regarding compliance documentation, the legal team requires access to several internal files before the upcoming review.

Please gather the requested documents and send them directly through this email thread.

Due to the sensitive nature of this matter, please avoid discussing the request with other departments until the review has been completed.

Thank you,
Legal Operations`

        },


        evidence: {

            identityReview: {

                title:
                    "Review Sender Records",

                finding:
                    "The sender address appears legitimate, but internal accounts can be compromised. Identity must be verified through official channels."

            },


            processReview: {

                title:
                    "Review Legal Procedures",

                finding:
                    "The request attempts to bypass normal legal approval workflows by discouraging communication with other departments."

            },


            documentReview: {

                title:
                    "Analyze Requested Documents",

                finding:
                    "The requested files contain sensitive information that requires authorization before being shared."

            }

        },


        decision:
            "Escalate to Security",

        intelligence: {

            category:
                "Social Engineering",

            technique:
                "Authority Impersonation",

            indicators: [
                "Request for confidential documents",
                "Attempts to prevent normal communication",
                "Sensitive information request without verification"
            ],

            impact:
                "Potential unauthorized disclosure of company information",

            response:
                "Escalate to Security Team"

        },

        assessment: {

            correct: "escalate",

            results: {

                escalate: {

                    title:
                        "Correct: Escalate to Security",

                    text:
                        "The request attempts to bypass normal legal procedures and access sensitive documents without proper authorization."
                },


                verify: {

                    title:
                        "Partially Correct: Verification Needed",

                    text:
                        "Identity verification is useful, but the sensitive nature of the request requires security involvement."
                },


                approve: {

                    title:
                        "Incorrect: Do Not Release Documents",

                    text:
                        "Confidential documents should not be provided until the request is verified through official procedures."
                },


                reject: {

                    title:
                        "Incomplete Response",

                    text:
                        "The request should be investigated and documented instead of simply rejected."
                }

            }

        }

    },



    case006: {

        number: "CASE 006",

        difficulty: "Expert",

        title: "Executive Travel Emergency",

        description:
            "A senior executive requests assistance with a time-sensitive business matter during international travel. The analyst must determine whether the request follows normal company procedures.",


        email: {

            sender:
                "amelia.hart@company.com",

            subject:
                "Re: Q3 Vendor Contract Update",

            body:
                `Hi Jordan,

Following up regarding the Orion contract renewal discussed earlier this week.

I have reviewed the updated terms and would like the remaining documentation prepared before tomorrow's finance review.

Please coordinate with procurement and confirm once the updated payment details have been included in the final submission.

Thanks,
Amelia`

        },


        evidence: {

            senderReview: {

                title:
                    "Review Executive Information",

                finding:
                    "The sender address matches the organization domain. However, legitimate accounts can be compromised and still send fraudulent requests."

            },


            workflowReview: {

                title:
                    "Review Approval Workflow",

                finding:
                    "The request bypasses normal procurement approval procedures by requesting changes outside the standard process."

            },


            communicationReview: {

                title:
                    "Review Previous Communication",

                finding:
                    "The request uses information from previous conversations to appear credible, but the requested action requires additional verification."

            }

        },


        decision:
            "Escalate to Security",

        intelligence: {

            category:
                "Business Email Compromise",

            technique:
                "Executive Account Manipulation",

            indicators: [
                "Unusual procurement request",
                "Process deviation from normal workflow",
                "Request requires independent confirmation"
            ],

            impact:
                "Potential unauthorized business transaction",

            response:
                "Request verification through trusted communication channel"

        },

        assessment: {

            correct: "escalate",

            results: {

                verify: {

                    title:
                        "Correct: Request Verification",

                    text:
                        "Correct. The sender appears legitimate, but unusual procurement actions require confirmation through trusted channels."
                },


                escalate: {

                    title:
                        "Acceptable: Escalate for Review",

                    text:
                        "Escalation is reasonable because executive accounts can be compromised, but verification should be attempted first."
                },


                approve: {

                    title:
                        "Incorrect: Do Not Approve Immediately",

                    text:
                        "The request bypasses normal approval procedures and requires confirmation."
                },


                reject: {

                    title:
                        "Incorrect: Request Requires Investigation",

                    text:
                        "The request may be legitimate, so rejecting it without verification is premature."
                }

            }

        }

    }

};

const caseButtons = document.querySelectorAll(".case-button");


caseButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCase = cases[button.dataset.case];
        currentCase = selectedCase;
        loadIntelligence(selectedCase);


        document.querySelector(".case-overview .case-number").textContent =
            selectedCase.number;


        document.querySelector(".case-overview h3").textContent =
            selectedCase.title;


        document.querySelector(".case-overview p").textContent =
            selectedCase.description;



        const emailFields =
            document.querySelectorAll(".email-header strong");


        emailFields[0].textContent =
            selectedCase.email.sender;


        emailFields[1].textContent =
            selectedCase.email.subject;



        document.querySelector(".email-body").innerHTML =
            selectedCase.email.body.replace(/\n/g, "<br>");



        loadEvidence(selectedCase);



        document.querySelector(".investigation-section").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });



        document.querySelector(".assessment-result h3").textContent =
            "Awaiting Assessment";


        document.querySelector(".assessment-result p").textContent =
            "Review the evidence before making a decision.";

    });

});



function loadEvidence(selectedCase) {

    const container =
        document.querySelector(".evidence-buttons");


    const findingTitle =
        document.querySelector(".finding-panel h4");


    const findingText =
        document.querySelector(".finding-panel p");


    container.innerHTML = "";


    findingTitle.textContent =
        "Select evidence to analyze";


    findingText.textContent =
        "Review available evidence before making an assessment.";



    Object.keys(selectedCase.evidence).forEach(key => {


        const evidenceButton =
            document.createElement("button");


        evidenceButton.className =
            "analysis-button";


        evidenceButton.textContent =
            selectedCase.evidence[key].title;



        evidenceButton.addEventListener("click", () => {


            findingTitle.textContent =
                selectedCase.evidence[key].title;


            findingText.textContent =
                selectedCase.evidence[key].finding;

        });



        container.appendChild(evidenceButton);


    });

}



const assessmentButtons = document.querySelectorAll(".assessment-button");

console.log("Assessment buttons:", assessmentButtons);

const resultTitle = document.querySelector(".assessment-result h3");
const resultText = document.querySelector(".assessment-result p");


assessmentButtons.forEach(button => {

    button.addEventListener("click", () => {

        const result = button.dataset.result;


        if (!currentCase) {

            resultTitle.textContent =
                "No Case Selected";

            resultText.textContent =
                "Select a case before making an assessment.";

            return;

        }


        resultTitle.textContent =
            currentCase.assessment.results[result].title;


        resultText.textContent =
            currentCase.assessment.results[result].text;



    });

});

const reportCase =
    document.querySelector("#report-case");

const reportDecision =
    document.querySelector("#report-decision");

const reportStatus =
    document.querySelector("#report-status");

const reportMessage =
    document.querySelector("#report-message");


assessmentButtons.forEach(button => {

    button.addEventListener("click", () => {


        if (!currentCase) {
            return;
        }


        const result =
            button.dataset.result;


        const assessment =
            currentCase.assessment.results[result];


        reportCase.textContent =
            currentCase.number;


        reportDecision.textContent =
            assessment.title;


        if (result === currentCase.assessment.correct) {

            reportStatus.textContent =
                "Decision Aligns With Security Findings";


            reportMessage.textContent =
                "The analyst response matches the recommended security action based on the available evidence.";

        }

        else {

            reportStatus.textContent =
                "Additional Review Recommended";


            reportMessage.textContent =
                "The selected response does not fully match the investigation findings. Review the evidence and escalation procedures.";

        }


    });

});

function loadIntelligence(selectedCase) {

    threatCategory.textContent =
        selectedCase.intelligence.category;


    attackTechnique.textContent =
        selectedCase.intelligence.technique;


    businessImpact.textContent =
        selectedCase.intelligence.impact;


    recommendedResponse.textContent =
        selectedCase.intelligence.response;


    riskIndicators.innerHTML = "";


    selectedCase.intelligence.indicators.forEach(indicator => {

        const li =
            document.createElement("li");


        li.textContent =
            indicator;


        riskIndicators.appendChild(li);

    });

}