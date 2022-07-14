import styled from "styled-components";

const Container = styled.div`
height: 30px;
flex: 1;
color: black;
text-align: center;
margin-top: 325px;
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
`

const Title = styled.h1`
    font-size: 48px;
    font-family: 'Montserrat';
    font-weight: 900;
`

const Subtitle = styled.p`
    margin:15px 0px;
    font-size:14px;
    letter-spacing:3px;
`

const Button = styled.button`
    padding:15px;
    margin: 15px 0px;
    font-size:16px;
    background-color: black;
    cursor:pointer;
    border-radius: 300px;
    border: none;
    color: white;
    font-family: 'Montserrat';
    font-weight: 700;
`

const Substitle = () => {
    return(
        <Container>
            <Title>
                PEACE THROUGH ANY POSE
            </Title>
            <Subtitle>
                Play. Let loose. Repeat. This season, turn it up in styles made for living life to the max.
            </Subtitle>
            <Button>
                Shop Now
            </Button>
        </Container>
    )
}

export default Substitle;
