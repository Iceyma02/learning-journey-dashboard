/* ==========================================================================
   Static content extracted from the 30-Day Strategic Plan.
   Source: "30_PLan_Reviewed.docx" — Learnership Training Delivery,
   Academic Performance & Campus Operations (reviewed version, replaces
   the earlier Learning Journey Management draft).
   This is fixed presentation content — not derived from any upload.
   ========================================================================== */

const PLAN_META = {
  title: '30-Day Strategic Plan',
  subtitle: 'Learnership Training Delivery, Academic Performance & Campus Operations',
  period: '1 – 30 September 2026',
  role: 'Learning Journey Manager / Campus Manager',
  scope: 'All Active Learnership Training Projects',
};

const PLAN_PURPOSE = {
  paragraphs: [
    'The purpose of this 30-day strategic plan is to strengthen the full learnership training delivery value chain by establishing tighter controls over academic delivery, learner progression, facilitator performance, campus readiness, workplace integration, stipends, project performance and continuous improvement.',
  ],
  ensureList: [
    'Properly planned and scheduled', 'Academically ready for delivery', 'Operationally and logistically prepared',
    'Properly resourced', 'Delivered according to the approved curriculum and schedule', 'Continuously monitored',
    'Supported through early intervention', 'Supported by effective facilitators and workplace coordinators',
    'Measured through learner and stakeholder feedback', 'Standardised through repeatable processes, templates and controls',
  ],
  ensureIntro: 'The plan is designed to ensure that every active learnership project is:',
};

const PLAN_OBJECTIVES = [
  'Establish a single view of all active learnership projects and their delivery status.',
  'Ensure curriculum, learning materials and assessments are ready before scheduled delivery.',
  'Establish a campus readiness control system for every training session.',
  'Strengthen project monitoring, risk identification and escalation.',
  'Identify and intervene with learners who are academically, behaviourally or operationally at risk.',
  'Strengthen stipend data accuracy, exception management and accountability.',
  'Introduce structured facilitator performance monitoring.',
  'Introduce structured Workplace Coordinator performance monitoring.',
  'Convert learner feedback into measurable corrective actions.',
  'Finalise and standardise the workplace strategy and supporting templates.',
];

const PLAN_ROADMAP = [
  {
    period: 'Days 1–5', theme: 'Diagnose & Establish Control', focus: '"Know where we are."',
    actions: [
      'Consolidate all active projects', 'Establish master project tracker', 'Assess academic progress',
      'Review training schedules', 'Identify upcoming training sessions', 'Conduct campus readiness assessment',
      'Review facilitator allocation', 'Review Workplace Coordinator allocation', 'Identify at-risk learners',
      'Review stipend exceptions', 'Review outstanding assessments', 'Identify Red/Amber projects', 'Establish baseline KPIs',
    ],
    deliverables: ['Master Project Dashboard', 'Academic Status Report', 'Campus Readiness Report', 'Facilitator Allocation Matrix', 'Learner At-Risk Register', 'Stipend Exception Register', 'Project Risk Register'],
  },
  {
    period: 'Days 6–10', theme: 'Plan & Close Immediate Gaps', focus: '"Fix what is preventing effective delivery."',
    actions: [
      'Close urgent curriculum gaps', 'Confirm learning materials', 'Confirm assessment plans', 'Confirm venue bookings',
      'Confirm classroom resources', 'Resolve LMS access issues', 'Confirm facilitator readiness',
      'Address learner attendance concerns', 'Address urgent stipend exceptions', 'Review workplace placement gaps',
    ],
    deliverables: ['Academic Readiness Checklist', 'Campus Readiness Checklist', 'Assessment Calendar', 'Learner Intervention Register', 'Stipend Exception Action Plan', 'Workplace Placement Gap Report'],
  },
  {
    period: 'Days 11–15', theme: 'Implement & Monitor', focus: '"Strengthen execution."',
    actions: [
      'Monitor live training sessions', 'Conduct facilitator observations', 'Review curriculum coverage',
      'Monitor learner attendance', 'Track assessments', 'Conduct learner check-ins', 'Monitor workplace integration',
      'Review Workplace Coordinator performance', 'Analyse survey results', 'Implement corrective actions',
    ],
    deliverables: ['Facilitator Observation Reports', 'Learner Progress Report', 'Assessment Progress Dashboard', 'Workplace Progress Report', 'Survey Analysis Report'],
  },
  {
    period: 'Days 16–20', theme: 'Intervene & Improve', focus: '"Close performance gaps."',
    actions: [
      'Conduct formal reviews of Red/Amber projects', 'Implement academic recovery plans', 'Conduct remedial learner interventions',
      'Address poor facilitator performance', 'Address Workplace Coordinator performance gaps',
      'Resolve outstanding campus/logistical issues', 'Follow up stipend exceptions', 'Conduct root-cause analysis on recurring problems',
    ],
    deliverables: ['Recovery Plans', 'Academic Intervention Report', 'Facilitator Improvement Plans', 'Workplace Coordinator Improvement Plans', 'Corrective Action Register'],
  },
  {
    period: 'Days 21–25', theme: 'Standardise', focus: '"Build repeatable systems."',
    actions: [
      'Finalise standard operating procedures', 'Finalise academic readiness checklist', 'Finalise campus readiness checklist',
      'Finalise facilitator scorecard', 'Finalise Workplace Coordinator scorecard', 'Finalise workplace templates',
      'Standardise project reporting', 'Standardise survey analysis', 'Standardise learner intervention process',
    ],
    deliverables: ['Academic SOP', 'Campus Readiness SOP', 'Facilitator Scorecard', 'Workplace Coordinator Scorecard', 'Workplace Toolkit', 'Learner Intervention Framework'],
  },
  {
    period: 'Days 26–30', theme: 'Review, Report & Embed', focus: '"Measure impact and prepare for the next cycle."',
    actions: [
      'Conduct full 30-day performance review', 'Compare baseline against actual performance', 'Review all Red/Amber projects',
      'Review learner progression', 'Review facilitator performance', 'Review workplace performance', 'Review stipend performance',
      'Review survey trends', 'Confirm outstanding corrective actions', 'Present management dashboard', 'Develop October action plan',
    ],
    deliverables: [
      '30-Day Academic & Operations Performance Report', 'Executive Project Dashboard', 'Learner Progression Dashboard',
      'Facilitator Performance Dashboard', 'Workplace Coordinator Dashboard', 'Stipend Exception Report',
      'Survey & Gap Closure Report', 'Workplace Strategy & Toolkit', 'Risk & Corrective Action Register', 'October 30-Day Action Plan',
    ],
  },
];

