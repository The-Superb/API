// Welcome back name
function getFullName(firstname, lastname){
    fetch(`https://inlupp-fa.azurewebsites.net/api/users?firstname=${firstname}&lastname=${lastname}`)
    .then(res => res.text())
    .then(data => {
    document.getElementById('fullName').innerHTML = data;
    document.getElementById('fullNameNav').innerHTML = data;
    })
}

// total sales
function getTotalSales(){
    fetch('https://inlupp-fa.azurewebsites.net/api/total-sales')
    .then(res => res.json())
    .then(data => {
        document.getElementById('totalSales').innerHTML = data.currency + data.amount;
    })
}

// total purchases
function getTotalPurchases(){
    fetch('https://inlupp-fa.azurewebsites.net/api/total-purchases')
    .then(res => res.json())
    .then(data => {
        document.getElementById('totalPurchases').innerHTML = data.currency + data.amount;
    })
}

// total orders
function getTotalOrders(){
    fetch('https://inlupp-fa.azurewebsites.net/api/total-orders')
    .then(res => res.json())
    .then(data => {
        document.getElementById('totalOrders').innerHTML = data.currency + data.amount;
    })
}

// total growth
function getTotalGrowth(){
    fetch('https://inlupp-fa.azurewebsites.net/api/total-growth')
    .then(res => res.json())
    .then(data => {
        document.getElementById('totalGrowth').innerHTML = data.currency + data.amount;
    })
}

// total users
function getTotalUsers(){
    fetch('https://inlupp-fa.azurewebsites.net/api/total-users')
    .then(res => res.json())
    .then(data => {
        document.getElementById('totalUsers').innerHTML = data.users;
        document.getElementById('totalUsers-1').innerHTML = data.growth;
    })
}

// total projects
function getTotalProjects(){
    fetch('https://inlupp-fa.azurewebsites.net/api/total-projects')
    .then(res => res.json())
    .then(data => {
        document.getElementById('totalProjects').innerHTML = data.projects;
        document.getElementById('totalProjects-1').innerHTML = data.growth;
    })
}

// messages
const messages = document.getElementById('messages')

fetch('https://inlupp-fa.azurewebsites.net/api/messages')
.then(res => res.json())
.then(data => {
    for(message of data){
        messages.insertAdjacentHTML('beforeend', `

<a class="dropdown-item preview-item">
    <div class="preview-thumbnail">
        <img src="https://via.placeholder.com/36x36" alt="image" class="profile-pic">
    </div>
    <div class="preview-item-content flex-grow">
        <h6 class="preview-subject ellipsis font-weight-normal">${message.from}</h6>
        <p class="font-weight-light small-text text-muted mb-0">${message.title}</p>
    </div>
</a>
    `);
    }
})

// notifications
const notifications = document.getElementById('notifications')

fetch('https://inlupp-fa.azurewebsites.net/api/notifications')
.then(res => res.json())
.then(data => {
    for(notification of data){
        notifications.insertAdjacentHTML('beforeend', `

        <a class="dropdown-item preview-item">
            <div class="preview-thumbnail">
            <div class="preview-icon bg-success">
                <i class="mdi mdi-information mx-0"></i>
            </div>
            </div>
            <div class="preview-item-content">
            <h6 class="preview-subject font-weight-normal">${notification.title}</h6>
            <p class="font-weight-light small-text mb-0 text-muted">${notification.subtitle}</p>
            </div>
        </a>
    `);
    }
})

// downloads
function getTotalDownloads(){
    fetch('https://inlupp-fa.azurewebsites.net/api/downloads')
    .then(res => res.json())
    .then(data => {
            document.getElementById('offline').innerHTML = data[0].offlineAmount;
            document.getElementById('online').innerHTML = data[1].onlineAmount;
    })
}

