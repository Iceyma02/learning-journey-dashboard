/* ==========================================================================
   Static content extracted from the 30-Day Strategic Plan
   (Learning Journey Management, 1-30 September 2026).
   This is fixed presentation content — not derived from any upload.
   ========================================================================== */

const PLAN_META = {
  title: '30-Day Strategic Plan',
  subtitle: 'Learning Journey Management',
  period: '1 – 30 September 2026',
  role: 'Learning Journey Manager',
  focus: 'Stabilisation, Performance Visibility, Quality Assurance, Workplace Integration and Continuous Improvement',
};

const PLAN_PURPOSE = {
  paragraphs: [
    'The purpose of this 30-day strategic plan is to establish a disciplined, measurable and proactive Learning Journey Management rhythm across all active learnership projects.',
    'The September focus is not to introduce excessive administration, but to ensure clear visibility of training delivery, learner progression, workplace integration, stipends, facilitator performance, Workplace Coordinator performance, learner/client feedback and operational risks.',
    'The month will also be used to finalise the Workplace Strategy and its supporting standard templates, creating a consistent operating framework for workplace coordination across projects.',
  ],
  principle: ['Plan', 'Monitor', 'Identify Gaps', 'Intervene', 'Measure Impact', 'Report', 'Improve'],
};

const PLAN_ROADMAP = [
  { period: '1–4 Sep', theme: 'Establish Control', focus: 'Baseline current projects, delivery, learners, workplace, stipends and people performance' },
  { period: '7–11 Sep', theme: 'Drive Performance', focus: 'Training delivery, learner progression, facilitator performance and project risks' },
  { period: '14–18 Sep', theme: 'Strengthen Workplace & Feedback', focus: 'Workplace Coordinator performance, stipends, surveys and gap analysis' },
  { period: '21–25 Sep', theme: 'Standardise & Improve', focus: 'Finalise Workplace Strategy, templates and corrective actions' },
  { period: '28–30 Sep', theme: 'Consolidate & Report', focus: 'Evaluate September performance and establish October priorities' },
];

const PLAN_OUTCOMES = [
  ['Project visibility', 'Current performance status for every active project'],
  ['Training delivery control', 'Training delivery monitored against approved schedules'],
  ['Learner risk management', 'At-risk learners identified with interventions'],
  ['Assessment visibility', 'Assessment and progression gaps clearly identified'],
  ['Stipend control', 'Stipend exceptions identified and escalated before submission'],
  ['Facilitator accountability', 'Facilitator performance measured against agreed KPIs'],
  ['Workplace Coordinator accountability', 'Coordinator performance measured consistently'],
  ['Survey intelligence', 'Feedback consolidated, analysed and converted into actions'],
  ['Workplace governance', 'Workplace Strategy finalised and approved'],
  ['Standardisation', 'Core workplace templates finalised and implemented'],
  ['Management reporting', 'Consistent weekly LJM performance dashboard established'],
];

