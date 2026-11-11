import { Link } from 'react-router-dom';
import foodBank from '../../../content/food-bank.json';

const EMAIL = 'jrfanscommunity@gmail.com';
const cld = (url: string, w: number, h: number) => url.replace('/image/upload/', `/image/upload/f_auto,q_auto,c_fill,g_auto,w_${w},h_${h}/`);

const journey = [
  { n: '01', t: 'Gathered in faith', d: 'Groceries, fresh produce and essentials arrive through church members, community donors, partner organizations and careful purchasing.' },
  { n: '02', t: 'Prepared by willing hands', d: 'Volunteers sort, pack and prepare every hamper with care, so each family receives food that is safe, balanced and generous.' },
  { n: '03', t: 'Shared with dignity', d: 'Families across Brampton are welcomed warmly and served without judgement, whatever their faith, story or circumstance.' },
  { n: '04', t: 'Carried further', d: 'A food visit opens the door to community meals, clothing support, senior care, prayer and fellowship.' },
];

const fund = [
  'Fresh produce, protein and staples for growing weekly demand',
  'Hot community meals for individuals and families experiencing homelessness',
  'Storage, transport and delivery to seniors who cannot travel',
  'Volunteer training, coordination and food-safety supplies',
];

const receive = [
  'Regular updates on families served and food distributed',
  'Photos and stories from distribution days',
  'Financial reporting and receipts on request',
  'Recognition in services, events and on our channels',
];

/** Food Bank Ministry: the case for funders and partners, with real photos from distribution day. */
export default function FoodBankMinistry() {
  const [lead, ...rest] = foodBank.photos;
  return (
    <section id="food-bank" className="relative py-24 bg-gradient-to-b from-indigo-950 via-indigo-900 to-indigo-950 text-white overflow-hidden scroll-mt-24">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600 via-amber-400 to-red-600" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-amber-400 font-semibold tracking-[0.25em] uppercase text-xs">Food Bank Ministry · For funders &amp; partners</p>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Feeding families. <span className="text-amber-400">Restoring hope.</span>
            </h2>
            <blockquote className="mt-6 border-l-4 border-red-600 pl-5 text-lg italic text-indigo-100">
              “For I was hungry and you gave me food.” <span className="not-italic text-sm text-indigo-200">— Matthew 25:35</span>
            </blockquote>
            <p className="mt-6 text-lg text-indigo-100 leading-relaxed">
              Every week our food bank ministry serves families across Brampton with fresh groceries, produce and essential supplies. It is faith in action: practical, generous and open to all. With partners beside us, we can keep the shelves full as the need keeps growing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/giving" className="px-7 py-3.5 rounded-full bg-amber-400 text-indigo-950 font-bold hover:bg-amber-300 transition-colors whitespace-nowrap">Fund the food bank</Link>
              <Link to="/giving/volunteer" className="px-7 py-3.5 rounded-full border-2 border-white/40 font-bold hover:bg-white/10 transition-colors whitespace-nowrap">Volunteer</Link>
              <a href={`mailto:${EMAIL}?subject=${encodeURIComponent('Food bank funding package request')}`} className="px-2 py-3.5 font-bold text-amber-300 underline-offset-4 hover:underline whitespace-nowrap">Request a funding package</a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <img src={cld(lead, 900, 900)} alt="Volunteers and families at the food bank distribution" loading="lazy" decoding="async" className="col-span-2 row-span-2 w-full h-full aspect-square object-cover rounded-2xl ring-1 ring-white/10" />
            {rest.slice(0, 5).map((p) => (
              <img key={p} src={cld(p, 400, 400)} alt="Food bank distribution day" loading="lazy" decoding="async" className="w-full aspect-square object-cover rounded-2xl ring-1 ring-white/10" />
            ))}
          </div>
        </div>

        <ol className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0">
          {journey.map((j) => (
            <li key={j.n} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <span className="text-3xl font-extrabold text-red-500">{j.n}</span>
              <h3 className="mt-3 text-lg font-bold">{j.t}</h3>
              <p className="mt-2 text-sm text-indigo-100/90 leading-relaxed">{j.d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-white text-indigo-950 p-8">
            <h3 className="text-2xl font-extrabold">What your grant makes possible</h3>
            <ul className="mt-5 space-y-3 list-none p-0">
              {fund.map((f) => <li key={f} className="flex gap-3"><i className="ri-restaurant-fill text-red-600 mt-0.5" aria-hidden="true" />{f}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl border-2 border-amber-400/60 bg-amber-400/10 p-8">
            <h3 className="text-2xl font-extrabold">What funders receive</h3>
            <ul className="mt-5 space-y-3 list-none p-0">
              {receive.map((r) => <li key={r} className="flex gap-3 text-indigo-50"><i className="ri-checkbox-circle-fill text-amber-400 mt-0.5" aria-hidden="true" />{r}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