// total sales chart
function getTotalSalesChart(){
    fetch('https://inlupp-fa.azurewebsites.net/api/total-sales-chart')
    .then(res => res.json())
    .then(data => {
        document.getElementById('revenue').innerHTML = data.revenue;
        document.getElementById('returns').innerHTML = data.returns;
        document.getElementById('queries').innerHTML = data.queries;
        document.getElementById('invoices').innerHTML = data.invoices;
    })
}

// tickets
const tickets = document.getElementById('ticket')

fetch('https://inlupp-fa.azurewebsites.net/api/tickets')
.then(res => res.json())
.then(data => {
    for(let i=0; i < data[1].tickets.length; i++) {

        let clock = data[1].tickets[i].date.split(", ");
        let initials = data[1].tickets[i].name.split;(' ')[0][0] + data[1].tickets[i].name.split(' ')[1][0];
        let date = data[1].tickets[i].date.split(' ')[0][0] + data[1].tickets[i].date.split(' ')[0][1] + " " + data[1].tickets[i].date.split(' ')[1][0] + data[1].tickets[i].date.split(' ')[1][1] + data[1].tickets[i].date.split(' ')[1][2] + " " + data[1].tickets[i].date.split(' ')[2][0] + data[1].tickets[i].date.split(' ')[2][1] + data[1].tickets[i].date.split(' ')[2][2] + data[1].tickets[i].date.split(' ')[2][3];

        ticket.insertAdjacentHTML('beforeend', `
        <tr>
            <td class="pl-0">
            <div class="icon-rounded-primary icon-rounded-md">
                <h4 class="font-weight-medium">${initials}</h4>
            </div>
            </td>
            <td>
            <p class="mb-0">${data[1].tickets[i].name}</p>
            <p class="text-muted mb-0">${data[1].tickets[i].city}</p>
            </td>
            <td>
            <p class="mb-0">${date}</p>
            <p class="text-muted mb-0">${clock[1]}</p>
            </td>
            <td>
            <p class="mb-0">${data[1].tickets[i].project}</p>
            <p class="text-muted mb-0">${data[1].tickets[i].other}</p>
            </td>
            <td class="pr-0">
            <i class="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
            </td>
        </tr>
    `);
    }
})

// updates
const updates = document.getElementById('updates')

fetch('https://inlupp-fa.azurewebsites.net/api/updates')
.then(res => res.json())
.then(data => {
    for(update of data){
        updates.insertAdjacentHTML('beforeend', `

    <li>
        <h6>${update.title}</h6>
        <p class="mt-2">${update.message}</p>
        <p class="text-muted mb-4">
            <i class="mdi mdi-clock-outline"></i>${update.time}
        </p>
    </li>
    `);
    }
})


// sales report
function getSaleReport(){
    fetch('https://inlupp-fa.azurewebsites.net/api/sales-report')
    .then(res => res.json())
    .then(data => {
        document.getElementById('downloads-sr').innerHTML = data.downloads;
        document.getElementById('purchases-sr').innerHTML = data.purchases;
        document.getElementById('users-sr').innerHTML = data.users;
        document.getElementById('growth-sr').innerHTML = data.growth;
    })
}

// open invoices
const openInvoices = document.getElementById('openInvoices')

fetch('https://inlupp-fa.azurewebsites.net/api/open-invoices')
.then(res => res.json())
.then(data => {
    for(openInvoice of data){
        openInvoices.insertAdjacentHTML('beforeend', `

        <tr>
            <td>${openInvoice.invoice}</td>
            <td>${openInvoice.customer}</td>
            <td>${openInvoice.shipping}</td>
            <td class="font-weight-bold">${openInvoice.currency}${openInvoice.bestPrice}</td>
            <td>${openInvoice.currency}${openInvoice.purchasedPrice}</td>
            <td><div class="badge badge-success badge-fw">${openInvoice.status}</div></td>
        </tr>
    `);
    }
})

getFullName('Filip', 'Rosenberg')
getTotalSales()
getTotalPurchases()
getTotalOrders()
getTotalGrowth()
getTotalUsers()
getTotalProjects()
getTotalDownloads()
getTotalSalesChart()
getSaleReport()