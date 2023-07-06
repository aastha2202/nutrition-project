import {
  CardContent,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

import React from "react";

function PrivacyPolicy() {
  const theme = useTheme();
  const MainTitle={
    
    fontFamily:"Inter-Bold",
    fontSize:"25px" ,
    color:"#112866",
  };

  return (
    <>
  <CardContent>
    <Grid container flexDirection={"row"} margin="20px" >
      
    <Grid item xs={3}  direction="row"
        justifyContent="center"
        alignItems="center"
        alignSelf={"center"} >
          
          <Link to="/dashboard/HelpCenter" >
        
            
        <ArrowBackIcon style={{ color: 'black' }} />
        </Link>

          
  
    </Grid>
      <Grid item xs={9}
        container
        direction="row"
        // justifyContent="center"
        // alignItems="center"
        // marginTop="5px"
      >
        <Typography
          // align="center"
         style={MainTitle}
        >
          Privacy Policy
        </Typography>
      </Grid>
      </Grid>
     

      
        <Container
          maxWidth="lg"
          sx={{
            padding: theme.spacing(2),

            [theme.breakpoints.up("md")]: {
              padding: theme.spacing(4),
            },
          }}
        >
          <Grid>
            <Typography
              style={{
                fontFamily: "Inter-Bold",

                fontSize: "20px",

                color: "#112866",
              }}
            >
              PRIVACY STATEMENT
            </Typography>

            <Typography
              style={{
                fontFamily: "Inter-SemiBold",

                fontStyle: "normal",

                fontSize: "16px",
              }}
            >
              {" "}
              We are committed to protecting your privacy and providing a safe
              online experience. This Privacy Statement applies to our
              Practice's website and governs our data collection and usage
              practices. By using this website, you consent to the data
              practices described in this Privacy Statement.
            </Typography>
          </Grid>
        </Container>

        <Container
          maxWidth="lg"
          sx={{
            padding: theme.spacing(2),

            [theme.breakpoints.up("md")]: {
              padding: theme.spacing(4),
            },
          }}
        >
          <Typography
            style={{
              fontSize: "20px",
              fontFamily: "Inter-Bold",
              color: "#112886",
            }}
          >
            Collection of your Personal Information
          </Typography>

          <Typography
            style={{
              fontSize: "16px",
              fontFamily: "Inter-SemiBold",
              fontStyle: "normal",
            }}
          >
            {" "}
            This Practice collects personally identifiable information provided
            by you, such as your e-mail address, name, home or work address or
            telephone number. This Practice also collects anonymous demographic
            information, which is not unique to you, such as your ZIP code, age,
            gender, preferences, interests and favorites. There is also
            information about your computer hardware and software that is
            automatically collected by this website. This information can
            include: your IP address, browser type, domain names, access times
            and referring website addresses. This information is used for the
            operation of the service, to maintain quality of the service, and to
            provide general statistics regarding use of this website. Please
            keep in mind that if you directly disclose personally identifiable
            information or personally sensitive data through public message
            boards, this information may be collected and used by others. This
            Practice encourages you to review the privacy statements of websites
            you choose to link to from the website so that you can understand
            how those websites collect, use and share your information. This
            Practice is not responsible for the privacy statements or other
            content on any other websites.
          </Typography>
        </Container>

        <Container
          maxWidth="lg"
          sx={{
            padding: theme.spacing(2),

            [theme.breakpoints.up("md")]: {
              padding: theme.spacing(4),
            },
          }}
        >
          <Typography
            style={{
              fontSize: "20px",
              fontFamily: "Inter-Bold",
              color: "#112886",
            }}
          >
            Use of your Personal Information
          </Typography>

          <Typography
            style={{
              fontSize: "16px",
              fontFamily: "Inter-SemiBold",
              fontStyle: "normal",
            }}
          >
            {" "}
            This Practice collects and uses your personal information to operate
            the website and deliver the services you have requested. This
            Practice also uses your personally identifiable information to
            inform you of other products or services available from this
            Practice and its affiliates. This Practice may also contact you via
            surveys to conduct research about your opinion of current services
            or of potential new services that may be offered. This Practice does
            not sell, rent or lease its customer lists to third parties. This
            Practice may share data with trusted partners to help us perform
            statistical analysis, send you email or postal mail, provide
            customer support, or arrange for deliveries. All such third parties
            are prohibited from using your personal information except to
            provide these services and they are required to maintain the
            confidentiality of your information. This Practice does not use or
            disclose sensitive personal information, such as race, religion, or
            political affiliations, without your explicit consent. This Practice
            will disclose your personal information, without notice, only if
            required to do so by law.
          </Typography>
        </Container>

        <Container
          maxWidth="lg"
          sx={{
            padding: theme.spacing(2),

            [theme.breakpoints.up("md")]: {
              padding: theme.spacing(4),
            },
          }}
        >
          <Typography
            style={{
              fontSize: "20px",
              fontFamily: "Inter-Bold",
              color: "#112886",
            }}
          >
            Use of Cookies
          </Typography>

          <Typography
            style={{
              fontSize: "16px",
              fontFamily: "Inter-SemiBold",
              fontStyle: "normal",
            }}
          >
            {" "}
            The website uses "cookies" to help this Practice personalize your
            online experience. A cookie is a text file that is placed on your
            hard disk by a webpage server. Cookies cannot be used to run
            programs or deliver viruses to your computer. Cookies are uniquely
            assigned to you, and can only be read by a web server in the domain
            that issued the cookie to you.
          </Typography>
        </Container>

        <Container
          maxWidth="lg"
          sx={{
            padding: theme.spacing(2),

            [theme.breakpoints.up("md")]: {
              padding: theme.spacing(4),
            },
          }}
        >
          <Typography
            style={{
              fontSize: "20px",
              fontFamily: "Inter-Bold",
              color: "#112886",
            }}
          >
            Security of your Personal Information
          </Typography>

          <Typography
            style={{
              fontSize: "16px",
              fontFamily: "Inter-SemiBold",
              fontStyle: "normal",
            }}
          >
            {" "}
            This Practice secures your personal information from unauthorized
            access, use or disclosure. This Practice secures the personally
            identifiable information you provide on computer servers in a
            controlled, secure environment, protected from unauthorized access,
            use or disclosure. When personal information (such as a credit card
            number) is transmitted to other websites, it is protected through
            the use of encryption, such as the Secure Socket Layer (SSL)
            protocol.
          </Typography>
        </Container>

        <Container
          maxWidth="lg"
          sx={{
            padding: theme.spacing(2),

            [theme.breakpoints.up("md")]: {
              padding: theme.spacing(4),
            },
          }}
        >
          <Typography
            style={{
              fontSize: "20px",
              fontFamily: "Inter-Bold",
              color: "#112886",
            }}
          >
            Changes to this Statement
          </Typography>

          <Typography
            style={{ fontSize: "16px", fontFamily: "Inter-SemiBold" }}
          >
            {" "}
            This Practice will occasionally update this Privacy Statement to
            reflect company and customer feedback. We encourage you to
            periodically review this Privacy Statement to be informed of how
            this Practice is protecting your information.
          </Typography>
        </Container>

        <Container
          maxWidth="lg"
          sx={{
            padding: theme.spacing(2),

            [theme.breakpoints.up("md")]: {
              padding: theme.spacing(4),
            },
          }}
        >
          <Typography
            style={{
              fontSize: "20px",
              fontFamily: "Inter-Bold",
              color: "#112886",
            }}
          >
            Contact Information
          </Typography>

          <Typography
            style={{ fontSize: "16px", fontFamily: "Inter-SemiBold" }}
          >
            {" "}
            Please contact us by phone at 703-865-6490 or by mail at 3903 Fair
            Ridge Dr., Suite 209, Fairfax, VA 22033.
          </Typography>
        </Container>
      </CardContent>
    </>
  );
}

export default PrivacyPolicy;