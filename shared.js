/* ─── MARKET INTEL · SHARED JS ─────────────────────────────────────────── */

// ─── SEGMENTS ─────────────────────────────────────────────────────────────
const MI_SEGMENTS = [
  { id: 'oakville-detached',    name: 'Oakville Detached',     city: 'Oakville',     type: 'Detached', postalCodes: 'L6J/L6K/L6L/L6M', colour: '#C9A84C' },
  { id: 'forest-hill-detached', name: 'Forest Hill Detached',  city: 'Toronto',      type: 'Detached', postalCodes: 'M5P/M4V',         colour: '#e8c96a' },
  { id: 'bridle-path-luxury',   name: 'Bridle Path Luxury',    city: 'Toronto',      type: 'Detached', postalCodes: 'M3B/M4N',         colour: '#b8932e' },
  { id: 'yorkville-condos',     name: 'Yorkville Condos',      city: 'Toronto',      type: 'Condo',    postalCodes: 'M4W/M5R',         colour: '#d4b44a' },
  { id: 'lorne-park-detached',  name: 'Lorne Park Detached',   city: 'Mississauga',  type: 'Detached', postalCodes: 'L5H/L5J',         colour: '#a07830' },
];

// ─── KPI DEFINITIONS ──────────────────────────────────────────────────────
const MI_KPIS = [
  { key: 'avg_price',          label: 'Avg Price',        format: 'currency', higherIsBetter: true  },
  { key: 'median_price',       label: 'Median Price',     format: 'currency', higherIsBetter: true  },
  { key: 'transactions',       label: 'Transactions',     format: 'number',   higherIsBetter: true  },
  { key: 'new_listings',       label: 'New Listings',     format: 'number',   higherIsBetter: null  },
  { key: 'terminations',       label: 'Terminations',     format: 'number',   higherIsBetter: false },
  { key: 'avg_splp',           label: 'Avg SP/LP',        format: 'percent1', higherIsBetter: true  },
  { key: 'avg_dom',            label: 'Avg DOM',          format: 'number',   higherIsBetter: false },
  { key: 'pct_below_list',     label: '% Below List',     format: 'percent1', higherIsBetter: false },
  { key: 'total_dollar_volume',label: 'Dollar Volume',    format: 'currency_compact', higherIsBetter: true },
];

const MI_KPIS_STRIP = [
  { key: 'avg_price',      label: 'Avg Price',     format: 'currency_compact' },
  { key: 'median_price',   label: 'Median Price',  format: 'currency_compact' },
  { key: 'transactions',   label: 'Sales',         format: 'number'   },
  { key: 'new_listings',   label: 'New Listings',  format: 'number'   },
  { key: 'terminations',   label: 'Terminated',    format: 'number'   },
  { key: 'avg_splp',       label: 'SP/LP',         format: 'percent1' },
  { key: 'avg_dom',        label: 'Avg DOM',       format: 'number'   },
  { key: 'pct_below_list', label: '% Below List',  format: 'percent1' },
];

// ─── SEED DATA ────────────────────────────────────────────────────────────
// Oakville March 2026 from TRREB MLS. Other segments: no data yet.
// Historical monthly data for trend charts (12-month arc, Oakville only).
const MI_SEED_WEEKS = {
  '2026-W11': {
    week: '2026-W11', period_label: 'March 2026', period_type: 'monthly', period_end: '2026-03-31',
    source: 'TRREB MLS · Halton Region · Detached Homes',
    segments: {
      'oakville-detached': {
        segment_id: 'oakville-detached', segment_name: 'Oakville Detached', sample_size_flag: false,
        selected: {
          avg_price: 1850183, median_price: 1627500, avg_list_price: 1921271, median_list_price: 1676107,
          transactions: 102, new_listings: 341, terminations: 124,
          avg_splp: 96.3, median_splp: 97.1, avg_dom: 30, median_dom: 18,
          pct_above_list: 4.9, pct_at_list: 7.8, pct_below_list: 87.3,
          total_dollar_volume: 188718666
        },
        prior: {
          avg_price: 1834531, median_price: 1530000, avg_list_price: 1924378, median_list_price: 1638000,
          transactions: 71, new_listings: 274, terminations: 91,
          avg_splp: 95.3, median_splp: 96.2, avg_dom: 29, median_dom: 17,
          pct_above_list: 3.9, pct_at_list: 7.0, pct_below_list: 89.1,
          total_dollar_volume: 130251701
        },
        same_period_last_year: {
          avg_price: 1917422, median_price: 1765000, avg_list_price: 1972459, median_list_price: 1815000,
          transactions: 98, new_listings: 374, terminations: 147,
          avg_splp: 97.2, median_splp: 98.1, avg_dom: 25, median_dom: 14,
          pct_above_list: 7.1, pct_at_list: 10.2, pct_below_list: 82.7,
          total_dollar_volume: 187907356
        }
      },
      'forest-hill-detached': null, 'bridle-path-luxury': null,
      'yorkville-condos': null, 'lorne-park-detached': null
    }
  }
};

