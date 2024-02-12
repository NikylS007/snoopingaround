import './footer.css';
import React, { useState } from 'react';
import { Typography, Modal, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  footer: {
    background: '#092a41',
    color: 'white',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px',
  },
  brandText: {
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'BlinkMacSystemFont !important'
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
  },
  developerText: {
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'BlinkMacSystemFont italic !important'
  },
  developer: {
    margin: '0 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
  },
  developerName: {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  developerDesignation: {
    fontSize: '12px !important',
    fontWeight: '200 !important',
    marginBottom: '5px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
  },
  iconButton: {
    color: 'white',
    '&:hover': {
      color: '#FF3538',
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 694,
    height: 550,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 15,
    p: 4,
  };

  const developers = [
    {
      name: 'Nikyl S',
      designation: 'Backend Developer',
      instagram: 'https://www.instagram.com/nikylsakthivel?igsh=ajJmMmhpcmU3ZXJ3',
      linkedin: 'https://www.linkedin.com/in/nikyls',
      telegram: 'https://t.me/+omugYC65ozdjMDNl',
    },
    {
      name: 'Santhosh',
      designation: 'Developer',
      instagram: 'https://www.instagram.com/me_kingsly?igsh=MXFqNm9uaTRsbzVreQ==',
      linkedin: 'https://www.linkedin.com/in/santhosh-p-480801183/',
      telegram: 'https://t.me/+omugYC65ozdjMDNl',
    },
    {
      name: 'Madhumitha          Selvaraj',
      designation: 'Frontend Developer',
      instagram: 'https://www.instagram.com/madhumitha__selvaraj?igsh=MXR0dXU0cnJiazR6YQ==',
      linkedin: 'https://www.linkedin.com/in/madhumitha-selvaraj-567137141/',
      telegram: 'https://t.me/+omugYC65ozdjMDNl',
    },
    {
      name: 'Mano Aravind Thiyagarajan',
      designation: 'Business Analyst',
      instagram: 'https://www.instagram.com/_her_insane_idiot_?igsh=MTlpcDU0emU4anJnMg==',
      youtube: 'https://youtube.com/@dreamstick6125?si=4Hl825MMj7eA0uVG',
      telegram: 'https://t.me/+omugYC65ozdjMDNl',
    },
  ];

  const redirectToHome = () => {
    navigate('/')
  }

  const snoopingAroundLogo = (
    <Typography variant="h6" component="h1" className="logo">
        
        <Button className="logo" id="shrink" onClick={redirectToHome}>Snooping Around</Button>
    </Typography>
  );

  const DeveloperModal = ({ isOpen, onClose, developers }) => {
    return (
      <div>
        <Button onClick={openModal} className='modalPopUpButton'>Our Team</Button>
        <Modal
          open={isOpen}
          onClose={onClose}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" class="heading" variant="h6" component="h2">
              Checkout Our Team
            </Typography>
            {developers.map((developer, index) => (
              <div class="container">
                <div class="heading">{developer.name}</div>
                <div class="social-account-container">
                  <div class="title">{developer.designation}</div>
                  <span class="title">Wanna Connect?</span>
                  <div class="parent">
                    <a href={developer.instagram} target='_blank'>
                      <div class="child child-2">
                        <button class="button btn-2">

                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#ff00ff"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></button>

                      </div>
                    </a>
{developer.name === 'Mano Aravind Thiyagarajan' &&
                    <a href={developer.youtube} target='_blank'>
                      <div class="child child-3">
                        <button class="button btn-3">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 2 48 43"><path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path></svg></button>
                      </div>
                    </a>}
                    <a href={developer.telegram} target='_blank'>
                      <div class="child child-4">
                        <button class="button btn-4">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 48 48" fill="#4267B2"><path d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 34.087891 14.035156 C 33.403891 14.035156 32.635328 14.193578 31.736328 14.517578 C 30.340328 15.020578 13.920734 21.992156 12.052734 22.785156 C 10.984734 23.239156 8.9960938 24.083656 8.9960938 26.097656 C 8.9960938 27.432656 9.7783594 28.3875 11.318359 28.9375 C 12.146359 29.2325 14.112906 29.828578 15.253906 30.142578 C 15.737906 30.275578 16.25225 30.34375 16.78125 30.34375 C 17.81625 30.34375 18.857828 30.085859 19.673828 29.630859 C 19.666828 29.798859 19.671406 29.968672 19.691406 30.138672 C 19.814406 31.188672 20.461875 32.17625 21.421875 32.78125 C 22.049875 33.17725 27.179312 36.614156 27.945312 37.160156 C 29.021313 37.929156 30.210813 38.335938 31.382812 38.335938 C 33.622813 38.335938 34.374328 36.023109 34.736328 34.912109 C 35.261328 33.299109 37.227219 20.182141 37.449219 17.869141 C 37.600219 16.284141 36.939641 14.978953 35.681641 14.376953 C 35.210641 14.149953 34.672891 14.035156 34.087891 14.035156 z M 34.087891 16.035156 C 34.362891 16.035156 34.608406 16.080641 34.816406 16.181641 C 35.289406 16.408641 35.530031 16.914688 35.457031 17.679688 C 35.215031 20.202687 33.253938 33.008969 32.835938 34.292969 C 32.477938 35.390969 32.100813 36.335938 31.382812 36.335938 C 30.664813 36.335938 29.880422 36.08425 29.107422 35.53125 C 28.334422 34.97925 23.201281 31.536891 22.488281 31.087891 C 21.863281 30.693891 21.201813 29.711719 22.132812 28.761719 C 22.899812 27.979719 28.717844 22.332938 29.214844 21.835938 C 29.584844 21.464938 29.411828 21.017578 29.048828 21.017578 C 28.923828 21.017578 28.774141 21.070266 28.619141 21.197266 C 28.011141 21.694266 19.534781 27.366266 18.800781 27.822266 C 18.314781 28.124266 17.56225 28.341797 16.78125 28.341797 C 16.44825 28.341797 16.111109 28.301891 15.787109 28.212891 C 14.659109 27.901891 12.750187 27.322734 11.992188 27.052734 C 11.263188 26.792734 10.998047 26.543656 10.998047 26.097656 C 10.998047 25.463656 11.892938 25.026 12.835938 24.625 C 13.831938 24.202 31.066062 16.883437 32.414062 16.398438 C 33.038062 16.172438 33.608891 16.035156 34.087891 16.035156 z"></path></svg></button>
                      </div>
                    </a>
                    {developer.name !== 'Mano Aravind Thiyagarajan' &&<a href={developer.linkedin} target='_blank'>
                      <div class="child child-4">

                        <button class="button btn-4">
                          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 48 42" fill="#4267B2"><path d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z" /><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path></svg></button>
                      </div>
                    </a>}
                  </div>
                </div>
              </div>
            ))}
          </Box>
        </Modal>
      </div>
    );
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const saInsta = 'https://www.instagram.com/snooping__around_?igsh=dHcwcHY1M2Vqdnlm'

  const NavigateToInsta = () => {
    navigate('https://www.instagram.com/snooping__around_?igsh=dHcwcHY1M2Vqdnlm')
  }

  return (
    <footer className={classes.footer}>
      <div className={classes.leftSection}>
        {snoopingAroundLogo}
      </div>
      <div className={classes.rightSection}>
        <div>
          <DeveloperModal isOpen={isModalOpen} onClose={closeModal} developers={developers} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;