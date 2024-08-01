import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import Output from "./Output";
import Reset from "./Reset";
import { useState } from "react";

export default function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, SetPercentage1] = useState(0);
  const [percentage2, SetPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    SetPercentage1(0);
    SetPercentage2(0);
  }

  return (
    <div className="container">
      <h1>Tip Calculator</h1>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={SetPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={SetPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