// 12-month historical trend for Oakville (for trend charts). Source: TRREB / public market data.
const MI_TREND_OAKVILLE = [
  { period: 'Apr 2025', avg_price: 1942000, transactions: 110, new_listings: 380, avg_splp: 97.8, avg_dom: 24, terminations: 138 },
  { period: 'May 2025', avg_price: 1955000, transactions: 118, new_listings: 395, avg_splp: 98.1, avg_dom: 22, terminations: 129 },
  { period: 'Jun 2025', avg_price: 1920000, transactions: 105, new_listings: 355, avg_splp: 97.4, avg_dom: 25, terminations: 134 },
  { period: 'Jul 2025', avg_price: 1895000, transactions: 88,  new_listings: 310, avg_splp: 96.8, avg_dom: 26, terminations: 118 },
  { period: 'Aug 2025', avg_price: 1878000, transactions: 82,  new_listings: 290, avg_splp: 96.5, avg_dom: 27, terminations: 112 },
  { period: 'Sep 2025', avg_price: 1902000, transactions: 96,  new_listings: 330, avg_splp: 96.9, avg_dom: 26, terminations: 121 },
  { period: 'Oct 2025', avg_price: 1886000, transactions: 89,  new_listings: 305, avg_splp: 96.4, avg_dom: 28, terminations: 108 },
  { period: 'Nov 2025', avg_price: 1860000, transactions: 72,  new_listings: 258, avg_splp: 96.1, avg_dom: 29, terminations: 99  },
  { period: 'Dec 2025', avg_price: 1840000, transactions: 55,  new_listings: 195, avg_splp: 95.8, avg_dom: 30, terminations: 78  },
  { period: 'Jan 2026', avg_price: 1822000, transactions: 48,  new_listings: 210, avg_splp: 95.0, avg_dom: 32, terminations: 82  },
  { period: 'Feb 2026', avg_price: 1834531, transactions: 71,  new_listings: 274, avg_splp: 95.3, avg_dom: 29, terminations: 91  },
  { period: 'Mar 2026', avg_price: 1850183, transactions: 102, new_listings: 341, avg_splp: 96.3, avg_dom: 30, terminations: 124 },
];

// ─── DATA LAYER ───────────────────────────────────────────────────────────
function getAllWeeks() {
  const fromSeed = Object.keys(MI_SEED_WEEKS);
  const fromStorage = JSON.parse(localStorage.getItem('mi_weeks') || '{}');
  const all = { ...MI_SEED_WEEKS, ...fromStorage };
  return Object.values(all).sort((a, b) => a.week > b.week ? -1 : 1);
}

function getWeekData(weekKey) {
  const fromStorage = JSON.parse(localStorage.getItem('mi_weeks') || '{}');
  return fromStorage[weekKey] || MI_SEED_WEEKS[weekKey] || null;
}

function getLatestWeek() {
  const weeks = getAllWeeks();
  return weeks.length > 0 ? weeks[0] : null;
}

function getSegmentData(weekData, segmentId) {
  if (!weekData || !weekData.segments) return null;
  return weekData.segments[segmentId] || null;
}

function saveWeekToStorage(weekData) {
  const stored = JSON.parse(localStorage.getItem('mi_weeks') || '{}');
  stored[weekData.week] = weekData;
  localStorage.setItem('mi_weeks', JSON.stringify(stored));
}

function getMISettings() {
  return JSON.parse(localStorage.getItem('mi_settings') || JSON.stringify({
    noteworthy_threshold: 5,
    segments_active: MI_SEGMENTS.map(s => s.id),
    voice_style: 'karolis'
  }));
}

// ─── DELTA COMPUTATION ────────────────────────────────────────────────────
function computeDelta(current, prior) {
  if (current == null || prior == null || prior === 0) return null;
  return ((current - prior) / Math.abs(prior)) * 100;
}

