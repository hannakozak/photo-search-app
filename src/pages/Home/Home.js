import SerachForm from '../../components/SearchForm/SearchForm';
import { Header } from '../../components/Header/Header';
import { BackgroundPhoto, PhotoAuthor } from './Home.styled';
import { StyledContainer } from '../../styles/style';
import { GlobalStyle } from '../../styles/globalStyle';
import Theme from '../../styles/Theme';

const Home = ({ query, setQuery, handleSubmit }) => {
  return (
    <>
      <Theme>
        <GlobalStyle />
        <StyledContainer>
          <BackgroundPhoto>
            <Header>Find your photo inspiration</Header>
            <SerachForm query={query} setQuery={setQuery} handleSubmit={handleSubmit} />
            <PhotoAuthor>
              Photo by{' '}
              <a href="https://unsplash.com/@r3dmax?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jonatan Pie</a> on{' '}
              <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </PhotoAuthor>
          </BackgroundPhoto>
        </StyledContainer>
      </Theme>
    </>
  );
};

export default Home;
