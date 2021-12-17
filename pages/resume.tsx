import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";

export default function Resume() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const getFirstCardContent = () => {
    return (
      <React.Fragment>
        <Typography variant="subtitle2" color="text.secondary">
          Feb 2021 - Jan 2022
        </Typography>
        <Typography variant="h5">
          <strong>Australian Droid + Robot</strong>
        </Typography>
        <Typography>
          <br />
          When I worked for ADR they were a small robotics startup in the city
          where my day to day software responsibilities would vary greatly. From
          Web development to robotics to Android App development.
          <br />
          <br />
          Key achievements included:
          <ul>
            <li>
              Achieving <em>real-time</em> video and robot control using{" "}
              <strong>WebRTC</strong> with JavaScript and Android
            </li>
            <li>
              Developing a full microservice solution using FastAPI in Python
              together with a React Front End in order to monitor{" "}
              <strong>live LiDAR data</strong> as well as manipulate robot
              behaviour
            </li>
          </ul>
        </Typography>
      </React.Fragment>
    );
  };

  const getSecondCardContent = () => {
    return (
      <React.Fragment>
        <Typography variant="subtitle2" color="text.secondary">
          May 2019 - Feb 2021
        </Typography>
        <Typography variant="h5">
          <strong>Ambrose Building Pty Ltd</strong>
        </Typography>
        <Typography>
          <br />
          At Ambrose building I was mostly focused on maintaining and creating
          Angular driven web applications to make the life of the other
          employees easier including a PWA for use by the Tradies and a
          scheduling application used by the Building Supervisors along with
          many more.
          <br />
          <br />
          Key achievements included:
          <ul>
            <li>
              Developing a recursive search algorithm that was used in
              production heavily every single day and performed its job
              effectively and efficiently
            </li>
            <li>
              Being named App Development Top Performer for 2020 on the final
              award ceremony I attended prior to leaving
            </li>
            <li>
              Mentoring Junior employees who went on to have careers at Ambrose;
              some that are still there today I believe.
            </li>
          </ul>
        </Typography>
      </React.Fragment>
    );
  };

  const getThirdCardContent = () => {
    return (
      <React.Fragment>
        <Typography variant="subtitle2" color="text.secondary">
          Mar 2018 - May 2019
        </Typography>
        <Typography variant="h5">
          <strong>Cummings Technologies</strong>
        </Typography>
        <Typography>
          <br />
          At Cummings Technologies I learnt almost all my Software Engineering
          fundamentals including how to use Git efficiently, as well as the
          ideas behind Object Oriented Programming and much more.
          <br />
          <br />
          Key achievements included:
          <ul>
            <li>
              Learning how to develop well tested, maintainable and scalable
              software solutions using Java 8 through to 11.
            </li>
            <li>
              Successfully obtaining and manipulating large datasets using Java
              with PosgresSQL
            </li>
            <li>Discovering and beginning my journey toward mastering Vim</li>
          </ul>
        </Typography>
      </React.Fragment>
    );
  };

  const getFourthCardContent = () => {
    return (
      <React.Fragment>
        <Typography variant="subtitle2" color="text.secondary">
          Jul 2017 - Mar 2018
        </Typography>
        <Typography variant="h5">
          <strong>Praesidium</strong>
        </Typography>
        <Typography>
          <br />
          Praesidium was my first full time job out of University and was a very
          varied role that started off with a lot of mechatronics and hardware
          integration into software and ended up with Android Development that
          ultimately pointed me down the road to becoming a Software Engineer.
          <br />
          <br />
          Key achievements included:
          <ul>
            <li>
              Building an Android App that could control a land based robot
            </li>
            <li>
              Streaming video at decent latency in Android using open source
              LibVLC
            </li>
          </ul>
        </Typography>
      </React.Fragment>
    );
  };

  return (
    <div>
      <NavBar links={["johan", "resume", "blog"]} />
      {width > 700 ? (
        <Timeline position="alternate" className="under-navbar">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ display: "inline-block" }}>
                <CardContent>{getFirstCardContent()}</CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ textAlign: "left" }}>
                <CardContent>{getSecondCardContent()}</CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="info" />
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ textAlign: "left" }}>
                <CardContent>{getThirdCardContent()}</CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ textAlign: "left" }}>
                <CardContent>{getFourthCardContent()}</CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      ) : (
        <Box padding={3} style={{ marginTop: 75 }}>
          <Grid container direction="column" spacing={3}>
            <Grid item>
              <Card>
                <CardContent>{getFirstCardContent()}</CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <CardContent>{getSecondCardContent()}</CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <CardContent>{getThirdCardContent()}</CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card>
                <CardContent>{getFourthCardContent()}</CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}