const PLAN_PRIORITIES = [
  {
    n: 1, title: 'Learnership Training Delivery',
    key: '1. Training Delivery',
    objective: 'Ensure that all active learnership projects are being delivered according to approved schedules, learner requirements and project commitments.',
    context: [],
    actions: [
      ['Review all active project training schedules', '1–3 Sep', 'Consolidated delivery view'],
      ['Compare planned vs actual training delivery', '3–5 Sep', 'Delivery variance report'],
      ['Identify missed, delayed or at-risk sessions', 'Weekly', 'Delivery risk register'],
      ['Monitor attendance and learner participation', 'Weekly', 'Attendance exceptions'],
      ['Review learner progression against programme milestones', 'Weekly', 'Learner progression dashboard'],
      ['Escalate material delivery risks', 'Within 24 hours', 'Corrective action'],
      ['Review September delivery performance', '28–30 Sep', 'Monthly delivery assessment'],
    ],
    outcome: '100% of active projects have a current view of planned delivery, actual delivery and identified delivery risks.',
  },
  {
    n: 2, title: 'Project Monitoring, Evaluation and Risk Management',
    key: '2. Project Monitoring',
    objective: 'Move project monitoring from reporting activity to management of performance, risks and outcomes.',
    context: ['Training delivery', 'Attendance', 'Learner progression', 'Assessment', 'Workplace', 'Stipends', 'Compliance', 'Client/stakeholder engagement', 'Key risks'],
    contextLabel: 'Each active project should be assessed across',
    ragLegend: { green: 'On track', amber: 'Intervention required', red: 'Material risk requiring escalation' },
    actions: [
      ['Establish September project baseline', '1–5 Sep', ''],
      ['Implement project health dashboard', 'By 5 Sep', ''],
      ['Weekly project status review', 'Every Friday', ''],
      ['Identify top 5 project risks', 'Weekly', ''],
      ['Track corrective actions', 'Weekly', ''],
      ['Escalate RED projects', 'Within 24 hours', ''],
      ['Complete September project evaluation', '28–30 Sep', ''],
    ],
    outcome: null,
  },
  {
    n: 3, title: 'Learner Progression and Intervention',
    key: '3. Learner Progression',
    objective: 'Ensure that learner risks are identified early rather than after learners have already fallen significantly behind.',
    context: ['Attendance', 'Participation', 'Learning Activities', 'Submissions', 'Assessment', 'Competence', 'Workplace'],
    contextLabel: 'Learners should be monitored through',
    flow: true,
    actions: [
      ['Establish weekly learner-risk reporting', 'Weekly from 2 Sep', ''],
      ['Identify learners with repeated absenteeism', 'Weekly from 2 Sep', ''],
      ['Monitor late or outstanding submissions', 'Weekly from 2 Sep', ''],
      ['Track assessment backlogs', 'Weekly from 2 Sep', ''],
      ['Identify learners requiring remediation', 'Weekly from 2 Sep', ''],
      ['Monitor workplace integration risks', 'Weekly from 2 Sep', ''],
      ['Assign an owner to every RED learner intervention', 'Weekly from 2 Sep', ''],
      ['Track intervention effectiveness', 'Weekly from 2 Sep', ''],
    ],
    outcome: '100% of identified high-risk learners have a documented intervention or escalation plan.',
  },
  {
    n: 4, title: 'Stipend Monitoring and Control',
    key: '4. Stipends',
    objective: 'Strengthen stipend administration by identifying exceptions before they become payroll problems.',
    context: ['Learner Registration', 'Attendance', 'Active Status', 'Workplace Status', 'Stipend Eligibility', 'Payroll'],
    contextLabel: 'The LJM should monitor the relationship between',
    flow: true,
    actions: [
      ['Reconcile active learner master data', '1–4 Sep', ''],
      ['Identify stipend exceptions', 'First week', ''],
      ['Reconcile attendance against stipend eligibility', 'Weekly', ''],
      ['Track withdrawals/transfers/terminations', 'Weekly', ''],
      ['Escalate unresolved exceptions', 'Within 24 hours', ''],
      ['Complete pre-payroll verification', 'According to payroll cut-off', ''],
      ['Review recurring stipend issues', '28–30 Sep', ''],
    ],
    outcome: 'A Stipend Exception Register is maintained and reviewed weekly.',
  },
  {
    n: 5, title: 'Facilitator Performance Management',
    key: '5. Facilitators',
    objective: 'Create visibility of Facilitator performance beyond whether training sessions were delivered.',
    context: ['Preparation', 'Punctuality', 'Curriculum coverage', 'Learner engagement', 'Attendance management', 'Learner progression', 'LMS compliance', 'Assessment readiness', 'Reporting', 'Learner/client feedback'],
    contextLabel: 'Performance should consider',
    actions: [
      ['Confirm Facilitator allocation by project', '1–4 Sep', ''],
      ['Communicate performance expectations/KPIs', 'By 7 Sep', ''],
      ['Implement Facilitator performance scorecard', 'By 11 Sep', ''],
      ['Monitor delivery and learner feedback', 'Weekly', ''],
      ['Identify performance gaps', 'From 11 Sep', ''],
      ['Conduct targeted performance discussions', '21–25 Sep', ''],
      ['Complete September performance review', '28–30 Sep', ''],
    ],
    outcome: 'Facilitators categorised as: High Performing | Performing | Development Required | Critical Intervention.',
  },
  {
    n: 6, title: 'Workplace Coordinator Performance', 
    key: '6. Workplace Coordinators',
    objective: 'Strengthen Workplace Coordination from an administrative placement function into a measurable learner-outcome and host-engagement function.',
    context: ['Workplace placement', 'Host engagement', 'Learner workplace attendance', 'Supervisor engagement', 'Workplace evidence', 'Workplace visits/check-ins', 'Learner support', 'Issue resolution', 'Reporting', 'Escalation'],
    contextLabel: 'Performance areas',
    actions: [
      ['Confirm coordinator portfolios', '1–4 Sep', ''],
      ['Establish individual KPIs', 'By 7 Sep', ''],
      ['Review current workplace portfolio', '7–11 Sep', ''],
      ['Implement Coordinator scorecard', 'By 11 Sep', ''],
      ['Conduct weekly workplace performance review', 'Weekly', ''],
      ['Identify host/learner risks', 'Weekly', ''],
      ['Conduct individual performance discussions', '21–25 Sep', ''],
      ['Complete monthly performance assessment', '28–30 Sep', ''],
    ],
    outcome: null,
  },
  {
    n: 7, title: 'Survey Tracking, Analysis and Gap Closure',
    key: '7. Surveys',
    objective: 'Use learner, supervisor, workplace and client feedback as a management intelligence tool, rather than simply collecting survey responses.',
    context: ['Learner VOC surveys', 'Training evaluation surveys', 'Facilitator feedback', 'Workplace supervisor surveys', 'Intern/learner workplace surveys', 'Client feedback', 'Programme impact surveys'],
    contextLabel: 'Surveys to monitor, where applicable',
    cycle: ['Collect', 'Consolidate', 'Analyse', 'Identify Gaps', 'Assign Actions', 'Implement', 'Re-measure'],
    actions: [
      ['Consolidate all outstanding survey responses', '1–5 Sep', ''],
      ['Establish survey response dashboard', 'By 5 Sep', ''],
      ['Analyse recurring themes', '7–11 Sep', ''],
      ['Identify top performance gaps', 'By 12 Sep', ''],
      ['Assign corrective actions', '14–18 Sep', ''],
      ['Track action implementation', 'Weekly', ''],
      ['Measure whether gaps are improving', '28–30 Sep', ''],
    ],
    outcome: 'Produce a Survey Insights & Improvement Report: Top 5 Strengths + Top 5 Gaps + Root Causes + Corrective Actions + Owners + Due Dates.',
  },
  {
    n: 8, title: 'Finalise Workplace Strategy',
    key: '8. Workplace Strategy',
    objective: 'Complete a practical Workplace Strategy that creates a standard operating model for workplace integration across all learnership projects.',
    context: ['Workplace placement model', 'Host recruitment and onboarding', 'Learner placement process', 'Host responsibilities', 'Supervisor responsibilities', 'Workplace Coordinator responsibilities', 'Learner responsibilities', 'Workplace attendance management', 'Workplace evidence requirements', 'Workplace monitoring and visits', 'Host engagement', 'Learner support', 'Workplace risk management', 'Escalation process', 'Workplace reporting', 'Performance measurement', 'Quality assurance', 'Exit/completion process'],
    contextLabel: 'Strategy should define',
    actions: [
      ['Review and consolidate inputs', '1–18 Sep', ''],
      ['Final management review', '21–23 Sep', ''],
      ['Finalise strategy', '24–25 Sep', ''],
      ['Approval and implementation readiness', 'By 30 Sep', ''],
    ],
    outcome: null,
  },
];

