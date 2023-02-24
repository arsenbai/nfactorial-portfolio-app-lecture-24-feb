export default function Header() {
    return (
        <div style={{
            padding: '32px 80px',
            height: '100px'
        }}>
            <div style={{
            display:"flex", 
            justifyContent:"space-between",
            alignItems: "center"}}>

                <p style={{
                    height: '36px',
                    fontWeight: 700,
                    fontSize: '32px',
                }}>Arsen Baiseupov</p>

                <div style={{
                    display:"flex", 
                    justifyContent:"space-between",
                    gap: '32px'
                    }}>
                    <a className="headerButton" href="#">About</a>
                    <a className="headerButton" href="#">Experience</a>
                    <a className="headerButton" href="#">Projects</a>
                    <a className="headerButton" href="#">Contacts</a>
                </div>
            </div>
        </div>
    )
}