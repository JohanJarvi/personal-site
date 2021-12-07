import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";

export default function Resume() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <NavBar links={["johan", "resume", "blog"]} />
      {width > 700 ? (
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ display: "inline-block" }}>
                <CardContent>
                  <Typography variant="subtitle2" color="text.secondary">
                    Feb 2020 - Present
                  </Typography>
                  <Typography variant="h5">Australian Droid + Robot</Typography>
                  <Typography>
                    <br />
                    When I worked for ADR they were a small robotics startup in
                    the city where my day to day software responsibilities would
                    vary greatly. From Web development to robotics to Android
                    App development.
                    <br />
                    <br />
                    Key achievements included:
                    <ul>
                      <li>
                        Achieving <em>real time</em> video and robot control
                        using <strong>WebRTC</strong> with JavaScript and
                        Android
                      </li>
                      <li>
                        Developing a full microservice solution using FastAPI in
                        Python together with a React Front End in order to
                        monitor <strong>live LiDAR data</strong> as well as
                        manipulate robot behaviour
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color="inherit">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            </TimelineSeparator>
            <TimelineContent>
              <Card>
                <CardContent>Hello world?</CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="info" />
              {/* <TimelineConnector sx={{ bgcolor: "primary.main" }} /> */}
            </TimelineSeparator>
            <TimelineContent>
              <Card>
                <CardContent>Hello world?</CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      ) : null}
    </div>
  );
}