const PLAN_TEMPLATES = [
  ['Workplace Placement Register', '11 Sep'], ['Host Organisation Register', '11 Sep'],
  ['Workplace Coordinator Dashboard', '11 Sep'], ['Learner Workplace Attendance Tracker', '11 Sep'],
  ['Workplace Supervisor Engagement Record', '18 Sep'], ['Workplace Visit/Check-in Template', '18 Sep'],
  ['Learner Workplace Progress Report', '18 Sep'], ['Workplace Risk & Escalation Register', '18 Sep'],
  ['Workplace Issue Resolution Tracker', '18 Sep'], ['Host Feedback Survey', '18 Sep'],
  ['Workplace Completion Checklist', '18 Sep'], ['Monthly Workplace Coordination Report', '18 Sep'],
];

const PLAN_RHYTHM = [
  ['Monday', 'Project priorities, learner risks and training delivery'],
  ['Tuesday', 'Facilitator delivery and learner progression'],
  ['Wednesday', 'Workplace coordination and host engagement'],
  ['Thursday', 'Assessments, stipends, surveys and compliance'],
  ['Friday', 'Performance review, risks, escalations and management reporting'],
];

const PLAN_KPIS = [
  ['Active projects with current status', '100%'],
  ['Projects reviewed weekly', '100%'],
  ['High-risk learner interventions', '100%'],
  ['Training delivery monitored', '100%'],
  ['Stipend exceptions identified before submission', '100%'],
  ['Facilitators with performance tracking', '100%'],
  ['Workplace Coordinators with performance tracking', '100%'],
  ['Workplace placement status visibility', '100%'],
  ['Survey responses consolidated', '100%'],
  ['Identified survey gaps with action plans', '100%'],
  ['Workplace Strategy completed', '100%'],
  ['Core workplace templates completed', '100%'],
  ['Critical risks escalated within agreed timeframe', '100%'],
];

const PLAN_ROLE = {
  statement: 'The September plan positions the Learning Journey Manager as the integrator of the entire learner journey, rather than the administrator of individual activities.',
  chain: ['Training Delivery', 'Learner Engagement', 'Assessment & Competence', 'Workplace Integration', 'Learner/Host Feedback', 'Performance & Gap Analysis', 'Corrective Action', 'Improved Learner Outcomes'],
  oldQuestion: '"Have we completed the activity?"',
  newQuestion: '"What outcome did the activity produce, what gap remains, who owns the gap, and by when will it be resolved?"',
};

const PLAN_ENDSTATE = {
  intro: 'By 30 September 2026, a single, high-level management system should provide reliable visibility of:',
  items: [
    'every active learnership project', 'training delivery performance', 'learner progression and risk',
    'assessment status', 'workplace integration', 'stipend exceptions', 'Facilitator performance',
    'Workplace Coordinator performance', 'survey insights and improvement actions',
    'workplace strategy and standard templates', 'critical operational and compliance risks',
  ],
  closing: 'The strategic objective is to leave September with greater control, clearer accountability, faster escalation and better evidence for management decision-making.',
  cycle: ['Visibility', 'Accountability', 'Intervention', 'Measurement', 'Improvement'],
};
