import './qr-card.css'

import ImgQrCode from '../img/image-qr-code.png'

const QrCode = function () {
    return(
        <div className="card">
            <img className='qr-code' src={ImgQrCode} alt='QR Code' title='QR Code' />

            <h2 className='title'>Improve your front-end skills by building projects</h2>

            <p className='description'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    )
}

export default QrCode