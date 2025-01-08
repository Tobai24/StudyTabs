import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import AlarmOutlinedIcon from "@mui/icons-material/AlarmOutlined";

const items = [
  {
    icon: <CalendarTodayOutlinedIcon sx={{ color: "white" }} />,
    title: "AI-Powered Timetable Creation",
    description:
      "Leverage artificial intelligence to automatically generate an optimized study timetable based on your available time and syllabus requirements.",
  },
  {
    icon: <AccessTimeOutlinedIcon sx={{ color: "white" }} />,
    title: "Smart Time Allocation",
    description:
      "Effortlessly balance your study time across subjects with intelligent suggestions for time distribution based on priority and difficulty.",
  },
  {
    icon: <InsertChartOutlinedIcon sx={{ color: "white" }} />,
    title: "Performance-Based Adjustments",
    description:
      "Track your progress and let the AI adjust your study plan dynamically, ensuring continuous improvement and focused revision.",
  },
  {
    icon: <AlarmOutlinedIcon sx={{ color: "white" }} />,
    title: "Flexible Study Reminders",
    description:
      "Set up personalized reminders to keep you on track, ensuring you never miss a study session or revision time.",
  },
];

export default function Content() {
  return (
    <>
      <Stack
        sx={{
          flexDirection: "column",
          alignSelf: "center",
          gap: 4,
          maxWidth: 450,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "medium",
            fontStyle: "italic",
            color: "white",
          }}
        >
          StudyTabs
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
        {items.map((item, index) => (
          <Stack key={index} direction="row" sx={{ gap: 2, color: "white" }}>
            {item.icon}
            <div>
              <Typography
                gutterBottom
                sx={{ fontWeight: "medium", color: "black" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                {item.description}
              </Typography>
            </div>
          </Stack>
        ))}
      </Stack>
    </>
  );
}
