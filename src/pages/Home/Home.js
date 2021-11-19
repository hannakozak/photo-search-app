import SerachForm from '../../components/SearchForm';

import { Title, Wrapper, BgImage }  from '../../styles/style';
import { GlobalStyle } from '../../styles/globalStyle';

const Home = ({ query, setQuery, handleSubmit }) => {
 
  return (
    <>
      <GlobalStyle />
        <BgImage>
          <Wrapper>
            <Title>Photo Search Application</Title>
            <SerachForm  query={ query } setQuery={ setQuery } handleSubmit={ handleSubmit }/>
         </Wrapper>
        </BgImage>
    </>
  )
}

export default Home;