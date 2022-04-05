import { useState } from "react"
import Modal from "react-modal"

import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"

import { Container, RadioBox, TransactionTypeContainer } from "./styles"

interface INewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = (props: INewTransactionModalProps) => {
  const [type, setType] = useState("deposit")

  return (
    <Modal
      {...props}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={props.onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close" />
      </button>

      <Container>
        <h2>New Transaciton</h2>

        <input placeholder="Title" />

        <input type="number" placeholder="Value" />

        <TransactionTypeContainer>
          <RadioBox 
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>

          <RadioBox 
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="Category" />

        <button type="submit">
          Create
        </button>
      </Container>
    </Modal>
  )
}