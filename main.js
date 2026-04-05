/* TerraFinance — Application Logic */

const TRANSACTIONS_DATA = [
  { id: 1, date: 'April 19, 2026', description: 'Apple Store Online', category: 'Electronics', amount: -2499.00, status: 'Completed', type: 'expense' },
  { id: 2, date: 'April 18, 2026', description: 'Monthly Salary - Hooli Corp', category: 'Income', amount: 85000.00, status: 'Completed', type: 'income' },
  { id: 3, date: 'April 17, 2026', description: 'Zomato Delivery', category: 'Food & Dining', amount: -850.00, status: 'Completed', type: 'expense' },
  { id: 4, date: 'April 16, 2026', description: 'Amazon Prime Subscription', category: 'Entertainment', amount: -1499.00, status: 'Completed', type: 'expense' },
  { id: 5, date: 'April 15, 2026', description: 'Freelance Project Pay', category: 'Income', amount: 12000.00, status: 'Completed', type: 'income' },
  { id: 6, date: 'April 14, 2026', description: 'Starbucks Coffee', category: 'Food & Dining', amount: -450.00, status: 'Completed', type: 'expense' },
  { id: 7, date: 'April 12, 2026', description: 'Rent Payment', category: 'Housing', amount: -22000.00, status: 'Completed', type: 'expense' },
];

