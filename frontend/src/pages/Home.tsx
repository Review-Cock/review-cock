import React from 'react';

import MainPage from '../Layouts/MainPage';
import CampaignItem from '../components/CampaignItem';

const dummy = {
  imgUrl:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEXa2tpVVVXd3d1MTExSUlK2trZvb29LS0tTU1Ph4eGNjY2cnJzU1NRaWlpgYGBPT0+np6fGxsavr6/AwMCGhoZqamrOzs51dXWUlJSioqJ+fn7IyMhkZGTBwcG0tLREREQ0AqeBAAAClklEQVR4nO3b63KqMBRAYUiiSbyhKIqXtu//lgcUBRTOFGGm42Z9/5oK06wyQFCDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwCmpAfz2X96hjMh2O/+vpvEXNrTNDcZ/aIAqHQwMa0EBCA2O1fZeOtBPQIEonfWxXAhro2Pe5N/IrJ6DButefL6RBr/tcEQ2ijg2elgbja6DUVxzvqxuMroHaTLMLqdlVhsbWQJ2duZ5CDuXY6BocijtLW24ztgb7+821m461gZro++pgKbrB/4J8PRqsJDdQk1NrBRUUa4Mw2j2mLLFBYmet01Hrn9vpwO0FHwcq1qFO2yOkNnKRDiflK+Q1CC7ZjPS8PcJ2l0zTvS83EddAHa9nPXtsj6C899Ulg7gGwfI2ofyZQu2l7XuR1sCnUfFkzMbVOaltewRpDRb3y3/ozKQy7UV4aj0UhDXwu8qDZlv+77PxKFm0RJDVQJ11mSA0y/Nj3GY/XvbNEYQ1ONXebzCmmLU/5AtmE20bpymqgfqyYY1ZXSOo79vhYVzcNE9RDfzUhM8RFvkvikm23DZIalBZGD/kZ0I1L8f17PWcIKlBkLiXBqFJgkVl2OnXa6SgBn7d+AZsdNrVxq9HRm0vghqosOEwyI+EpzRmtZHawB9fzwbNTHXhHEhqsFj+MkG+Qe0aKaaB2vz2MMjZ1JenRjkNzp0+kqJ3Ap+hqE23j+Xow2MJJafBOWq+LLRwOltCFbeXYhps3LKr7W0vYhpkF4bubnsR1OBtNBDTwPdyEdDAHWZ9pMUd5kc3yJZFvYQSGgyDBjSgwUc3SH/0UKz+zAbB5rvXp/Zr4g/9ch/fbwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAbv4BqeU7MkrRIMQAAAAASUVORK5CYII=',
  deadLine: '1일 남음',
  region: '전북',
  storeName: '이도훈',
  serviceName: '코딩',
  application: 3,
  total: 10,
};

const Home = () => {
  return (
    <MainPage>
      <CampaignItem {...dummy} />
    </MainPage>
  );
};

export default Home;
