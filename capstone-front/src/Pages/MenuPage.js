import menuPDF from "../images/Menu.pdf";

export default function MenuPage() {
  return (
    <div style={{}}>
          <object data={menuPDF} type="application/pdf" style={{minHeight:"100vh", width:"100%"}}></object>
    </div>
  )
}