import React, { useState } from 'react';
import { Box, Container, TextField } from '@mui/material';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { dayCalendarClasses } from '@mui/x-date-pickers/DateCalendar';  // v7+: renamed from dayPickerClasses :contentReference[oaicite:0]{index=0}
import dayjs from 'dayjs';

export default function Appointment() {
  const [date, setDate] = useState(dayjs());

  return (
    <Container sx={{ mt:{ md:30}, mb: 5 , pl:6}}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            dayOfWeekFormatter={(weekday) =>
              weekday.format('dd').toUpperCase()
            }
            renderInput={(params) => <TextField {...params} />}
            slotProps={{
              // 1) Remove Cancel/OK buttons entirely
              actionBar: { actions: [] },
            }}
            sx={{
              // 3) Target the weekday‐header labels (to be black
              [`& .${dayCalendarClasses.weekDayLabel}`]: {
                color: 'black',
                fontWeight: 'bold',
              },
            }}
            
          />
        </LocalizationProvider>

        <Box
          component="img"
          src="/assets/chair.png"
          alt="Dentist Chair"
          sx={{
            width: { xs: '100%', md: '45%' },
            borderRadius: 1,
            boxShadow: 3,
          }}
        />
      </Box>
    </Container>
  );
}
