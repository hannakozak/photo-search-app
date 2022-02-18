import { PagButton, ArrowLeft, ArrowRight, Wrapper } from './Pagination.style';

const Pagination = ({ goToNextPage, goToPreviousPage, changePage, currentPage }) => {
  const pageLimit = 5;

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <Wrapper>
      <ArrowLeft onClick={goToPreviousPage} />
      {getPaginationGroup().map((item, index) => (
        <PagButton key={index} onClick={changePage} className={currentPage === item ? 'selected' : null}>
          <span>{item}</span>
        </PagButton>
      ))}
      <ArrowRight onClick={goToNextPage} />
    </Wrapper>
  );
};

export default Pagination;
