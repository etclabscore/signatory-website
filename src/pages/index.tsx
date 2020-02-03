import React, { useState } from "react";
import Inspector from "@open-rpc/inspector";
import useDarkMode from "use-dark-mode";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import { Link as GatsbyLink } from "gatsby";
import Link from "@material-ui/core/Link";
import { grey } from "@material-ui/core/colors";
import { MDXProvider } from "@mdx-js/react";

const MyApp: React.FC = () => {
  const darkMode = useDarkMode();

  return (
    <>
      <MDXProvider components={{ Inspector }}>
        <Grid container alignContent="center" alignItems="center" justify="center" direction="column">
          <img className="logo" alt="logo" src={"https://user-images.githubusercontent.com/10556209/73570773-a07fb900-4432-11ea-8ed1-3bf525af04d9.png"}
            style={{ paddingTop: "10%", paddingBottom: "10px" }} />
          <Typography gutterBottom variant="h3" style={{ paddingBottom: "30px" }}>
            Signatory
        </Typography>
          <Typography gutterBottom variant="inherit" style={{ paddingBottom: "15px" }}>
            An offline transaction and message signer for the Ethereum Stack
        </Typography>
          <Link
            component={(props: { children: any }) => (
              <GatsbyLink to={"/getting-started"} style={{ textDecoration: "none", color: grey[500] }} activeStyle={{ color: grey[500] }}>
                {props.children}
              </GatsbyLink>
            )}>
            <Button style={{ marginBottom: "150px" }} variant="contained">Get Started</Button>
          </Link>
          <Grid container justify="space-between" style={{ marginBottom: "85px" }}>
            <Grid item container direction="column" style={{ width: "230px" }}>
              <Link
                component={(props: { children: any }) => (
                  <GatsbyLink to={"/beginners"} style={{ textDecoration: "none", color: grey[500] }} activeStyle={{ color: grey[500] }}>
                    {props.children}
                  </GatsbyLink>
                )}>
                <Grid>
                  <Box>
                    <Typography variant="h6" gutterBottom color="primary">→ Beginners</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" color="secondary">- New to Signatory?</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption">- What is Signatory?</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption">- Why should I care?</Typography>
                  </Box>
                </Grid>
              </Link>
            </Grid>
            <Grid item container direction="column" style={{ width: "230px" }}>
              <Link
                component={(props: { children: any }) => (
                  <GatsbyLink
                    to={"/learn"}
                    style={{ textDecoration: "none", color: grey[500] }}
                    activeStyle={{ color: grey[500] }}
                  >
                    {props.children}
                  </GatsbyLink>
                )}>
                <Grid>
                  <Box>
                    <Typography variant="h6" gutterBottom color="primary">→ Learn</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption">- Beginner Resources</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption">- How Signatory works</Typography>
                  </Box>
                </Grid>
              </Link>
            </Grid>
            <Grid item container direction="column" style={{ width: "230px" }}>
              <Link
                component={(props: { children: any }) => (
                  <GatsbyLink to={"/api-documentation"}
                    style={{ textDecoration: "none", color: grey[500] }}
                    activeStyle={{ color: grey[500] }}
                  >
                    {props.children}
                  </GatsbyLink>
                )}>
                <Grid>
                  <Box>
                    <Typography variant="h6" gutterBottom color="primary">→ Reference</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption">- API Documentation</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption">- Fully Interactive</Typography>
                  </Box>
                </Grid>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </MDXProvider>
    </>
  );
};

export default MyApp;
