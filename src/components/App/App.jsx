import article from 'data/article.json';
import data from 'data/data.json';
import list from 'data/forbes.json';
import tranaction from 'data/transactions.json';

import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard
          poster={article.poster}
          tag={article.tag}
          title={article.title}
          description={article.description}
          userName={article.name}
          avatar={article.avatar}
          postedAt={article.postedAt}
        />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics title="Main Statistics" stats={data} />
        <Statistics stats={data} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList list={list} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory items={tranaction} />
      </Container>
    </Section>
  );
};
