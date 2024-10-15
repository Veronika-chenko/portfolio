import { Container, Section, SectionTitle } from '../../globals';
import { AdvantageItem, AdvantageList, ImageWrap } from './Advantages.styled';
import { PUBLIC_URL } from '@constants';

interface IAdvantages {
  title: string;
  imgUrl: string;
}

const advantages: IAdvantages[] = [
  {
    title: 'Valid and semantic HTML',
    imgUrl: '/img/advantages/validation.png',
  },
  { title: 'Adaptive CSS', imgUrl: '/img/advantages/ui-design.png' },
  {
    title: 'No errors & no missing attributes',
    imgUrl: '/img/advantages/web-page.png',
  },
];

export const Advantages = () => {
  return (
    <Section>
      <Container>
        <SectionTitle title="Advantages" />
        <AdvantageList>
          {advantages.map(({ title, imgUrl }, idx) => (
            <AdvantageItem key={idx}>
              <ImageWrap>
                <img src={`${PUBLIC_URL}${imgUrl}`} alt="advantage" />
              </ImageWrap>
              <h3>{title}</h3>
            </AdvantageItem>
          ))}
        </AdvantageList>
      </Container>
    </Section>
  );
};
