import SerachForm from '../../components/SearchForm';

import {Title, Wrapper, BgImage} from '../../styles/style';
import {GlobalStyle} from '../../styles/globalStyle';

const Home = (props) => {
  const { query, setQuery, handleSubmit } = props;
 
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