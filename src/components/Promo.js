export default function Promo() {
    return (
        <>
        <div style={{
            padding: '160px 80px',
            height: '622px'
        }}>
            <div style={{
            display:"flex", 
            flexDirection: "column",
            alignItems: "flex-start",

            height: '302px',
            gap: '40px'
            }}>
                <div>
                    <p>{`Hi, I’m InsertName,\nI build things for the web.`}</p>
                    <p>I’m software developer and this is my portfolio.</p>
                </div>

                <button>Check out my CV</button>

            </div>
        </div>
        </>
    )
}