function computeDeltas(selected, prior, sply) {
  if (!selected) return {};
  const result = {};
  MI_KPIS.forEach(kpi => {
    const val = selected[kpi.key];
    const mom = prior ? computeDelta(val, prior[kpi.key]) : null;
    const yoy = sply ? computeDelta(val, sply[kpi.key]) : null;
    result[kpi.key] = { value: val, mom, yoy };
  });
  return result;
}

function isNoteworthy(delta, threshold = 5) {
  return delta != null && Math.abs(delta) >= threshold;
}

// ─── FORMATTING ──────────────────────────────────────────────────────────
function fmtCurrency(v, compact = false) {
  if (v == null) return '—';
  if (compact) {
    if (v >= 1e6) return '$' + (v / 1e6).toFixed(2).replace(/\.?0+$/, '') + 'M';
    if (v >= 1e3) return '$' + (v / 1e3).toFixed(0) + 'K';
  }
  return '$' + Math.round(v).toLocaleString('en-CA');
}

function fmtNum(v) {
  if (v == null) return '—';
  return Math.round(v).toLocaleString('en-CA');
}

function fmtPct(v, decimals = 1) {
  if (v == null) return '—';
  return v.toFixed(decimals) + '%';
}

function fmtVal(v, format) {
  if (v == null) return '—';
  switch (format) {
    case 'currency':         return fmtCurrency(v);
    case 'currency_compact': return fmtCurrency(v, true);
    case 'number':           return fmtNum(v);
    case 'percent1':         return fmtPct(v, 1);
    case 'percent0':         return fmtPct(v, 0);
    default:                 return String(v);
  }
}

function fmtDelta(d) {
  if (d == null) return '—';
  const sign = d >= 0 ? '+' : '';
  return sign + d.toFixed(1) + '%';
}

function deltaClass(delta, higherIsBetter) {
  if (delta == null) return 'delta-neut';
  if (higherIsBetter === null) return 'delta-neut';
  if (higherIsBetter) return delta > 0 ? 'delta-up' : 'delta-down';
  return delta > 0 ? 'delta-down' : 'delta-up';
}

function deltaArrow(delta) {
  if (delta == null) return '';
  return delta >= 0 ? '▲' : '▼';
}

function deltaChip(delta, higherIsBetter, label) {
  if (delta == null) return '';
  const cls = deltaClass(delta, higherIsBetter);
  const arrow = deltaArrow(delta);
  return `<span class="delta-chip ${cls}">${arrow} ${fmtDelta(delta)}<span class="delta-chip-label">${label}</span></span>`;
}

// ─── AI NARRATIVE (template-based; wire Claude API to compose_narrative.py later) ──
function generateNarrative(segData) {
  if (!segData) return null;
  const sel  = segData.selected;
  const prior = segData.prior;
  const sply  = segData.same_period_last_year;
  const seg   = MI_SEGMENTS.find(s => s.id === segData.segment_id) || { name: segData.segment_name };

  const momPrice = computeDelta(sel.avg_price, prior?.avg_price);
  const yoyPrice = computeDelta(sel.avg_price, sply?.avg_price);
  const momMedian = computeDelta(sel.median_price, prior?.median_price);
  const yoyMedian = computeDelta(sel.median_price, sply?.median_price);
  const momVol  = computeDelta(sel.transactions, prior?.transactions);
  const yoyVol  = computeDelta(sel.transactions, sply?.transactions);
  const momTerm = computeDelta(sel.terminations, prior?.terminations);
  const momDOM  = computeDelta(sel.avg_dom, prior?.avg_dom);
  const yoyDOM  = computeDelta(sel.avg_dom, sply?.avg_dom);

  const buyerMarket = sel.avg_splp < 97.5 && sel.pct_below_list > 75;
  const verdictLabel = buyerMarket ? "BUYER'S MARKET" : "SELLER'S MARKET";

  // Headline
  let headline = '';
  if (momTerm != null && momTerm > 30) {
    headline = `${verdictLabel} — ${sel.terminations} terminations and counting. These sellers need a new plan.`;
  } else if (momVol != null && momVol > 35 && sel.avg_splp < 97) {
    headline = `${verdictLabel} — Volume is back. Seller leverage isn't.`;
  } else if (yoyPrice != null && yoyPrice < -3) {
    headline = `${verdictLabel} — Prices off ${Math.abs(yoyPrice).toFixed(1)}% year-over-year. The spring surge masks a deeper reset.`;
  } else {
    headline = `${verdictLabel} — ${seg.name} in transition. Read the SP/LP, not the volume.`;
  }

  // Executive summary
  const execSummary = buildExecSummary(sel, prior, sply, { momPrice, yoyPrice, momVol, momTerm, buyerMarket });

  // Price analysis
  const priceAnalysis = buildPriceAnalysis(sel, prior, sply, { momPrice, yoyPrice, momMedian, yoyMedian });

  // Volume & supply
  const volumeAnalysis = buildVolumeAnalysis(sel, prior, sply, { momVol, yoyVol, momDOM, yoyDOM });

  // Buyer/seller dynamics
  const dynamicsAnalysis = buildDynamicsAnalysis(sel, prior, sply, { momTerm, buyerMarket });

  // Outlook
  const outlook = buildOutlook(sel, prior, sply, { momVol, momTerm, momPrice, yoyDOM });

  return { headline, execSummary, priceAnalysis, volumeAnalysis, dynamicsAnalysis, outlook };
}

