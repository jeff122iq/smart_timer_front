import BodyAdmin from "../components/layouts/BodyAdmin"
import { Box, Container, Typography, Button } from "@material-ui/core";


export default function adminPage() {
    return (
        <BodyAdmin>
            <Container maxWidth="lg">
        <div style={{marginTop: "200px"}}>
            <h1>I am Admin</h1>
            <Button style={{
                border: "2px solid gray",
                borderRadius: "none",
                backgroundColor: "white",
                padding: "20px 30px"
            }}>Add new tag</Button>
        </div>
        </Container>
        </BodyAdmin>
    )
}
