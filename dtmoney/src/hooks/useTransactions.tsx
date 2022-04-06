import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

import { api } from "../services/api"

interface ITransaction {
  id: number
  title: string
  amount: number
  type: "deposit" | "withdraw"
  category: string
  createdAt: string
}

type ITransactionInput = Omit<ITransaction, "id" | "createdAt">

interface ITransactionsProviderProps {
  children: ReactNode
}

interface ITransactionsContext {
  transactions: ITransaction[]
  createTransaction: (transactions: ITransactionInput) => Promise<void>
}

export const TransactionsContext = createContext<ITransactionsContext>(
  {} as ITransactionsContext
)

export const TransactionsProvider = ({
  children,
}: ITransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  useEffect(() => {
    api("/transactions")
      .then((response) => setTransactions(response.data.transactions))
      .catch((error) => console.log(error))
  }, [])

  const createTransaction = async (transactionInput: ITransactionInput) => {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    })

    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)

  return context
}
