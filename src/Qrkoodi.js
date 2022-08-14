import QRCode from "qrcode.react";
export default function Qrkoodi() {

    const lokaatio = window.location;

    console.log(lokaatio)
    return (
        <div style={{ marginTop: 200, display: "flex",flexDirection: "row" }}>
            <div>
                <QRCode
                    value={lokaatio.toString()} style={{ marginRight: 50 }}/>
                <p>{lokaatio.toString()}</p>
            </div>
        </div>
    );
}