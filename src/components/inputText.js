import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const DemoPaper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  width: '30%',
  height: 'auto',
  borderRadius:'none',
  paddingRight: '20px',
  marginTop: '13px',
  paddingTop: '30px',
  backgroundColor: 'black',
}));

export default function InputText() {
  return (
    <Stack direction="row" alignItems="flex-end" justifyContent="center" >
      <DemoPaper  variant="elevation">
        <label style={{ color: 'grey', fontSize: '24px' }}>8x6</label>
        <label style={{ color: 'lightgray', fontSize: '48px' }}>64</label>
      </DemoPaper>
    </Stack>
  );
}
