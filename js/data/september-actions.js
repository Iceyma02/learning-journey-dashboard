/* Static reference data — the 61 actions from the 30-Day Strategic
   Plan's Implementation Roadmap (6 day-ranged phases, reviewed
   version). Fixed planning content, not derived from an upload —
   status/% complete start at Not Started/0% and are tracked in the
   Execution Tracker (js/planExecution.js), which computes
   days-remaining live against today's date. */

const SEPTEMBER_ACTIONS = [
  {
    "id": "A01",
    "priority": "Days 1\u20135",
    "action": "Consolidate all active projects",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A02",
    "priority": "Days 1\u20135",
    "action": "Establish master project tracker",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A03",
    "priority": "Days 1\u20135",
    "action": "Assess academic progress",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A04",
    "priority": "Days 1\u20135",
    "action": "Review training schedules",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A05",
    "priority": "Days 1\u20135",
    "action": "Identify upcoming training sessions",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A06",
    "priority": "Days 1\u20135",
    "action": "Conduct campus readiness assessment",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A07",
    "priority": "Days 1\u20135",
    "action": "Review facilitator allocation",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A08",
    "priority": "Days 1\u20135",
    "action": "Review Workplace Coordinator allocation",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A09",
    "priority": "Days 1\u20135",
    "action": "Identify at-risk learners",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A10",
    "priority": "Days 1\u20135",
    "action": "Review stipend exceptions",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A11",
    "priority": "Days 1\u20135",
    "action": "Review outstanding assessments",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A12",
    "priority": "Days 1\u20135",
    "action": "Identify Red/Amber projects",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A13",
    "priority": "Days 1\u20135",
    "action": "Establish baseline KPIs",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-05",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A14",
    "priority": "Days 6\u201310",
    "action": "Close urgent curriculum gaps",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-10",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A15",
    "priority": "Days 6\u201310",
    "action": "Confirm learning materials",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-10",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A16",
    "priority": "Days 6\u201310",
    "action": "Confirm assessment plans",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-10",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A17",
    "priority": "Days 6\u201310",
    "action": "Confirm venue bookings",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-10",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A18",
    "priority": "Days 6\u201310",
    "action": "Confirm classroom resources",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-10",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A19",
    "priority": "Days 6\u201310",
    "action": "Resolve LMS access issues",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-10",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A20",
    "priority": "Days 6\u201310",
    "action": "Confirm facilitator readiness",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-10",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A21",
    "priority": "Days 6\u201310",
    "action": "Address learner attendance concerns",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-10",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A22",
    "priority": "Days 6\u201310",
    "action": "Address urgent stipend exceptions",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-10",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A23",
    "priority": "Days 6\u201310",
    "action": "Review workplace placement gaps",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-10",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A24",
    "priority": "Days 11\u201315",
    "action": "Monitor live training sessions",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-15",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A25",
    "priority": "Days 11\u201315",
    "action": "Conduct facilitator observations",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-15",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A26",
    "priority": "Days 11\u201315",
    "action": "Review curriculum coverage",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-15",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A27",
    "priority": "Days 11\u201315",
    "action": "Monitor learner attendance",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-15",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A28",
    "priority": "Days 11\u201315",
    "action": "Track assessments",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-15",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A29",
    "priority": "Days 11\u201315",
    "action": "Conduct learner check-ins",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-15",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A30",
    "priority": "Days 11\u201315",
    "action": "Monitor workplace integration",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-15",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A31",
    "priority": "Days 11\u201315",
    "action": "Review Workplace Coordinator performance",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-15",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A32",
    "priority": "Days 11\u201315",
    "action": "Analyse survey results",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-15",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A33",
    "priority": "Days 11\u201315",
    "action": "Implement corrective actions",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-15",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A34",
    "priority": "Days 16\u201320",
    "action": "Conduct formal reviews of Red/Amber projects",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-20",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A35",
    "priority": "Days 16\u201320",
    "action": "Implement academic recovery plans",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-20",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A36",
    "priority": "Days 16\u201320",
    "action": "Conduct remedial learner interventions",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-20",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A37",
    "priority": "Days 16\u201320",
    "action": "Address poor facilitator performance",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-20",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A38",
    "priority": "Days 16\u201320",
    "action": "Address Workplace Coordinator performance gaps",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-20",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A39",
    "priority": "Days 16\u201320",
    "action": "Resolve outstanding campus/logistical issues",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-20",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A40",
    "priority": "Days 16\u201320",
    "action": "Follow up stipend exceptions",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-20",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A41",
    "priority": "Days 16\u201320",
    "action": "Conduct root-cause analysis on recurring problems",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-20",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A42",
    "priority": "Days 21\u201325",
    "action": "Finalise standard operating procedures",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-25",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A43",
    "priority": "Days 21\u201325",
    "action": "Finalise academic readiness checklist",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-25",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A44",
    "priority": "Days 21\u201325",
    "action": "Finalise campus readiness checklist",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-25",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A45",
    "priority": "Days 21\u201325",
    "action": "Finalise facilitator scorecard",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-25",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A46",
    "priority": "Days 21\u201325",
    "action": "Finalise Workplace Coordinator scorecard",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-25",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A47",
    "priority": "Days 21\u201325",
    "action": "Finalise workplace templates",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-25",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A48",
    "priority": "Days 21\u201325",
    "action": "Standardise project reporting",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-25",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A49",
    "priority": "Days 21\u201325",
    "action": "Standardise survey analysis",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-25",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A50",
    "priority": "Days 21\u201325",
    "action": "Standardise learner intervention process",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-25",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A51",
    "priority": "Days 26\u201330",
    "action": "Conduct full 30-day performance review",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-30",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A52",
    "priority": "Days 26\u201330",
    "action": "Compare baseline against actual performance",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-30",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A53",
    "priority": "Days 26\u201330",
    "action": "Review all Red/Amber projects",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-30",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A54",
    "priority": "Days 26\u201330",
    "action": "Review learner progression",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-30",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A55",
    "priority": "Days 26\u201330",
    "action": "Review facilitator performance",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-30",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A56",
    "priority": "Days 26\u201330",
    "action": "Review workplace performance",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-30",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A57",
    "priority": "Days 26\u201330",
    "action": "Review stipend performance",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-30",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A58",
    "priority": "Days 26\u201330",
    "action": "Review survey trends",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-30",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A59",
    "priority": "Days 26\u201330",
    "action": "Confirm outstanding corrective actions",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-30",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A60",
    "priority": "Days 26\u201330",
    "action": "Present management dashboard",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-30",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  },
  {
    "id": "A61",
    "priority": "Days 26\u201330",
    "action": "Develop October action plan",
    "deliverable": "",
    "startDate": null,
    "dueDate": "2026-09-30",
    "cadence": "Once",
    "owner": "Learning Journey Manager / Campus Manager"
  }
];
