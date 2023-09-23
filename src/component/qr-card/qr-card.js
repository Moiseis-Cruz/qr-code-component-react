import ImgQrCode from '../img/image-qr-code.png'
import styled from 'styled-components'

const QrCode = function () {
    return(
        <Card>
            <Image src={ImgQrCode} />

            <Title>Improve your front-end skills by building projects</Title>

            <Description>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Description>
        </Card>
    )
}

const Card = styled.div`
    background-color: #fff;
    width: 315px;
    height: 484px;
    border-radius: 15px;
    font-family: 'Outfit', sans-serif;
`

const Image = styled.img`
    width: 280px;
    height: 280px;
    margin-top: 18px;
    border-radius: 15px;
`

const Title = styled.h2`
    width: 254px;
    margin: 9px auto 0;
    font-size: 22px;
    font-weight: 600;
    color: #1F3251;
`

const Description = styled.p`
    width: 243px;
    font-size: 15px;
    margin: 19px auto 0;
    font-weight: 400;
    color: #7B879D;
`

export { QrCode }