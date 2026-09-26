import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './ElderlyOpening.css';

const scenario = [
  ['Multiple medicines to manage', 'For many elderly people, managing care can mean multiple medicines, frequent doctor visits and changing prescriptions.'],
  ['Family cannot always be around', 'Family members do help, but with work and other responsibilities, they may not always be available.'],
  ['Digital tools can make things easier', 'But some elderly people still find them difficult to use on their own.'],
  ['Care is not always easy to find', 'When a caregiver is needed for just a few hours or on a particular day, finding someone trusted and available at that time can be difficult.'],
];
const qualitative = [
  ['“Managing 8–12 medicines gets difficult.”', '“Different medicines, timings and changing prescriptions make it harder to remember and keep track.”'],
  ['“Medicine routines are built over time.”', '“People often learn through trial and error, connecting medicines with habits like waking up, meals or tea.”'],
  ["“Family support isn't always available.”", '“Some manage medicines independently, while others rely on family members who may not always be around.”'],
  ['“Medical records are scattered.”', '“Prescriptions, reports and records are often kept in different places, making medical history harder to access quickly.”'],
  ['“Sometimes care is needed only for a few hours.”', '“Families may need a trusted caregiver for a specific time—while attending an event, working, or running an errand.”'],
];
const quantitative = [
  ['70%', '“Still rely on memory”', '“to manage and remember their medications.”'],
  ['65%', '“Store medical records physically”', '“such as prescriptions, reports and other documents.”'],
  ['52%', '“See value in medicine reminders”', '“and felt reminders could significantly improve caregiving.”'],
];
const secondary = [
  ['Medicines are remembered by how they look', '“People often recognise medicines by their colour, shape, size or where they keep them.”'],
  ['Medicines are connected to routines', '“Instead of exact timings, people often remember medicines as before tea, after lunch or before bed.”'],
  ['Reminders are not always needed', '“Reminders can be more useful when a medicine or routine is new, until the person gets used to it.”'],
  ['An app needs to be genuinely useful', '“People may already use pill boxes, notes or their own methods. They may adopt an app only if it makes things easier for them.”'],
  ['More features can mean more effort', '“Medicine details are useful, but too much information at once can increase cognitive load.”'],
  ['People decide which medicines feel more important', '“Based on their symptoms and understanding, people can form their own idea of which medicines are important to take.”'],
];
const needs = [
  { label: 'ELDERLY PERSON', items: [
    ['Recognise medicines easily', 'Identify medicines without depending only on their names.'],
    ['Add medicines with minimum effort', 'Keep adding and updating medicines quick and simple.'],
    ['Get reminders when actually needed', 'Support new medicines or changing routines without unnecessary reminders.'],
    ['Keep medical information together', 'Easily store and find medicines, prescriptions and medical records.'],
  ] },
  { label: 'FAMILY CAREGIVER', items: [
    ['Know if medicines are being taken', 'See whether their loved one has taken or missed their medicines.'],
    ['Manage care without too much effort', 'Quickly add or update medicines, records and doctor appointments.'],
    ['Keep track of important appointments', 'Easily manage upcoming doctor visits and reminders.'],
    ["Find support when they can't be there", 'Find a trusted caregiver for a specific need, day or a few hours.'],
  ] },
];
const personas = [
  {label: 'ELDERLY PERSON', name: 'Meena Joshi · 68', detail: 'Retired teacher · Lives with her husband', about: 'Meena takes multiple medicines every day. She has developed her own way of remembering them through their appearance and her daily routine.', needs: ['Easily recognise the right medicine', 'Remember new or changed medicines', 'Keep medical records easy to find', 'Manage medicines independently'], frustrations: ['Similar-looking medicines get confusing', 'Changing prescriptions disturb her routine', 'Too many steps or information feel overwhelming'], goal: '“I just want to know what to take and when, without depending on someone every time.”'},
  {label: 'FAMILY CAREGIVER', name: 'Rahul Joshi · 39', detail: "Working professional · Meena's son", about: "Rahul helps manage his mother's healthcare, but work means he cannot always be around to check medicines, appointments or accompany her.", needs: ['Know whether medicines were taken', 'Quickly add or update medicines', 'Keep records and appointments together', 'Find trusted care when he cannot be there'], frustrations: ['Managing many medicines takes time', 'Medical information is scattered', "Hard to know what happened when he wasn't there", 'Finding short-term trusted care is difficult'], goal: '“I want to know she’s managing well, even when I’m not there.”'},
];
const solution = [
  ['Grouped Medicine System', 'Medicines taken around the same routine are grouped together, so users can manage 2–3 medicines as one routine instead of separately.'],
  ['More Personal Routine Reminders', 'Reminders can be set around smaller everyday routines like before tea, after tea, after waking up or before bed.'],
  ['Easy-to-Recognise Reminders', 'Reminders show the medicine’s image, colour, shape and familiar name, making it clear which medicine to take.'],
  ['Easy Medicine Management', 'Medicines can be added quickly, updated, or turned off when they are no longer needed.'],
  ['Family Medication Tracking', 'Family members can see which medicines were taken or missed and keep track of the medication routine.'],
  ['Care for a Specific Need & Time', 'Families can find a caregiver based on what help they need and when they need it.'],
];
function Number({ index }) { return <span className="elder-number">{String(index + 1).padStart(2, '0')}</span>; }
function EditorialGrid({ items }) {
  return <div className="elder-editorial-grid">{items.map(([title, copy], i) => <article key={title}><Number index={i} /><h3>{title}</h3><p>{copy}</p></article>)}</div>;
}
export default function ElderlyOpening() {
  return <div className="elder-opening">
    <section className="elder-screen elder-intro" aria-labelledby="elder-title">
      <Link to="/#work" className="elder-back"><ArrowLeft size={18} />Back to Selected Work</Link>
      <h1 id="elder-title">Simplifying Polypharmacy<br />for Older Adults</h1>
      <p className="elder-subtitle">Designing an accessible experience for managing multiple<br className="elder-desktop-break" /> medications and everyday care.</p>
      <div className="elder-metadata">
        <div><span className="elder-label">MY ROLE</span><p>UX Research, User Interviews, Behavioural Research, Interaction Design, Information Architecture, Wireframing, Visual Design, Prototyping</p></div>
        <div><span className="elder-label">PROJECT TYPE</span><p>UX Research · Interaction Design · Accessibility</p></div>
        <div><span className="elder-label">FOCUS</span><p>Elderly Users · Caregivers · Poly-Medication</p></div>
      </div>
    </section>
    <section className="elder-screen elder-hero" aria-label="Elderly medication illustration"><img src="/elderly frame.png" alt="An older adult checking their medicines on a phone" /></section>
    <section className="elder-screen elder-scenario" aria-labelledby="elder-scenario-title">
      <div><span className="elder-label">CURRENT SCENARIO</span><h2 id="elder-scenario-title">What does the current<br className="elder-desktop-break" /> scenario look like?</h2>
        <div className="elder-scenario-list">{scenario.map(([title, copy], i) => <article key={title}><Number index={i} /><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </div>
      <div className="elder-context-image"><img src="/elderly frame.png" alt="An older adult using a medicine reminder" /></div>
    </section>
    <section className="elder-screen elder-research" aria-label="Qualitative and quantitative research">
      <div className="elder-qualitative"><h2>Qualitative Research</h2><p className="elder-participants">7 elderly people · 9 family caregivers · 1 medical student</p>
        <div className="elder-quotes">{qualitative.map(([title, copy], i) => <article key={title}><Number index={i} /><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </div>
      <div className="elder-quantitative"><h2>Quantitative<br />Research</h2><div>{quantitative.map(([value, title, copy]) => <article key={value}><strong>{value}</strong><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
    </section>
    <section className="elder-screen elder-secondary" aria-labelledby="elder-secondary-title"><div><h2 id="elder-secondary-title">Secondary Research</h2><p className="elder-research-subtitle">Understanding how elderly people manage their medicines</p></div><EditorialGrid items={secondary} /></section>
    <section className="elder-screen elder-problem" aria-labelledby="elder-problem-title"><h2 id="elder-problem-title">Problem Statement</h2><p>“How might we make <span>managing multiple medicines and everyday care simpler</span> for elderly people, while helping their <span>families stay involved</span> when they cannot always be around?”</p></section>
    <section className="elder-screen elder-needs" aria-labelledby="elder-needs-title"><h2 id="elder-needs-title">What do the users need?</h2><div className="elder-needs-columns">{needs.map(group => <div key={group.label}><h3 className="elder-label">{group.label}</h3>{group.items.map(([title, copy], i) => <article key={title}><div><Number index={i} /><h3>{title}</h3></div><p>{copy}</p></article>)}</div>)}</div></section>
    <section className="elder-screen elder-personas" aria-labelledby="elder-personas-title"><h2 id="elder-personas-title">User Personas</h2><div className="elder-persona-grid">{personas.map(person => <article key={person.name}><span className="elder-label">{person.label}</span><h3>{person.name}</h3><p className="elder-persona-detail">{person.detail}</p><div className="elder-persona-about"><h4>ABOUT</h4><p>{person.about}</p></div><h4>NEEDS</h4><ul>{person.needs.map(item => <li key={item}>{item}</li>)}</ul><h4>FRUSTRATIONS</h4><ul>{person.frustrations.map(item => <li key={item}>{item}</li>)}</ul><div className="elder-persona-goal"><h4>GOAL</h4><blockquote>{person.goal}</blockquote></div></article>)}</div></section>
    <section className="elder-screen elder-solution" aria-labelledby="elder-solution-title"><h2 id="elder-solution-title">The Solution</h2><EditorialGrid items={solution} /></section>
  </div>;
}
