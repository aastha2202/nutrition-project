import { Card,  CardContent,  Container,  Grid,  Typography ,useTheme  } from "@mui/material";

import React from "react";




function AboutUs() {

  const theme = useTheme();
  const title={
    
    fontFamily:"Inter-Bold",
    fontSize:"20px" ,
    color:"#112866",
};
const MainTitle={
    
  fontFamily:"Inter-Bold",
  fontSize:"25px" ,
  color:"#112866",
};
 const text={
    fontFamily:"Inter-Regular",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "16px",
    // lineHeight: "18px",
    // color:"#112866",
 };

  return (

    <>

    {/* <Card  > */}

      <Grid container

  direction="row"

  justifyContent="center"

  alignItems="center"

  marginTop='5px'

  

  

  >

   <Typography variant="h3" align="center" sx={{ mb: 2 }} style={MainTitle}>

         ABOUT US

      </Typography>

      </Grid>

    {/* </Card> */}

    <CardContent>

   

    <Container maxWidth="lg" sx={{padding: theme.spacing(2),

        [theme.breakpoints.up('md')]: {

          padding: theme.spacing(4),

        },}}>

      <Typography style={title} >LINKS TO THIRD PARTY SITES</Typography>

      <Typography style={text}> This Practice website may contain links to other websites ("Linked Sites"). The Linked Sites are not under the control of this Practice and this Practice is not responsible for the contents of any Linked Site, including without limitation any link contained in a Linked Site, or any changes or updates to a Linked Site. This Practice is not responsible for webcasting or any other form of transmission received from any Linked Site. This Practice is providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by this Practice of the site or any association with its operators.</Typography>

    </Container>

    <Container maxWidth="lg" sx={{padding: theme.spacing(2),

        [theme.breakpoints.up('md')]: {

          padding: theme.spacing(4),

        },}}>

      <Typography style={title} >NO UNLAWFUL OR PROHIBITED USE

</Typography>

      <Typography style={text}> TAs a condition of your use of this Practice website, you warrant to this Practice that you will not use this Practice website for any purpose that is unlawful or prohibited by these terms, conditions, and notices. You may not use this Practice website in any manner which could damage, disable, overburden, or impair this Practice website or interfere with any other party's use and enjoyment of this Practice website. You may not obtain or attempt to obtain any materials or information through any means not intentionally made available or provided for through this Practice websites.




</Typography>

    </Container>

    <Container maxWidth="lg" sx={{padding: theme.spacing(2),

        [theme.breakpoints.up('md')]: {

          padding: theme.spacing(4),

        },}} >

      <Typography style={title} >USE OF COMMUNICATION SERVICES</Typography>

      <Typography style={text}> This Practice website may contain bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication facilities designed to enable you to communicate with the public at large or with a group (collectively, "Communication Services"), you agree to use the Communication Services only to post, send and receive messages and material that are proper and related to the particular Communication Service.




By way of example, and not as a limitation, you agree that when using a Communication Service, you will not:</Typography>

    </Container>

    <Container maxWidth="lg" sx={{padding: theme.spacing(2),

        [theme.breakpoints.up('md')]: {

          padding: theme.spacing(4),

        }, }} >

      <Typography style={title} >LIABILITY DISCLAIMER

</Typography>

      <Typography style={text}> THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THIS PRACTICE WEBSITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. THIS PRACTICE AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THIS PRACTICE WEBSITE AT ANY TIME. ADVICE RECEIVED VIA THIS PRACTICE WEBSITE SHOULD NOT BE RELIED UPON FOR PERSONAL, MEDICAL, LEGAL OR FINANCIAL DECISIONS AND YOU SHOULD CONSULT AN APPROPRIATE PROFESSIONAL FOR SPECIFIC ADVICE TAILORED TO YOUR SITUATION.THIS PRACTICE AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THIS PRACTICE WEBSITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. THIS PRACTICE AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THIS PRACTICE AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THIS PRACTICE WEBSITE, WITH THE DELAY OR INABILITY TO USE THIS PRACTICE WEBSITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THIS PRACTICE WEBSITE, OR OTHERWISE ARISING OUT OF THE USE OF THIS PRACTICE WEBSITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF THIS PRACTICE OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THIS PRACTICE WEBSITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THIS PRACTICE WEBSITE.</Typography>

    </Container>

    </CardContent>

   

    

   
    </>




  );

}




export default AboutUs;