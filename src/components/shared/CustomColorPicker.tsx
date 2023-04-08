import React, { useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import { Box, ButtonBase, Popover } from "@mui/material";

const CustomColorPicker = ({ color, onChange }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <div className="picker">
      <ButtonBase
        className="swatch"
        sx={{
          borderRadius: '100%',
          width: '2em',
          height: '2em',
          backgroundColor: color
        }}
        onClick={(event: any) => {
          setAnchorEl(event.currentTarget);
          setIsOpen(true);
        }}
      />

      <Popover
        PaperProps={{ sx: { padding: 1 } }}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={() => setIsOpen(false)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

          <HexColorPicker color={color} onChange={onChange} />
          <Box mt={'0.5em'}>
            <HexColorInput color={color} onChange={onChange} />
          </Box>
        </Box>
      </Popover>
    </div>
  );
};

export default CustomColorPicker;