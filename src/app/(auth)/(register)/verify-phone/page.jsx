"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpValidationSchema } from "@/lib/helpers/validationSchems";
import { orangeColor } from "@/lib/data/commonData";
import CodeIcon from "@mui/icons-material/Code";

export default function VerifyPhone() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm({
    resolver: zodResolver(otpValidationSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="container">
      <Box
        sx={{
          minHeight: "60vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 500, // Width of the form container
            padding: 4,
            borderRadius: 2,
            backgroundColor: "#fff", // Form background
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            fontWeight={600}
            color={orangeColor}
          >
            Verify Your Phone Number
          </Typography>

          <Typography
            variant="p"
            gutterBottom
            align="center"
            textAlign={"justify"}
            mb={5}
            fontWeight={300}
          >
            A code has been sent to your phone number. Please check message and
            enter here.
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} mt={3}>
              <TextField
                fullWidth
                id="otp"
                {...register("otp")}
                label="OTP"
                variant="outlined"
                margin="normal"
                error={touchedFields?.otp && !!errors?.otp}
                helperText={errors?.otp?.message}
                placeholder="Enter otp"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <CodeIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  marginTop: 2,
                  backgroundColor: orangeColor,
                  borderRadius: "20px",
                  padding: "5px 30px",
                }}
              >
                Submit
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </section>
  );
}
