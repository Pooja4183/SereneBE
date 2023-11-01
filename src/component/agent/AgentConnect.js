import { FormControl, Grid, List, ListItem, ListItemIcon, ListItemText, MenuItem, Paper, Typography } from "@mui/material";
import StyledButton from "../custom/StyledButton";
import StyledTextField from "../custom/StyledTextField";
import StyledSelect from "../custom/StyledSelect";
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import PropertyDetail from "../../master.json";
import { useDispatch } from "react-redux";
import { createAgent } from "../../store/adminAction";

const AgentForm = () => {
  const dispatch = useDispatch();
  const [isSuccess, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    salesVolume: "",
    status: "DRAFT",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(createAgent(formData, "DRAFT"));
      setSuccess(true);
      setError(null);
    } catch (error) {
      setSuccess(false);
      setError(error.message);
    }
  };

  return (
    <>
      <Paper
        variant="none"
        component={"form"}
        sx={{ padding: 2 }}
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item xs={8} sm={8} lg={8}>
            <StyledTextField
              label="Full Name"
              name="name"
              fullWidth
              value={formData.name}
              required
              onChange={handleChange}
            ></StyledTextField>
          </Grid>
          <Grid item xs={8} sm={8} lg={8}>
            <StyledTextField
              label="Personal Email"
              name="email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            ></StyledTextField>
          </Grid>
          <Grid item xs={8} sm={8} lg={8}>
            <StyledTextField
              label="Preferred Phone"
              name="phone"
              fullWidth
              value={formData.phone}
              required
              onChange={handleChange}
            ></StyledTextField>
          </Grid>
          <Grid item xs={8} sm={8} lg={8}>
            <Typography variant="p">
              What is your individual yearly sales volume?
            </Typography>
            <FormControl fullWidth sx={{ mt: 1, mb: 1 }}>
              <StyledSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.salesVolume}
                label=""
                onChange={handleChange}
                name="salesVolume"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {PropertyDetail.agentSalesVolume.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </StyledSelect>
            </FormControl>
            By submitting this form I accept the Privacy Policy and Terms of
            Service.
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            {isSuccess && (
              <Typography
                variant="success"
                sx={{ marginTop: 2, marginLeft: 1, color: "green" }}
              >
                Your details has been sent successfully! We will connect with
                you shortly.
              </Typography>
            )}
            {error && (
              <Typography variant="error" sx={{ marginTop: 2, marginLeft: 1 }}>
                An error occurred: {error}
              </Typography>
            )}
            <StyledButton type="submit">Submit</StyledButton>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
const AgentConnect = () => {
  return (
    <Grid container spacing={5} mt={5}>
      <Grid item xs={12} sm={6} lg={6}>
      <Grid container >
      <Grid item xs={1} sm={5} lg={5}>
        <Typography variant="h1"></Typography>
        </Grid>
        <Grid item xs={11} sm={7} lg={7}>
        <Typography variant="h1">Let's Chat</Typography>
        </Grid>

        <Grid item xs={1} sm={5} lg={5}>
          </Grid>
          <Grid item xs={9} sm={4} lg={4}>
           
              <List>
                <ListItem disablePadding><ListItemIcon><CheckIcon/> </ListItemIcon> <ListItemText > Start Selling Real Estate in 30 Min</ListItemText> </ListItem>
                <ListItem disablePadding><ListItemIcon><CheckIcon/> </ListItemIcon> <ListItemText>Easy Plug And Play Model</ListItemText>  </ListItem>
                <ListItem disablePadding><ListItemIcon><CheckIcon/> </ListItemIcon> <ListItemText>Commission Split 80% (agent) 20% (company)</ListItemText> </ListItem>
                <ListItem disablePadding><ListItemText>Sign Up By <b> Filling Out The Form</b>.</ListItemText> </ListItem>
                </List>
          </Grid>
          <Grid item xs={2} sm={2} lg={2}>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <AgentForm />
      </Grid>
    </Grid>
  );
};

export default AgentConnect;
