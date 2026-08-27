/* Static reference data — the 8 priorities / 67 actions from the
   30-Day Strategic Plan (Learning Journey Management, 1-30 Sept 2026).
   This is fixed planning content, not something derived from a
   spreadsheet upload — % complete / status below start at their
   real Sept-2026 baseline (not yet started) and RAG / days-remaining
   are computed live against today by js/parseSeptember.js. */

const SEPTEMBER_ACTIONS = [
  {
    "id": "A01",
    "priority": "1. Training Delivery",
    "action": "Review all active project training schedules",
    "deliverable": "Consolidated delivery view",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-03",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A02",
    "priority": "1. Training Delivery",
    "action": "Compare planned vs actual training delivery",
    "deliverable": "Delivery variance report",
    "startDate": "2026-09-03",
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A03",
    "priority": "1. Training Delivery",
    "action": "Identify missed, delayed or at-risk sessions",
    "deliverable": "Delivery risk register",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A04",
    "priority": "1. Training Delivery",
    "action": "Monitor attendance and learner participation",
    "deliverable": "Attendance exceptions",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A05",
    "priority": "1. Training Delivery",
    "action": "Review learner progression against programme milestones",
    "deliverable": "Learner progression dashboard",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A06",
    "priority": "1. Training Delivery",
    "action": "Escalate material delivery risks",
    "deliverable": "Corrective action",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-30",
    "cadence": "Within 24 hours",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A07",
    "priority": "1. Training Delivery",
    "action": "Review September delivery performance",
    "deliverable": "Monthly delivery assessment",
    "startDate": "2026-09-28",
    "dueDate": "2026-09-30",
    "cadence": "Month-end",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A08",
    "priority": "2. Project Monitoring",
    "action": "Establish September project baseline",
    "deliverable": "Project baseline",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A09",
    "priority": "2. Project Monitoring",
    "action": "Implement project health dashboard",
    "deliverable": "Project health dashboard",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A10",
    "priority": "2. Project Monitoring",
    "action": "Complete weekly project status review",
    "deliverable": "Weekly project status",
    "startDate": "2026-09-04",
    "dueDate": "2026-09-30",
    "cadence": "Every Friday",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A11",
    "priority": "2. Project Monitoring",
    "action": "Identify top 5 project risks",
    "deliverable": "Top 5 risk view",
    "startDate": "2026-09-04",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A12",
    "priority": "2. Project Monitoring",
    "action": "Track corrective actions",
    "deliverable": "Corrective action log",
    "startDate": "2026-09-04",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A13",
    "priority": "2. Project Monitoring",
    "action": "Escalate RED projects",
    "deliverable": "Escalation record",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-30",
    "cadence": "Within 24 hours",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A14",
    "priority": "2. Project Monitoring",
    "action": "Complete September project evaluation",
    "deliverable": "Monthly project evaluation",
    "startDate": "2026-09-28",
    "dueDate": "2026-09-30",
    "cadence": "Month-end",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A15",
    "priority": "3. Learner Progression",
    "action": "Establish weekly learner-risk reporting",
    "deliverable": "Learner-risk report",
    "startDate": "2026-09-02",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A16",
    "priority": "3. Learner Progression",
    "action": "Identify learners with repeated absenteeism",
    "deliverable": "Absenteeism exception list",
    "startDate": "2026-09-02",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A17",
    "priority": "3. Learner Progression",
    "action": "Monitor late or outstanding submissions",
    "deliverable": "Submission backlog",
    "startDate": "2026-09-02",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A18",
    "priority": "3. Learner Progression",
    "action": "Track assessment backlogs",
    "deliverable": "Assessment backlog",
    "startDate": "2026-09-02",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A19",
    "priority": "3. Learner Progression",
    "action": "Identify learners requiring remediation",
    "deliverable": "Remediation list",
    "startDate": "2026-09-02",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A20",
    "priority": "3. Learner Progression",
    "action": "Monitor workplace integration risks",
    "deliverable": "Workplace learner risks",
    "startDate": "2026-09-02",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A21",
    "priority": "3. Learner Progression",
    "action": "Assign an owner to every RED learner intervention",
    "deliverable": "Owned intervention plan",
    "startDate": "2026-09-02",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A22",
    "priority": "3. Learner Progression",
    "action": "Track intervention effectiveness",
    "deliverable": "Intervention impact view",
    "startDate": "2026-09-02",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A23",
    "priority": "4. Stipends",
    "action": "Reconcile active learner master data",
    "deliverable": "Reconciled learner master",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-04",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A24",
    "priority": "4. Stipends",
    "action": "Identify stipend exceptions",
    "deliverable": "Stipend exception register",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-05",
    "cadence": "First week",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A25",
    "priority": "4. Stipends",
    "action": "Reconcile attendance against stipend eligibility",
    "deliverable": "Eligibility reconciliation",
    "startDate": "2026-09-04",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A26",
    "priority": "4. Stipends",
    "action": "Track withdrawals, transfers and terminations",
    "deliverable": "Learner status changes",
    "startDate": "2026-09-04",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A27",
    "priority": "4. Stipends",
    "action": "Escalate unresolved exceptions",
    "deliverable": "Escalation record",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-30",
    "cadence": "Within 24 hours",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A28",
    "priority": "4. Stipends",
    "action": "Complete pre-payroll verification",
    "deliverable": "Pre-payroll verification",
    "startDate": "2026-09-14",
    "dueDate": "2026-09-25",
    "cadence": "Payroll cut-off",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A29",
    "priority": "4. Stipends",
    "action": "Review recurring stipend issues",
    "deliverable": "Recurring issue analysis",
    "startDate": "2026-09-28",
    "dueDate": "2026-09-30",
    "cadence": "Month-end",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A30",
    "priority": "5. Facilitators",
    "action": "Confirm Facilitator allocation by project",
    "deliverable": "Confirmed facilitator allocation",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-04",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A31",
    "priority": "5. Facilitators",
    "action": "Communicate performance expectations and KPIs",
    "deliverable": "Communicated KPI standard",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-07",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A32",
    "priority": "5. Facilitators",
    "action": "Implement Facilitator performance scorecard",
    "deliverable": "Facilitator scorecard",
    "startDate": "2026-09-07",
    "dueDate": "2026-09-11",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A33",
    "priority": "5. Facilitators",
    "action": "Monitor delivery and learner feedback",
    "deliverable": "Weekly performance evidence",
    "startDate": "2026-09-11",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A34",
    "priority": "5. Facilitators",
    "action": "Identify performance gaps",
    "deliverable": "Performance gap log",
    "startDate": "2026-09-11",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A35",
    "priority": "5. Facilitators",
    "action": "Conduct targeted performance discussions",
    "deliverable": "Discussion records",
    "startDate": "2026-09-21",
    "dueDate": "2026-09-25",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A36",
    "priority": "5. Facilitators",
    "action": "Complete September performance review",
    "deliverable": "Monthly facilitator ratings",
    "startDate": "2026-09-28",
    "dueDate": "2026-09-30",
    "cadence": "Month-end",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A37",
    "priority": "6. Workplace Coordinators",
    "action": "Confirm coordinator portfolios",
    "deliverable": "Confirmed portfolios",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-04",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A38",
    "priority": "6. Workplace Coordinators",
    "action": "Establish individual KPIs",
    "deliverable": "Coordinator KPI standard",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-07",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A39",
    "priority": "6. Workplace Coordinators",
    "action": "Review current workplace portfolio",
    "deliverable": "Portfolio review",
    "startDate": "2026-09-07",
    "dueDate": "2026-09-11",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A40",
    "priority": "6. Workplace Coordinators",
    "action": "Implement Coordinator scorecard",
    "deliverable": "Coordinator scorecard",
    "startDate": "2026-09-07",
    "dueDate": "2026-09-11",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A41",
    "priority": "6. Workplace Coordinators",
    "action": "Conduct weekly workplace performance review",
    "deliverable": "Weekly performance review",
    "startDate": "2026-09-11",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A42",
    "priority": "6. Workplace Coordinators",
    "action": "Identify host and learner risks",
    "deliverable": "Host/learner risk log",
    "startDate": "2026-09-11",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A43",
    "priority": "6. Workplace Coordinators",
    "action": "Conduct individual performance discussions",
    "deliverable": "Discussion records",
    "startDate": "2026-09-21",
    "dueDate": "2026-09-25",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A44",
    "priority": "6. Workplace Coordinators",
    "action": "Complete monthly performance assessment",
    "deliverable": "Monthly coordinator ratings",
    "startDate": "2026-09-28",
    "dueDate": "2026-09-30",
    "cadence": "Month-end",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A45",
    "priority": "7. Surveys",
    "action": "Consolidate all outstanding survey responses",
    "deliverable": "Consolidated responses",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A46",
    "priority": "7. Surveys",
    "action": "Establish survey response dashboard",
    "deliverable": "Survey response dashboard",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A47",
    "priority": "7. Surveys",
    "action": "Analyse recurring themes",
    "deliverable": "Theme analysis",
    "startDate": "2026-09-07",
    "dueDate": "2026-09-11",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A48",
    "priority": "7. Surveys",
    "action": "Identify top performance gaps",
    "deliverable": "Top performance gaps",
    "startDate": "2026-09-07",
    "dueDate": "2026-09-12",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A49",
    "priority": "7. Surveys",
    "action": "Assign corrective actions",
    "deliverable": "Owned corrective actions",
    "startDate": "2026-09-14",
    "dueDate": "2026-09-18",
    "cadence": "Once",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A50",
    "priority": "7. Surveys",
    "action": "Track action implementation",
    "deliverable": "Survey action tracker",
    "startDate": "2026-09-18",
    "dueDate": "2026-09-30",
    "cadence": "Weekly",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A51",
    "priority": "7. Surveys",
    "action": "Measure whether gaps are improving",
    "deliverable": "Survey improvement report",
    "startDate": "2026-09-28",
    "dueDate": "2026-09-30",
    "cadence": "Month-end",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A52",
    "priority": "8. Workplace Strategy",
    "action": "Review and consolidate strategy inputs",
    "deliverable": "Consolidated strategy inputs",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-18",
    "cadence": "Milestone",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A53",
    "priority": "8. Workplace Strategy",
    "action": "Complete final management review",
    "deliverable": "Reviewed Workplace Strategy",
    "startDate": "2026-09-21",
    "dueDate": "2026-09-23",
    "cadence": "Milestone",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A54",
    "priority": "8. Workplace Strategy",
    "action": "Finalise Workplace Strategy",
    "deliverable": "Final Workplace Strategy",
    "startDate": "2026-09-24",
    "dueDate": "2026-09-25",
    "cadence": "Milestone",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A55",
    "priority": "8. Workplace Strategy",
    "action": "Secure approval and implementation readiness",
    "deliverable": "Approved strategy and readiness plan",
    "startDate": "2026-09-25",
    "dueDate": "2026-09-30",
    "cadence": "Milestone",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A56",
    "priority": "8. Workplace Strategy",
    "action": "Finalise Workplace Placement Register",
    "deliverable": "Standard template",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-11",
    "cadence": "Template",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A57",
    "priority": "8. Workplace Strategy",
    "action": "Finalise Host Organisation Register",
    "deliverable": "Standard template",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-11",
    "cadence": "Template",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A58",
    "priority": "8. Workplace Strategy",
    "action": "Finalise Workplace Coordinator Dashboard",
    "deliverable": "Standard template",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-11",
    "cadence": "Template",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A59",
    "priority": "8. Workplace Strategy",
    "action": "Finalise Learner Workplace Attendance Tracker",
    "deliverable": "Standard template",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-11",
    "cadence": "Template",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A60",
    "priority": "8. Workplace Strategy",
    "action": "Finalise Workplace Supervisor Engagement Record",
    "deliverable": "Standard template",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-18",
    "cadence": "Template",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A61",
    "priority": "8. Workplace Strategy",
    "action": "Finalise Workplace Visit/Check-in Template",
    "deliverable": "Standard template",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-18",
    "cadence": "Template",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A62",
    "priority": "8. Workplace Strategy",
    "action": "Finalise Learner Workplace Progress Report",
    "deliverable": "Standard template",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-18",
    "cadence": "Template",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A63",
    "priority": "8. Workplace Strategy",
    "action": "Finalise Workplace Risk & Escalation Register",
    "deliverable": "Standard template",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-18",
    "cadence": "Template",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A64",
    "priority": "8. Workplace Strategy",
    "action": "Finalise Workplace Issue Resolution Tracker",
    "deliverable": "Standard template",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-18",
    "cadence": "Template",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A65",
    "priority": "8. Workplace Strategy",
    "action": "Finalise Host Feedback Survey",
    "deliverable": "Standard template",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-18",
    "cadence": "Template",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A66",
    "priority": "8. Workplace Strategy",
    "action": "Finalise Workplace Completion Checklist",
    "deliverable": "Standard template",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-18",
    "cadence": "Template",
    "owner": "Christopher Manjengwa"
  },
  {
    "id": "A67",
    "priority": "8. Workplace Strategy",
    "action": "Finalise Monthly Workplace Coordination Report",
    "deliverable": "Standard template",
    "startDate": "2026-09-01",
    "dueDate": "2026-09-18",
    "cadence": "Template",
    "owner": "Christopher Manjengwa"
  }
];
