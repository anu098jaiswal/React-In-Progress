import { QRCode } from "react-qrcode-logo"; 
//mport {QRCode} from "qrcode.react";//library for React QR code generation.
import { useState } from "react";
export  function QRGenerator() {
  console.log("QR Generator mounted");
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");


  function handleGenerateQRCode() {
    setQrCode(input);
  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <p>Enter text to generate QR code:</p>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Enter text"
      />
      <button onClick={handleGenerateQRCode}>Generate QR Code</button>
      <div>
        <QRCode id="qr-code-value" value={qrCode} />
       
      </div>
    </div>
  );
}
