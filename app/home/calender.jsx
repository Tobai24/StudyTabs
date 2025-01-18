import { useState, useEffect } from "react";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";
import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { createEventModalPlugin } from "@schedule-x/event-modal";

import "@schedule-x/theme-default/dist/index.css";

const eventModal = createEventModalPlugin();

function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0];

  const calendar = useCalendarApp({
    views: [
      createViewDay(),
      createViewMonthAgenda(),
      createViewMonthGrid(),
      createViewWeek(),
    ],
    selectedDate: "2025-01-17",
    events: [
      {
        id: 1,
        title: "Coffee with John",
        start: "2025-01-18",
        end: "2025-01-18",
      },
      {
        id: 2,
        title: "Breakfast with Sam",
        description: "Discuss the new project",
        location: "Starbucks",
        start: "2025-01-19 05:00",
        end: "2025-01-19 06:00",
      },
      {
        id: 3,
        title: "Gym",
        start: "2025-01-20 06:00",
        end: "2025-01-20 07:00",
        calendarId: "leisure",
      },
      {
        id: 4,
        title: "Media fasting",
        start: "2023-12-01",
        end: "2023-12-03",
        calendarId: "leisure",
      },
      {
        id: 5,
        title: "Some appointment",
        people: ["John"],
        start: "2023-12-03 03:00",
        end: "2023-12-03 04:30",
      },
      {
        id: 6,
        title: "Other appointment",
        people: ["Susan", "Mike"],
        start: "2023-12-03 03:00",
        end: "2023-12-03 04:00",
        calendarId: "leisure",
      },
    ],
    calendars: {
      leisure: {
        colorName: "leisure",
        lightColors: {
          main: "#1c7df9",
          container: "#d2e7ff",
          onContainer: "#002859",
        },
        darkColors: {
          main: "#c0dfff",
          onContainer: "#dee6ff",
          container: "#426aa2",
        },
      },
    },
    plugins: [createDragAndDropPlugin(), eventModal],
  });

  useEffect(() => {
    // get all events
    eventsService.getAll();
  }, []);

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  );
}

export default CalendarApp;
