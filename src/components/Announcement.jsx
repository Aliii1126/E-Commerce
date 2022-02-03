import styled from "styled-components";

const Container = styled.div`
    height:30px;
    background-color: teal;
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
            Flash Sale! HP Samsung Fold 3 Hanya 1.000 Rupiah!!!
        </Container>
    )
}

export default Announcement;
