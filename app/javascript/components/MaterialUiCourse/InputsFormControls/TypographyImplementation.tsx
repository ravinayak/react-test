import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@app/config/routes';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './InputsFormControls.css';

export function TypographyImplementation() {
  const navigate = useNavigate();

  return (
    <Stack sx={{ m: 2, display: 'flex', flexDirection: 'column' }}>
      <div className='flex-display typography-heading'>
        <div>Typography Implementation</div>
        <div>***********************************************</div>
      </div>
      <Stack spacing={2}>
        <Stack className='stack-h1-subtitle2'>
          <Typography variant='h1'>Typography - h1 variant</Typography>
          <Typography variant='h2'>Typography - h2 variant</Typography>
          <Typography variant='h3'>Typography - h3 variant</Typography>
          <Typography variant='h4'>Typography - h4 variant</Typography>
          <Typography variant='h5'>Typography - h5 variant</Typography>
          <Typography variant='h6'>Typography - h6 variant</Typography>
          <Typography variant='subtitle1'>Typography - Sub Title 1</Typography>
          <Typography variant='subtitle2'>Typography - Sub Title 2</Typography>
        </Stack>
        <Typography variant='body1'>
          <Typography variant='body1'>Typography - variant body1</Typography>
          <div>************************************</div>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The
          Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
          &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32. The
          standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from &apos; de Finibus Bonorum et Malorum&quot;by
          Cicero are also reproduced in their exact original form, accompanied by English versions
          from the 1914 t ranslation by H. Rackham.
        </Typography>
        <Typography variant='body2'>
          <Typography variant='body1'>Typography - variant body2</Typography>
          <div>************************************</div>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The
          Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
          &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32. The
          standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from &apos; de Finibus Bonorum et Malorum&quot;by
          Cicero are also reproduced in their exact original form, accompanied by English versions
          from the 1914 t ranslation by H. Rackham.
        </Typography>
        <div className='flex-display' style={{ justifyContent: 'center' }}>
          <Button
            variant='outlined'
            type='submit'
            id='btn-back-button'
            onClick={() =>
              navigate(routes.MATERIAL_UI_COURSE, { state: { displayWelcomePage: true } })
            }
          >
            Back to Course Sections Listing Page
          </Button>
        </div>
      </Stack>
    </Stack>
  );
}
