export default function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${(bill + tip).toFixed(2)} (${bill.toFixed(2)} + ${tip.toFixed(2)}
      )
    </h3>
  );
}
