import { CodePenLogo, GitLogo, InstagramLogo, LinkedInLogo, TwitterLogo } from "../../assets/svgs/socialMediaIcons"
import './__socialMediaOptions.scss'

export const SocialMediaOptions = () => {
    return (
        <div className="social_media_icons_container">
            <a target='_blank' href="https://github.com/keshavc1623"><GitLogo /></a>
            <a target='_blank' href="https://www.instagram.com/keshav_chauhan_/"><InstagramLogo /></a>
            <a target='_blank' href="https://twitter.com/keshavc1623"><TwitterLogo /></a>
            <a target='_blank' href="https://www.linkedin.com/in/keshav-chauhan-74a2a5141/"><LinkedInLogo /></a>
            <a target='_blank' href="https://codepen.io/keshavc1632"><CodePenLogo /></a>
        </div>
    )
}