const PLAN_PRIORITIES = [
  {
    n: 1, title: 'Learnership Training Delivery Management',
    objective: 'Establish effective end-to-end control over all active learnership training delivery.',
    activities: [
      { label: 'Days 1–5', items: [
        'Develop a master register of all active learnership projects, capturing project number, client, qualification, NQF level, number of learners, start/end dates, training schedule, facilitator, Workplace Coordinator, workplace placement status, current academic phase, assessment status and overall project status.',
        'Identify projects that are on track, delayed or at risk.',
      ]},
      { label: 'Days 6–15', items: [
        'Compare planned training days against actual training days.',
        'Identify missed, postponed or incomplete sessions.',
        'Establish recovery plans for delayed projects.',
        'Verify that attendance, curriculum coverage and session records are captured.',
      ]},
      { label: 'Days 16–25', items: ['Conduct weekly delivery reviews with relevant coordinators.', 'Track recovery plans.', 'Escalate projects with material delays.'] },
      { label: 'Days 26–30', items: ['Produce a consolidated monthly delivery report.', 'Establish the September baseline for October monitoring.'] },
    ],
    kpis: ['≥95% scheduled sessions delivered.', '100% active projects reflected on master tracker.', '100% delayed projects have documented recovery plans.', '100% training sessions have attendance and delivery evidence.'],
  },
  {
    n: 2, title: 'Academic Planning, Curriculum Alignment & Assessment Readiness',
    objective: 'Ensure that training is academically ready, curriculum-aligned and assessment-driven.',
    activities: [{ label: 'Key Activities', items: [
      'Map each active project against the approved curriculum.',
      'Confirm modules/topics already completed and identify outstanding curriculum areas.',
      'Review facilitator lesson plans and preparation.',
      'Confirm learning material availability and that assessment instruments are available before delivery.',
      'Establish an assessment calendar for each project.',
      'Track assessments: Planned, Conducted, Marked, Moderated, Competent, Not Yet Competent, Re-assessment required.',
      'Identify academic gaps requiring remedial intervention and conduct academic quality checks.',
    ]}],
    flow: { label: 'Key Control — no training session should commence without confirming', chain: ['Curriculum', 'Facilitator', 'Material', 'Venue', 'Learners', 'Assessment', 'Evidence'] },
    kpis: ['100% curriculum mapping completed.', '100% upcoming sessions academically prepared.', '≥95% assessments completed according to schedule.', '100% identified academic gaps have intervention plans.', 'Assessment turnaround monitored weekly.'],
  },
  {
    n: 3, title: 'Campus Readiness, Venue Preparedness & Training Logistics',
    objective: 'Ensure that the campus is operationally ready before every training session.',
    checklist: {
      intro: 'Develop a Pre-Session Campus Readiness Checklist covering:',
      groups: [
        { label: 'Venue', items: ['Room allocated', 'Room capacity', 'Seating arrangement', 'Cleanliness', 'Lighting', 'Ventilation', 'Accessibility', 'Safety requirements'] },
        { label: 'Equipment', items: ['Computers/laptops', 'Projectors/screens', 'Internet', 'Power', 'Printers', 'Extension leads', 'Audio/visual equipment'] },
        { label: 'Learner Access', items: ['LMS access', 'Training material access', 'User credentials', 'Communication of venue and timetable', 'Transport/logistical considerations'] },
        { label: 'Administration', items: ['Attendance register', 'Session register', 'Assessment documentation', 'Learner files', 'Sign-in controls'] },
      ],
    },
    activities: [
      { label: 'Days 1–10', items: ['Create and implement the checklist.'] },
      { label: 'Days 11–20', items: ['Test the checklist across active projects.'] },
      { label: 'Days 21–30', items: ['Standardise and implement as a mandatory pre-session control.'] },
    ],
    kpis: ['100% of scheduled sessions confirmed "campus ready" before commencement.'],
  },
  {
    n: 4, title: 'Project Monitoring, Evaluation & Risk Management',
    objective: 'Create proactive visibility of project performance and risks.',
    healthDashboard: {
      intro: 'Develop a Project Health Dashboard using:',
      legend: [['Green', 'On Track'], ['Amber', 'Requires Attention'], ['Red', 'Immediate Intervention']],
    },
    track: ['Training delivery', 'Attendance', 'Curriculum progress', 'Assessment progress', 'Learner retention', 'Learner competency', 'Workplace placement', 'Workplace attendance', 'Facilitator performance', 'Workplace Coordinator performance', 'Stipends', 'Client issues', 'Compliance', 'Operational risks'],
    trackLabel: 'Track',
    weeklyReview: { label: 'Weekly Risk Review — for every Amber/Red project, identify', items: ['Risk', 'Root cause', 'Impact', 'Owner', 'Corrective action', 'Due date', 'Escalation requirement', 'Current status'] },
    kpis: ['100% Red/Amber risks assigned to an owner.', '100% critical risks escalated within agreed timelines.', 'Weekly project health review completed.'],
  },
  {
    n: 5, title: 'Learner Progression & Intervention',
    objective: 'Ensure that learner problems are identified early and addressed before they affect completion.',
    riskCategories: [
      { label: 'Academic', items: ['Poor assessment results', 'Repeated NYC', 'Missed assessments', 'Falling behind curriculum'] },
      { label: 'Attendance', items: ['Absenteeism', 'Late-coming', 'Unexplained absence', 'Repeated absence'] },
      { label: 'Behavioural', items: ['Poor conduct', 'Classroom disruption', 'Non-compliance'] },
      { label: 'Operational', items: ['LMS access', 'Transport', 'Documentation', 'Workplace placement'] },
    ],
    levels: [
      { title: 'Level 1 – Early Warning', items: ['Informal intervention', 'Coaching', 'Reminder', 'Academic support'] },
      { title: 'Level 2 – Formal Intervention', items: ['Individual meeting', 'Written intervention plan', 'Parent/guardian or relevant stakeholder engagement where applicable'] },
      { title: 'Level 3 – Escalation', items: ['Formal case management', 'Management escalation', 'Possible disciplinary/termination process in accordance with policy'] },
    ],
    kpis: ['100% at-risk learners identified.', '100% high-risk learners have intervention plans.', 'Weekly monitoring of intervention outcomes.'],
  },
  {
    n: 6, title: 'Stipend Monitoring & Control',
    objective: 'Improve the accuracy, timeliness and accountability of learner stipend administration.',
    track: ['Eligible learners', 'Attendance compliance', 'Supporting documentation', 'Stipend submission status', 'Approved learners', 'Exceptions', 'Rejected submissions', 'Missing information', 'Payment status', 'Queries', 'Outstanding payments'],
    trackLabel: 'Track',
    exceptionReport: { label: 'Introduce — Stipend Exception Report', columns: ['Exception', 'Learner Count', 'Root Cause', 'Owner', 'Due Date', 'Status'], rows: ['Missing attendance', 'Missing documentation', 'Attendance below requirement', 'Banking issue', 'Other'] },
    kpis: ['≥98% stipend submissions accurate.', '100% exceptions tracked to closure.', 'Stipend-related learner queries monitored weekly.'],
  },
  {
    n: 7, title: 'Facilitator Performance Management',
    objective: 'Establish consistent academic delivery standards and facilitator accountability.',
    track: ['Attendance/punctuality', 'Session preparation', 'Curriculum coverage', 'Learner engagement', 'Classroom management', 'Assessment administration', 'Assessment turnaround', 'LMS compliance', 'Learner feedback', 'Academic results', 'Submission of required evidence', 'Professional conduct'],
    trackLabel: 'Track Each Facilitator On',
    scorecard: {
      label: 'Monthly Facilitator Scorecard — suggested weighting',
      weights: [['Curriculum Delivery', '20%'], ['Preparation & Readiness', '15%'], ['Learner Engagement', '15%'], ['Assessment Management', '15%'], ['Learner Results', '15%'], ['LMS/Administration Compliance', '10%'], ['Learner Feedback', '10%'], ['Total', '100%']],
      categories: [['90–100%', 'Excellent'], ['80–89%', 'Strong'], ['70–79%', 'Acceptable'], ['60–69%', 'Improvement Required'], ['Below 60%', 'Critical Intervention']],
    },
    kpis: ['100% of active facilitators evaluated monthly.'],
  },
  {
    n: 8, title: 'Workplace Coordinator Performance Management',
    objective: 'Strengthen workplace coordination and ensure learners are effectively supported during workplace integration.',
    track: ['Workplace placements', 'Placement documentation', 'Employer engagement', 'Learner workplace attendance', 'Workplace visits', 'Mentor/supervisor engagement', 'Learner workplace progress', 'Logbooks/evidence', 'Workplace challenges', 'Issue resolution', 'Reporting compliance'],
    trackLabel: 'Track',
    scorecard: {
      label: 'Workplace Coordinator Scorecard',
      weights: [['Placement Management', '20%'], ['Employer Engagement', '15%'], ['Learner Support', '20%'], ['Workplace Monitoring', '15%'], ['Documentation & Compliance', '15%'], ['Issue Resolution', '10%'], ['Reporting', '5%'], ['Total', '100%']],
    },
    kpis: ['100% learners tracked for workplace placement.', '100% workplace issues recorded and managed.', 'Workplace reports submitted according to schedule.'],
  },
  {
    n: 9, title: 'Survey Tracking, Analysis & Gap Closure',
    objective: 'Move from simply collecting learner feedback to using feedback as a performance improvement mechanism.',
    track: ['Learner experience', 'Facilitator feedback', 'Training material feedback', 'Campus experience', 'Workplace experience', 'Client feedback', 'Exit/impact surveys'],
    trackLabel: 'Surveys to Track',
    analyseAgainst: ['Facilitator', 'Project', 'Module', 'Campus', 'Cohort', 'Training period'],
    flow: { label: 'Gap Closure Process', chain: ['Feedback', 'Analysis', 'Root Cause', 'Action', 'Owner', 'Deadline', 'Verification'] },
    example: 'Learners report insufficient practical activities → identify affected module → engage facilitator → introduce practical activities → monitor next survey → confirm improvement.',
    kpis: ['100% surveys analysed.', '100% material gaps assigned to owners.', '≥90% corrective actions closed within agreed timeframe.'],
  },
  {
    n: 10, title: 'Workplace Strategy & Standardisation',
    objective: 'Develop a consistent workplace integration model that can be applied across all learnership projects.',
    standardise: ['Workplace placement process', 'Employer engagement process', 'Workplace readiness checklist', 'Learner workplace onboarding', 'Workplace Coordinator responsibilities', 'Employer/mentor responsibilities', 'Workplace visit process', 'Learner workplace attendance tracking', 'Workplace evidence/logbook tracking', 'Escalation process', 'Workplace feedback', 'Learner workplace performance reporting'],
    templates: ['Workplace Placement Tracker', 'Employer Engagement Register', 'Workplace Readiness Checklist', 'Learner Workplace Onboarding Form', 'Workplace Visit Report', 'Workplace Attendance Tracker', 'Workplace Issue/Escalation Register', 'Employer Feedback Form', 'Workplace Coordinator Weekly Report', 'Learner Workplace Progress Report'],
    kpis: ['100% workplace processes documented and standardised by Day 30.'],
  },
];

