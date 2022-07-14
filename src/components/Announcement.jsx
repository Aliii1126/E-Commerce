import styled from "styled-components";

const Container = styled.div`
height: 30px;
background-color: black;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`

const Announcement = () => {
    return(
        <Container>
            Free Delivery! Applies to orders of Rp3.000.000 or more. View details
        </Container>
    )
}

export default Announcement;
