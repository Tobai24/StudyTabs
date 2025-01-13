import { useState } from "react";
import {
  ThemeProvider,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Stack,
} from "@mui/material";
import { Theme } from "../layout/theme";
import Grid from "@mui/material/Grid2";

const items = [
  {
    id: 1,
    description:
      "Tell us which subjects or courses you're studying so we can tailor your schedule accordingly.",
    input: (
      <TextField
        label="Subjects/Courses"
        variant="standard"
        fullWidth
        margin="normal"
      />
    ),
  },
  {
    id: 2,
    description:
      "Indicate your preferred study hours so we can suggest optimal times for you to study.",
    input: (
      <div>
        <TextField
          label="Preferred Start Time"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Preferred End Time"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </div>
    ),
  },
  {
    id: 3,
    description:
      "Let us know how often you'd like breaks and leisure activities to be included in your schedule.",
    input: (
      <TextField
        label="Preferred Breaks Frequency"
        variant="filled"
        fullWidth
        margin="normal"
      />
    ),
  },
  {
    id: 4,
    description:
      "Please provide important exam dates or project deadlines so we can prioritize them in your timetable.",
    input: (
      <TextField
        label="Important Dates (Exams/Deadlines)"
        variant="outlined"
        fullWidth
        margin="normal"
      />
    ),
  },
  {
    id: 5,
    description:
      "Would you like to receive reminders for upcoming study sessions and deadlines?",
    input: (
      <div>
        <Button variant="outlined" fullWidth>
          Enable Reminders
        </Button>
      </div>
    ),
  },
  {
    id: 6,
    description:
      "Let us know any specific goals or preferences (e.g., focus on certain subjects, long study sessions, etc.).",
    input: (
      <TextField
        label="Goals & Preferences"
        variant="outlined"
        fullWidth
        margin="normal"
      />
    ),
  },
  {
    id: 8,
    description:
      "Review the information you provided and confirm the details to generate your personalized timetable.",
    input: "",
  },
];

const steps = [
  {
    id: 1,
    title: "Subjects & Courses",
    content:
      "Tell us which subjects or courses you're studying so we can tailor your schedule accordingly.",
  },
  {
    id: 2,
    title: "Preferred Study Times",
    content:
      "Indicate your preferred study hours, so we can suggest optimal times for you to study.",
  },
  {
    id: 3,
    title: "Breaks & Leisure",
    content:
      "Let us know how often you'd like breaks and leisure activities to be included in your schedule.",
  },
  {
    id: 4,
    title: "Exam Dates & Deadlines",
    content:
      "Please provide important exam dates or project deadlines so we can prioritize them in your timetable.",
  },
  {
    id: 5,
    title: "Notifications & Reminders",
    content:
      "Would you like to receive reminders for upcoming study sessions and deadlines?",
  },
  {
    id: 6,
    title: "Goals & Preferences",
    content:
      "Let us know any specific goals or preferences (e.g., focus on certain subjects, long study sessions, etc.).",
  },
  {
    id: 7,
    title: "Confirmation",
    content:
      "Review the information you provided and confirm the details to generate your personalized timetable.",
  },
];

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [started, setStarted] = useState(false);
  const [name, setName] = useState("");
  const [greet, setGreet] = useState(false);

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

  const WelcomePage = () => {
    return (
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
        {!greet ? (
          <>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ width: "60%", textAlign: "center" }}
            >
              Hi! I&apos;m Tobi! I&apos;ll help you personalize your study!
              What&apos;s your name?
            </Typography>
            <TextField
              label="Enter your name"
              variant="outlined"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ marginBottom: 2, width: "30%", marginTop: 3 }}
            />
            <Button
              variant="contained"
              onClick={() => setGreet(true)}
              disabled={!name.trim()}
              sx={{
                padding: "10px 20px",
                marginTop: 2,
              }}
            >
              Continue
            </Button>
          </>
        ) : (
          <>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ width: "60%", textAlign: "center" }}
            >
              Hi {name}! I&apos;ll help you personalize your study, so you can
              get started on your learning journey asap!
            </Typography>
            <Button
              variant="contained"
              onClick={() => setStarted(true)}
              disabled={!name.trim()}
              sx={{
                padding: "10px 20px",
                marginTop: 2,
              }}
            >
              Proceed
            </Button>
          </>
        )}
      </Grid>
    );
  };

  return (
    <ThemeProvider theme={Theme}>
      {started ? (
        <>
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
              {steps.map((item) => (
                <Step key={item.id}>
                  <StepLabel>{item.title}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
                <Typography
                  variant="h6"
                  color="text.primary"
                  sx={{ marginTop: 6 }}
                >
                  {items[activeStep].description}
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack
                  sx={{
                    width: "60%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {items[activeStep].input}
                </Stack>
              </Grid>
            </Grid>

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
        </>
      ) : (
        <WelcomePage />
      )}
    </ThemeProvider>
  );
};

export default Onboarding;