const PLAN_WEEKLY_REVIEW = {
  intro: 'A weekly Academic & Operations Review should follow the same structure every week:',
  sections: [
    { label: 'A. Delivery', items: ['What was planned?', 'What was delivered?', 'What was missed?', 'What requires recovery?'] },
    { label: 'B. Academics', items: ['Curriculum coverage', 'Assessment completion', 'Competency', 'Academic risks'] },
    { label: 'C. Learners', items: ['Attendance', 'Retention', 'At-risk learners', 'Interventions'] },
    { label: 'D. People', items: ['Facilitator performance', 'Workplace Coordinator performance'] },
    { label: 'E. Operations', items: ['Venue', 'Equipment', 'LMS', 'Training materials', 'Logistics'] },
    { label: 'F. Workplace', items: ['Placements', 'Workplace attendance', 'Workplace evidence', 'Employer issues'] },
    { label: 'G. Finance/Administration', items: ['Stipends', 'Exceptions', 'Outstanding documentation'] },
    { label: 'H. Feedback', items: ['VOC', 'Survey results', 'Complaints', 'Corrective actions'] },
    { label: 'I. Risk', items: ['Top 5 risks', 'Owners', 'Due dates', 'Escalations'] },
  ],
};

const PLAN_EXEC_DASHBOARD = {
  intro: 'The following should be visible to management every week. Actual, RAG and Trend are completed by the team each week — targets below are fixed for the 30-day period.',
  rows: [
    ['Training Delivery', '≥95%'], ['Curriculum Coverage', '100%'], ['Learner Attendance', '≥90%'], ['Learner Retention', '≥95%'],
    ['Learners At Risk', '<10%'], ['Assessment Completion', '≥95%'], ['Competency Rate', '≥85%'], ['Facilitator Performance', '≥80%'],
    ['Workplace Placement', '100%'], ['Workplace Monitoring', '≥95%'], ['Stipend Accuracy', '≥98%'], ['Survey Action Closure', '≥90%'], ['Academic Compliance', '100%'],
  ],
};

