import { Link } from "react-router";
import LogoMixmix from "../LogoMixmix";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#f7f7f7", color: "black", marginTop: "auto" }}
    >
      <Container maxWidth="lg" sx={{ paddingY: "2rem" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 4, sm: 2 }}
        >
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent={{ xs: "start", sm: "space-between" }}
          >
            <LogoMixmix />
            <Stack direction="row" spacing={1} mt={{ xs: 2, sm: 0 }}>
              <IconButton
                aria-label="facebook"
                size="small"
                href="https://facebook.com"
                target="_black"
              >
                <FacebookOutlinedIcon />
              </IconButton>
              <IconButton
                aria-label="linkedin"
                size="small"
                href="https://www.linkedin.com/"
                target="_black"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="youtube"
                size="small"
                href="https://youtube.com"
                target="_black"
              >
                <YouTubeIcon />
              </IconButton>
              <IconButton
                aria-label="instagram"
                size="small"
                href="https://www.instagram.com/"
                target="_black"
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Box>
          <Box flex={1}>
            <Stack direction="column" spacing={1}>
              <Typography variant="body1" fontWeight="bold">
                Explore MixMix
              </Typography>
              <Stack direction="column" spacing={1.5}>
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                  Inicio
                </Link>
                <Link
                  to="categories"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Categories
                </Link>
                <Link
                  to="favorites"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  Favoritos
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