const VIEWS = {
  overview: {
    title: 'Dashboard Overview',
    content: `
      <div class="card-grid searchable-container">
        <div class="card searchable-item">
          <div class="text-label">Total Balance</div>
          <div class="text-value">₹1,24,500.00</div>
          <div class="badge badge-positive">+12.5% this month</div>
        </div>
        <div class="card searchable-item">
          <div class="text-label">Monthly Expenses</div>
          <div class="text-value">₹45,200.00</div>
          <div class="badge badge-warning">+5% vs last month</div>
        </div>
        <div class="card searchable-item">
          <div class="text-label">Active Investments</div>
          <div class="text-value">₹78,000.00</div>
          <div class="badge badge-positive">Positive Trend</div>
        </div>
      </div>
      <div style="margin-top: 40px;">
        <h3 style="margin-bottom: 24px;">Recent Activity</h3>
        <div class="card searchable-container" style="padding: 0; overflow: hidden;">
          <table style="width: 100%; border-collapse: collapse;">
             <tr style="border-bottom: 1px solid var(--outline-variant); background: var(--surface-container);">
                <th style="text-align: left; padding: 16px;">Description</th>
                <th style="text-align: left; padding: 16px;">Category</th>
                <th style="text-align: right; padding: 16px;">Amount</th>
                <th style="text-align: left; padding: 16px;">Status</th>
             </tr>
             <tbody id="overview-activity-rows">
                <!-- Populated via JS -->
             </tbody>
          </table>
        </div>
      </div>
    `,
    init: () => {
      const tbody = document.getElementById('overview-activity-rows');
      if (tbody) {
        tbody.innerHTML = TRANSACTIONS_DATA.slice(0, 3).map(tx => `
          <tr class="searchable-item" style="border-bottom: 1px solid var(--outline-variant);">
            <td style="padding: 16px;">${tx.description}</td>
            <td style="padding: 16px;">${tx.category}</td>
            <td style="text-align: right; padding: 16px;">${tx.amount < 0 ? '-' : '+'} ₹${Math.abs(tx.amount).toLocaleString()}</td>
            <td style="padding: 16px;"><span class="badge ${tx.type === 'income' ? 'badge-positive' : 'badge-warning'}">${tx.status}</span></td>
          </tr>
        `).join('');
      }
    }
  },
  insights: {
    title: 'Financial Insights',
    content: `
      <p style="color: var(--on-surface-variant); margin-bottom: 32px;">Detailed analysis of your monthly wealth flow and spending habits.</p>
      
      <div class="searchable-container" style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px;">
        <!-- Left Column -->
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <!-- Savings Card -->
          <div class="card searchable-item" style="background-color: var(--on-primary-container); border: none;">
            <div class="badge badge-positive" style="background: var(--primary); color: white;">
              # POSITIVE TREND
            </div>
            <h2 style="font-family: var(--font-headline); margin-top: 12px; font-weight: 700;">Savings percentage: You saved 22% of your income this month</h2>
            <p style="color: var(--primary); font-weight: 500; font-size: 0.9rem;">Excellent work! You've exceeded your monthly goal by 5%.</p>
            <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 24px;">
              <div>
                <div class="text-value" style="color: var(--primary); font-size: 2.5rem;">₹14,500</div>
                <div class="text-label" style="color: var(--primary); opacity: 0.6;">Total Saved This Month</div>
              </div>
              <button class="btn btn-primary">Adjust Savings Goal</button>
            </div>
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1.5fr; gap: 24px;">
             <!-- Spending Alerts -->
             <div class="card searchable-item" style="background-color: #ffdce0; border: none; color: #b83230;">
                <div class="badge badge-warning" style="background: #b83230; color: white;">
                  ! SPEND ALERT
                </div>
                <h3 style="font-family: var(--font-headline); color: #b83230; margin-top: 12px;">Monthly comparison: Expenses increased by 12%</h3>
                <p style="font-size: 0.75rem; margin-top: 16px;">Most of this increase comes from 'Entertainment' category purchases.</p>
             </div>
             
             <!-- Activity Summary -->
             <div class="card searchable-item">
                <div style="display: flex; gap: 12px; align-items: flex-start;">
                   <div style="background: var(--surface-container-highest); padding: 10px; border-radius: 12px;">
                      <i data-lucide="activity" style="color: var(--primary);"></i>
                   </div>
                   <div>
                      <h3 style="font-family: var(--font-headline);">Total transactions: 48 recorded</h3>
                   </div>
                </div>
                <div style="display: flex; gap: 32px; margin-top: 24px;">
                   <div>
                      <div style="font-weight: 700; font-size: 1.25rem;">12</div>
                      <div style="font-size: 0.65rem; text-transform: uppercase;">Automated</div>
                   </div>
                   <div>
                      <div style="font-weight: 700; font-size: 1.25rem;">36</div>
                      <div style="font-size: 0.65rem; text-transform: uppercase;">Manual</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
        
        <!-- Right Column -->
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <!-- Category Card -->
          <div class="card searchable-item" style="background-color: var(--surface-container-highest);">
            <div data-lucide="utensils" style="color: var(--primary); margin-bottom: 8px;"></div>
            <h3 style="font-family: var(--font-headline);">Highest category: Food (₹3,200)</h3>
            <div style="margin-top: 12px;">
              <div style="height: 8px; background: var(--surface-container); border-radius: 4px; overflow: hidden;">
                <div style="width: 64%; height: 100%; background: var(--primary);"></div>
              </div>
            </div>
          </div>

          <!-- Recommendation Card -->
          <div class="card searchable-item" style="background-color: var(--secondary-container); color: var(--on-secondary-container);">
            <div data-lucide="lightbulb" style="color: var(--primary); margin-bottom: 8px;"></div>
            <h3 style="font-family: var(--font-headline);">Smart Recommendation</h3>
            <p style="font-size: 0.85rem;">Switching to an annual plan could save you ₹450/month.</p>
          </div>
        </div>
      </div>
    `,
    init: () => {}
  },
  transactions: {
    title: 'Transactions History',
    content: `
      <div class="filter-bar" style="display: flex; gap: 12px; margin-bottom: 24px;">
        <button class="btn filter-btn active" data-filter="all" style="padding: 6px 12px; font-size: 0.75rem;">All</button>
        <button class="btn filter-btn" data-filter="income" style="padding: 6px 12px; font-size: 0.75rem; background: var(--surface-container);">Income</button>
        <button class="btn filter-btn" data-filter="expense" style="padding: 6px 12px; font-size: 0.75rem; background: var(--surface-container);">Expenses</button>
      </div>
      <div class="card searchable-container" style="padding: 0; overflow: hidden;">
          <table style="width: 100%; border-collapse: collapse;">
             <tr style="border-bottom: 1px solid var(--outline-variant); background: var(--surface-container);">
                <th style="text-align: left; padding: 16px;">Date</th>
                <th style="text-align: left; padding: 16px;">Description</th>
                <th style="text-align: left; padding: 16px;">Category</th>
                <th style="text-align: right; padding: 16px;">Amount</th>
                <th style="text-align: left; padding: 16px;">Status</th>
             </tr>
             <tbody id="transaction-rows">
                <!-- Rendered Dynamically -->
             </tbody>
          </table>
      </div>
    `,
    init: () => {
      renderTransactions('all');
      
      const filterBar = document.querySelector('.filter-bar');
      if (filterBar) {
        filterBar.addEventListener('click', (e) => {
          const btn = e.target.closest('.filter-btn');
          if (!btn) return;
          
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          renderTransactions(btn.getAttribute('data-filter'));
        });
      }
    }
  },
  settings: {
     title: 'Settings',
     content: `
       <div class="searchable-container" style="max-width: 600px;">
          <div class="card searchable-item" style="margin-bottom: 24px;">
             <h3>Profile Settings</h3>
             <p style="font-size: 0.85rem; color: var(--on-surface-variant);">Update your personal information and email.</p>
          </div>
          <div class="card searchable-item">
             <h3>App Preferences</h3>
             <p style="font-size: 0.85rem; color: var(--on-surface-variant);">Managed notifications and account visibility.</p>
          </div>
       </div>
     `,
     init: () => {}
  },
  help: {
    title: 'Help & Support',
    content: `
      <div class="card searchable-item" style="margin-bottom: 40px; text-align: center; padding: 40px;">
         <h2 style="margin-bottom: 16px;">How can we help you today?</h2>
         <p style="color: var(--on-surface-variant); margin-bottom: 24px;">Search our documentation or contact our support team.</p>
         <div style="max-width: 400px; margin: 0 auto; position: relative;">
            <input type="text" placeholder="Search for topics..." style="width: 100%; background: var(--surface-container); border: 1px solid var(--outline-variant); padding: 12px 12px 12px 40px; border-radius: var(--radius-m); outline: none;" />
            <i data-lucide="search" style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); width: 20px; color: var(--on-surface-variant);"></i>
         </div>
      </div>
      
      <div class="searchable-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px;">
         <div class="card searchable-item">
            <h3 style="font-family: var(--font-headline); margin-bottom: 12px;">Getting Started</h3>
            <p style="font-size: 0.85rem; color: var(--on-surface-variant);">Learn the basics of using TerraFinance to manage your wealth.</p>
         </div>
         <div class="card searchable-item">
            <h3 style="font-family: var(--font-headline); margin-bottom: 12px;">Security</h3>
            <p style="font-size: 0.85rem; color: var(--on-surface-variant);">Information about our bank-level security and data protection.</p>
         </div>
      </div>
    `,
    init: () => {}
  }
};

