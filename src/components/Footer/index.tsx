import LogoMixmix from "../LogoMixmix";
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#f7f7f7", color: "black", marginTop: "auto" }}
    >
      <Container maxWidth="lg" sx={{ paddingY: "2rem" }}>
        <LogoMixmix />
        <Typography variant="body2">
          © {new Date().getFullYear()} MixMix - Todos los derechos reservados
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
