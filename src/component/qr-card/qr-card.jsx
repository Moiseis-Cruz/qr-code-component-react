import ImgQrCode from '../img/image-qr-code.png'

import { Card, Image, Title, Description } from './styles'

const QrCode = function () {
    return(
        <Card>
            <Image src={ImgQrCode} />

            <Title>Improve your front-end skills by building projects</Title>

            <Description>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Description>
        </Card>
    )
}

export { QrCode }