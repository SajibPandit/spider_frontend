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
import PersonIcon from "@mui/icons-material/Person";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationValidationSchema } from "@/lib/helpers/validationSchems";
import { orangeColor } from "@/lib/data/commonData";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm({
    resolver: zodResolver(registrationValidationSchema),
    mode: "onBlur",
  });

  console.log(errors);

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
            variant="h4"
            gutterBottom
            align="center"
            fontWeight={500}
            color={orangeColor}
          >
            Welcome!
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            align="center"
            fontWeight={500}
            mb={2}
            color={orangeColor}
          >
            Create a New Account
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                id="name"
                {...register("name")}
                label="Full Name"
                variant="outlined"
                margin="normal"
                error={errors?.name}
                helperText={errors?.name?.message}
                placeholder="Enter your name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        <PersonIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                id="email"
                {...register("email")}
                label="Email"
                variant="outlined"
                margin="normal"
                error={errors?.email}
                helperText={errors?.email?.message}
                placeholder="Enter your email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        <EmailIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

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

              <TextField
                fullWidth
                id="confirmPassword"
                {...register("confirmPassword")}
                label="Confirm Password"
                variant="outlined"
                margin="normal"
                error={errors?.confirmPassword}
                helperText={errors?.confirmPassword?.message}
                placeholder="Confirm your password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        <LockOpenIcon />
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
                Register
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
                Already an User? Login
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
        </Box>
      </Box>
    </section>
  );
}