function buildExecSummary(sel, prior, sply, { momPrice, yoyPrice, momVol, momTerm, buyerMarket }) {
  const parts = [];
  if (momVol != null && prior) {
    parts.push(`${sel.segment_name || 'This segment'} posted ${fmtNum(sel.transactions)} sales${prior ? `, ${momVol > 0 ? 'up' : 'down'} ${Math.abs(momVol).toFixed(1)}% from ${fmtNum(prior.transactions)} the prior period` : ''}.`);
  }
  if (sel.pct_below_list != null) {
    const avgGap = sel.avg_list_price ? Math.round(sel.avg_list_price - sel.avg_price) : null;
    parts.push(`${fmtPct(sel.pct_below_list)} of homes sold below asking${avgGap ? ` — an average discount of ${fmtCurrency(avgGap)} per transaction` : ''}.`);
  }
  if (yoyPrice != null) {
    const direction = yoyPrice >= 0 ? 'up' : 'down';
    parts.push(`Year-over-year, the average price is ${direction} ${Math.abs(yoyPrice).toFixed(1)}% — the trend that matters most for Karolis's pitch to sellers who bought at peak.`);
  }
  return parts.join(' ');
}

function buildPriceAnalysis(sel, prior, sply, { momPrice, yoyPrice, momMedian, yoyMedian }) {
  let p = `Average price ${momPrice != null ? (momPrice >= 0 ? `edged up ${momPrice.toFixed(1)}%` : `pulled back ${Math.abs(momPrice).toFixed(1)}%`) : 'came in'} at ${fmtCurrency(sel.avg_price)}.`;
  if (yoyPrice != null) {
    p += ` The year-over-year picture is ${Math.abs(yoyPrice).toFixed(1)}% ${yoyPrice >= 0 ? 'stronger' : 'softer'} than the same period last year (${sply ? fmtCurrency(sply.avg_price) : '—'}).`;
  }
  if (sel.median_price && sel.avg_price) {
    const gap = sel.avg_price - sel.median_price;
    p += ` The ${fmtCurrency(gap)} gap between average and median signals that trophy-tier transactions are pulling the average up — the mid-market is trading closer to ${fmtCurrency(sel.median_price)}.`;
    if (momMedian != null) {
      p += ` Median is ${momMedian >= 0 ? 'up' : 'down'} ${Math.abs(momMedian).toFixed(1)}% period-over-period${yoyMedian != null ? ` and ${Math.abs(yoyMedian).toFixed(1)}% ${yoyMedian >= 0 ? 'above' : 'below'} last year's comparable` : ''}.`;
    }
  }
  return p;
}

