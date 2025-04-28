import React, { useState } from "react";
import { Box, Container, TextField } from "@mui/material";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { dayCalendarClasses } from "@mui/x-date-pickers/DateCalendar"; // v7+: renamed from dayPickerClasses :contentReference[oaicite:0]{index=0}
import dayjs from "dayjs";

export default function Calendar() {
  const [date, setDate] = useState(dayjs());

  return (
    <Container sx={{ mt: { md: 30 }, mb: { md: 5 }, ml: { md: 10 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { md: 15 },
        }}
      >
        <Box
          sx={{
            boxShadow: 2,
            borderRadius: 2,
            width: { md: 300 },
            height: { xs: "100%", md: "fit-content" },
            order: { xs: 2, md: 1 },
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box>
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={date}
                onChange={(newValue) => setDate(newValue)}
                dayOfWeekFormatter={(weekday) =>
                  weekday.format("dd").toUpperCase()
                }
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  actionBar: { actions: [] },
                }}
                sx={{
                  [`& .${dayCalendarClasses.weekDayLabel}`]: {
                    color: "black",
                    fontWeight: "bold",
                  },
                }}
              />
            </Box>
          </LocalizationProvider>
        </Box>

        <Box
          component="img"
          src="/assets/chair.png"
          alt="Dentist Chair"
          sx={{
            width: { xs: "100%", md: "46%" },
            borderRadius: 1,
            boxShadow: 3,
            order: { xs: 1, md: 2 },
            my: { xs: 2, md: 0 },
          }}
        />
      </Box>
    </Container>
  );
}
