import {
  Grid,
  Typography,
  Icon,
  Box,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";

import CardContent from "@mui/material/CardContent";

import Logo from "../../assets/nova.svg";
import Diet from "../../assets/Diet.svg";

export default function Adminuser() {
  return (
    <div>
      {" "}
      {
        <img
          src={Logo}
          alt="nova logo"
          style={{ height: "auto", width: "250px", marginLeft: "30px" }}
        />
      }
      <Card
        sx={{ minWidth: 275 }}
        style={{ backgroundColor: "#212121", margin: "10px" }}
      >
        <CardContent>
          <Grid
            container
            flexDirection="row"
            spacing="1"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span style={{ fontSize: "25px", color: "#E1B725" }}> 100 </span>{" "}
            </Grid>{" "}
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span
                style={{ fontSize: "25px", color: "white", fontWeight: "20px" }}
              >
                {" "}
                Total Users{" "}
              </span>{" "}
            </Grid>{" "}
            <Grid
              item
              xs={4}
              alignItems="center"
              justifyContent="center"
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <img src={Diet} className="dinning-img" alt="dinning" />
            </Grid>
          </Grid>{" "}
        </CardContent>{" "}
      </Card>
      <Card
        sx={{ minWidth: 275 }}
        style={{ backgroundColor: "#212121", margin: "10px" }}
      >
        <CardContent>
          <Grid
            container
            flexDirection="row"
            spacing="1"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span style={{ fontSize: "25px", color: "#E1B725" }}> 100 </span>{" "}
            </Grid>{" "}
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span
                style={{ fontSize: "25px", color: "white", fontWeight: "20px" }}
              >
                {" "}
                InActive Users{" "}
              </span>{" "}
            </Grid>{" "}
            <Grid
              item
              xs={4}
              alignItems="center"
              justifyContent="center"
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <img src={Diet} className="dinning-img" alt="dinning" />
            </Grid>
          </Grid>{" "}
        </CardContent>{" "}
      </Card>
      <Card
        sx={{ minWidth: 275 }}
        style={{ backgroundColor: "#212121", margin: "10px" }}
      >
        <CardContent>
          <Grid
            container
            flexDirection="row"
            spacing="1"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span style={{ fontSize: "25px", color: "#E1B725" }}> 160 </span>{" "}
            </Grid>{" "}
            <Grid item xs={4} alignItems="center" justifyContent="center">
              <span
                style={{ fontSize: "25px", color: "white", fontWeight: "20px" }}
              >
                {" "}
                Active Users{" "}
              </span>{" "}
            </Grid>{" "}
            <Grid
              item
              xs={4}
              alignItems="center"
              justifyContent="center"
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <img src={Diet} className="dinning-img" alt="dinning" />
            </Grid>
          </Grid>{" "}
        </CardContent>{" "}
      </Card>
      <Card sx={{ minWidth: 275 }} style={{ margin: "20px" }}>
        <CardContent>
          <Grid container flexDirection="row" spacing="1">
            for graph picture
          </Grid>{" "}
          <Grid>
            <Box
              sx={{
                "& > :not(style)": {
                  m: 2,
                },
              }}
            >
              <Icon color="primary"> + </Icon>
            </Box>
          </Grid>
        </CardContent>{" "}
      </Card>
    </div>
  );
}
