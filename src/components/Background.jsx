import { Form } from "react-bootstrap"
import Card from "react-bootstrap/card"
import BACKLogo from '../images/homepage_background.jpeg'

const Background = () => {
    return (
        <div style={{ backgroundColor: "#deedd6", display: "flex", flexDirection: "row" }}>
            <div style={{ width: "100%"}}>
                <Card style={{ margin: "", padding: "40px", border: "none", backgroundColor: "transparent", width: "600px"}}>
                <Card.Text className="p-2" style={{ fontSize: "2.5em", fontWeight: "bold"}}>
                    Order groceries for delivery
                    <br/>
                    or pick up today
                <Card.Text style={{margin: "0", padding: "0", fontSize: "14px", fontWeight:"initial"}}>
                    Whatever you want from local store4s, brought right to your door
                </Card.Text>
                </Card.Text>
                <Form className="p-2">
                    <Form.Group className="mb-3" >
                        <Form.Control size="lg" type="text" placeholder="   Enter your address                                                      ->" />
                    </Form.Group>
                </Form>
            </Card>
            </div>
            <div>
                <img src={BACKLogo} alt="food" />
            </div>
        </div>
    )
}

export default Background
