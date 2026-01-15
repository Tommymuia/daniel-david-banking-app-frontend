import { useState } from 'react'

export default function Transfer() {
  const [formData, setFormData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: '',
    description: ''
  })

  const accounts = [
    { id: 1, name: 'Checking Account', balance: 12450.50, number: '****4521' },
    { id: 2, name: 'Savings Account', balance: 28900.00, number: '****7832' },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Transfer:', formData)
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Transfer Money</h1>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">From Account</label>
            <select
              value={formData.fromAccount}
              onChange={(e) => setFormData({ ...formData, fromAccount: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select account</option>
              {accounts.map((acc) => (
                <option key={acc.id} value={acc.id}>
                  {acc.name} - ${acc.balance.toFixed(2)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">To Account</label>
            <input
              type="text"
              value={formData.toAccount}
              onChange={(e) => setFormData({ ...formData, toAccount: e.target.value })}
              placeholder="Enter account number or email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-gray-500">$</span>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                placeholder="0.00"
                className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description (Optional)</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Add a note"
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Transfer Money
          </button>
        </form>
      </div>
    </div>
  )
}