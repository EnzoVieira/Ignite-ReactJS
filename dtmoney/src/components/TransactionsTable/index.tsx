import { useEffect, useState } from "react"

import { Container } from "./styles"

import { api } from "../../services/api"

interface ITransaction {
  id: number
  title: string
  amount: number
  type: string
  category: "deposit" | "withdraw"
  createdAt: string
}

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    api("/transactions")
      .then(response => setTransactions(response.data.transactions))
      .catch(error => console.log(error))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(new Date(transaction.createdAt))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}