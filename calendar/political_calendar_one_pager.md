# Political Campaign Content Calendar — Build Brief (One-Pager)

**Purpose:** Reference database of every date category a political/advocacy campaign should track for themed content, GOTV, and fundraising. Built for the 2026 midterm cycle (General Election: **November 3, 2026**). May be used to prime a Claude Code buildout of a political calendar website.

---

## Deliverables Produced in This Project

| Format | File | Use Case |
|---|---|---|
| Word Super Report | `political_campaign_super_report_2026.docx` | Strategic reference / stakeholder review |
| Multi-tab Excel | `political_campaign_super_report_2026.xlsx` | Working database (14 tabs, INDEX + 13 sections) |
| Individual CSVs | `INDEX.csv` + `01_…` through `13_…` | **Direct ingestion for website build — treat as seed data** |

## The 13 Data Categories (= CSV files = candidate DB tables)

| # | Dataset | Rows | Key Fields |
|---|---|---|---|
| 01 | Federal Holidays | 11 | holiday, date, observed date, messaging angle, target audience |
| 02 | State & Cultural Observances | 20 | observance, date, type (legal/popular), jurisdiction(s), issue areas |
| 03 | Religious Calendar | 18 | observance, faith tradition, date(s), duration, community size, **sensitivity notes** |
| 04 | Heritage & Awareness Months | 12 | month, designations, embedded single-day observances, issue areas |
| 05 | Primary Elections | 57 | state/territory, primary date, runoff, filing deadline, Senate/Gov race flags, primary type, runoff threshold |
| 06 | FEA Voter Registration Windows | 57 | state, GOTV/voter-ID period, voter reg window(s) — FEC-sourced |
| 07 | FEC Fundraising Deadlines | 11 | report name, coverage period, due date, filer types, content strategy |
| 08 | Congressional Recess Calendar | 23 | period, Senate/House status, associated holiday, engagement opportunity |
| 09 | Metro Local Elections | 30 | metro, state, population, dates, offices, cycle note, federal tie-in |
| 10 | Tribal Elections & Observances | 15 | nation, location, enrollment, cycle, offices, overlap notes (sovereignty caveats) |
| 11 | Special Elections | 7 | race, office, trigger, dates, partisan index, FEC implications |
| 12 | Fiscal & Policy Calendar | 10 | event, date, certainty level, policy area, rapid-response flag |
| 13 | Cultural Moments | 14 | event, date, scale/reach, audience, content angles |

**Coverage:** All 50 states + DC + 5 territories (PR, GU, VI, AS, MP) + major Native American nations.

## Data Model Notes for a Website Build

- **Common event shape:** `{name, date_start, date_end, jurisdiction, category, recurrence, audience, issue_tags[], content_angle, source, certainty}` — every dataset maps onto this with category-specific extensions.
- **Jurisdiction hierarchy:** Federal → State/Territory → Metro/Local → Tribal (tribal is *parallel sovereign*, not nested under state).
- **Date types to support:** fixed (Jul 4), floating (3rd Monday), sundown-start (Jewish holidays), lunar/moon-sighting approximate (Ramadan, Eid), TBD (special elections, SOTU), ranges (heritage months, FEA windows), and **multi-window** (FEA voter reg has primary + general windows with a gap).
- **Flags worth modeling:** `sensitivity` (e.g., Yom Kippur = zero campaign activity; Confederate observances = audience-dependent), `rapid_response_required` (SCOTUS June window, shutdown risk), `dual_designation` (Columbus/Indigenous Peoples Day varies by locality), `subject_to_change` (CA-01 special, CT/UT conventions, territories TBD).

## Highest-Leverage Anchor Dates (2026)

- **Mar 3** — First major primaries (TX, NC, AR) · **Jun 11–Jul 19** — FIFA World Cup (US-hosted; Latino outreach) · **Sep 22** — National Voter Registration Day · **Oct 15 & Oct 22** — October Quarterly + Pre-General FEC filings · **Oct 5–Nov 6** — Pre-election congressional recess (peak GOTV) · **Nov 3** — Election Day · **Dec 1** — Giving Tuesday · **Year-long** — America 250th Semiquincentennial.

## Sources & Refresh Cadence

Primary: **FEC.gov** (primary dates as of Feb 12, 2026; FEA chart; reporting deadlines), **Senate.gov** (2026 schedule, updated Nov 21, 2025), **OPM.gov**, **NCSL**. Monitoring: Ballotpedia, 270toWin, Roll Call. **Volatile items:** CA-01 special date, CT/UT primaries, AS/MP dates, VA redistricting, new House vacancies, Islamic calendar dates. Design the site so these render a "date pending" state rather than blocking.

## If Priming a Claude Code Buildout

1. Ingest the 13 CSVs as seed data; normalize to the common event shape above.
2. Core views: month calendar, jurisdiction filter (federal/state/metro/tribal), category filter, "next 30 days" dashboard, per-state detail page (primary + FEA + local races on one screen).
3. Respect locked brand palette where relevant: red `#FF3366`, white `#E8F4F8`, blue `#4D9FFF`, black background.
4. Build-to-be-replaced principle applies: readable schemas, clean migrations, no clever automation.