function buildVolumeAnalysis(sel, prior, sply, { momVol, yoyVol, momDOM, yoyDOM }) {
  let p = '';
  if (momVol != null) {
    p += `${fmtNum(sel.transactions)} closed sales — ${momVol >= 0 ? 'up' : 'down'} ${Math.abs(momVol).toFixed(1)}% from the prior period.`;
  }
  if (sel.new_listings && sel.transactions) {
    const absorptionRate = ((sel.transactions / sel.new_listings) * 100).toFixed(0);
    p += ` With ${fmtNum(sel.new_listings)} new listings against ${fmtNum(sel.transactions)} sales, the absorption rate sits at ${absorptionRate}% — ${parseInt(absorptionRate) < 30 ? "inventory is building and buyers have choice" : parseInt(absorptionRate) < 50 ? "balanced conditions" : "supply is tight"}.`;
  }
  if (momDOM != null) {
    p += ` Average days on market is ${Math.abs(momDOM).toFixed(0)}% ${momDOM >= 0 ? 'longer' : 'shorter'} than last period at ${fmtNum(sel.avg_dom)} days`;
    if (yoyDOM != null) {
      p += ` — ${Math.abs(yoyDOM).toFixed(0)}% ${yoyDOM >= 0 ? 'above' : 'below'} the same period last year`;
    }
    p += '.';
  }
  return p;
}

function buildDynamicsAnalysis(sel, prior, sply, { momTerm, buyerMarket }) {
  let p = '';
  if (sel.terminations) {
    p += `${fmtNum(sel.terminations)} terminations this period`;
    if (momTerm != null) {
      p += ` — ${momTerm >= 0 ? 'up' : 'down'} ${Math.abs(momTerm).toFixed(1)}% from the prior period`;
    }
    p += '. ';
    if (momTerm > 20) {
      p += `That acceleration in failed listings is the signal: sellers are testing price points that buyers won't meet. `;
    }
  }
  if (sel.avg_splp) {
    const gap = sel.avg_list_price ? Math.round(sel.avg_list_price - sel.avg_price) : null;
    p += `The ${fmtPct(sel.avg_splp)} average SP/LP means the typical seller is netting ${gap ? fmtCurrency(gap) : 'a meaningful discount'} below their ask. `;
    p += `${buyerMarket
      ? `At ${fmtPct(sel.pct_below_list)} of sales coming in below asking, buyers are disciplined and extracting concessions. Sellers who aren't priced precisely are sitting — and eventually coming off.`
      : `Sellers retain some leverage — but the spread is compressing compared to the peak.`}`;
  }
  return p;
}

function buildOutlook(sel, prior, sply, { momVol, momTerm, momPrice, yoyDOM }) {
  let p = 'Spring momentum typically peaks in April–May. ';
  if (momVol != null && momVol > 30) {
    p += `The volume surge this period is consistent with seasonal patterns — expect continued activity, but watch whether sellers reprice to meet the market or dig in on ask. `;
  }
  if (sel.terminations > 100) {
    p += `If the termination count climbs above ${Math.round(sel.terminations * 1.15)} next period, it signals a meaningful increase in seller frustration — Karolis's call list grows accordingly. `;
  }
  if (yoyDOM != null && yoyDOM > 15) {
    p += `Days on market trending ${Math.abs(yoyDOM).toFixed(0)}% above last year's pace is the watchlist metric: if it continues to climb into summer, this market hasn't bottomed yet. `;
  }
  p += `No price predictions — but the data supports a targeted outreach to terminated listings and overpriced actives sitting past 45 DOM.`;
  return p;
}

// ─── TILE TAKEAWAY (one-liner for the This Week page) ─────────────────────
function generateTileInsight(segData) {
  if (!segData) return 'No data this period.';
  const sel  = segData.selected;
  const prior = segData.prior;
  const momVol  = computeDelta(sel.transactions, prior?.transactions);
  const momTerm = computeDelta(sel.terminations, prior?.terminations);
  if (momTerm != null && momTerm > 25) {
    return `${sel.terminations} terminations — up ${momTerm.toFixed(0)}% MoM. These are Karolis's calls.`;
  }
  if (momVol != null && momVol > 30 && sel.avg_splp < 97) {
    return `Sales +${momVol.toFixed(0)}% MoM but ${fmtPct(sel.pct_below_list)} still selling below ask. Buyers have leverage.`;
  }
  if (sel.avg_splp < 96) {
    return `SP/LP ${fmtPct(sel.avg_splp)} — sellers averaging ${fmtCurrency(Math.round((sel.avg_list_price||sel.avg_price*1.04) - sel.avg_price))} below ask.`;
  }
  return `${fmtNum(sel.transactions)} sales · ${fmtPct(sel.avg_splp)} SP/LP · ${sel.avg_dom}d avg DOM.`;
}

