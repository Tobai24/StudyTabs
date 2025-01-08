import { useState } from "react";
import {
  ThemeProvider,
  Typography,
  Card,
  CardContent,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { Theme } from "../layout/theme";
import Grid from "@mui/material/Grid2";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";

const items = [
  {
    icon: <CalendarTodayOutlinedIcon sx={{ color: "text.secondary" }} />,
    title: "AI-Powered Timetable Creation",
    id: 1,
    description:
      "Leverage artificial intelligence to automatically generate an optimized study timetable based on your available time and syllabus requirements.",
  },
  {
    icon: <AccessTimeOutlinedIcon sx={{ color: "text.secondary" }} />,
    title: "Smart Time Allocation",
    id: 2,
    description:
      "Effortlessly balance your study time across subjects with intelligent suggestions for time distribution based on priority and difficulty.",
  },
  {
    icon: <InsertChartOutlinedIcon sx={{ color: "text.secondary" }} />,
    title: "Performance-Based Adjustments",
    id: 3,
    description:
      "Track your progress and let the AI adjust your study plan dynamically, ensuring continuous improvement and focused revision.",
  },
  {
    icon: <AlarmOutlinedIcon sx={{ color: "text.secondary" }} />,
    title: "Flexible Study Reminders",
    id: 4,
    description:
      "Set up personalized reminders to keep you on track, ensuring you never miss a study session or revision time.",
  },
];

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [started, setStarted] = useState(false);

  const handleNext = () => {
    if (activeStep < items.length - 1) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
    }
  };

  const WelcomePage = () => (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
        backgroundImage: "url('/wave-haikeiP.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ width: "60%", textAlign: "center" }}
      >
        Hi! I&apos;m Tobi! I&apos;ll help you personalize your study, so you can
        get started on your learning journey asap!
      </Typography>
      <Button
        variant="contained"
        onClick={() => setStarted(true)}
        sx={{
          padding: "10px 20px",
          marginTop: 2,
        }}
      >
        Continue
      </Button>
    </Grid>
  );

  return (
    <ThemeProvider theme={Theme}>
      {started ? (
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            height: "100vh",
            backgroundImage: "url('/wave-haikeiP2.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Stepper activeStep={activeStep} alternativeLabel>
            {items.map((item) => (
              <Step key={item.id}>
                <StepLabel>{item.title}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Card
            variant="outlined"
            sx={{
              padding: 4,
              width: "80%",
              maxWidth: 600,
              textAlign: "center",
              marginTop: 4,
              borderRadius: "50px",
            }}
          >
            <CardContent>
              <Grid
                container
                direction="column"
                alignItems="center"
                spacing={2}
              >
                <Grid item>{items[activeStep].icon}</Grid>
                <Grid item>
                  <Typography variant="h5" gutterBottom>
                    {items[activeStep].title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body1" color="text.secondary">
                    {items[activeStep].description}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{ marginTop: 4 }}
          >
            <Grid item>
              <Button
                variant="outlined"
                onClick={handleBack}
                disabled={activeStep === 0}
                sx={{ padding: "10px 20px" }}
              >
                Back
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ padding: "10px 20px" }}
                disableElevation
              >
                {activeStep === items.length - 1 ? "Get Started" : "Next"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <WelcomePage />
      )}
    </ThemeProvider>
  );
};

export default Onboarding;