// State
let currentTheme = localStorage.getItem('theme') || 'light';
let currentView = 'insights';

// DOM Elements
const viewContainer = document.getElementById('view-container');
const viewTitle = document.getElementById('view-title');
const navItems = document.querySelectorAll('.nav-item');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const notificationBell = document.getElementById('notification-bell');
const notificationDropdown = document.getElementById('notification-dropdown');
const adminBtn = document.getElementById('admin-view-btn');
const adminModal = document.getElementById('admin-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const unreadDot = document.getElementById('unread-dot');
const universalSearch = document.getElementById('universal-search');

// Functions
function renderTransactions(filter = 'all') {
  const tbody = document.getElementById('transaction-rows');
  if (!tbody) return;
  
  const filteredData = filter === 'all' 
    ? TRANSACTIONS_DATA 
    : TRANSACTIONS_DATA.filter(tx => tx.type === filter);
    
  tbody.innerHTML = filteredData.map(tx => `
    <tr class="searchable-item" style="border-bottom: 1px solid var(--outline-variant);">
      <td style="padding: 16px;">${tx.date}</td>
      <td style="padding: 16px;">${tx.description}</td>
      <td style="padding: 16px;">${tx.category}</td>
      <td style="text-align: right; padding: 16px; font-weight: 700; color: ${tx.type === 'income' ? 'var(--primary)' : 'var(--error)'};">
        ${tx.amount < 0 ? '-' : '+'} ₹${Math.abs(tx.amount).toLocaleString()}
      </td>
      <td style="padding: 16px;"><span class="badge ${tx.type === 'income' ? 'badge-positive' : 'badge-warning'}">${tx.status}</span></td>
    </tr>
  `).join('');
  
  lucide.createIcons();
}

function handleSearch(query) {
  const normalizedQuery = query.toLowerCase().trim();
  const searchableItems = document.querySelectorAll('.searchable-item');
  
  searchableItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(normalizedQuery)) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  currentTheme = theme;
  
  if (theme === 'dark') {
    themeIcon.setAttribute('data-lucide', 'sun');
  } else {
    themeIcon.setAttribute('data-lucide', 'moon');
  }
  
  lucide.createIcons();
}

function setView(viewId) {
  if (!VIEWS[viewId]) return;
  
  currentView = viewId;
  viewTitle.textContent = VIEWS[viewId].title;
  viewContainer.innerHTML = VIEWS[viewId].content;
  
  navItems.forEach(item => {
    item.classList.toggle('active', item.getAttribute('data-view') === viewId);
  });
  
  // Initialize view-specific logic
  if (VIEWS[viewId].init) {
    VIEWS[viewId].init();
  }
  
  // Reset search
  universalSearch.value = '';
  
  // Animate
  viewContainer.classList.remove('fade-in');
  void viewContainer.offsetWidth;
  viewContainer.classList.add('fade-in');
  
  lucide.createIcons();
}

// Event Listeners
navItems.forEach(item => {
  item.addEventListener('click', () => {
    setView(item.getAttribute('data-view'));
  });
});

themeToggle.addEventListener('click', () => {
  setTheme(currentTheme === 'light' ? 'dark' : 'light');
});

universalSearch.addEventListener('input', (e) => {
  handleSearch(e.target.value);
});

notificationBell.addEventListener('click', (e) => {
  e.stopPropagation();
  notificationDropdown.classList.toggle('active');
  unreadDot.style.display = 'none';
});

document.addEventListener('click', () => {
  notificationDropdown.classList.remove('active');
});

adminBtn.addEventListener('click', () => {
  adminModal.classList.add('active');
  lucide.createIcons();
});

closeModalBtn.addEventListener('click', () => {
  adminModal.classList.remove('active');
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  setTheme(currentTheme);
  setView(currentView);
});
