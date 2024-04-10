// import { useState } from "react";
// import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Button, Container, Box, Grid } from "@mui/material";

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center">
        <Grid item>
          <Box
            component="section"
            height={600}
            width={800}
            mt={5}
            p={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              bgcolor: "background.paper",
              boxShadow: 2,
              borderRadius: 1,
            }}
          >
            <Button variant="contained">Contained</Button>
            {/* <p>{greetMsg}</p> */}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
