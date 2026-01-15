import { useState } from 'react'

export default function Accounts() {
  const [accounts] = useState([
    { id: 1, name: 'Checking Account', balance: 12450.50, type: 'checking', number: '****4521', status: 'active' },
    { id: 2, name: 'Savings Account', balance: 28900.00, type: 'savings', number: '****7832', status: 'active' },
    { id: 3, name: 'Investment Account', balance: 45200.00, type: 'investment', number: '****9103', status: 'active' },
  ])

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">My Accounts</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          + Add Account
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account) => (
          <div key={account.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-500 capitalize">{account.type}</p>
                <h3 className="text-lg font-semibold text-gray-900">{account.name}</h3>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">{account.status}</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
            <p className="text-sm text-gray-500 mb-4">{account.number}</p>
            <div className="flex gap-2">
              <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium">
                View Details
              </button>
              <button className="flex-1 bg-gray-50 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
                Transfer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}