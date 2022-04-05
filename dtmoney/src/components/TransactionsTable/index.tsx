import { Container } from "./styles"

export const TransactionsTable = () => {
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
          <tr>
            <td>Web dev</td>
            <td className="deposit">+ R$ 12.000</td>
            <td>Development</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">- R$ 1.100</td>
            <td>Home</td>
            <td>12/02/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}