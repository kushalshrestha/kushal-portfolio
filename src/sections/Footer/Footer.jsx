import './Footer.scss';
// import CircleButton from '../../components/CircleButton/CircleButton';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer(){
    return (
        <div className="footer">
            <p>
                Copyright &copy; {new Date().getFullYear()} 
                    <b> Kushal Shrestha</b>
            </p>
            <p>
                All rights reserved
            </p>
            <p>
                {/* <CircleButton tooltip="GitHub" tooltipPlacement="top"
                    link="https://github.com/9inpachi" target="_blank">
                    <GitHubIcon />
                </CircleButton>
                <CircleButton tooltip="Facebook" tooltipPlacement="top"
                    link="https://facebook.com/9inpachi" target="_blank">
                    <FacebookIcon />
                </CircleButton>
                <CircleButton tooltip="LinkedIn" tooltipPlacement="top"
                    link="https://www.linkedin.com/in/fawadaliq/" target="_blank">
                    <LinkedInIcon />
                </CircleButton> */}
            </p>
        </div>
    );
}

export default Footer;