// ─── CHART HELPERS ────────────────────────────────────────────────────────
const CHART_DEFAULTS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#111',
      borderColor: '#2a2a2a',
      borderWidth: 1,
      titleColor: '#fff',
      bodyColor: '#999',
      padding: 10,
      titleFont: { family: "'Inter', sans-serif", size: 12, weight: '600' },
      bodyFont:  { family: "'Inter', sans-serif", size: 11 },
    }
  },
  scales: {
    x: {
      grid: { color: 'rgba(255,255,255,.04)', drawBorder: false },
      ticks: { color: '#555', font: { family: "'Inter', sans-serif", size: 10 } }
    },
    y: {
      grid: { color: 'rgba(255,255,255,.04)', drawBorder: false },
      ticks: { color: '#555', font: { family: "'Inter', sans-serif", size: 10 } }
    }
  }
};

function buildChartOptions(overrides = {}) {
  return deepMerge(JSON.parse(JSON.stringify(CHART_DEFAULTS)), overrides);
}

function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      target[key] = target[key] || {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// ─── SIDEBAR ──────────────────────────────────────────────────────────────
const MI_NAV = [
  { id: 'index',      label: 'This Week',        icon: '◈', href: 'index.html'      },
  { id: 'segment',    label: 'Segment Detail',   icon: '◉', href: 'segment.html'    },
  { id: 'compare',    label: 'Compare',          icon: '⊞', href: 'compare.html'    },
  { id: 'trends',     label: 'Trends',           icon: '↗', href: 'trends.html'     },
  { id: 'newsletter', label: 'Newsletter Helper',icon: '✉', href: 'newsletter.html' },
  { id: 'history',    label: 'History',          icon: '◷', href: 'history.html'    },
];
const MI_NAV_BOTTOM = [
  { id: 'input',      label: 'Data Input',       icon: '＋', href: 'input.html'    },
  { id: 'settings-mi',label: 'Settings',         icon: '⚙', href: 'settings-mi.html' },
];

function buildMISidebar(activeId) {
  const el = document.getElementById('sidebar');
  if (!el) return;
  const week = getLatestWeek();
  const weekLabel = week ? week.period_label : 'No data yet';

  el.innerHTML = `
    <div class="sidebar-logo">
      <div class="sidebar-logo-title">Market Intel</div>
      <div class="sidebar-logo-sub">Latest: ${weekLabel}</div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-section-label">Analysis</div>
      ${MI_NAV.map(n => `
        <a class="sidebar-item${n.id === activeId ? ' active' : ''}" href="${n.href}">
          <span class="sidebar-icon">${n.icon}</span>${n.label}
        </a>`).join('')}
    </div>
    <div class="sidebar-divider"></div>
    <div class="sidebar-section">
      <div class="sidebar-section-label">Admin</div>
      ${MI_NAV_BOTTOM.map(n => `
        <a class="sidebar-item${n.id === activeId ? ' active' : ''}" href="${n.href}">
          <span class="sidebar-icon">${n.icon}</span>${n.label}
        </a>`).join('')}
    </div>
    <div class="sidebar-back">
      <a href="https://github.com/businessjaysingh-dotcom/kr-market-intel">← GitHub Repo</a>
    </div>`;
}

// ─── UTILITY ──────────────────────────────────────────────────────────────
function setDate(el) {
  if (!el) return;
  el.textContent = new Date().toLocaleDateString('en-CA', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
}

function getURLParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function copyText(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = 'Copied ✓';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 2000);
  });
}

function kpiStripHTML(segData) {
  if (!segData) return '';
  const sel   = segData.selected;
  const prior  = segData.prior;
  const sply   = segData.same_period_last_year;

  return `<div class="kpi-strip">${MI_KPIS_STRIP.map(kpi => {
    const val  = sel[kpi.key];
    const mom  = prior ? computeDelta(val, prior[kpi.key]) : null;
    const yoy  = sply  ? computeDelta(val, sply[kpi.key])  : null;
    const def  = MI_KPIS.find(k => k.key === kpi.key);
    const hib  = def ? def.higherIsBetter : null;
    return `<div class="kpi-cell">
      <div class="kpi-cell-label">${kpi.label}</div>
      <div class="kpi-cell-val">${fmtVal(val, kpi.format)}</div>
      <div class="kpi-cell-deltas">
        ${mom != null ? deltaChip(mom, hib, 'MoM') : '<span class="delta-chip delta-neut">— MoM</span>'}
        ${yoy != null ? deltaChip(yoy, hib, 'YoY') : '<span class="delta-chip delta-neut">— YoY</span>'}
      </div>
    </div>`;
  }).join('')}</div>`;
}
