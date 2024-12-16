import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import Typography from "@mui/material/Typography";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LanguageIcon from "@mui/icons-material/Language";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DvrIcon from "@mui/icons-material/Dvr";

export default function Experience() {
  return (
    <Timeline position="alternate">
      <h2 className="text-center text-white fw-bold m-5">
        EDUCATION & WORK EXPERIENCE
      </h2>
      <div className="education-box">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
          >
            2016 - 2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <MenuBookIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "26px", px: 2 }}>
            <Typography variant="h5" component="span">
              Bachelor of Computer Applications (BCA)
            </Typography>

            <Typography>
              Chhatrapati Shahu Ji Maharaj University,Kanpur
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
            2020 - 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <AutoStoriesIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "26px", px: 2 }}>
            <Typography variant="h5" component="span">
              MBA (Information Technology)
            </Typography>

            <Typography>
              Dr. A.P.J. Abdul Kalam Technical University,Lucknow
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
          >
            Dec 2021 - July 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <DvrIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "26px", px: 2 }}>
            <Typography variant="h5" component="span">
              Web Development Internship (6 Months)
            </Typography>
            <Typography>FNIT Technologies,Kanpur</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
            Sep 2022 - Feb 2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "26px", px: 2 }}>
            <Typography variant="h5" component="span">
              MERN Stack developer (6 Months)
            </Typography>
            <Typography>Agami Technologies, Noida</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
          >
            April 2023 - Sep 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <ImportantDevicesIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "35px", px: 2 }}>
            <Typography variant="h5" component="span">
              Frontend Developer (1.5 Years)
            </Typography>
            <Typography>Sahind Technologies,Noida</Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
            Aug 2024 - Present
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <LanguageIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "26px", px: 2 }}>
            <Typography variant="h5" component="span">
              Freelancing Website Development
            </Typography>
            <Typography>Kanpur</Typography>
          </TimelineContent>
        </TimelineItem>
      </div>
    </Timeline>
  );
}
