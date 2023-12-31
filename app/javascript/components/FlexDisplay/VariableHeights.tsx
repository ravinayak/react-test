import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@app/config/routes';
import Button from '@mui/material/Button';
import './VariableHeights.css';
import '@app/src/App.css';

export function VariableHeights() {
  const navigate = useNavigate();
  return (
    <div id='variable-heights'>
      <div className='flex-column-justify-align-center margin-bottom-16'>
        <div className='heading-introduction'>Variable Heights Component</div>
        <div>***********************************************************</div>
      </div>
      <div className='item-container'>
        <div className='item1'>This is a span tag</div>
        <div className='item2'>
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
          interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus Bonorum et Malorum&quot; by
          Cicero are also reproduced in their exact original form, accompanied by English versions
          from the 1914 translation by H. Rackham. It is a long established fact that a reader will
          be distracted by the readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
          to using &apos;Content here, content here&apos;, making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
          model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in
          their infancy. Various versions have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). There are many variations of passages
          of Lorem Ipsum available, but the majority have suffered alteration in some form, by
          injected humour, or randomised words which don&apos;t look even slightly believable. If
          you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t
          anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
          Internet tend to repeat predefined chunks as necessary, making this the first true
          generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a
          handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The
          generated Lorem Ipsum is therefore always free from repetition, injected humour, or
          non-characteristic words etc.
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='outlined'
          type='submit'
          id='btn-back-button'
          sx={{ mt: 4 }}
          onClick={() => navigate(routes.FLEXBOX_DISPLAY, { state: { displayWelcomePage: true } })}
        >
          Back to Course Sections Listing Page
        </Button>
      </div>
    </div>
  );
}
