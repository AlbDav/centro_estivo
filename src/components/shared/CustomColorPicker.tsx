import { useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import { Box, Popover, TextField } from "@mui/material";
import GroupAvatar from "./GroupAvatar";

const CustomColorPicker = ({ color, onChange }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
      {/*       <ButtonBase
        className="swatch"
        sx={{
          borderRadius: '100%',
          width: '2em',
          height: '2em',
          backgroundColor: color,
		  border: '1px solid #c4c4c4',
        }}
		disableRipple
        onClick={(event: any) => {
          setAnchorEl(event.currentTarget);
          setIsOpen(true);
        }}
      /> */}
      <TextField
        label="Colore"
        fullWidth
        value={color}
        InputProps={{
          startAdornment: <GroupAvatar color={color}/>,
          readOnly: true,
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
    </>
  );
};

export default CustomColorPicker;