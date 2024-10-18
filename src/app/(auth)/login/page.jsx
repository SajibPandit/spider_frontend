"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
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
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidationSchema } from "@/lib/helpers/validationSchems";
import { orangeColor } from "@/lib/data/commonData";

export default function page() {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm({
    resolver: zodResolver(loginValidationSchema),
    mode: "onBlur",
  });

  console.log(errors);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="container">
      <Box
        sx={{
          paddingTop: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            width: 500,
            padding: 4,
            borderRadius: 2,
            backgroundColor: "#fff",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            fontWeight={600}
            color={orangeColor}
            py={3}
          >
            Welcome Back!
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                id="phone"
                {...register("phone")}
                label="Phone"
                variant="outlined"
                margin="normal"
                error={errors?.phone}
                helperText={errors?.phone?.message}
                placeholder="Enter your phone number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        <PhoneInTalkIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                id="password"
                {...register("password")}
                label="Password"
                variant="outlined"
                margin="normal"
                error={errors?.password}
                helperText={errors?.password?.message}
                placeholder="Enter password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        <EnhancedEncryptionIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
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
                Login
              </Button>
              <Divider />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  marginTop: 2,
                  borderRadius: "20px",
                  padding: "5px 30px",
                }}
              >
                New Here? Sign Up
              </Button>

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
                Use Anonymously
              </Button>
            </Box>
          </form>
        </Card>
      </Box>
    </section>
  );
}
