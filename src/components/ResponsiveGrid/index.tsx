import { Box, Grid } from "@mui/material";
import type { DrinkCategory } from "../../types/drink";

type ResponsiveGridProps = {
  items: DrinkCategory[];
  spacing?: object;
  columns?: object;
  perRow?: object;
  renderItem: (item: DrinkCategory, index: number) => React.ReactNode;
};

const ResponsiveGrid = ({
  items,
  columns = { xs: 4, sm: 8, md: 12 },
  spacing = { xs: 2, md: 3 },
  perRow = { xs: 2, sm: 4, md: 4 },
  renderItem,
}: ResponsiveGridProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={spacing} columns={columns}>
        {items.map((item, index) => (
          <Grid key={index} size={perRow}>
            {renderItem(item, index)}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ResponsiveGrid;
