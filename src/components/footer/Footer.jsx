import { SocialMediaOptions } from '../socialMedia/SocialMediaOptions'
import './_footer.scss'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='orientation_bottom'>
                <SocialMediaOptions />
            </div>
            <a><div>Design inspiration by Brittany Chiang</div></a>
            <a><div>Built by Keshav Chauhan</div></a>
        </div >
    )
}