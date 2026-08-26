import json, os

json_path = r'c:\Users\togawa_takayuki\.gemini\antigravity\YAGATE\live-event-showcase\yagate_excel_data.json'
with open(json_path, 'r', encoding='utf-8') as f:
    excel_data = json.load(f)

html_content = f'''<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>YAGATE 資料ポータル & ビューア</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;600;700&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/lucide@latest/dist/umd/lucide.js"></script>
<style>
:root {{
  --primary: #4F46E5;
  --primary-hover: #4338CA;
  --primary-light: #EEF2FF;
  --accent: #06B6D4;
  --bg-main: #0B0F19;
  --bg-card: #111827;
  --bg-card-alt: #1F2937;
  --border: #374151;
  --text-main: #F9FAFB;
  --text-sub: #9CA3AF;
  --text-muted: #6B7280;
  --success: #10B981;
  --warning: #F59E0B;
  --danger: #EF4444;
}}

* {{ box-sizing: border-box; margin: 0; padding: 0; }}
body {{
  font-family: 'Plus Jakarta Sans', 'Noto Sans JP', sans-serif;
  background-color: var(--bg-main);
  color: var(--text-main);
  line-height: 1.5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}}

/* Header */
header {{
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 0 24px;
}}
.header-inner {{
  max-width: 1600px;
  margin: 0 auto;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}}
.brand {{
  display: flex;
  align-items: center;
  gap: 12px;
}}
.brand-badge {{
  background: linear-gradient(135deg, #4F46E5, #06B6D4);
  color: white;
  font-weight: 800;
  font-size: 14px;
  padding: 4px 10px;
  border-radius: 8px;
  letter-spacing: 0.05em;
}}
.brand-title {{
  font-size: 17px;
  font-weight: 700;
  color: #FFFFFF;
}}
.brand-sub {{
  font-size: 11.5px;
  color: var(--text-muted);
  font-weight: 500;
}}

/* Nav Tabs */
.tabs {{
  display: flex;
  gap: 8px;
  background: #1F2937;
  padding: 4px;
  border-radius: 12px;
  border: 1px solid var(--border);
}}
.tab-btn {{
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-sub);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}}
.tab-btn:hover {{
  color: var(--text-main);
  background: rgba(255,255,255,0.05);
}}
.tab-btn.active {{
  color: #FFFFFF;
  background: var(--primary);
  box-shadow: 0 2px 10px rgba(79, 70, 229, 0.4);
}}

.actions {{
  display: flex;
  align-items: center;
  gap: 12px;
}}
.btn-outline {{
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-sub);
  background: var(--bg-card);
  border: 1px solid var(--border);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
}}
.btn-outline:hover {{
  color: var(--text-main);
  border-color: var(--text-muted);
  background: var(--bg-card-alt);
}}

/* Main Container */
main {{
  flex: 1;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
}}

.view-section {{
  display: none;
  flex-direction: column;
  height: 100%;
  flex: 1;
}}
.view-section.active {{
  display: flex;
}}

/* HTML View Frame */
.html-frame-container {{
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: white;
  height: calc(100vh - 170px);
  position: relative;
}}
.html-frame {{
  width: 100%;
  height: 100%;
  border: none;
}}

/* Excel Sheet Viewer */
.excel-container {{
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
}}
.sheet-nav {{
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 6px;
}}
.sheet-btn {{
  padding: 7px 16px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text-sub);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s;
}}
.sheet-btn:hover {{
  color: var(--text-main);
  background: var(--bg-card-alt);
  border-color: var(--text-muted);
}}
.sheet-btn.active {{
  background: var(--primary);
  color: white;
  border-color: var(--primary);
  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.35);
}}

/* Quick KPI Row */
.kpi-row {{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
  margin-bottom: 4px;
}}
.kpi-card {{
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}}
.kpi-label {{
  font-size: 12px;
  color: var(--text-sub);
  font-weight: 500;
}}
.kpi-val {{
  font-size: 22px;
  font-weight: 700;
  color: var(--text-main);
}}
.kpi-desc {{
  font-size: 11px;
  color: var(--text-muted);
}}

/* Table Controls */
.table-toolbar {{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  background: var(--bg-card);
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid var(--border);
}}
.search-box {{
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-main);
  border: 1px solid var(--border);
  padding: 6px 12px;
  border-radius: 6px;
  width: 320px;
}}
.search-box input {{
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-main);
  font-size: 13px;
  width: 100%;
}}
.sheet-info-badge {{
  font-size: 12px;
  color: var(--text-sub);
  background: var(--bg-card-alt);
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid var(--border);
}}

/* Data Table */
.table-wrapper {{
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: auto;
  max-height: calc(100vh - 280px);
  position: relative;
}}
table.data-table {{
  width: 100%;
  border-collapse: collapse;
  font-size: 12.5px;
  text-align: left;
}}
table.data-table th, table.data-table td {{
  padding: 10px 14px;
  border: 1px solid #2D3748;
  white-space: nowrap;
}}
table.data-table thead tr {{
  background: #1A202C;
  position: sticky;
  top: 0;
  z-index: 10;
}}
table.data-table th {{
  font-weight: 700;
  color: #E2E8F0;
  letter-spacing: 0.03em;
}}
table.data-table tbody tr:nth-child(even) {{
  background: rgba(255, 255, 255, 0.02);
}}
table.data-table tbody tr:hover {{
  background: rgba(79, 70, 229, 0.15);
}}
.num-cell {{
  text-align: right;
  font-variant-numeric: tabular-nums;
  font-family: 'Plus Jakarta Sans', monospace;
}}
.highlight-neg {{
  color: #F87171 !important;
  font-weight: 600;
}}
.highlight-pos {{
  color: #34D399 !important;
  font-weight: 600;
}}

/* Floating Banner */
.floating-status {{
  background: linear-gradient(90deg, #1E1B4B, #0F172A);
  border: 1px solid #4338CA;
  border-radius: 8px;
  padding: 10px 16px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
}}
</style>
</head>
<body>

<header>
  <div class="header-inner">
    <div class="brand">
      <span class="brand-badge">YAGATE</span>
      <div>
        <div class="brand-title">YAGATE 資料 & 収益管理 統合ポータル</div>
        <div class="brand-sub">MTGプレゼン (HTML) / MTG資料 (Excel) / 収益管理ダッシュボード (Excel)</div>
      </div>
    </div>

    <div class="tabs">
      <button class="tab-btn active" id="btn-tab-html" onclick="switchMainTab('html-mtg')">
        <i data-lucide="presentation" style="width:16px;height:16px;"></i> ① MTGプレゼン (HTML)
      </button>
      <button class="tab-btn" id="btn-tab-excel-mtg" onclick="switchMainTab('excel-mtg')">
        <i data-lucide="file-spreadsheet" style="width:16px;height:16px;"></i> ② MTG資料 (Excel)
      </button>
      <button class="tab-btn" id="btn-tab-excel-dashboard" onclick="switchMainTab('excel-dashboard')">
        <i data-lucide="layout-dashboard" style="width:16px;height:16px;"></i> ③ 収益管理ダッシュボード (Excel)
      </button>
    </div>

    <div class="actions">
      <a href="./YAGATE_MTG資料 (4).html" target="_blank" class="btn-outline">
        <i data-lucide="external-link" style="width:14px;height:14px;"></i> HTML資料を別タブで開く
      </a>
    </div>
  </div>
</header>

<main>
  <!-- TAB 1: MTG HTML PRESENTATION -->
  <div id="view-html-mtg" class="view-section active">
    <div class="floating-status">
      <span>💡 <strong>YAGATE 定例MTG資料 (HTMLプレゼンテーション)</strong> を直接埋め込み表示しています。</span>
      <a href="./YAGATE_MTG資料 (4).html" target="_blank" style="color:#818CF8; font-weight:600; text-decoration:none;">全画面で開く ↗</a>
    </div>
    <div class="html-frame-container">
      <iframe src="./YAGATE_MTG資料 (4).html" class="html-frame" title="YAGATE 定例MTG資料"></iframe>
    </div>
  </div>

  <!-- TAB 2: MTG EXCEL DATA -->
  <div id="view-excel-mtg" class="view-section">
    <div class="excel-container">
      <div class="floating-status">
        <span>📊 <strong>YAGATE_MTG資料.xlsx</strong> の全シート（収支、損益分岐、会場、ゲスト、集客、業界比較、議題、宿題等）をブラウザ上で直接閲覧できます。</span>
      </div>

      <div class="sheet-nav" id="sheets-mtg"></div>

      <div class="table-toolbar">
        <div class="search-box">
          <i data-lucide="search" style="width:14px;height:14px;color:var(--text-muted);"></i>
          <input type="text" placeholder="表内を検索..." oninput="filterTable('table-mtg', this.value)">
        </div>
        <div class="sheet-info-badge" id="info-mtg"></div>
      </div>

      <div class="table-wrapper">
        <table class="data-table" id="table-mtg">
          <thead id="thead-mtg"></thead>
          <tbody id="tbody-mtg"></tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- TAB 3: DASHBOARD EXCEL DATA -->
  <div id="view-excel-dashboard" class="view-section">
    <div class="excel-container">
      <div class="floating-status">
        <span>📈 <strong>YAGATE_収益管理ダッシュボード (2).xlsx</strong> の全シート（ダッシュボード、公演データ、予約者ログ、流入元、会場マスタ）を閲覧できます。</span>
      </div>

      <!-- Quick KPI for Dashboard -->
      <div class="kpi-row">
        <div class="kpi-card">
          <span class="kpi-label">累計公演数</span>
          <span class="kpi-val">38 公演</span>
          <span class="kpi-desc">vol.1 〜 vol.37 + 次回</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-label">累計販売枚数</span>
          <span class="kpi-val" style="color:#38BDF8;">1,071 枚</span>
          <span class="kpi-desc">平均 28.2 枚 / 公演</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-label">累計売上</span>
          <span class="kpi-val" style="color:#34D399;">¥1,603,080</span>
          <span class="kpi-desc">平均 ¥42,186 / 公演</span>
        </div>
        <div class="kpi-card">
          <span class="kpi-label">累計損益</span>
          <span class="kpi-val highlight-neg">-¥533,120</span>
          <span class="kpi-desc">1公演あたり約▲14,500円</span>
        </div>
      </div>

      <div class="sheet-nav" id="sheets-dashboard"></div>

      <div class="table-toolbar">
        <div class="search-box">
          <i data-lucide="search" style="width:14px;height:14px;color:var(--text-muted);"></i>
          <input type="text" placeholder="表内を検索..." oninput="filterTable('table-dashboard', this.value)">
        </div>
        <div class="sheet-info-badge" id="info-dashboard"></div>
      </div>

      <div class="table-wrapper">
        <table class="data-table" id="table-dashboard">
          <thead id="thead-dashboard"></thead>
          <tbody id="tbody-dashboard"></tbody>
        </table>
      </div>
    </div>
  </div>
</main>

<script>
const EXCEL_DATA = ''' + json.dumps(excel_data, ensure_ascii=False) + ''';

function init() {
  lucide.createIcons();
  
  // Init MTG Excel sheets
  const mtgFile = 'YAGATE_MTG資料.xlsx';
  const mtgSheets = Object.keys(EXCEL_DATA[mtgFile] || {});
  const mtgNav = document.getElementById('sheets-mtg');
  mtgNav.innerHTML = '';
  mtgSheets.forEach((sName, idx) => {
    const btn = document.createElement('button');
    btn.className = 'sheet-btn' + (idx === 1 ? ' active' : '');
    btn.textContent = sName;
    btn.onclick = () => renderExcelSheet('mtg', mtgFile, sName, btn);
    mtgNav.appendChild(btn);
  });
  if (mtgSheets.length > 0) {
    const initialSheet = mtgSheets.length > 1 ? mtgSheets[1] : mtgSheets[0];
    renderExcelSheet('mtg', mtgFile, initialSheet, mtgNav.children[mtgSheets.indexOf(initialSheet)]);
  }

  // Init Dashboard Excel sheets
  const dashFile = 'YAGATE_収益管理ダッシュボード (2).xlsx';
  const dashSheets = Object.keys(EXCEL_DATA[dashFile] || {});
  const dashNav = document.getElementById('sheets-dashboard');
  dashNav.innerHTML = '';
  dashSheets.forEach((sName, idx) => {
    const btn = document.createElement('button');
    btn.className = 'sheet-btn' + (idx === 0 ? ' active' : '');
    btn.textContent = sName;
    btn.onclick = () => renderExcelSheet('dashboard', dashFile, sName, btn);
    dashNav.appendChild(btn);
  });
  if (dashSheets.length > 0) {
    renderExcelSheet('dashboard', dashFile, dashSheets[0], dashNav.children[0]);
  }
}

function switchMainTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
  
  if (tabId === 'html-mtg') {
    document.getElementById('btn-tab-html').classList.add('active');
    document.getElementById('view-html-mtg').classList.add('active');
  } else if (tabId === 'excel-mtg') {
    document.getElementById('btn-tab-excel-mtg').classList.add('active');
    document.getElementById('view-excel-mtg').classList.add('active');
  } else if (tabId === 'excel-dashboard') {
    document.getElementById('btn-tab-excel-dashboard').classList.add('active');
    document.getElementById('view-excel-dashboard').classList.add('active');
  }
}

function renderExcelSheet(prefix, fileName, sheetName, clickedBtn) {
  if (clickedBtn) {
    const parent = clickedBtn.parentElement;
    parent.querySelectorAll('.sheet-btn').forEach(b => b.classList.remove('active'));
    clickedBtn.classList.add('active');
  }

  const rows = EXCEL_DATA[fileName][sheetName] || [];
  const thead = document.getElementById(`thead-${prefix}`);
  const tbody = document.getElementById(`tbody-${prefix}`);
  const info = document.getElementById(`info-${prefix}`);

  info.textContent = `シート: ${sheetName} (${rows.length} 行)`;

  thead.innerHTML = '';
  tbody.innerHTML = '';

  if (rows.length === 0) {
    tbody.innerHTML = '<tr><td colspan="10" style="text-align:center;color:var(--text-muted);padding:30px;">データがありません</td></tr>';
    return;
  }

  // Find max columns
  let maxCols = 0;
  rows.forEach(r => { if (r.length > maxCols) maxCols = r.length; });

  // Use first row as header
  const firstRow = rows[0];
  const trHead = document.createElement('tr');
  const thIdx = document.createElement('th');
  thIdx.textContent = '#';
  thIdx.style.width = '45px';
  trHead.appendChild(thIdx);

  for (let c = 0; c < maxCols; c++) {
    const th = document.createElement('th');
    th.textContent = firstRow[c] || `列 ${c+1}`;
    trHead.appendChild(th);
  }
  thead.appendChild(trHead);

  // Body rows
  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    const tr = document.createElement('tr');
    
    const tdIdx = document.createElement('td');
    tdIdx.textContent = r;
    tdIdx.style.color = 'var(--text-muted)';
    tdIdx.className = 'num-cell';
    tr.appendChild(tdIdx);

    for (let c = 0; c < maxCols; c++) {
      const td = document.createElement('td');
      const val = (row[c] !== undefined && row[c] !== null) ? row[c] : '';
      td.textContent = val;

      if (!isNaN(val) && val.trim() !== '') {
        td.className = 'num-cell';
        const num = parseFloat(val);
        if (num < 0) {
          td.classList.add('highlight-neg');
        }
      } else if (typeof val === 'string' && (val.startsWith('-') || val.includes('▲'))) {
        td.classList.add('highlight-neg');
      }
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

function filterTable(tableId, query) {
  const q = query.toLowerCase();
  const table = document.getElementById(tableId);
  const rows = table.querySelectorAll('tbody tr');
  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(q) ? '' : 'none';
  });
}

document.addEventListener('DOMContentLoaded', init);
</script>
</body>
</html>
'''

output_path = r'c:\Users\togawa_takayuki\.gemini\antigravity\YAGATE\live-event-showcase\YAGATE_統合ポータル.html'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html_content)

print(f'Successfully generated portal at: {output_path}')
