/* =====================================================================
   VISA HUB DATA  —  the ONLY file that needs updating when rules change.
   All money in the country's own currency (UK = GBP, USA = USD, Canada = CAD).
   Dates: YYYY-MM-DD. Keep the structure; just change the numbers/text.
   ===================================================================== */
window.VISA_DATA = {
  lastUpdated: '2026-10-03',

  uk: {
    ihsAdult: 1035,          // per year
    ihsReduced: 776,         // per year: students, their dependants, under-18s
    student: {               // used by student.html
      changeDate: '2026-11-30',
      before: { london: 1529, outside: 1171 },
      after:  { london: 1570, outside: 1203 },
      depMonthly: { london: 845, outside: 680 },
      visaFee: 558
    },
    skilledWorker: {
      outside: { upTo3: 819, over3: 1618 },
      inside:  { upTo3: 943, over3: 1865 },
      salaryList: { upTo3: 628, over3: 1235 },   // same inside/outside
      savings: 1270,
      cos: 525,                                  // employer: certificate of sponsorship
      iscPerYearLarge: 1320                      // employer: immigration skills charge (medium/large)
    },
    healthCare: { upTo3: 324, over3: 628, savings: 1270 },   // IHS exempt
    graduate: { fee: 937, shortenDate: '2027-01-01', yearsBefore: 2, yearsAfter: 1.5, yearsPhd: 3 },
    family: {
      feeOutside: 2064, feeInside: 1407,
      monthsOutside: 33, monthsInside: 30,
      minIncome: 29000
    },
    visitor: { m6: 135, y2: 506, y5: 903, y10: 1128 },
    keyDates: [
      { date: '2026-04-08', text: 'Home Office fees rose by about 6–7% across most visas.' },
      { date: '2026-11-30', text: 'Student visa living-cost amounts rise to £1,570 (London) and £1,203 (outside London) a month.' },
      { date: '2027-01-01', text: 'Graduate visa cut from 2 years to 18 months for bachelor’s and master’s graduates.' }
    ]
  },

  us: {
    mrv: { nonPetition: 185, petition: 205 },   // B, F, J = nonPetition; H, L, O = petition
    integrityFee: 250,                          // collection still uneven by embassy
    sevis: 350,
    h1b: {
      registration: 215, i129: 780, fraud: 500,
      acwiaSmall: 750, acwiaLarge: 1500,       // <=25 / 26+ full-time staff
      asylumSmall: 300, asylumLarge: 600,
      premium: 2965,
      proclamationFee: 100000                  // new H-1B for workers outside the US
    },
    greenCard: {
      i130: 675, i140: 715, i140Asylum: 600, i485: 1440,
      ivFamily: 325, ivEmployment: 345, affidavit: 120, uscisImmigrant: 235
    },
    visaBulletin: {
      month: 'October 2026',
      note: 'Final Action Dates. USCIS lets applicants use the Dates for Filing chart this month.',
      rows: [
        { cat: 'F1 — Unmarried sons/daughters of citizens', row: '22 Jan 2020' },
        { cat: 'F2A — Spouses/children of green card holders', row: '22 Sep 2026' },
        { cat: 'F2B — Unmarried adult children of green card holders', row: '22 Aug 2019' },
        { cat: 'F3 — Married children of citizens', row: '22 Oct 2014' },
        { cat: 'F4 — Siblings of citizens', row: '22 Oct 2011' },
        { cat: 'EB-1 — Priority workers', row: 'Current' },
        { cat: 'EB-2 — Advanced degree / exceptional ability', row: '01 Jan 2025', india: '01 Nov 2013' },
        { cat: 'EB-3 — Skilled workers & professionals', row: '15 May 2024', india: '01 Jan 2014' },
        { cat: 'EB-3 — Other workers', row: '01 Jan 2022' },
        { cat: 'EB-5 — Investors (unreserved)', row: 'Current' }
      ]
    },
    alerts: [
      'Immigrant visa (green card) interviews have been paused at most US embassies since late August 2026. Student, work and visitor visas are not affected.',
      'The $100,000 H-1B fee for new workers outside the US is still in force while the government appeals a court ruling against it.',
      'The $250 visa integrity fee applies from 1 Oct 2025, but some embassies are not collecting it yet.'
    ]
  },

  ca: {
    studyPermit: 150, workPermit: 155, openWorkPermit: 100,
    biometrics: 85, biometricsFamily: 170,
    studyFunds: [23448, 29192, 35888, 43572, 49419, 55736, 62054], studyFundsExtra: 6318,   // from 1 Sep 2026, outside Quebec
    pr: { processing: 990, rprf: 600, child: 270 },
    settlementFunds: [15263, 19001, 23360, 28362, 32168, 36280, 40392], settlementExtra: 4112,
    pnpDefaultFee: 1750,     // BC PNP worker streams from 22 Jan 2026
    draws: [
      { date: '2026-10-01', type: 'Federal Skilled Trades', itas: 3500, crs: 476 },
      { date: '2026-09-29', type: 'Canadian Experience Class', itas: 2000, crs: 518 },
      { date: '2026-09-28', type: 'Provincial Nominee Program', itas: 733, crs: 725 },
      { date: '2026-09-14', type: 'Provincial Nominee Program', itas: 576, crs: 734 }
    ],
    keyDates: [
      { date: '2026-09-01', text: 'Study permit proof of funds rose to CA$23,448 for a single applicant.' },
      { date: '2026-01-22', text: 'BC PNP worker-stream fee rose to CA$1,750.' }
    ]
  }
};
