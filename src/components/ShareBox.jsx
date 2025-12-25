import "./ShareBox.css"

export const ShareBox = ({onClose}) => {
    return (
        <div
            className="share-box"
            onClick={(e) => {
                e.target === e.currentTarget && onClose()
            }}
        >
            <div className="share-box__content">
                <button className="button-copy">
                    <img src="/svg/copy.svg" alt="Copy Icon"/>
                </button>
                <button className="button-vk">
                    <img src="/svg/vk.svg" alt="VK Icon"/>
                </button>
                <button className="button-telegram">
                    <img src="/svg/telegram.svg" alt="Telegram Icon"/>
                </button>
                <button className="button-whatsapp">
                    <img src="/svg/whatsapp.svg" alt="Whatsapp Icon"/>
                </button>
                <button className="button-facebook">
                    <img src="/svg/facebook.svg" alt="Facebook Icon"/>
                </button>
            </div>
        </div>
    )
}