const PLAN_GOVERNANCE = [
  { cadence: 'Daily', label: 'Campus/Learning Journey Team', items: ['Attendance', 'Session readiness', 'Learner issues', 'Facilitator issues', 'Operational issues'] },
  { cadence: 'Weekly', label: 'Academic & Operations Review', items: ['Project performance', 'Learner progression', 'Academic performance', 'Facilitator performance', 'Workplace performance', 'Risks', 'Corrective actions'] },
  { cadence: 'Monthly', label: 'Management Performance Review', items: ['Overall portfolio performance', 'KPI achievement', 'Project risks', 'Financial/stipend issues', 'Quality/compliance', 'Client feedback', 'Improvement priorities'] },
];

const PLAN_SUCCESS_MEASURES = {
  intro: 'By the end of the 30-day period, the campus should have:',
  items: [
    ['Control', 'A single, accurate view of all active learnership projects.'],
    ['Academic Readiness', 'Training materials, curriculum plans and assessments prepared ahead of delivery.'],
    ['Campus Readiness', 'A standard process ensuring every classroom and training session is ready before commencement.'],
    ['Learner Control', 'A formal mechanism identifying and intervening with learners at risk.'],
    ['People Accountability', 'Measurable performance scorecards for facilitators and Workplace Coordinators.'],
    ['Financial Control', 'Improved stipend accuracy and visibility of exceptions.'],
    ['Feedback Loop', 'A functioning process that converts survey findings into corrective action.'],
    ['Workplace Integration', 'A standard workplace strategy, supported by common templates and reporting mechanisms.'],
    ['Management Visibility', 'A concise weekly dashboard showing what is on track, what is at risk, why it is at risk and what action is being taken.'],
  ],
};

const PLAN_CORE_PRINCIPLE = {
  chain: ['Plan', 'Prepare', 'Deliver', 'Monitor', 'Intervene', 'Measure', 'Improve', 'Standardise'],
  closing: 'The objective is not simply to ensure that training takes place. The objective is to ensure that every learner, facilitator, project and workplace placement moves progressively toward successful programme completion and workplace competence.',
};
