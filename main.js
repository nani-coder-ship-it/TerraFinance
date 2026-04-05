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
          
          <!-- Categorical Breakdown -->
          <div class="card searchable-item">
            <h3 style="font-family: var(--font-headline); margin-bottom: 20px;">📊 Spending by Category</h3>
            <div id="category-breakdown" style="display: flex; flex-direction: column; gap: 14px;">
              <!-- Populated by JS -->
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
    init: () => {
      renderCategoryBreakdown();
    }
  },
  transactions: {
    title: 'Transactions History',
    content: `
      <div class="filter-bar" style="display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap;">
        <div style="display: flex; gap: 8px;">
          <button class="btn filter-btn active" data-filter="all" style="padding: 6px 12px; font-size: 0.75rem;">All</button>
          <button class="btn filter-btn" data-filter="income" style="padding: 6px 12px; font-size: 0.75rem; background: var(--surface-container);">Income</button>
          <button class="btn filter-btn" data-filter="expense" style="padding: 6px 12px; font-size: 0.75rem; background: var(--surface-container);">Expenses</button>
        </div>
        <div style="display: flex; gap: 8px; margin-left: auto;">
          <button class="btn sort-btn active" data-sort="date-desc" style="padding: 6px 12px; font-size: 0.75rem; background: var(--surface-container);">📅 New→Old</button>
          <button class="btn sort-btn" data-sort="date-asc" style="padding: 6px 12px; font-size: 0.75rem; background: var(--surface-container);">📅 Old→New</button>
          <button class="btn sort-btn" data-sort="amount-desc" style="padding: 6px 12px; font-size: 0.75rem; background: var(--surface-container);">💰 High→Low</button>
          <button class="btn sort-btn" data-sort="amount-asc" style="padding: 6px 12px; font-size: 0.75rem; background: var(--surface-container);">💰 Low→High</button>
        </div>
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
      renderTransactions('all', 'date-desc');
      
      const filterBar = document.querySelector('.filter-bar');
      if (filterBar) {
        filterBar.addEventListener('click', (e) => {
          const filterBtn = e.target.closest('.filter-btn');
          const sortBtn = e.target.closest('.sort-btn');
          
          if (filterBtn) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            filterBtn.classList.add('active');
            const currentSort = document.querySelector('.sort-btn.active')?.getAttribute('data-sort') || 'date-desc';
            renderTransactions(filterBtn.getAttribute('data-filter'), currentSort);
          }
          
          if (sortBtn) {
            document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
            sortBtn.classList.add('active');
            const currentFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
            renderTransactions(currentFilter, sortBtn.getAttribute('data-sort'));
          }
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
let userRole = localStorage.getItem('userRole') || 'viewer'; // 'viewer', 'editor', 'admin'
let userRoles = ['viewer', 'editor', 'admin']; // Available roles

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
const closeModalIcon = document.getElementById('close-modal-icon');
const unreadDot = document.getElementById('unread-dot');
const universalSearch = document.getElementById('universal-search');

// Functions
function renderTransactions(filter = 'all', sort = 'date-desc') {
  const tbody = document.getElementById('transaction-rows');
  if (!tbody) return;
  
  let filteredData = filter === 'all' 
    ? [...TRANSACTIONS_DATA]
    : [...TRANSACTIONS_DATA].filter(tx => tx.type === filter);
    
  // Sorting logic
  if (sort === 'date-asc') {
    filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else if (sort === 'date-desc') {
    filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sort === 'amount-asc') {
    filteredData.sort((a, b) => a.amount - b.amount);
  } else if (sort === 'amount-desc') {
    filteredData.sort((a, b) => b.amount - a.amount);
  }
    
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

function getCategoryBreakdown() {
  const categoryData = {};
  TRANSACTIONS_DATA.filter(tx => tx.type === 'expense').forEach(tx => {
    if (!categoryData[tx.category]) {
      categoryData[tx.category] = 0;
    }
    categoryData[tx.category] += Math.abs(tx.amount);
  });
  return Object.entries(categoryData).sort((a, b) => b[1] - a[1]);
}

function renderCategoryBreakdown() {
  const container = document.getElementById('category-breakdown');
  if (!container) return;
  
  const categories = getCategoryBreakdown();
  const total = categories.reduce((sum, [_, amount]) => sum + amount, 0);
  
  container.innerHTML = categories.map(([category, amount]) => {
    const percentage = ((amount / total) * 100).toFixed(1);
    return `
      <div class="searchable-item" style="padding: 12px; background: var(--surface-container-low); border-radius: var(--radius-m);">
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
          <span style="font-weight: 600;">${category}</span>
          <span style="font-weight: 700; color: var(--primary);">₹${amount.toLocaleString()}</span>
        </div>
        <div style="display: flex; gap: 8px; align-items: center;">
          <div style="flex-grow: 1; height: 6px; background: var(--surface-container); border-radius: 3px; overflow: hidden;">
            <div style="height: 100%; width: ${percentage}%; background: linear-gradient(90deg, var(--primary), var(--primary-container));"></div>
          </div>
          <span style="font-size: 0.75rem; color: var(--on-surface-variant); min-width: 35px; text-align: right;">${percentage}%</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderAdminPanel() {
  const adminFeatures = document.querySelectorAll('[data-admin-feature]');
  
  // Show/hide features based on role
  adminFeatures.forEach(feature => {
    const requiredRole = feature.getAttribute('data-admin-feature');
    const featureRoleIndex = userRoles.indexOf(requiredRole);
    const userRoleIndex = userRoles.indexOf(userRole);
    
    // Show if user role is equal to or higher than required role
    if (userRoleIndex >= featureRoleIndex) {
      feature.style.display = 'block';
    } else {
      feature.style.display = 'none';
    }
  });
  
  // Update admin status badge
  const roleDisplay = document.querySelector('[id="admin-role-display"]');
  if (roleDisplay) {
    const roleEmojis = { viewer: '👁️', editor: '✏️', admin: '🛡️' };
    roleDisplay.innerHTML = `
      <div style="display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
        ${userRoles.map(role => `
          <button onclick="switchUserRole('${role}')" style="
            padding: 8px 12px; 
            border-radius: 6px; 
            border: 2px solid ${userRole === role ? 'var(--primary)' : 'var(--outline-variant)'};
            background: ${userRole === role ? 'var(--on-primary-container)' : 'var(--surface-container)'};
            color: ${userRole === role ? 'var(--primary)' : 'var(--on-surface)'};
            cursor: pointer;
            font-weight: 600;
            font-size: 0.85rem;
            transition: all 0.3s;
          ">
            ${roleEmojis[role]} ${role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        `).join('')}
      </div>
    `;
  }
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
  renderAdminPanel();
  lucide.createIcons();
});

closeModalBtn.addEventListener('click', () => {
  adminModal.classList.remove('active');
});

document.addEventListener('click', (e) => {
  if (e.target.closest('#close-modal-icon')) {
    adminModal.classList.remove('active');
  }
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  setTheme(currentTheme);
  setView(currentView);
});

// Global role switcher function
window.switchUserRole = function(newRole) {
  if (userRoles.includes(newRole)) {
    userRole = newRole;
    localStorage.setItem('userRole', newRole);
    renderAdminPanel();
  }
};
